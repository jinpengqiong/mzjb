import { Table, Pagination, message, Select, Button, Spin, Modal, Icon, Affix, Radio } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import UUIDGen from '../../utils/uuid_generator.js';
import PostSendModal from '../common_modal/postSend'
import RefundModal from '../common_modal/refund'
const Option = Select.Option;


const queryOrder = `
    query ($id: ID!, $page: Int, $pageSize: Int, $status: String) {
        shopTradesList2(id:$id, page:$page,pageSize:$pageSize,status:$status ){
            totalEntries
            entries{
                price
                isSettle
                createdAt
                title
                tid
                num
                status
                totalFee
                supplierName
                refundState
                refundStatus
                detail
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
export default class OrderManagement2 extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        data:null,
        isSpin:false,
        detailInfo:null,
        visible: false,
        tagName: undefined,
        curPage:1,
        postData:null,
        refundInfo:null,
        refundPROD:null, //退款商品的商品信息
        columns : [
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
                title: '商品类型',
                dataIndex: 'supplierName',
                key: 'supplierName',
                render: text => (
                    <span>{ text? '优选商品' : '自有商品'}</span>
                ),
            },
            {
                title: '单价/数量',
                dataIndex: 'price',
                key: 'price',
                width:'8%',
                render: (text, record) => (
                    <span>{'¥'+text+'件）'}</span>
                ),
            },
            {
                title: '下单时间',
                dataIndex: 'createdAt',
                key: 'createdAt',
            },
            {
                title: '订单状态',
                dataIndex: 'status',
                key: 'status',
                width:'13%',
                render: (text, record) => (
                    <div>
                        {
                        text==="WAIT_BUYER_PAY"? "待付款"
                          : text==="TRADE_PAID"? "已付款"
                          : (text==="WAIT_SELLER_SEND_GOODS" && record.supplierName) ? "供货商待发货"
                          : (text==="WAIT_SELLER_SEND_GOODS" && !record.supplierName) ?
                                    <div>
                                      <p>自有商品待发货</p>
                                      <a
                                          href="javascript:void(0);"
                                          onClick={
                                            () => {
                                              if(record.refundState === 1 ){
                                                message.info('维权中商品不支持发货')
                                              } else {
                                                this.sendPost(record)
                                              }
                                            }
                                          }
                                      >
                                        发货
                                      </a>
                                    </div>
                          : text==="WAIT_BUYER_CONFIRM_GOODS"? "已发货"
                          : text==="TRADE_SUCCESS"? "交易完成"
                          : text==="TRADE_CLOSED"? "交易关闭"
                          : null
                        }
                    </div>
                )
            },
            {
                title: '订单总额(元)',
                dataIndex: 'totalFee',
                key: 'totalFee',
                width:'8%'
            },
            {
              title: '售后',
              dataIndex: 'refundState',
              key: 'refundState',
              width:'8%',
              render: (text,record) => (
                  <div>
                    {
                      text===0 ?
                          null
                          :
                      record.supplierName?
                          <p>{ this.getRefundStr(record.refundStatus) }</p>
                          :
                          <a
                              href="javascript:void(0)"
                              onClick={ () => { this.openRightModal(record)} }
                          >
                            { this.getRefundStr(record.refundStatus) }
                          </a>
                    }
                  </div>
              ),
            },
            {
                title: '操作',
                key: 'action',
                width:'12%',
                render: (text, record) => (
                    <span>
                        <a href="javascript:;" onClick={ () => { this.showDetails(record.tid) } }>详情</a>
                    </span>
                ),
            }
        ]
    }
  }
  componentDidMount(){
      this.queryOrderData(1,undefined);
  }

  queryOrderData = (curPage, type) => {
    Request.GraphQlRequest(queryOrder,
        {
          id: localStorage.getItem('shopID'),
          page: curPage,
          pageSize: 10,
          status:type
        },
        `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
                res.shopTradesList2.entries.map(
                    entry => {
                      const detail = JSON.parse(entry.detail)
                      // console.log(detail)
                      entry.key = UUIDGen.uuid(8,10);
                      entry.prod = {
                        pic:detail.full_order_info.orders[0].pic_path,
                        title:detail.full_order_info.orders[0].title
                      }
                      entry.tid = detail.full_order_info.order_info.tid
                      entry.price = detail.full_order_info.orders[0].price + '(' + detail.full_order_info.orders[0].num
                      entry.createdAt = detail.full_order_info.order_info.created
                      entry.money = detail.full_order_info.pay_info.total_fee
                      entry.buyerName = detail.full_order_info.buyer_info.fans_nickname
                      entry.buyerPhone = detail.full_order_info.buyer_info.buyer_phone
                      entry.postFee = detail.full_order_info.pay_info.post_fee
                    }
                );
                console.log('res',res)
                this.setState({
                  data: res.shopTradesList2,
                  isSpin: false
                })
        }
    ).catch(err=>{message.error('你还未授权开店，请联系管理员！'); Request.token_auth(err)})
  }

  sendPost = data => {
    this.setState({
      postData:data
    })
    this.props.store.setModalDisplay('post', true)
  }

  onPageChange = pageNumber => {
    this.queryOrderData(pageNumber, this.state.tagName);
    this.setState({
      curPage:pageNumber
    })
  }

  refresh = () => {
    this.setState({
      isSpin:true
    })
    this.queryOrderData(this.state.curPage, this.state.tagName);
  }

  showDetails = ID => {
      Request.GraphQlRequest(shopTradeInfo, {id: localStorage.getItem('shopID'), tid:ID },`Bearer ${localStorage.getItem('accessToken')}`).then(
          res => {
            console.log('111', res)
              this.setState({
                  detailInfo:res.shopTradeInfo,
                  visible:true
              })
          }
      ).catch(err=>{message.error('出错了，请联系管理员'); Request.token_auth(err)})
  }

  handleCancel = () => {
      this.setState({
          detailInfo:null,
          visible:false
      })
  }

  onTabChange = e => {
    console.log('v', e.target.value)
    this.queryOrderData(1, e.target.value)
    this.setState({
      tagName:e.target.value,
      curPage:1
    })
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

  openRightModal = data => {
    this.queryRefundID(data.tid)
    this.setState({
      refundPROD:data
    })
    this.props.store.setModalDisplay('refund', true)
  }

  render() {
    const { refundInfo, refundPROD, postData, detailInfo, tagName, isSpin, data, columns, visible, curPage } =  this.state
    return (
        <div>
          <div>
              <Radio.Group value={tagName} onChange={this.onTabChange} >
                <Radio.Button value={undefined}>全部</Radio.Button>
                <Radio.Button value="WAIT_BUYER_PAY">待付款</Radio.Button>
                <Radio.Button value="WAIT_SELLER_SEND_GOODS">待发货</Radio.Button>
                <Radio.Button value="WAIT_BUYER_CONFIRM_GOODS">已发货</Radio.Button>
                <Radio.Button value="TRADE_SUCCESS">已完成</Radio.Button>
                <Radio.Button value="TRADE_CLOSED">已关闭</Radio.Button>
              </Radio.Group>
          </div>
            <div style={{ textAlign:"right", marginBottom:"10px"}}>
                <Button type="primary" onClick={this.refresh} style={{ marginRight:"5px"}}><Icon type="reload" theme="outlined" />刷新</Button>
            </div>
            <Spin spinning={isSpin}>
                <Table bordered dataSource={data? data.entries : null } columns={columns} pagination={false}/>
            </Spin>

            {
              detailInfo
              &&
              <Modal
                  title="订单详情"
                  visible={visible}
                  onCancel={this.handleCancel}
                  destroyOnClose={true}
                  footer={null}
                  maskClosable={false}>
                <p>
                  <img src={detailInfo.picThumbPath} style={{ width:"8em" ,marginRight:'2em' }} alt="##"/>
                  <span>{detailInfo.title}</span>
                </p>
                <br/>
                <p><strong>订单号：</strong>{ detailInfo.tid}</p>
                <p><strong>商品单价：</strong>{ '¥'+ detailInfo.price}</p>
                <p><strong>购买数量：</strong>{ detailInfo.num}</p>
                <p><strong>邮费：</strong>{ '¥'+ detailInfo.postFee }</p>
                <p><strong>收货地址：</strong>{ `${detailInfo.receiverState}${detailInfo.receiverDistrict}${detailInfo.receiverAddress}，${detailInfo.receiverName}，${detailInfo.receiverMobile}`}</p>
                <p><strong>状态：</strong>{ detailInfo.statusStr }</p>
                <p><strong>创建时间：</strong>{ detailInfo.created }</p>
              </Modal>
            }

          <PostSendModal
              postData={ postData }
              querySupplierOrder={ () => { this.querySupplierOrder(tagName, curPage) } }
          />

          <RefundModal
              refundPROD={ refundPROD }
              refundInfo={ refundInfo }
              querySupplierOrder={ () => { this.querySupplierOrder(tagName, curPage) } }
          />

            {
            (data && data.totalEntries !==0)
            &&
            <Pagination
            pageSize={10}
            current={curPage}
            onChange={this.onPageChange}
            total={data? data.totalEntries : 0}
            style={{ float: "right", marginTop: "10px"}}/>
            }
        </div>
    )
  }
}
