import { Table, Pagination, message, Button, Spin } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import UUIDGen from '../../utils/uuid_generator.js';



const searchTradesList = `
    query ($id: Int!, $keyword: String!,$page: Int, $pageSize: Int) {
        searchTradesList(keyword:$keyword, id:$id, page:$page,pageSize:$pageSize ){
            totalResults
            trades{
                tid
                price
                title
                statusStr
                totalFee
                created
                receiverMobile
                num
            }
        }
    }`;


const columns = [
    {
        title: '订单号',
        dataIndex: 'tid',
        key: 'tid',
    },
    {
        title: '商品',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: '单价',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: '数量',
        dataIndex: 'num',
        key: 'num',
    },
    {
        title: '手机号',
        dataIndex: 'receiverMobile',
        key: 'receiverMobile',
    },
    {
        title: '下单时间',
        dataIndex: 'created',
        key: 'created',
    },
    {
        title: '订单状态',
        dataIndex: 'statusStr',
        key: 'statusStr',
    },
    {
        title: '订单总额(元)',
        dataIndex: 'totalFee',
        key: 'totalFee',
    }
];

@inject('store') @observer
export default class SelfOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:null,
            isSpin:false
        }
    }

    componentDidMount(){
        this.queryOrderData(1);
    }

    queryOrderData = (curPage) => {
        // const endTime = parseInt(moment().format('X'));
        // const startTime = parseInt(moment().subtract(1, 'quarters').format('X'));
        Request.GraphQlRequest(searchTradesList, {id: parseInt(localStorage.getItem('shopID')), page: curPage, pageSize: 10, keyword: localStorage.getItem('phone')},`Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                res.searchTradesList.trades.map(
                    (entry) => {
                        entry.key = UUIDGen.uuid(8,10);
                    }
                );
                // console.log('111', res)
                this.setState({
                    data: res.searchTradesList,
                    isSpin:false
                })
            }
        ).catch(err=>{message.error('出错了，请联系管理员'); Request.token_auth(err)})
    };

    onChange(pageNumber) {
        this.queryUserData(pageNumber);
    }

    refresh =() => {
        this.setState({
            isSpin:true
        })
        this.queryOrderData(1);
    }

    render() {
        // console.log('data', this.state.data)
        return (
            <div>
                <div style={{ textAlign:"right", marginBottom:"10px"}}>
                    <Button type="primary" onClick={this.refresh}>刷新</Button>
                </div>
                <Spin spinning={this.state.isSpin}>
                    <Table bordered dataSource={this.state.data? this.state.data.trades : null } columns={columns} pagination={false}/>
                </Spin>
                {
                    (this.state.data && this.state.data.totalResults !==0)
                    &&
                    <Pagination
                        defaultCurrent={1}
                        onChange={this.onChange}
                        total={this.state.data? this.state.data.totalResults : 1}
                        style={{ float: "right", marginTop: "10px"}}/>
                }
            </div>
        )
    }
}
