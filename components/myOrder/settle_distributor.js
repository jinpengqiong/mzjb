import { Table, Pagination, message, Button, Spin, Icon } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import UUIDGen from '../../utils/uuid_generator.js';
import moment from 'moment'



const salemanSettleorders = `
    query ($page: Int,$pageSize: Int,$shopId: ID!) {
        salemanSettleorders(page:$page,pageSize:$pageSize,shopId:$shopId){
            totalEntries
            entries{
              costPrice
              insertedAt
              isAuto
              itemId
              num
              price
              salemanPhone
              settlePrice
              skuId
              skuPropertiesName
              supplierName
              tid
              title
              totalFee
              updatedAt
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
        key: 'title'
    },

    {
      title: '手机号',
      dataIndex: 'salemanPhone',
      key: 'salemanPhone',
    },
    {
      title: '供应商',
      dataIndex: 'supplierName',
      key: 'supplierName'
    },
    {
        title: '单价/数量',
        dataIndex: 'price',
        key: 'price',
        render: (text, record) => (
            <div>
              { '¥'+(parseFloat(text)/100).toFixed(2)+'('+record.num+'件)' }
            </div>
        )
    },
    {
        title: '结算时间',
        dataIndex: 'insertedAt',
        key: 'insertedAt',
        render: text => (
            <div>
             { moment(text).format('YYYY-MM-DD HH:mm') }
            </div>
        )
    },
    {
        title: '总额',
        dataIndex: 'totalFee',
        key: 'totalFee',
        render: text => (
            <div>
              { '¥'+(parseFloat(text)/100).toFixed(2) }
            </div>
        )
    },
    {
        title: '自动结算',
        dataIndex: 'isAuto',
        key: 'isAuto',
        render: text => (
            <div>
              { text? '是':'否' }
            </div>
        )
    }
];

@inject('store') @observer
export default class SettledOrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:null,
            isSpin:false,
            curPage:1
        }
    }

    componentDidMount(){
        this.querySettledOrder(1);
    }

    querySettledOrder = curPage => {
        Request.GraphQlRequest(salemanSettleorders,
            {
                shopId: localStorage.getItem('shopID'),
                page:curPage,
                pageSize:10
            },
            `Bearer ${localStorage.getItem('accessToken')}`).then(
            res => {
                res.salemanSettleorders.entries.map(
                    (entry) => {
                        entry.key = UUIDGen.uuid(8,10);
                    }
                );
                this.setState({
                    data: res.salemanSettleorders,
                    isSpin:false
                })
            }
        ).catch(err=>{message.error('出错了，请联系管理员'); Request.token_auth(err)})
    };

    onPageChange = pageNumber => {
        this.querySettledOrder(pageNumber);
        this.setState({
          curPage:pageNumber
        })
    }

    refresh =() => {
        this.setState({
            isSpin:true
        })
        this.querySettledOrder(this.state.curPage);
    }

    render() {
        return (
            <div>
                <div style={{ textAlign:"right", marginBottom:"10px"}}>
                    <Button type="primary" onClick={this.refresh}><Icon type="reload" theme="outlined" />刷新</Button>
                </div>
                <Spin spinning={this.state.isSpin}>
                    <Table bordered dataSource={this.state.data? this.state.data.entries : null } columns={columns} pagination={false}/>
                </Spin>
                {
                    (this.state.data && this.state.data.totalEntries !==0)
                    &&
                    <Pagination
                        defaultCurrent={1}
                        onChange={this.onPageChange}
                        pageSize={10}
                        total={this.state.data? this.state.data.totalEntries : 1}
                        style={{ float: "right", marginTop: "10px"}}/>
                }
            </div>
        )
    }
}
