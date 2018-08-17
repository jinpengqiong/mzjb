import { Button, Table, Divider, Popconfirm, message, Pagination, Tag } from'antd';
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'
const ProdModuleSet = dynamic(import('./prodModuleSet'))
import Request from '../../utils/graphql_request';
import moment from 'moment'
import EmbeddedAndSharing from './enbedded_and_sharing'
import isEmpty from 'lodash/isEmpty';
const getShop = `
    query ($id: ID!) {
        getShop(id:$id){
           curShoppage
        }
    }
`;

const listShoppage = `
    query ($shopId: Int!, $page: Int, $pageSize: Int ) {
        listShoppage(shopId:$shopId, page:$page, pageSize:$pageSize){
           entries{
                insertedAt
                name
                id
                detail
                isSystem
           }
            pageNumber
            totalEntries
        }
    }
`;

const setShoppage = `
    mutation ($shopId:ID!, $shoppageId:ID!) {
        setShoppage(shopId:$shopId, shoppageId:$shoppageId){
          id
          name
          desc
        }
      }
`;

const deleteShoppage = `
    mutation ($shopId:Int!, $id:String!) {
        deleteShoppage(shopId:$shopId, id:$id){
          id
          name
        }
      }
`;


@inject('store') @observer
export default class ProdModule extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            ShoppageData:null,
            curShopPage:null,
            ID:null,
            columns : [{
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            }, {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                render: (text, record) => (
                    <div>
                        <span style={{ marginRight:"8px"}}>{text}</span>
                        <span>{ record.id === this.state.curShopPage? <Tag color="blue">当前模版</Tag>:null}</span>
                    </div>
                ),
            }, {
                title: '创建时间',
                dataIndex: 'insertedAt',
                key: 'insertedAt',
                render: text => <a href="javascript:;">{moment(text).format('YYYY-MM-DD hh:mm')}</a>,
            }, {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <div>
                      <Popconfirm title="确实要执行此操作吗?" onConfirm={
                          () => {
                              if(record.id === this.state.curShopPage){
                                message.info('此模版已经为当前模版了！')
                              }else{
                                  this.SetConfirm(record.id)
                              }
                          }
                      } >
                        <a href="#">设为当前模版</a>
                      </Popconfirm>
                      <Divider type="vertical" />
                        <a href="#" onClick={ () => { this.EditModule(record.detail, record.id)} }>编辑</a>
                      {
                        !text.isSystem
                            &&
                        <span>
                          <Divider type="vertical" />
                          <Popconfirm title="确实要执行此操作吗?" onConfirm={ () => { this.DeleteConfirm(record.id) }} >
                            <a href="#">删除</a>
                          </Popconfirm>
                        </span>
                      }
                    </div>
                ),
            }]
        }
    }

    componentDidMount(){
        this.queryShoppage(1)
        this.queryCurShoppage()
        this.props.store.changeSettingDisplay(false);
    }

    //query current shoppage
    queryCurShoppage = () => {
        Request.GraphQlRequest(getShop, {id:localStorage.getItem('shopID')}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            res => {
                // console.log('getShop', res)
                this.setState({
                    curShopPage: res.getShop.curShoppage
                })
            }
        ).catch(err => Request.token_auth(err))
    }

    //edit module
    EditModule = (value, id) => {
        // console.log('www', value)
        this.setState({
            ID: id
        })
        this.props.store.getModuleValue(value);
        this.props.store.getModuleType('编辑模版');
        this.props.store.changeSettingDisplay(true);
    }

    //query autoReply list
    queryShoppage = (page) => {
        Request.GraphQlRequest(listShoppage, {shopId:parseInt(localStorage.getItem('shopID')), page, pageSize: 8}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            res => {
                console.log('listShoppage', res.listShoppage)
                res.listShoppage.entries.map(
                    (entry) => {
                       entry.key = entry.id
                    }
                )
                this.setState({
                    ShoppageData: res.listShoppage
                })
            }
        ).catch(err => Request.token_auth(err))
    }

    handleModuleSet = () => {
        this.props.store.getModuleType('新建模版');
        this.props.store.changeSettingDisplay(true);
    }

    SetConfirm = (ID) => {
        Request.GraphQlRequest(setShoppage, {shopId:parseInt(localStorage.getItem('shopID')), shoppageId:ID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                this.queryShoppage(1)
                this.queryCurShoppage()
                message.success('设置成功！')
            }
        ).catch(err => Request.token_auth(err))
    }

    DeleteConfirm = (ID) => {
        Request.GraphQlRequest(deleteShoppage, {shopId:parseInt(localStorage.getItem('shopID')), id:ID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('listShoppage', res.listShoppage)
                message.success('删除成功！')
                this.queryShoppage(1)
            }
        ).catch(err => Request.token_auth(err))
    }

    onPageChange = (page) => {
        this.queryShoppage(page)
    }

    render() {
        // console.log('props', this.props)
        return (
            <div>
                {
                this.props.store.isShown?
                    <ProdModuleSet refeshTable={ () => { this.queryShoppage(1) }} ID={ this.state.ID }/>
                    :
                    (this.state.ShoppageData && !isEmpty(this.state.ShoppageData.entries))?
                    <div>
                        <EmbeddedAndSharing />
                        <div style={{ marginTop:"20px"}}>
                            <h3>模版列表</h3>
                          {
                            localStorage.getItem('shopID') === localStorage.getItem('OriginalID')
                              &&
                            <Button type='primary' style={{ marginBottom:"10px"}} onClick={this.handleModuleSet}>新建模版</Button>
                          }
                            <Table columns={this.state.columns} dataSource={this.state.ShoppageData && this.state.ShoppageData.entries} pagination={false}/>
                            <Pagination
                                current={this.state.ShoppageData.pageNumber}
                                onChange={this.onPageChange}
                                pageSize={8}
                                total={ this.state.ShoppageData.totalEntries }
                                style={{ float: "right", marginTop: "10px"}}
                            />
                        </div>
                    </div>
                    :
                    <div>
                        <EmbeddedAndSharing />
                        <div style={{ marginTop:"20px"}}>
                            <h3>模版列表</h3>
                            <Button type='primary' style={{ marginBottom:"10px"}} onClick={this.handleModuleSet}>新建模版</Button>
                            <Table columns={this.state.columns} dataSource={this.state.ShoppageData && this.state.ShoppageData.entries} pagination={false}/>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
