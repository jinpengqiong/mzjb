import { Button, Table, Divider, Popconfirm, message, Pagination } from'antd';
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'
const ProdModuleSet = dynamic(import('./prodModuleSet'))
import Request from '../../utils/graphql_request';
import moment from 'moment'

const listShoppage = `
    query ($shopId: Int!, $page: Int, $pageSize: Int ) {
        listShoppage(shopId:$shopId, page:$page, pageSize:$pageSize){
           entries{
                insertedAt
                name
                id
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
            columns : [{
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            }, {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '创建时间',
                dataIndex: 'insertedAt',
                key: 'insertedAt',
                render: text => <a href="javascript:;">{moment(text).format('YYYY-MM-DD hh:mm:ss')}</a>,
            }, {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                      <Popconfirm title="确实要执行此操作吗?" onConfirm={ () => { this.SetConfirm(record.id) }} >
                        <a href="#">设为当前模版</a>
                      </Popconfirm>
                      <Divider type="vertical" />
                        <Popconfirm title="确实要执行此操作吗?" onConfirm={ () => { this.DeleteConfirm(record.id) }} >
                        <a href="#">删除</a>
                      </Popconfirm>

                    </span>
                ),
            }]
        }
    }

    componentDidMount(){
        this.queryShoppage(1)
    }

    //query autoReply list
    queryShoppage = (page) => {
        Request.GraphQlRequest(listShoppage, {shopId:parseInt(localStorage.getItem('shopID')), page, pageSize: 8}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
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
        )
    }

    handleMouduleSet = () => {
        this.props.store.changeSettingDisplay();
    }

    SetConfirm = (ID) => {
        Request.GraphQlRequest(setShoppage, {shopId:parseInt(localStorage.getItem('shopID')), shoppageId:ID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                console.log('listShoppage', res.listShoppage)
                message.success('设置成功！')
            }
        )
    }

    DeleteConfirm = (ID) => {
        Request.GraphQlRequest(deleteShoppage, {shopId:parseInt(localStorage.getItem('shopID')), id:ID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                console.log('listShoppage', res.listShoppage)
                message.success('删除成功！')
                this.queryShoppage(1)
            }
        )
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
                        <ProdModuleSet refeshTable={ () => { this.queryShoppage(1) }}/>
                        :
                        (this.state.ShoppageData && JSON.stringify(this.state.ShoppageData.entries) !== '[]')?
                        <div>
                            <Button type='primary' style={{ marginBottom:"10px"}} onClick={this.handleMouduleSet}>新建模版</Button>
                            <Table columns={this.state.columns} dataSource={this.state.ShoppageData && this.state.ShoppageData.entries} agination={false}/>
                            <Pagination
                                current={this.state.ShoppageData.pageNumber}
                                onChange={this.onPageChange}
                                pageSize={8}
                                total={ this.state.ShoppageData.totalEntries }
                                style={{ float: "right", marginTop: "10px"}}
                            />
                        </div>
                        :
                        <div>
                            <Button type='primary' style={{ marginBottom:"10px"}} onClick={this.handleMouduleSet}>新建模版</Button>
                            <Table columns={this.state.columns} dataSource={this.state.ShoppageData && this.state.ShoppageData.entries} agination={false}/>
                        </div>
                }
            </div>
        );
    }
}
