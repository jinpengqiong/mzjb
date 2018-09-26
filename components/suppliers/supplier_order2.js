import { Table, Pagination, message, Select, Radio, Spin, Modal, Row, Col, Affix, Button, Input, Alert, Icon, Divider } from 'antd';
import Request from '../../utils/graphql_request';
import cx from 'classnames';
import { inject, observer } from 'mobx-react'
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

const getRefundInfo = `
    query ($tid: String!) {
        getRefundInfo(tid:$tid){
           refunds{
              refundId
              created
              csStatus
              kdtIt
              modified
              reason
              refundFee
              returnGoods
              status
              tid
            }
        }
    }`;

const getRefundDetail = `
    query ($refundId: String!) {
        getRefundDetail(refundId:$refundId){
            csStatus
            created
            desc
            itemId
            kdtId
            logistics {
              address
              companyCode
              logisticsNo
              mobile
              receiver
              telephone
            }
            modified
            oid
            reason
            refundFee
            refundFundDesc
            refundId
            refundType
            returnGoods
            status
            tid
            version
        }
    }`;

const returngoodsAgree = `
    mutation ($address: String!, $name: String!, $phone: String!, $refundId: String!, $tid: String!) {
        returngoodsAgree(address:$address, name:$name, phone:$phone, refundId:$refundId, tid:$tid){
            status
        }
    }`;

const returngoodsRefuse = `
    mutation ($remark: String!, $refundId: String!, $tid: String!) {
        returngoodsRefuse(remark:$remark, refundId:$refundId, tid:$tid){
            status
        }
    }`;

const refundAgree = `
    mutation ($refundId: String!, $tid: String!) {
        refundAgree(refundId:$refundId, tid:$tid){
            status
        }
    }`;

const refundRefuse = `
    mutation ($refundId: String!, $tid: String!, $remark: String!) {
        refundRefuse(refundId:$refundId, tid:$tid, remark:$remark){
            status
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
      curPage:1,
      visible:false,
      showAccept:false,
      showRefuse:false,
      refundInfo:null,
      refundPROD:null, //退款商品的商品信息
      refundAddress:null,
      refundPhone:null,
      refundName:null,
      refuseFundsRemarks:'',
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
                    <a href="javascript:void(0)" onClick={ () => {this.sendPost(record)}}>发货</a>
                  </div>
              )
            }else {
              return (
                  <div>
                    <p>{this.getStateStr(text)}</p>
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
                { '¥'+text+'件)'}
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
                      <p>未结算</p>
                }
              </div>
          ),
        },
        {
          title: '售后',
          dataIndex: 'refundState',
          key: 'refundState',
          width:'8%',
          render: (text,record) => (
              <div>
                {
                  text===0?
                      null:
                      <a href="javascript:void(0)" onClick={ () => {this.openRightModal(record)}}>{ this.getRefundStr(record.refundStatus) }</a>
                }
              </div>
          ),
        },
        {
          title: '操作',
          key: 'action',
          width:'10%',
          render: (text,record) => (
              <div>
                  <a href="javascript:;" onClick={ () => { this.showDetails(text) } }>详情</a>
                  {
                    !record.isSettle
                      &&
                        <span>
                        <Divider type="vertical" />
                          <a href="javascript:void(0)">去结算</a>
                        </span>
                  }
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
                entry.price = detail.full_order_info.orders[0].price + '(' + detail.full_order_info.orders[0].num
                entry.createdAt = detail.full_order_info.order_info.created
                entry.money = detail.full_order_info.pay_info.total_fee
                entry.buyerName = detail.full_order_info.buyer_info.fans_nickname
                entry.postFee = detail.full_order_info.pay_info.post_fee

              }
          )
          console.log('222', res)
          this.setState({
            orderData:res.supplierTradesList2,
            isSpin1:false
          })
        }
    ).catch( err => Request.token_auth(err) )
  }

  queryRefundID = tid => {
    Request.GraphQlRequest(getRefundInfo, { tid },
        `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
          console.log('getRefundInfo', res.getRefundInfo.refunds[0].refundId)
          this.queryRefundDetails(res.getRefundInfo.refunds[0].refundId)
        }
    ).catch( err => Request.token_auth(err) )
  }

  queryRefundDetails = refundId => {
    Request.GraphQlRequest(getRefundDetail, { refundId },
        `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
          console.log('getRefundDetail', res)
          this.setState({
            refundInfo:res.getRefundDetail
          })
        }
    ).catch( err => Request.token_auth(err) )
  }


  showDetails = data => {
    console.log('data',data)
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

  onTabChange = e => {
    // console.log('e',e.target.value)
    this.querySupplierOrder(e.target.value, 1)
    this.setState({
      tagName:e.target.value,
      curPage:1
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
              this.querySupplierOrder(this.state.tagName, this.state.curPage)
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
            this.querySupplierOrder(this.state.tagName, this.state.curPage)
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
    this.querySupplierOrder(this.state.tagName, this.state.curPage)
  }

  getStateStr = state => {
    switch(state){
      case "WAIT_BUYER_PAY":
      return '待付款'
      break;
      case "WAIT_SELLER_SEND_GOODS":
      return '待发货'
      break;
      case "WAIT_BUYER_CONFIRM_GOODS":
      return '已发货'
      break;
      case "TRADE_SUCCESS":
      return '已完成'
      break;
      case "TRADE_CLOSED":
      return '已关闭'
      break;
      default:
      null
    }
  }

  getRefundReasonStr = state => {
    switch(state){
      case 11:
        return '质量问题'
        break;
      case 12:
        return '拍错/多拍/不喜欢'
        break;
      case 13:
        return '商品描述不符'
        break;
      case 14:
        return '假货'
        break;
      case 15:
        return '商家发错货'
        break;
      case 16:
        return '商品破损/少件'
        break;
      case 17:
        return '其他'
        break;
      case 51:
        return '多买/买错/不想要'
        break;
      case 52:
        return '快递无记录'
        break;
      case 53:
        return '少货/空包裹'
        break;
      case 54:
        return '未按约定时间发货'
        break;
      case 55:
        return '快递一直未送达'
        break;
      case 56:
        return '其他'
        break;
      case 101:
        return '商品破损/少件'
        break;
      case 102:
        return '商家发错货'
        break;
      case 103:
        return '商品描述不符'
        break;
      case 104:
        return '拍错/多拍/不喜欢'
        break;
      case 105:
        return '质量问题'
        break;
      case 107:
        return '其他'
        break;
      default:
        null
    }
  }

  getRefundStr = state => {
    switch(state){
      case "WAIT_SELLER_AGREE":
        return '卖家发起维权'
        break;
      case "WAIT_BUYER_RETURN_GOODS":
        return '卖家接受退款，待买家退货'
        break;
      case "WAIT_SELLER_CONFIRM_GOODS":
        return '买家已发货，卖家确认收货'
        break;
      case "SELLER_REFUSE_BUYER":
        return '卖家拒绝退款'
        break;
      case "CLOSED":
        return '退款关闭'
        break;
      case "SUCCESS":
        return '退款成功'
        break;
      default:
        null
    }
  }

  openRightModal = data => {
    console.log('data',data)
    this.queryRefundID(data.tid)
    this.setState({
      visible:true,
      refundPROD:data
    })

  }

  handleModalCancel = () => {
    this.setState({
      visible:false,
      showAccept:false,
      showRefuse:false,
      refuseFundsRemarks:'',
      refundAddress:null,
      refundPhone:null,
      refundName:null,
    })
  }

  acceptGoodsBack = (tid, refundId) => {
    // console.log('ID', tid, refundId)
    if(!this.state.refundAddress || !this.state.refundPhone || !this.state.refundName){
      this.setState({
        showAccept:true,
        showRefuse:false,
        refuseFundsRemarks:''
      })
      message.info('请先输入退货地址，再确认退货')
    }else{
      Request.GraphQlRequest(returngoodsAgree,
          {
            refundId,
            tid,
            address: this.state.refundAddress,
            name: this.state.refundName,
            phone: this.state.refundPhone
          },
          `Bearer ${localStorage.getItem('accessToken')}`).then(
          res => {
            console.log('returngoodsAgree', res)
            if(res.returngoodsAgree.status === 'ok'){
              this.setState({
                visible:false,
                showAccept:false,
                showRefuse:false,
                refundAddress:null,
                refundPhone:null,
                refundName:null,
                refuseFundsRemarks:''
              })
              message.success('接受退货成功')
              this.querySupplierOrder(this.state.tagName, this.state.curPage)
            }
          }
      ).catch( err => Request.token_auth(err) )
    }
  }

  refuseGoodsBack = (tid, refundId) => {
    this.setState({
      showAccept:false,
      showRefuse:true
    })
    if(this.state.refuseFundsRemarks){
      Request.GraphQlRequest(returngoodsRefuse,
          {
            refundId,
            tid,
            remark:this.state.refuseGoodsRemarks
          },
          `Bearer ${localStorage.getItem('accessToken')}`).then(
          res => {
            console.log('returngoodsRefuse', res)
            if (res.returngoodsRefuse.status === 'ok') {
              this.setState({
                visible: false,
                showAccept: false,
                showRefuse: false,
                refundAddress: null,
                refundPhone: null,
                refundName: null,
              })
              message.success('拒绝退货成功')
              this.querySupplierOrder(this.state.tagName, this.state.curPage)
            }
          }
      ).catch( err => Request.token_auth(err) )
    }else{
      message.info('请先输入拒绝理由再提交')
    }
  }

  handleInputChange = (e,type) => {
    console.log('e', e.target.value)
    if(type === 'address'){
      this.setState({
        refundAddress:e.target.value
      })
    }
    if(type === 'phone'){
      this.setState({
        refundPhone:e.target.value
      })
    }
    if(type === 'name'){
      this.setState({
        refundName:e.target.value
      })
    }
    if(type === 'postId'){
      this.setState({
        InputValue:e.target.value
      })
    }
    if(type === 'refuseFundsReason'){
      this.setState({
        refuseFundsRemarks:e.target.value
      })
    }
  }

  acceptFundsBack = (tid, refundId) => {
    Request.GraphQlRequest(refundAgree,
        {
          refundId,
          tid,
        },
        `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
          console.log('refundAgree', res)
          if (res.refundAgree.status === 'ok') {
            this.setState({
              visible: false,
              showRefuse: false,
              showAccept:false
            })
            message.success('接受退款成功')
            this.querySupplierOrder(this.state.tagName, this.state.curPage)
          }
        }
    ).catch( err => Request.token_auth(err) )
  }

  refuseFundsBack = (tid, refundId) => {
    this.setState({
      showRefuse:true,
      showAccept:false,
      refundAddress:null,
      refundPhone:null,
      refundName:null
    })
    if(this.state.refuseFundsRemarks){
      Request.GraphQlRequest(refundRefuse,
          {
            refundId,
            tid,
            remark:this.state.refuseFundsRemarks
          },
          `Bearer ${localStorage.getItem('accessToken')}`).then(
          res => {
            console.log('refundRefuse', res)
            if (res.refundRefuse.status === 'ok') {
              this.setState({
                visible: false,
                showRefuse: false,
                showAccept:false,
                refuseFundsRemarks:''
              })
              message.success('拒绝退款成功')
              this.querySupplierOrder(this.state.tagName, this.state.curPage)
            }
          }
      ).catch( err => Request.token_auth(err) )
    }else {
      message.info('请先输入拒绝理由再提交')
    }
  }


  render() {
    const renderExpress = this.state.expressData && this.state.expressData.map(
        item => {
          return <Option value={item.id} key={item.id}>{item.name}</Option>
        }
    )
    const detailInfo = this.state.detailInfo && JSON.parse(this.state.detailInfo.detail).full_order_info
    const detailInfo2 = this.state.postData && JSON.parse(this.state.postData.detail).full_order_info
    const { refundInfo, refundPROD } =  this.state
    return (
        <div>
          <Spin spinning={this.state.isSpin}>
            <Affix offsetTop={10}>
              <Radio.Group value={this.state.tagName} onChange={this.onTabChange} style={{ marginBottom: 16 }} >
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
                <p><strong>商品单价/数量：</strong>{ '¥'+this.state.detailInfo.price+'(件)'}</p>
                <p><strong>邮费：</strong>{ '¥'+detailInfo.pay_info.post_fee }</p>
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
                <p><strong>状态：</strong>{ this.getStateStr(this.state.detailInfo.status) }</p>
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
                          <Input onChange={ e => { this.handleInputChange(e, 'postId')}} value={this.state.InputValue} style={{ width: 180 }}/>
                        </div>
                        <br/>
                        <Alert message="请仔细填写物流公司及快递单号，确认后将不可修改" type="info" />
                      </div>
                }
              </Modal>
            }

            {
              this.state.visible
                &&
              <Modal
                  title="售后维权"
                  visible={this.state.visible}
                  onCancel={this.handleModalCancel}
                  destroyOnClose={true}
                  footer={null}
              >
                <p>
                  <img src={refundPROD.prod.pic} style={{ width:"8em" ,marginRight:'2em' }} alt="##"/>
                  <span>{refundPROD.prod.title}</span>
                </p>
                <p>
                  <strong>退款状态：</strong>
                  <span style={{ color: 'red'}}>{ refundInfo && this.getRefundStr(refundInfo.status) }</span>
                </p>
                <p>
                  <strong>期望结果：</strong>
                  <span>{ (refundInfo && refundInfo.returnGoods)? '退款退货':'仅退款' }</span>
                </p>
                <p>
                  <strong>退款金额：</strong>
                  <span>{ refundInfo && '¥'+refundInfo.refundFee }</span>
                </p>
                <p>
                  <strong>维权原因：</strong>
                  <span>{ refundInfo && this.getRefundReasonStr(refundInfo.reason) }</span>
                </p>
                <p>
                  <strong>订单编号：</strong>
                  <span>{ refundInfo && refundInfo.tid }</span>
                </p>
                <p>
                  <strong>付款时间：</strong>
                  <span>{ refundInfo && refundInfo.created }</span>
                </p>
                <p>
                  <strong>买家(手机号)：</strong>
                  <span>{ `${refundPROD.buyerName}(${refundPROD.buyerPhone})` }</span>
                </p>
                <p>
                  <strong>物流信息：</strong>
                  <span>{ (refundInfo && refundInfo.logistics)? `${refundInfo.logistics.address}，${refundInfo.logistics.receiver}，${refundInfo.logistics.mobile}`:'暂无或无需物流' }</span>
                </p>
                <p>
                  <strong>运费：</strong>
                  <span>{ '¥'+refundPROD.postFee }</span>
                </p>
                <p>
                  <strong>实收总计：</strong>
                  <span>{ refundInfo && '¥'+refundInfo.refundFee }</span>
                </p>

                {
                  this.state.showAccept
                    &&
                  <div>
                    <strong>退货地址：</strong>
                    <br/>
                    <Input placeholder="输入退货地址" onChange={ e => { this.handleInputChange(e, 'address')}} />
                    <Input style={{ marginTop:'1em',width:'12em'}} placeholder="输入卖家电话" onChange={ e => { this.handleInputChange(e, 'phone')}} />
                    <Input style={{ marginLeft:'1em',width:'10em'}} placeholder="输入卖家名" onChange={ e => { this.handleInputChange(e, 'name')}} />
                  </div>
                }

                {
                  this.state.showRefuse
                  &&
                  <div>
                    <strong>拒绝退款原因：</strong>
                    <br/>
                    <Input placeholder="输入拒绝退款原因" onChange={ e => { this.handleInputChange(e, 'refuseFundsReason')}} />
                  </div>
                }

                <div>
                  {
                    refundInfo && !refundInfo.returnGoods
                        &&
                        <div>
                          {
                            refundInfo && (refundInfo.status === 'WAIT_SELLER_AGREE'|| refundInfo.status === 'SELLER_REFUSE_BUYER' )
                            &&
                            <Button
                                onClick={ () => { this.acceptFundsBack(refundInfo.tid, refundInfo.refundId) }}
                                style={{ margin:' 1em 4em'}}
                                type="primary">
                              同意退款
                            </Button>
                          }
                          {
                            refundInfo && refundInfo.status === 'WAIT_SELLER_AGREE'
                              &&
                            <Button
                                onClick={ () => { this.refuseFundsBack(refundInfo.tid, refundInfo.refundId) }}
                                type="primary">
                              拒绝退款
                            </Button>
                          }
                        </div>
                  }
                  {
                    refundInfo && refundInfo.returnGoods
                      &&
                    <div>
                      {
                        refundInfo && (refundInfo.status === 'WAIT_SELLER_AGREE' || refundInfo.status === 'SELLER_REFUSE_BUYER')
                        &&
                        <Button
                            type="primary"
                            style={{margin: ' 1em 4em'}}
                            onClick={() => {
                              this.acceptGoodsBack(refundInfo.tid, refundInfo.refundId)
                            }}>
                          同意退货，发送退货地址
                        </Button>
                      }
                      {
                        refundInfo && (refundInfo.status === 'WAIT_SELLER_CONFIRM_GOODS' || refundInfo.status === 'WAIT_BUYER_RETURN_GOODS')
                        &&
                        <Button
                            onClick={ () => { this.acceptFundsBack(refundInfo.tid, refundInfo.refundId) }}
                            style={{ margin:' 1em 4em'}}
                            type="primary">
                          已收到货品，同意退款
                        </Button>
                      }
                      {
                        refundInfo && refundInfo.status === 'WAIT_SELLER_AGREE'
                        &&
                        <Button
                            onClick={ () => { this.refuseFundsBack(refundInfo.tid, refundInfo.refundId) }}
                            type="primary">
                          拒绝退款
                        </Button>
                      }
                    </div>
                  }
                </div>
              </Modal>
            }
          </Spin>
          {
            (this.state.orderData && this.state.orderData.totalEntries !==0)
            &&
            <Pagination
                pageSize={8}
                current={this.state.curPage}
                onChange={this.onPageChange}
                total={ this.state.orderData? this.state.orderData.totalEntries:0 }
                style={{ float: "right", marginTop: "10px"}}/>
          }
        </div>
    )
  }
}
