import { Button, Table, Divider } from'antd';
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

const columns = [{
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
      {/*<a href="javascript:;">编辑</a>*/}
      {/*<Divider type="vertical" />*/}
      <a href="javascript:;">删除</a>
    </span>
    ),
}];

@inject('store') @observer
export default class ProdModule extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            ShoppageData:null
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

    render() {
        // console.log('props', this.props)
        return (
            <div>
                {
                    this.props.store.isShown?
                        <ProdModuleSet refeshTable={ () => { this.queryShoppage(1) }}/>
                        :
                    this.state.ShoppageData?
                        <div>
                            <Button type='primary' style={{ marginBottom:"10px"}} onClick={this.handleMouduleSet}>新建微页面</Button>
                            <Table columns={columns} dataSource={this.state.ShoppageData && this.state.ShoppageData.entries} />
                        </div>
                        :
                        <div>
                            <Button type='primary' style={{ marginBottom:"10px"}} onClick={this.handleMouduleSet}>新建微页面</Button>
                        </div>
                }
            </div>
        );
    }
}
