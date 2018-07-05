import { Table, Pagination, message, Select, Button, Spin, Modal } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import moment from 'moment';
import UUIDGen from '../../utils/uuid_generator.js';
const Option = Select.Option;


const queryOrder = `
    query ($id: Int!, $page: Int, $pageSize: Int, $startTimestamp: Int, $endTimestamp: Int) {
        shopTradesList(endTimestamp:$endTimestamp, id:$id, page:$page,pageSize:$pageSize,startTimestamp:$startTimestamp ){
            totalResults
            trades{
                createdAt
                money
                orderNo
                state
                items {
                    num
                    price
                    title
                }
            }
        }
    }`;

const shopTradeInfo = `
    query ($id: Int!, $tid:String!) {
        shopTradeInfo( id:$id, tid:$tid ){
            outerTid
            signTime
            refundState
            tid
            shippingType
            postFee
            itemId
            receiverCity
            statusStr
            title
            payTime
            buyerMessage
            buyerArea
            updateTime
            receiverState
            invoiceTitle
            consignTime
            receiverZip
            totalFee
            created
            feedback
            picThumbPath
            num
            price
            receiverDistrict
            discountFee
            picPath
            refundedFee
            transactionTid
            receiverAddress
            payment
            receiverName
            payType
            status
            receiverMobile
        }
    }`;




@inject('store') @observer
export default class OrderManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        data:null,
        optionValue:"7days",
        isSpin:false,
        detailInfo:null,
        visible: false,
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
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href="#" onClick={ () => { this.showDetails(record.orderNo) } }>详情</a>
                    </span>
                ),
            }
        ]
    }
  }
  componentDidMount(){
      const startTime = parseInt(moment().subtract(7, 'days').format('X'));
      this.queryOrderData(1, startTime);
  }

  queryOrderData = (curPage, startTime) => {
    const endTime = parseInt(moment().format('X'));
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
                this.setState({
                data: res.shopTradesList,
                isSpin: false
                })
        }
    ).catch(()=>{message.error('你还未授权开店，请联系管理员！')})
  };

  onChange(pageNumber) {
      if(this.state.optionValue==="7days"){
          const startTime = parseInt(moment().subtract(7, 'days').format('X'));
          this.queryOrderData(pageNumber, startTime);
      }else if(value==="30days"){
          const startTime = parseInt(moment().subtract(30, 'days').format('X'));
          this.queryOrderData(pageNumber, startTime);
      }else if(value==="90days"){
          const startTime = parseInt(moment().subtract(90, 'days').format('X'));
          this.queryOrderData(pageNumber, startTime);
      }else if(value==="365days"){
          const startTime = parseInt(moment().subtract(365, 'days').format('X'));
          this.queryOrderData(pageNumber, startTime);
      }
  }

  //handle select change
    handleChange = (value) => {
        // console.log(`selected ${value}`);
        this.setState({
            optionValue: value
        })
        if(this.state.optionValue==="7days"){
            const startTime = parseInt(moment().subtract(7, 'days').format('X'));
            this.queryOrderData(1, startTime);
        }else if(value==="30days"){
            const startTime = parseInt(moment().subtract(30, 'days').format('X'));
            this.queryOrderData(1, startTime);
        }else if(value==="90days"){
            const startTime = parseInt(moment().subtract(90, 'days').format('X'));
            this.queryOrderData(1, startTime);
        }else if(value==="365days"){
            const startTime = parseInt(moment().subtract(365, 'days').format('X'));
            this.queryOrderData(1, startTime);
        }
    }

    refresh = ()=>{
        this.setState({
            optionValue: "7days",
            isSpin:true
        })
        const startTime = parseInt(moment().subtract(7, 'days').format('X'));
        this.queryOrderData(1, startTime);
    }

    showDetails = (ID) => {
        Request.GraphQlRequest(shopTradeInfo, {id: localStorage.getItem('shopID'), tid:ID },`Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('aaa', res)
                this.setState({
                    detailInfo:res.shopTradeInfo,
                    visible:true
                })
            }
        ).catch(()=>{message.error('你还未授权开店，请联系管理员！')})
    }

    handleCancel = () => {
        this.setState({
            detailInfo:null,
            visible:false
        })
    }

  render() {
      // console.log('data', this.state.data)
    return (
        <div>
            <div style={{ textAlign:"right", marginBottom:"10px"}}>
                <Button type="primary" onClick={this.refresh} style={{ marginRight:"5px"}}>刷新</Button>
                <Select value={this.state.optionValue} style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="7days">近七天</Option>
                    <Option value="30days">近30天</Option>
                    <Option value="90days">近90天</Option>
                    <Option value="365days">近一年</Option>
                </Select>
            </div>
            <Spin spinning={this.state.isSpin}>
                <Table bordered dataSource={this.state.data? this.state.data.trades : null } columns={this.state.columns} pagination={false}/>

                {
                    this.state.detailInfo
                    &&
                    <Modal
                        title="订单详情"
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        destroyOnClose={true}
                        footer={null}
                    >
                        <h3>基本信息：</h3>
                        <p>下单人：{ this.state.detailInfo.receiverName}</p>
                        <p>手机号：{ this.state.detailInfo.receiverMobile}</p>
                        <h3>订单信息：</h3>
                        <p>订单号：{ this.state.detailInfo.tid}</p>
                        <p>商品名称：{ this.state.detailInfo.title}</p>
                        <p>商品单价：{ this.state.detailInfo.price}</p>
                        <p>购买数量：{ this.state.detailInfo.num}</p>
                        <p>邮费：{ this.state.detailInfo.postFee==='0.00'? '包邮': this.state.detailInfo.postFee}</p>
                        <p>收获地址：{ this.state.detailInfo.buyerArea + this.state.detailInfo.receiverDistrict + this.state.detailInfo.receiverAddress }</p>
                        <p>状态：{ this.state.detailInfo.statusStr}</p>
                        <p>创建时间：{ this.state.detailInfo.created}</p>
                    </Modal>
                }
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
