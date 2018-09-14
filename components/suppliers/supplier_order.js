import { Table, Pagination, message, Select, Radio, Spin, Modal, Row, Col, Affix, Button, Input, Alert } from 'antd';
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

const supplierTradesList = `
    query ($endCreated: String!, $startCreated: String!, $status: String!) {
        supplierTradesList(endCreated:$endCreated, startCreated:$startCreated, status:$status){
           payInfo{
              totalFee
              postFee
            }
            orderInfo{
              tid
              payTypeStr
              created
              statusStr
            }
            orders{
              title
              price
              picPath
              num
            }
            buyerInfo{
              buyerId
              fansNickname
            }
            addressInfo{
              receiverTel
              deliveryAddress
              deliveryDistrict
              deliveryProvince
              deliveryCity
              receiverName
              receiverTel
              deliveryPostalCode
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
      tagName:"ALL",
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
      curPage:1,
      optionValue:"7",
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
          title: '单价(元)/数量(件)',
          dataIndex: 'price',
          key: 'price',
          width:'15%'
        },
        {
          title: '下单时间',
          dataIndex: 'createdAt',
          key: 'createdAt',
          width:'12%'
        },
        {
          title: '订单状态',
          dataIndex: 'state',
          key: 'state',
          render: (text, record) => {
            if(text === '待发货') {
              return (
                  <div>
                    <p>{text}</p>
                    <Button type="primary" onClick={ () => {this.sendPost(record)}}>发货</Button>
                  </div>
              )
            }else {
              return (
                  <div>
                    <p>{text}</p>
                  </div>
              )
            }
          }
        },
        {
          title: '订单总额(元)',
          dataIndex: 'money',
          key: 'money',
          width:'12%'
        },
        {
          title: '操作',
          key: 'action',
          render: text => (
              <div>
                  <a href="#" onClick={ () => { this.showDetails(text) } }>详情</a>
              </div>
          ),
        }
      ]
    }
  }

  componentDidMount(){
    this.querySupplierOrder('ALL')
  }

  queryExpressList = () => {
    Request.GraphQlRequest(expressList,
        {},
        `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
          console.log('expressList', res)
          this.setState({
            expressData:res.expressList
          })
        }
    ).catch( err => Request.token_auth(err) )
  }


  querySupplierOrder = type => {
    const endCreated = moment().format('YYYY-MM-DD HH:mm:ss')
    const startCreated = moment().subtract(2, 'months').format('YYYY-MM-DD HH:mm:ss')
    this.setState({
      isSpin1:true
    })
    Request.GraphQlRequest(supplierTradesList,
        {
          startCreated,
          endCreated,
          status:type
        },
        `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
          // console.log('222', res)
          res.supplierTradesList.map(
              entry => {
                entry.key = UUIDGen.uuid(8,10);
                entry.prod = {
                  tid:entry.orderInfo.tid,
                  pic:entry.orders[0].picPath,
                  title:entry.orders[0].title
                }
                entry.price = entry.orders[0].price + '/' + entry.orders[0].num
                entry.createdAt = entry.orderInfo.created
                entry.state = entry.orderInfo.statusStr
                entry.money = entry.payInfo.totalFee
              }
          )
          this.setState({
            orderData:res.supplierTradesList,
            isSpin1:false
          })
        }
    ).catch( err => Request.token_auth(err) )
  }

  showDetails = data => {
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
    this.querySupplierOrder(e.target.value)
    this.setState({
      tagName:e.target.value
    })
  }

  sendPost = data => {
    // console.log('data', data)
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
    console.log( typeof value);
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
          }
      ).catch( err => Request.token_auth(err) )
    }else {
      message.error('请选择物流或输入单号再提交')
    }
  }

  onPageChange = page => {
    // console.log(page)
    this.setState({
      curPage:page
    })
  }

  refresh = () => {
    this.querySupplierOrder(this.state.tagName)
  }


  render() {
    const renderExpress = this.state.expressData && this.state.expressData.map(
        item => {
          return (<Option value={item.id} key={item.id}>{item.name}</Option>)
        }
    )
    return (
        <div>
          <Spin spinning={this.state.isSpin}>
            <Affix offsetTop={10}>
              <Radio.Group value={this.state.tagName} onChange={this.onChange} style={{ marginBottom: 16 }}>
                <Radio.Button value="ALL">全部</Radio.Button>
                <Radio.Button value="WAIT_BUYER_PAY">待付款</Radio.Button>
                <Radio.Button value="WAIT_SELLER_SEND_GOODS">待发货</Radio.Button>
                <Radio.Button value="WAIT_BUYER_CONFIRM_GOODS">已发货</Radio.Button>
                <Radio.Button value="TRADE_SUCCESS">已完成</Radio.Button>
                <Radio.Button value="TRADE_CLOSE">已关闭</Radio.Button>
              </Radio.Group>
            </Affix>
            <div style={{ textAlign:"right", marginBottom:"10px"}}>
              <Button type="primary" onClick={this.refresh} style={{ marginRight:"5px"}}>刷新</Button>
            </div>
            <Spin spinning={this.state.isSpin1}>
              <Table bordered dataSource={this.state.orderData&& this.state.orderData.slice(4*(this.state.curPage-1),this.state.curPage*4)} columns={this.state.columns} pagination={false}/>
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
                <p><strong>下单人：</strong>{ this.state.detailInfo.buyerInfo.fansNickname }</p>
                <p><strong>手机号：</strong>{ this.state.detailInfo.addressInfo.receiverTel }</p>
                <h3><strong>订单信息：</strong></h3>
                <p><strong>订单号：</strong>{ this.state.detailInfo.prod.tid}</p>
                <p><strong>商品名称：</strong>{ this.state.detailInfo.prod.title }</p>
                <p><strong>商品单价(元)/数量(件)：</strong>{ this.state.detailInfo.price}</p>
                <p><strong>邮费：</strong>{ this.state.detailInfo.payInfo.postFee==='0.00'? '包邮': this.state.detailInfo.postFee }</p>
                <p><strong>收获地址：</strong>
                  {
                    this.state.detailInfo.addressInfo.deliveryProvince +
                    this.state.detailInfo.addressInfo.deliveryCity +
                    this.state.detailInfo.addressInfo.deliveryDistrict +
                    this.state.detailInfo.addressInfo.deliveryAddress + '，' +
                    this.state.detailInfo.addressInfo.receiverName + '，' +
                    this.state.detailInfo.addressInfo.receiverTel
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
                  this.state.postData.addressInfo.deliveryProvince +
                  this.state.postData.addressInfo.deliveryCity +
                  this.state.postData.addressInfo.deliveryDistrict +
                  this.state.postData.addressInfo.deliveryAddress + '，' +
                  this.state.postData.addressInfo.receiverName + '，' +
                  this.state.postData.addressInfo.receiverTel
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
            (this.state.orderData && this.state.orderData.length !==0)
            &&
            <Pagination
                pageSize={4}
                current={this.state.curPage}
                onChange={this.onPageChange}
                total={this.state.orderData? this.state.orderData.length : 1}
                style={{ float: "right", marginTop: "10px"}}/>
          }
        </div>
    )
  }
}
