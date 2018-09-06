import { Table, Pagination, message, Select, Radio, Spin, Modal, Row, Col, Affix } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import moment from 'moment';
import UUIDGen from '../../utils/uuid_generator.js';
const Option = Select.Option;


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



@inject('store') @observer
export default class SupplierOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      orderData:null,
      tagName:"ALL",
      isSpin:false,
      detailInfo:null,
      visible: false,
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
          width:'13%'
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
          // render: (text, record) => (
          //     <div>
          //       <p>{text===3? "待付款" :text===5? "已付款" : text===6? "已发货" : text===100? "交易完成" :null}</p>
          //     </div>
          // )
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

  querySupplierOrder = type => {
    Request.GraphQlRequest(supplierTradesList,
        {
          startCreated:"2018-08-08 00:00:00",
          endCreated:"2018-09-08 00:00:00",
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
            orderData:res.supplierTradesList
          })
        }
    ).catch( err=>Request.token_auth(err) )
  }

  showDetails = data => {
    this.setState({
      detailInfo:data,
      visible:true
    })
  }

  handleCancel = () => {
    this.setState({
      detailInfo:null,
      visible:false
    })
  }

  onChange = e => {
    console.log('e',e.target.value)
    this.querySupplierOrder(e.target.value)
    this.setState({
      tagName:e.target.value
    })
  }

  render() {
    console.log('111', this.state.orderData)
    return (
        <div>
          <Spin spinning={this.state.isSpin}>
            <Affix offsetTop={10}>
              <Radio.Group value={this.state.tagName} onChange={this.onChange} style={{ marginBottom: 16 }}>
                <Radio.Button value="ALL">全部</Radio.Button>
                <Radio.Button value="WAIT_BUYER_PAY">待付款</Radio.Button>
                <Radio.Button value="WAIT_SELLER_SEND_GOODS">待发货</Radio.Button>
                <Radio.Button value="WAIT_BUYER_CONFIRM_GOODS">已发货</Radio.Button>
                <Radio.Button value="TRADE_CLOSE">已关闭</Radio.Button>
              </Radio.Group>
            </Affix>
            <Table bordered dataSource={this.state.orderData? this.state.orderData : null } columns={this.state.columns} pagination={false}/>

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
                <p>下单人：{ this.state.detailInfo.buyerInfo.fansNickname}</p>
                <p>手机号：{ this.state.detailInfo.addressInfo.receiverTel}</p>
                <h3>订单信息：</h3>
                <p>订单号：{ this.state.detailInfo.prod.tid}</p>
                <p>商品名称：{ this.state.detailInfo.prod.title }</p>
                <p>商品单价(元)/数量(件)：{ this.state.detailInfo.price}</p>
                <p>邮费：{ this.state.detailInfo.payInfo.postFee==='0.00'? '包邮': this.state.detailInfo.postFee}</p>
                <p>收获地址：
                  {
                    this.state.detailInfo.addressInfo.deliveryProvince +
                    this.state.detailInfo.addressInfo.deliveryCity +
                    this.state.detailInfo.addressInfo.deliveryDistrict +
                    this.state.detailInfo.addressInfo.deliveryAddress
                  }
                </p>
                <p>收件人名：{ this.state.detailInfo.addressInfo.receiverName }</p>
                <p>状态：{ this.state.detailInfo.state}</p>
                <p>创建时间：{ this.state.detailInfo.createdAt}</p>
              </Modal>
            }
          </Spin>
          {
            (this.state.orderData && this.state.orderData.length !==0)
            &&
            <Pagination
                defaultCurrent={1}
                pageSize={8}
                total={this.state.orderData? this.state.orderData.length : 1}
                style={{ float: "right", marginTop: "10px"}}/>
          }
        </div>
    )
  }
}
