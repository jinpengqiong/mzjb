import { Table, Pagination, message } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import moment from 'moment';
import UUIDGen from '../../utils/uuid_generator.js';



const queryOrder = `
    query ($id: Int!, $page: Int, $pageSize: Int, $startTimestamp: Int, $endTimestamp: Int) {
        shopTradesList(endTimestamp:$endTimestamp, id:$id, page:$page,pageSize:$pageSize,startTimestamp:$startTimestamp ){
            totalResults
            trades{
                createdAt
                money
                orderNo
                phone
                state
                items {
                    num
                    price
                    title
                }
            }
        }
    }`;


const columns = [
            {
                title: '订单号',
                dataIndex: 'orderNo',
                key: 'orderNo',
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
                dataIndex: 'phone',
                key: 'phone',
            },
            {
                title: '下单时间',
                dataIndex: 'createdAt',
                key: 'createdAt',
            },
            {
                title: '订单状态',
                dataIndex: 'state',
                key: 'state',
                render: (text, record) => (
                <div>
                <p>{text===3? "待付款" :text===5? "已付款" : text===6? "已发货" : text===100? "交易完成" :null}</p>
                </div>
                )
            },
            {
                title: '订单总额(元)',
                dataIndex: 'money',
                key: 'money',
            }
        ];

@inject('store') @observer
export default class OrderManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        data:null,
    }
  }
  componentDidMount(){
        this.queryOrderData(1);
  }

  queryOrderData = (curPage) => {
    const endTime = parseInt(moment().format('X'));
    const startTime = parseInt(moment().subtract(1, 'quarters').format('X'));
    // console.log('startTime',startTime)
    Request.GraphQlRequest(queryOrder, {id: localStorage.getItem('shopID'), page: curPage, pageSize: 10, startTimestamp:startTime, endTimestamp:endTime },`Bearer ${localStorage.getItem('accessToken')}`).then(
        (res) => {
                res.shopTradesList.trades.map(
                    (entry) => {
                        entry.key = UUIDGen.uuid(8,10);
                        entry.title = entry.items[0].title;
                        entry.price = entry.items[0].price;
                        entry.num = entry.items[0].num;
                        delete entry.items;
                    }
                );
                // console.log('111', res)
                this.setState({
                data: res.shopTradesList
                })
        }
    ).catch(()=>{message.error('你还未授权开店，请联系管理员！')})
  };

  onChange(pageNumber) {
    this.queryUserData(pageNumber);
  }


  render() {
      console.log('data', this.state.data)
    return (
        <div>
            <Table bordered dataSource={this.state.data? this.state.data.trades : null } columns={columns} pagination={false}/>
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
