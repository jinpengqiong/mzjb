import { Card, Col, Row, Affix, Button, Icon, Modal, message, Popconfirm, Pagination, Divider } from 'antd';
const { Meta } = Card;
import WrappedForm from './formComponent'
import Request from '../../utils/graphql_request';
import Router from 'next/router';
import { inject, observer } from 'mobx-react'
import moment from 'moment';

const colorData = {
    "COLOR010":"#63b359",
    "COLOR020":"#2c9f67",
    "COLOR030":"#509fc9",
    "COLOR040":"#5885cf",
    "COLOR050":"#9062c0",
    "COLOR060":"#d09a45",
    "COLOR070":"#e4b138",
    "COLOR080":"#ee903c",
    "COLOR081":"#f08500",
    "COLOR082":"#a9d92d",
    "COLOR090":"#dd6549",
    "COLOR100":"#cc463d",
    "COLOR101":"#cf3e36",
    "COLOR102":"#5E6671"
  };
const queryVouchers = `
    query ($page: Int, $pageSize: Int, $shopId: ID!) {
        shopWxcards(page:$page,pageSize:$pageSize, shopId: $shopId){
            pageNumber
            totalEntries
            totalPages
            entries{
                beginTimestamp
                brandName
                cardId
                color
                desc
                endTimestamp
                id: ID
                images
                logoUrl
                quantity
                title
                updatedAt
                userId
            }
        }
    }
`;

const addVoucher = `
mutation ($adinfo: WxcardAdinfo, $baseinfo: WxcardBaseinfo!, $shopId: Int!){
    createWxcard(adinfo:$adinfo, baseinfo:$baseinfo, shopId: $shopId){
            beginTimestamp
            brandName
            color
            cardId
            id
            desc
            endTimestamp
            logoUrl
            notice
            quantity
            title
    }
  }
`;

const deleteVoucher = `
mutation ($id:Int!, $shopId: Int!){
    deleteWxcard(id: $id, shopId: $shopId){
            beginTimestamp
            brandName
            color
            cardId
            id
            desc
            endTimestamp
            logoUrl
            notice
            quantity
            title
    }
  }
`;
const sendWxcardToLive = `
      mutation ($id:ID!,$shopId:ID!, $cartTime:Int){
        sendWxcardToLive(id:$id, shopId:$shopId, cartTime:$cartTime){
          result
        }
      }
    `;

@inject('store') @observer
export default class MyVoucherList extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        shopID: parseInt(props.shopID),
        data: null,
        modalVisible: false
      };
    }

    componentDidMount() {
        if(!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null ){
            Router.push('/login')
        }else if(this.props.store.shopID === null){
            Router.push('/shops')
        }else{
            this.queryVouchers(1);
        }
      }

    queryVouchers = (page) => {
        Request.GraphQlRequest(queryVouchers, {page, pageSize:8, shopId: this.state.shopID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                console.log('voucher', res)
                this.setState({
                    data: res.shopWxcards
                })
            }
        )
    }

    createVouchers = () => {
        this.setState({
            modalVisible: true,
          });
    }
    handleSubmit = () => {
        this.refs.form.validateFields((err, values) => {
            if (err) {
                message.error(err);
            }else{
                values.color = this.findKey(values.color.hex);
                const rangeTimeValue = values['range-time-picker'];
                values.beginTimestamp = parseInt(rangeTimeValue[0].format('X'));
                values.endTimestamp = parseInt(rangeTimeValue[1].format('X'));
                values.quantity = parseInt(values.quantity);
                delete values['range-time-picker'];
                Request.GraphQlRequest(addVoucher, {shopId: this.props.store.shopID, baseinfo: values }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                    (res) =>{
                        if(res.errors){
                            message.success('卡券创建出错，请检查卡券名或商家名字数是否超出限制！');
                            this.hideModal();
                        }else{
                            message.success('卡券创建成功！');
                            this.hideModal();
                            this.queryVouchers();
                        }
                    }
                )
            }
        });
    }

    hideModal = () => {
        this.setState({
          modalVisible: false,
        });
      }

    confirm = (id) => {
        Request.GraphQlRequest(deleteVoucher, { shopId: this.state.shopID, id}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) =>{
                if(res.errors){
                    message.success('删除失败！');
                }else{
                    console.log('res', res);
                    message.success('删除成功！');
                    this.queryVouchers(1);
                }
            }
        )
    }
    onChange(pageNumber) {
        this.queryVouchers(pageNumber);
    }

    
    //get color value
    findKey (value, compare = (a, b) => a === b) {
    return Object.keys(colorData).find(k => compare(colorData[k], value))
    }

    //send to live room
    confirm1 = (id) => {
        Request.GraphQlRequest(sendWxcardToLive, { shopId: this.state.shopID, id, cartTime:5000}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) =>{
                if(res.errors){
                    message.success('发送失败，暂无可绑定直播间！');
                }else{
                    console.log('res', res);
                    message.success('发送成功！');
                    this.queryVouchers(1);
                }
            }
        )
    }


    render() {
        const voucherData =  this.state.data &&
        this.state.data.entries.map(
        (entry) => {
            entry.beginTimestamp = moment.unix(entry.beginTimestamp).format('YYYY-MM-DD HH:mm:ss').toString();
            entry.endTimestamp = moment.unix(entry.endTimestamp).format('YYYY-MM-DD HH:mm:ss').toString();
                return (
                    <Card
                    key={entry.id}
                    hoverable
                    type="inner"
                    title={entry.title}
                    style={{backgroundColor: entry.color}}
                    extra={
                        <div>
                        <Popconfirm title="确定要删除该卡券吗?" onConfirm={()=>{this.confirm1(entry.id)}}  okText="Yes" cancelText="No">
                            <a href="#" >发送到直播间</a>
                        </Popconfirm>
                        <Divider type="vertical" />
                        <Popconfirm title="确定要删除该卡券吗?" onConfirm={()=>{this.confirm(entry.id)}}  okText="Yes" cancelText="No">
                            <a href="#" >删除</a>
                        </Popconfirm>
                        </div>
                    }>
                        <Row type="flex" justify="space-around">
                            <Col span={6}>
                            <img alt="example"
                            style={{ width: '120px'}} 
                            src={entry.logoUrl} />
                            </Col>
                            <Col span={7}>
                                <p>卡券ID：{entry.cardId}</p> 
                                <p>卡券描述：{entry.desc}</p> 
                                <p>卡券数量：{entry.quantity}</p> 
                            </Col>
                            <Col span={6}>
                                <p>起始时间：{entry.beginTimestamp}</p> 
                                <p>结束时间：{entry.endTimestamp}</p>  
                            </Col>
                        </Row>
                    </Card>
                )
            }
        );


    return (
        <div>
            <Affix offsetTop={8} target={() => document.getElementById('main-content-div')}>
                <Button type="primary" onClick={this.createVouchers}>
                <Icon type="plus-circle-createVoucherso" />新增卡券
                </Button>
            </Affix>
            <Modal title="创建卡券" visible={this.state.modalVisible} onOk={this.handleSubmit} onCancel={this.hideModal} maskClosable={false} width={550}>
                <WrappedForm ref="form" onSubmit={this.handleSubmit}/>
            </Modal>
            <Card title="我的卡券" style={{ marginTop: 20 }}>
                { this.state.data && this.state.data.length === 0? '暂无卡券' : voucherData }
            </Card>
            {
            (this.state.data && this.state.data.totalEntries !==0)
            &&
            <Pagination 
            defaultCurrent={1} 
            current={this.state.data.pageNumber}
            onChange={this.onChange}
            total={this.state.data? this.state.data.totalEntries : 1} 
            style={{ float: "right", marginTop: "10px"}}/>
            }
        </div>
        );
    }
}