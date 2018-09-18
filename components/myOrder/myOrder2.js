import { Table, Pagination, message, Select, Button, Spin, Modal, Icon, Affix, Radio } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import UUIDGen from '../../utils/uuid_generator.js';
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
export default class OrderManagement2 extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        data:null,
        isSpin:false,
        detailInfo:null,
        visible: false,
        tagName: undefined,
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
                title: '单价(元)',
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
                dataIndex: 'status',
                key: 'status',
                render: (text, record) => (
                    <div>
                        <p>{
                        text==="WAIT_BUYER_PAY"? "待付款"
                          : text==="WAIT_SELLER_SEND_GOODS"? "待发货"
                          : text==="WAIT_BUYER_CONFIRM_GOODS"? "已发货"
                          : text==="TRADE_SUCCESS"? "交易完成"
                          : text==="TRADE_CLOSED"? "交易关闭"
                          : null
                    }</p>
                    </div>
                )
            },
            {
                title: '订单总额(元)',
                dataIndex: 'totalFee',
                key: 'totalFee',
            },
            {
                title: '操作',
                key: 'action',
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
                console.log('res',res)
                res.shopTradesList2.entries.map(
                    entry => {
                        entry.key = UUIDGen.uuid(8,10);
                    }
                );
                this.setState({
                  data: res.shopTradesList2,
                  isSpin: false
                })
        }
    ).catch(err=>{message.error('你还未授权开店，请联系管理员！'); Request.token_auth(err)})
  }

  onPageChange = pageNumber => {
    this.queryOrderData(pageNumber, this.state.tagName);
  }

  refresh = () => {
    this.setState({
      isSpin:true
    })
    this.queryOrderData(1, this.state.tagName);
  }

  showDetails = ID => {
      Request.GraphQlRequest(shopTradeInfo, {id: localStorage.getItem('shopID'), tid:ID },`Bearer ${localStorage.getItem('accessToken')}`).then(
          res => {
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
      tagName:e.target.value
    })
  }

  render() {
    return (
        <div>
          <Affix offsetTop={10}>
            <Radio.Group value={this.state.tagName} onChange={this.onTabChange} style={{ marginBottom: 16 }}>
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
            <Spin spinning={this.state.isSpin}>
                <Table bordered dataSource={this.state.data? this.state.data.entries : null } columns={this.state.columns} pagination={false}/>

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
                        <p>邮费：{ this.state.detailInfo.postFee==='0.00'? '包邮': this.state.detailInfo.postFee }</p>
                        <p>收获地址：{ this.state.detailInfo.buyerArea + this.state.detailInfo.receiverDistrict + this.state.detailInfo.receiverAddress }</p>
                        <p>状态：{ this.state.detailInfo.statusStr }</p>
                        <p>创建时间：{ this.state.detailInfo.created }</p>
                    </Modal>
                }
            </Spin>
            {
            (this.state.data && this.state.data.totalEntries !==0)
            &&
            <Pagination 
            defaultCurrent={1}
            pageSize={10}
            onChange={this.onPageChange}
            total={this.state.data? this.state.data.totalEntries : 0}
            style={{ float: "right", marginTop: "10px"}}/>
            }
        </div>
    )
  }
}
