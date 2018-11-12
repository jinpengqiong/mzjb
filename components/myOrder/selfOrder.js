import { Table, Pagination, message, Button, Spin, Icon, Modal } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import UUIDGen from '../../utils/uuid_generator.js';



const searchTradesList = `
    query ($id: Int!, $keyword: String!,$page: Int, $pageSize: Int) {
        searchTradesList(keyword:$keyword, id:$id, page:$page,pageSize:$pageSize ){
            totalResults
            trades{
                tid
                price
                title
                payment
                statusStr
                totalFee
                created
                postFee
                receiverMobile
                num
                picThumbPath
                receiverState
                receiverCity
                receiverDistrict
                receiverAddress
                receiverName
                refundState
                refundedFee
            }
        }
    }`;


@inject('store') @observer
export default class SelfOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:null,
            isSpin:false,
            visible:false,
            detailData:null,
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
                title: '单价/数量',
                dataIndex: 'price',
                key: 'price',
                render: (text,record) => (
                    <div>
                      { `¥${text}(${record.num}件)` }
                    </div>
                ),
              },
              {
                title: '下单时间',
                dataIndex: 'created',
                key: 'created',
              },
              {
                title: '订单状态',
                dataIndex: 'statusStr',
                key: 'statusStr',
              },
              {
                title: '订单总额(元)',
                dataIndex: 'totalFee',
                key: 'totalFee',
              },
              {
                title: '操作',
                key: 'action',
                width:'12%',
                render: (text, record) => (
                    <span>
                        <a href="javascript:;" onClick={ () => this.showDetails(record) }>详情</a>
                    </span>
                ),
              }
            ]
        }
    }

    componentDidMount(){
        this.queryOrderData(1);
    }

    queryOrderData = curPage => {
        Request.GraphQlRequest(searchTradesList, {id: parseInt(localStorage.getItem('shopID')), page: curPage, pageSize: 10, keyword: localStorage.getItem('phone')},`Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                res.searchTradesList.trades.map(
                    entry => {
                        entry.key = UUIDGen.uuid(8,10);
                    }
                );
                console.log('111', res)
                this.setState({
                    data: res.searchTradesList,
                    isSpin:false
                })
            }
        ).catch(err=>{message.error('出错了，请联系管理员'); Request.token_auth(err)})
    };

    onChange = pageNumber => {
        this.queryOrderData(pageNumber);
    }

    refresh =() => {
        this.setState({
            isSpin:true
        })
        this.queryOrderData(1);
    }

    showDetails = entry => {
      this.setState({
        detailData:entry,
        visible:true
      })
    }

  handleCancel = () => {
    this.setState({
      detailData:null,
      visible:false
    })
  }

    render() {
        // console.log('data', this.state.data)
      const { data, columns, visible, detailData } = this.state
        return (
            <div>
                <div style={{ textAlign:"right", marginBottom:"10px"}}>
                    <Button type="primary" onClick={this.refresh}><Icon type="reload" theme="outlined" />刷新</Button>
                </div>
                <Spin spinning={this.state.isSpin}>
                    <Table bordered dataSource={data? data.trades : null } columns={columns} pagination={false}/>
                </Spin>
                {
                    (data && data.totalResults !==0)
                    &&
                    <Pagination
                        defaultCurrent={1}
                        onChange={this.onChange}
                        total={data? data.totalResults : 1}
                        style={{ float: "right", marginTop: "10px"}}/>
                }
              {
                detailData
                &&
                <Modal
                    title="订单详情"
                    visible={visible}
                    onCancel={this.handleCancel}
                    destroyOnClose={true}
                    footer={null}
                >
                  <p>
                    <img src={detailData.picThumbPath} style={{ width:"8em" ,marginRight:'2em' }} alt="##"/>
                    <span>{detailData.title}</span>
                  </p>
                  <br/>
                  <p><strong>订单号：</strong>{ detailData.tid}</p>
                  <p><strong>单价/数量：</strong>{ `¥${detailData.price}(${detailData.num}件)`}</p>
                  <p><strong>邮费：</strong>{ '¥'+ detailData.postFee }</p>
                  <p>
                  <strong>收货地址：</strong>
                  { `${detailData.receiverState}${detailData.receiverCity}${detailData.receiverDistrict}${detailData.receiverAddress}，${detailData.receiverName}，${detailData.receiverMobile}`}
                  </p>
                  <p><strong>状态：</strong>{ detailData.statusStr }</p>
                  <p><strong>创建时间：</strong>{ detailData.created }</p>
                  <p><strong>售后：</strong>{ detailData.refundState === 'NO_REFUND'? '无需维权': `退款金额(${detailData.refundedFee})`}</p>
                </Modal>
              }
            </div>
        )
    }
}
