import { Table, Pagination, message } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import Router from 'next/router';
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
        expressList:null,
        visible: false,
        isNoExpress:0,
        deliveryValue:"",
        orderNo:"",
        DeliveryNum:""
    }
  }
  componentDidMount(){
    if(!localStorage.getItem('accessToken')){
        Router.push('/login')
    }else if(this.props.store.shopID === null){
        Router.push('/')
    }else{
        this.queryOrderData(1);
        Request.GraphQlRequest(expressList, null,`Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('res',res)
                this.setState({
                    expressList:res.expressList
                })
            }
        )
    }
  }

  queryOrderData = (curPage) => {
    const endTime = parseInt(moment().format('X'));
    const startTime = parseInt(moment().subtract(1, 'quarters').format('X'));
    // console.log('startTime',startTime)
    Request.GraphQlRequest(queryOrder, {id: this.props.store.shopID, page: curPage, pageSize: 10, startTimestamp:startTime, endTimestamp:endTime },`Bearer ${localStorage.getItem('accessToken')}`).then(
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
    ).catch(()=>{message.error('出错了，请重试！')})
  };

  
  cancel() {
  }

  onChange(pageNumber) {
    this.queryUserData(pageNumber);
  }

  handleOk = () => {
      if(this.state.isNoExpress === 0 ){
          Request.GraphQlRequest(confirmLogistics, {isNoExpress: this.state.isNoExpress, tid: this.state.orderNo, outSid: this.state.DeliveryNum, outStype: this.state.deliveryValue.toString()}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                message.success('发货成功！');
                this.setState({
                    visible: false,
                });
                this.queryOrderData(1)
            }
        ).catch(()=>{message.error('出错了，请重试！')})
      }else{
          Request.GraphQlRequest(confirmLogistics, {isNoExpress: this.state.isNoExpress, tid: this.state.orderNo}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                message.success('操作成功！');
                this.setState({
                    visible: false,
                    });    
                }
        ).catch(()=>{message.error('出错了，请重试！')})
      }
    
  }

  handleCancel = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  }

  onChange = (e) => {
    // console.log('radio checked', e.target.value);
    const value = parseInt(e.target.value);
    this.setState({
        isNoExpress: value,
    });
  }

  handleChange = (value) => {
    // console.log(`selected ${value}`);
    this.setState({
        deliveryValue:value
    })
  }
  
  handleClick = (ID) => {
    this.setState({
        orderNo: ID,
        visible: true
    })
  }

  InputDeliveryNum = (e) => {
    // console.log('value', e.target.value);
    this.setState({
        DeliveryNum: e.target.value
    })
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
