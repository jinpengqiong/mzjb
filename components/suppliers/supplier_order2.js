import { Table, Pagination, message, Select, Radio, Spin, Modal, Row, Col, Affix, Button, Input, Alert, Icon } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import moment from 'moment';
import UUIDGen from '../../utils/uuid_generator.js';
const Option = Select.Option;
const RadioGroup = Radio.Group;

const expressList = `
    query{
      expressList{
        id
        name
      }
    }
  `

const supplierTradesList2 = `
    query ($page: Int,$pageSize: Int, $status: String) {
        supplierTradesList2(page:$page, pageSize:$pageSize, status:$status){
            totalEntries
            entries{
              closeType
              expiredAt
              isSettle
              title
              successAt
              buyerPhone
              price
              expiredAtTime
              salemanPhone
              createdAt
              consignAtTime
              refundState
              payAt
              receiverName
              itemId
              num
              totalFee
              payAtTime
              isAutoSettle
              receiverPhone
              refundStatus
              confirmAt
              createdAtTime
              updatedAt
              detail
              confirmAtTime
              tid
              successAtTime
              insertedAt
              consignAt
              alias
              status
              supplierName
              expressType
            }
        }
    }`;

const confirmSendProduct = `
    mutation ($isNoExpress: Int!,$outSid: String,$outStype: String,$tid: String!) {
        confirmSendProduct(isNoExpress:$isNoExpress,outSid:$outSid,outStype:$outStype,tid:$tid){
           status
        }
    }`;

@inject('store') @observer
export default class SupplierOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      orderData:null,
      tagName:undefined,
      isSpin:false,
      isSpin1:false,
      detailInfo:null,
      detailVisible: false,
      postVisible:false,
      radioValue:1,
      postData:null,
      expressData:null,
      InputValue:'',
      selectedValue:'',
      optionValue:"7",
      curPage:1,
      columns : [
        {
          title: '商品',
          dataIndex: 'prod',
          key: 'prod',
          width:'30%',
          render: (text, record) => (
              <div>
                <Row span={24}>
                  <p>订单号：{ text.tid }</p>
                </Row>
                <Row span={24}>
                  <Col span={10}>
                    <img src={ text.pic } alt="" style={{ width:"7em"}}/>
                  </Col>
                  <Col span={14}>
                    <br/>
                    <br/>
                    <p>{text.title}</p>
                  </Col>
                </Row>
              </div>
          )
        },
        {
          title: '下单时间',
          dataIndex: 'createdAt',
          key: 'createdAt',
          width:'10%'
        },
        {
          title: '订单状态',
          dataIndex: 'status',
          key: 'status',
          width:'8%',
          render: (text, record) => {
            if(text === "WAIT_SELLER_SEND_GOODS") {
              return (
                  <div>
                    <p>待发货</p>
                    <Button type="primary" onClick={ () => {this.sendPost(record)}}>发货</Button>
                  </div>
              )
            }else {
              return (
                  <div>
                    <p>{
                      text==="WAIT_BUYER_PAY"? '待付款'
                          :
                          text==="WAIT_BUYER_CONFIRM_GOODS"? '已发货'
                              :
                              text==="TRADE_SUCCESS"? '已完成'
                                  :
                                  text==="TRADE_SUCCESS"? '已完成'
                                      :
                                      text==="TRADE_CLOSED"? '已关闭'
                                          :
                                          null
                    }</p>
                  </div>
              )
            }
          }
        },
        {
          title: '单价/数量',
          dataIndex: 'price',
          key: 'price',
          width:'8%',
          render: text => (
              <div>
                { '¥'+text+'件'}
              </div>
          ),
        },
        {
          title: '订单总额',
          dataIndex: 'money',
          key: 'money',
          width:'8%',
          render: text => (
              <div>
                { '¥'+text}
              </div>
          )
        },
        {
          title: '结算状态',
          dataIndex: 'isSettle',
          key: 'isSettle',
          width:'8%',
          render: (text,record) => (
              <div>
                {
                  text?
                      <div>
                        <p>已结算({ record.isAutoSettle? '自动结算':'手动结算' })</p>
                      </div>
                      :
                      <Button type="primary">结算</Button>
                }
              </div>
          ),
        },
        {
          title: '售后',
          dataIndex: 'refundState',
          key: 'refundState',
          width:'8%',
          render: text => (
              <div>
                { text===0? null: <Button type="primary">买家发起维权</Button>}
              </div>
          ),
        },
        {
          title: '操作',
          key: 'action',
          width:'10%',
          render: text => (
              <div>
                  <a href="javascript:;" onClick={ () => { this.showDetails(text) } }>详情</a>
              </div>
          ),
        }
      ]
    }
  }

  componentDidMount(){
    this.querySupplierOrder(undefined,1)
  }

  queryExpressList = () => {
    Request.GraphQlRequest(expressList,
        {},
        `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
          // console.log('expressList', res)
          this.setState({
            expressData:res.expressList
          })
        }
    ).catch( err => Request.token_auth(err) )
  }


  querySupplierOrder = (type,page) => {
    this.setState({
      isSpin1:true
    })
    Request.GraphQlRequest(supplierTradesList2,
        {
          status:type,
          page,
          pageSize:8
        },
        `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
          res.supplierTradesList2.entries.map(
              entry => {
                const detail = JSON.parse(entry.detail)
                // console.log(detail)
                entry.key = UUIDGen.uuid(8,10);
                entry.prod = {
                  tid:detail.full_order_info.order_info.tid,
                  pic:detail.full_order_info.orders[0].pic_path,
                  title:detail.full_order_info.orders[0].title
                }
                entry.price = detail.full_order_info.orders[0].price + '/' + detail.full_order_info.orders[0].num
                entry.createdAt = detail.full_order_info.order_info.created
                entry.money = detail.full_order_info.pay_info.total_fee
              }
          )
          // console.log('222', res)
          this.setState({
            orderData:res.supplierTradesList2,
            isSpin1:false
          })
        }
    ).catch( err => Request.token_auth(err) )
  }

  showDetails = data => {
    // console.log('data',data)
    this.setState({
      detailInfo:data,
      detailVisible:true
    })
  }

  handleCancel = () => {
    this.setState({
      detailInfo:null,
      detailVisible:false
    })
  }

  onChange = e => {
    // console.log('e',e.target.value)
    this.querySupplierOrder(e.target.value,1)
    this.setState({
      tagName:e.target.value
    })
  }

  sendPost = data => {
    // console.log('sendPost', data)
    this.queryExpressList()
    this.setState({
      postVisible:true,
      postData:data
    })
  }

  handlePostCancel = () => {
    this.setState({
      postVisible:false
    })
  }

  onRadioChange = e => {
    // console.log('radio checked', e.target.value);
    this.setState({
      radioValue: e.target.value,
    });
  }

  handleSelectChange = value => {
    // console.log( typeof value);
    this.setState({
      selectedValue:value
    })
  }

  handleInputChange = e => {
    // console.log('enter',e.target.value)
    this.setState({
      InputValue:e.target.value
    })
  }

  handlePostSend = tid => {
    // console.log('tid', tid)
    if(this.state.radioValue === 2){
      Request.GraphQlRequest(confirmSendProduct,
          {
            isNoExpress:1,
            tid
          },
          `Bearer ${localStorage.getItem('accessToken')}`).then(
          res => {
            // console.log('222', res)
            if(res.confirmSendProduct.status === 'ok'){
              message.success('发货成功！')
              this.setState({
                InputValue:'',
                selectedValue:'',
                postVisible:false,
                radioValue:1
              })
              this.querySupplierOrder(this.state.tagName,1)
            }
          }
      ).catch( err => Request.token_auth(err) )
    }else if(this.state.radioValue === 1 && this.state.InputValue && this.state.selectedValue){
      Request.GraphQlRequest(confirmSendProduct,
          {
            isNoExpress:0,
            tid,
            outSid:this.state.InputValue,
            outStype:this.state.selectedValue.toString()
          },
          `Bearer ${localStorage.getItem('accessToken')}`).then(
          res => {
            // console.log('222', res)
            if(res.confirmSendProduct.status === 'ok'){
              message.success('发货成功！')
            }
            this.setState({
              InputValue:'',
              selectedValue:'',
              postVisible:false,
              radioValue:1
            })
            this.querySupplierOrder(this.state.tagName,1)
          }
      ).catch( err => Request.token_auth(err) )
    }else {
      message.error('请选择物流或输入单号再提交')
    }
  }

  onPageChange = page => {
    this.setState({
      curPage:page
    })
    this.querySupplierOrder(this.state.tagName, page)
  }

  refresh = () => {
    this.querySupplierOrder(this.state.tagName,1)
  }


  render() {
    const renderExpress = this.state.expressData && this.state.expressData.map(
        item => {
          return (<Option value={item.id} key={item.id}>{item.name}</Option>)
        }
    )
    const detailInfo = this.state.detailInfo && JSON.parse(this.state.detailInfo.detail).full_order_info
    const detailInfo2 = this.state.postData && JSON.parse(this.state.postData.detail).full_order_info
    return (
        <div>
          <Spin spinning={this.state.isSpin}>
            <Affix offsetTop={10}>
              <Radio.Group value={this.state.tagName} onChange={this.onChange} style={{ marginBottom: 16 }}>
                <Radio.Button value={undefined}>全部</Radio.Button>
                <Radio.Button value="WAIT_BUYER_PAY">待付款</Radio.Button>
                <Radio.Button value="WAIT_SELLER_SEND_GOODS">待发货</Radio.Button>
                <Radio.Button value="WAIT_BUYER_CONFIRM_GOODS">已发货</Radio.Button>
                <Radio.Button value="TRADE_SUCCESS">已完成</Radio.Button>
                <Radio.Button value="TRADE_CLOSED">已关闭</Radio.Button>
              </Radio.Group>
            </Affix>
            <div style={{ textAlign:"right", marginBottom:"10px"}}>
              <Button type="primary" onClick={this.refresh} style={{ marginRight:"5px"}}><Icon type="reload" theme="outlined" />刷新</Button>
            </div>
            <Spin spinning={this.state.isSpin1}>
              <Table bordered dataSource={ this.state.orderData&& this.state.orderData.entries } columns={this.state.columns} pagination={false}/>
            </Spin>
            {
              this.state.detailInfo
              &&
              <Modal
                  title="订单详情"
                  visible={ this.state.detailVisible }
                  onCancel={ this.handleCancel }
                  destroyOnClose={true}
                  footer={null}
              >
                <h3>基本信息：</h3>
                <p><strong>下单人：</strong>{ detailInfo.buyer_info.fans_nickname }</p>
                <p><strong>手机号：</strong>{ detailInfo.address_info.receiver_tel }</p>
                <h3><strong>订单信息：</strong></h3>
                <p><strong>订单号：</strong>{ this.state.detailInfo.prod.tid}</p>
                <p><strong>商品名称：</strong>{ this.state.detailInfo.prod.title }</p>
                <p><strong>商品单价(元)/数量(件)：</strong>{ this.state.detailInfo.price}</p>
                <p><strong>邮费：</strong>{ detailInfo.pay_info.post_fee==='0.00'? '包邮': detailInfo.pay_info.post_fee }</p>
                <p><strong>收货地址：</strong>
                  {
                    detailInfo.address_info.delivery_province +
                    detailInfo.address_info.delivery_city +
                    detailInfo.address_info.delivery_district +
                    detailInfo.address_info.delivery_address + '，' +
                    detailInfo.address_info.receiver_name + '，' +
                    detailInfo.address_info.receiver_tel
                  }
                </p>
                <p><strong>状态：</strong>{ this.state.detailInfo.state}</p>
                <p><strong>创建时间：</strong>{ this.state.detailInfo.createdAt}</p>
              </Modal>
            }

            {
              this.state.postData
                &&
              <Modal
                  title="订单发货"
                  visible={ this.state.postVisible }
                  onOk={ () => { this.handlePostSend(this.state.postData.prod.tid) }}
                  onCancel={ this.handlePostCancel }
                  destroyOnClose={true}
              >
                <p>
                  <strong>收获地址：</strong>
                  {
                    detailInfo2.address_info.delivery_province +
                    detailInfo2.address_info.delivery_city +
                    detailInfo2.address_info.delivery_district +
                    detailInfo2.address_info.delivery_address + '，' +
                    detailInfo2.address_info.receiver_name + '，' +
                    detailInfo2.address_info.receiver_tel
                }</p>
                <br/>
                <div>
                  <strong>发货方式：</strong>
                  <RadioGroup onChange={this.onRadioChange} value={this.state.radioValue}>
                    <Radio value={1} key={1}>物流发货</Radio>
                    <Radio value={2} key={2}>无需发货</Radio>
                  </RadioGroup>
                </div>
                <br/>
                {
                  this.state.radioValue === 1
                    &&
                      <div>
                        <div>
                          <strong>物流公司：</strong>
                          <Select style={{ width: 120 }} onChange={this.handleSelectChange} value={this.state.selectedValue}>
                            { renderExpress }
                          </Select>
                          <strong style={{ marginLeft: '1em' }}>快递单号：</strong>
                          <Input onChange={this.handleInputChange} value={this.state.InputValue} style={{ width: 180 }}/>
                        </div>
                        <br/>
                        <Alert message="请仔细填写物流公司及快递单号，确认后将不可修改" type="info" />
                      </div>
                }
              </Modal>
            }

          </Spin>
          {
            (this.state.orderData && this.state.orderData.totalEntries !==0)
            &&
            <Pagination
                pageSize={8}
                defaultCurrent={1}
                current={this.state.curPage}
                onChange={this.onPageChange}
                total={ this.state.orderData? this.state.orderData.totalEntries:0 }
                style={{ float: "right", marginTop: "10px"}}/>
          }
        </div>
    )
  }
}
