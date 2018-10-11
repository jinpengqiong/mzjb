import { Table, Pagination, message, Select, Radio, Spin, Modal, Row, Col, Affix, Button, Input, Alert, Icon, Divider } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import UUIDGen from '../../utils/uuid_generator.js';
import PostSendModal from '../common_modal/postSend'
import RefundModal from '../common_modal/refund'
const Option = Select.Option;
const RadioGroup = Radio.Group;


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
      postData:null,
      curPage:1,
      refundInfo:null,
      refundPROD:null, //退款商品的商品信息
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
                    <a
                        href="javascript:void(0)"
                        onClick={
                          () => {
                            if(record.refundState === 1 ){
                              message.info('维权中商品不支持发货')
                            } else {
                              this.sendPost(record)
                            }
                          }
                        }>发货</a>
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
                entry.tid = detail.full_order_info.order_info.tid
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
          // console.log('getRefundInfo', res.getRefundInfo.refunds[0].refundId)
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

  onTabChange = e => {
    // console.log('e',e.target.value)
    this.querySupplierOrder(e.target.value, 1)
    this.setState({
      tagName:e.target.value,
      curPage:1
    })
  }

  sendPost = data => {
    this.setState({
      postData:data
    })
    this.props.store.setModalDisplay('post', true)
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



  getRefundStr = state => {
    switch(state){
      case "WAIT_SELLER_AGREE":
        return '买家发起维权'
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
    // console.log('data',data)
    this.queryRefundID(data.tid)
    this.props.store.setModalDisplay('refund', true)
    this.setState({
      refundPROD:data
    })
  }


  render() {
    const detailInfo = this.state.detailInfo && JSON.parse(this.state.detailInfo.detail).full_order_info
    const { refundInfo, refundPROD, postData } =  this.state
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
                <h2>基本信息：</h2>
                <p><strong>下单人：</strong>{ detailInfo.buyer_info.fans_nickname }</p>
                <p><strong>手机号：</strong>{ detailInfo.address_info.receiver_tel }</p>
                <br/>
                <h2>订单信息：</h2>
                <p><strong>订单号：</strong>{ this.state.detailInfo.prod.tid}</p>
                <p><strong>商品名称：</strong>{ this.state.detailInfo.prod.title }</p>
                <p><strong>商品单价/数量：</strong>{ '¥' + this.state.detailInfo.price + '件)'}</p>
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

            <PostSendModal
                postData={ postData }
                querySupplierOrder={ () => { this.querySupplierOrder(this.state.tagName, this.state.curPage) } }
            />

            <RefundModal
                refundPROD={ refundPROD }
                refundInfo={ refundInfo }
                querySupplierOrder={ () => { this.querySupplierOrder(this.state.tagName, this.state.curPage) } }
            />

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
