import { Table, Button, Pagination, message, Modal, Radio, Select } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import Router from 'next/router';
import moment from 'moment';
import UUIDGen from '../../utils/uuid_generator.js';
const RadioGroup = Radio.Group;
const Option = Select.Option;


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

const confirmLogistics = `
    mutation ($isNoExpress: Int!, $outSid: String, $outStype: String, $tid: String!) {
            confirmSendProduct(isNoExpress: $isNoExpress, outSid: $outSid, outStype: $outStype, tid: $tid ){
                status
        }
    }`;

const expressList = `
query {
    expressList{
        id
        name
    }
}`;

@inject('store') @observer
export default class OrderManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        data:null,
        columns : [
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
                   {
                       text===5
                       &&
                       <Button type="primary" onClick={() => {this.handleClick(record.orderNo)}}>发货</Button>
                   } 
                </div> 
            )
            },
            {
            title: '订单总额(元)',
            dataIndex: 'money',
            key: 'money',
            }
        ],
        expressList:null,
        visible: false,
        isNoExpress:0,
        deliveryValue:"",
        orderNo:"",
        DeliveryNum:""
    }
  }
  componentDidMount(){
    if(!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null ){
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
            if(res.errors){
                message.error('出错了，请重试！')
            }else{
                res.shopTradesList.trades.map(
                    (entry) => {
                        entry.key = UUIDGen.uuid(8,10);
                        entry.title = entry.items[0].title;
                        entry.price = entry.items[0].price;
                        entry.num = entry.items[0].num;
                        delete entry.items;
                    }
                );
                console.log('111', res)
                this.setState({
                data: res.shopTradesList
                })
            }
        }
    ).catch((error)=>{message.error(error)})
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
            if(res.errors){
                message.error(res.errors[0].message)
            }else{
                message.success('发货成功！');
                this.setState({
                    visible: false,
                    });    
                }
                this.queryOrderData(1);
            }
        )
      }else{
          Request.GraphQlRequest(confirmLogistics, {isNoExpress: this.state.isNoExpress, tid: this.state.orderNo}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
            if(res.errors){
                message.error(res.errors[0].message)
            }else{
                message.success('操作成功！');
                this.setState({
                    visible: false,
                    });    
                }
            }
        )
      }
    
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    const value = parseInt(e.target.value);
    this.setState({
        isNoExpress: value,
    });
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
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
    console.log('value', e.target.value);
    this.setState({
        DeliveryNum: e.target.value
    })
  }

  render() {
    return (
        <div>
            <Table bordered dataSource={this.state.data? this.state.data.trades : null } columns={this.state.columns} pagination={false}/>
            <Modal
            title="确认发货"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            >
                <div>
                    发货方式：<RadioGroup defaultValue={0} onChange={this.onChange}>
                        <Radio value={0}>需要物流</Radio>
                        <Radio value={1}>无需物流</Radio>
                    </RadioGroup>
                    <br/>
                    <div style={{ marginTop: 15}}>
                        物流公司：<Select defaultValue="default" style={{ width: 120 }} style={{ marginRight: 15}} onChange={this.handleChange}>
                                    <Option value="default" key="-1">请选择物流公司</Option>
                                    <Option value={1}>申通快递</Option>
                                    <Option value={2}>圆通速递</Option>
                                    <Option value={3}>中通快递</Option>
                                    <Option value={4}>韵达快递</Option>
                                    <Option value={5}>天天快递</Option>
                                    <Option value={6}>百世快递</Option>
                                    <Option value={7}>顺丰速运</Option>
                                    <Option value={8}>邮政快递包裹</Option>
                                    <Option value={9}>EMS经济快递</Option>
                                    <Option value={10}>EMS</Option>
                                </Select>
                        运单编号：<input onChange={this.InputDeliveryNum}/>
                    </div>
                </div>
            </Modal>
            {
            (this.state.data && this.state.data.totalEntries !==0)
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
