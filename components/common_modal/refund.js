import { Modal, Radio, Select, Input, Alert, message, Button } from 'antd';
import Request from '../../utils/graphql_request';
const Option = Select.Option;
const RadioGroup = Radio.Group;
import { inject, observer } from 'mobx-react'

const expressList = `
    query{
      expressList{
        id
        name
      }
    }
  `
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


@inject('store') @observer
export default class RefundModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      refundAddress:null,
      refundPhone:null,
      refundName:null,
      refuseFundsRemarks:'',
      expressData:null
    }
  }

  componentDidMount(){
    this.queryExpressList()
  }

  handleModalCancel = () => {
    this.setState({
      refuseFundsRemarks:'',
      refundAddress:null,
      refundPhone:null,
      refundName:null,
    })
    this.props.store.setModalDisplay('refund', false)
    this.props.store.setModalDisplay('accept', false)
    this.props.store.setModalDisplay('refuse', false)
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
      case 106:
        return '假货'
        break;
      case 107:
        return '其他'
        break;
      default:
        null
    }
  }

  acceptGoodsBack = (tid, refundId) => {
    // console.log('ID', tid, refundId)
    if(!this.state.refundAddress || !this.state.refundPhone || !this.state.refundName){
      this.setState({
        refuseFundsRemarks:''
      })
      this.props.store.setModalDisplay('accept', true)
      this.props.store.setModalDisplay('refuse', false)
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
                refundAddress:null,
                refundPhone:null,
                refundName:null,
                refuseFundsRemarks:''
              })
              this.props.store.setModalDisplay('refund', false)
              this.props.store.setModalDisplay('accept', false)
              this.props.store.setModalDisplay('refuse', false)
              message.success('接受退货成功')
              this.props.querySupplierOrder()
            }
          }
      ).catch( err => Request.token_auth(err) )
    }
  }

  refuseGoodsBack = (tid, refundId) => {
    this.props.store.setModalDisplay('accept', false)
    this.props.store.setModalDisplay('refuse', true)
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
                refundAddress: null,
                refundPhone: null,
                refundName: null,
              })
              this.props.store.setModalDisplay('refund', false)
              this.props.store.setModalDisplay('accept', false)
              this.props.store.setModalDisplay('refuse', false)
              message.success('拒绝退货成功')
              this.props.querySupplierOrder()
            }
          }
      ).catch( err => Request.token_auth(err) )
    }else{
      message.info('请先输入拒绝理由再提交')
    }
  }

  handleInputChange = (e,type) => {
    // console.log('e', e.target.value)
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
            this.props.store.setModalDisplay('refund', false)
            this.props.store.setModalDisplay('accept', false)
            this.props.store.setModalDisplay('refuse', false)
            message.success('接受退款成功')
            this.props.querySupplierOrder()
          }
        }
    ).catch( err => Request.token_auth(err) )
  }

  refuseFundsBack = (tid, refundId) => {
    this.setState({
      refundAddress:null,
      refundPhone:null,
      refundName:null
    })
    this.props.store.setModalDisplay('accept', false)
    this.props.store.setModalDisplay('refuse', true)
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
                refuseFundsRemarks:''
              })
              this.props.store.setModalDisplay('refund', false)
              this.props.store.setModalDisplay('accept', false)
              this.props.store.setModalDisplay('refuse', false)
              message.success('拒绝退款成功')
              this.props.querySupplierOrder()
            }
          }
      ).catch( err => Request.token_auth(err) )
    }else {
      message.info('请先输入拒绝理由再提交')
    }
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

  getPostCompanyName = ID => {
    if(this.state.expressData){
      const obj = this.state.expressData.find(
          (value, index, arr) => {
             return value.id === parseInt(ID)
          }
      )
      return obj.name
    }
  }

  render() {
    const { refundPROD, refundInfo, store } = this.props
    return (
        <div>
          {
            refundInfo
              &&
            <Modal
                title="售后维权"
                visible={store.refundModalVisible}
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
                <span>{ refundInfo.returnGoods? '退款退货':'仅退款' }</span>
              </p>
              <p>
                <strong>退款金额：</strong>
                <span>{ '¥'+refundInfo.refundFee }</span>
              </p>
              <p>
                <strong>维权原因：</strong>
                <span>{ this.getRefundReasonStr(refundInfo.reason) }</span>
              </p>
              <p>
                <strong>订单编号：</strong>
                <span>{ refundInfo.tid }</span>
              </p>
              <p>
                <strong>付款时间：</strong>
                <span>{ refundInfo.created }</span>
              </p>
              <p>
                <strong>买家(手机号)：</strong>
                <span>{ `${refundPROD.buyerName}(${refundPROD.buyerPhone})` }</span>
              </p>
              <p>
                <strong>发货地址：</strong>
                <span>{ refundInfo.logistics? `${refundInfo.logistics.address}，${refundInfo.logistics.receiver}，${refundInfo.logistics.mobile}`:'暂无或无需发货' }</span>
              </p>
              <p>
                <strong>退货物流信息：</strong>
                <span>{
                  (refundInfo.logistics && refundInfo.logistics.companyCode)?
                      `${this.getPostCompanyName(refundInfo.logistics.companyCode)}，运单编号：${refundInfo.logistics.logisticsNo}，联系电话：${refundInfo.logistics.mobile}`
                      :
                      '暂无物流信息'
                  }
                </span>
              </p>
              <p>
                <strong>运费：</strong>
                <span>{ '¥'+refundPROD.postFee }</span>
              </p>
              <p>
                <strong>实收总计：</strong>
                <span>{ '¥'+refundInfo.refundFee }</span>
              </p>

              {
                store.showAccept
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
                store.showRefuse
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
                      (refundInfo.status === 'WAIT_SELLER_AGREE'|| refundInfo.status === 'SELLER_REFUSE_BUYER' )
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
                      (refundInfo.status === 'WAIT_SELLER_AGREE' || refundInfo.status === 'SELLER_REFUSE_BUYER')
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
        </div>
    );
  }
}