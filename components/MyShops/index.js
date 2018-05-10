import React from 'react';
import Router from 'next/router';
import {Card, Row, Col, Affix, Button, Icon, Modal, Form, Divider, message, Tooltip, Radio } from 'antd';
import CreateShopForm from './createShopForm';
import { inject, observer } from 'mobx-react';
import Request from '../../utils/graphql_request';
const RadioGroup = Radio.Group;
const { Meta } = Card;
const FormItem = Form.Item;
const confirm = Modal.confirm;

const queryShops = `
      query ($page:Int, $pageSize: Int) {
        myShops(page:$page,pageSize:$pageSize){
          totalEntries
          totalPages
          pageNumber
          pageSize
          entries{
              desc
              id
              name
              phone
              mainImage
              bizTimeEnd
              bizTimeStart
              facilities
              categories{
                name
                id
              }
          }
        }
      }
      `;

const addShop = `
      mutation ($desc: String!, $name: String!, $bizTimeEnd: String, $bizTimeStart: String, $categoryId: ID, $facilities: String, $mainImage: String, $phone: String){
        createShop(desc:$desc,name:$name, bizTimeEnd:$bizTimeEnd, bizTimeStart:$bizTimeStart, categoryId:$categoryId, facilities:$facilities, mainImage:$mainImage, phone: $phone ){
          desc
          id
          name
          phone
          mainImage
          bizTimeEnd
          bizTimeStart
          facilities
        }
      }
      `;
const upDateShop = `
      mutation ($id:Int!,$desc: String, $name: String, $bizTimeEnd: String, $bizTimeStart: String, $categoryId: ID, $facilities: String, $mainImage: String, $phone: String){
        updateShop(id:$id, desc:$desc,name:$name, bizTimeEnd:$bizTimeEnd, bizTimeStart:$bizTimeStart, categoryId:$categoryId, facilities:$facilities, mainImage:$mainImage, phone: $phone ){
          desc
          id
          name
          phone
          mainImage
          bizTimeEnd
          bizTimeStart
          facilities
        }
      }
      `;

const deleteShop = `
      mutation ($id: Int!){
        deleteShop(id: $id){
          desc
          id
          name
          owner
        }
      }
      `;

  const addStaff = `
    mutation ($desc: String, $name: String, $role: StaffRole!, $shopId: Int!, $userId: Int!){
    addStaff(
            desc: $desc, name: $name, role: $role, shopId: $shopId, userId: $userId)
            {
              desc
              id
              name
              role
              userId: ID
            }
    }
  `;

  const bindableRooms = `
  query($shopId: Int!) {
    bindableRooms(shopId:$shopId){
      bind{
        desc
        id
        name
        isBind
      }
      entries{
        desc
        id
        name
        isBind
      }
    }
  }
  `;
const bindRoom = `
  mutation ($shopId: Int!, $room: Int!){
    bindRoom(shopId:$shopId, room: $room){
            room
            id
            name
          }
  }
  `;

@inject('store') @observer
class MyShopList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: null,
      data: [],
      modalVisible: false,
      modalVisible1: false,
      RadioValue:null,
      shopID:null,
      modalName:null,
      shopField:null,
      UpdateShopID:null
    };
  }
  componentDidMount() {
    if(!localStorage.getItem('accessToken')){
      Router.push('/login')
    }else{
      this.getData();
    }
  }

  getData(){
    const variables = {
      page: 1,
      pageSize: 5,
    };
    Request.GraphQlRequest(queryShops, variables, `Bearer ${localStorage.getItem('accessToken')}`).then(
          (res) => {
              // console.log('res',res);
              this.setState({
                  data: res.myShops.entries
              })
          }
      )
  }

  addShops = () => {
      if(this.state.data.length >4){
          message.info('最多创建5个店铺！');
          return;
      }else {
          this.setState({
              modalVisible: true,
              modalName:"新增店铺",
              shopField:null
          });
      }
  }

//create shop submit

    handleOk = () => {
      if(this.state.modalName==="新增店铺"){
          this.refs.form.validateFields(
              (err, values) => {
                  if (err) {
                      message.error(err);
                  }else{
                      // console.log('aaa', values);
                      Request.GraphQlRequest(
                          addShop,
                          { desc:values.desc, name:values.name, bizTimeEnd:values.bizTimeEnd, bizTimeStart:values.bizTimeStart, categoryId:values.categoryId, facilities:values.facilities?values.facilities.join(','):undefined, mainImage:this.props.store.mainImage, phone: values.phone},
                          `Bearer ${localStorage.getItem('accessToken')}`).then(
                          (res) => {
                                  // console.log('res', res);
                                  this.props.store.getMainImage(null);
                                  message.success('店铺创建成功！');
                                  this.getData();
                                  this.setState({
                                      modalVisible: false,
                                  });
                                  this.refs.form.resetFields();
                                  document.getElementById('ossfile').innerHTML = '';
                          }
                      ).catch(()=>{message.error('创建失败，请联系管理员。')})
                  }
              })
      }else if(this.state.modalName==="更新店铺"){
          this.refs.form.validateFields(
              (err, values) => {
                  if (err) {
                      message.error(err);
                  }else{
                      // console.log('aaa', values);
                      if(!values.categoryId){
                          delete values.categoryId
                      }
                      Request.GraphQlRequest(
                          upDateShop,
                          {
                              id:this.state.UpdateShopID,
                              desc:values.desc, name:values.name,
                              bizTimeEnd:values.bizTimeEnd,
                              bizTimeStart:values.bizTimeStart,
                              categoryId:values.categoryId,
                              facilities:values.facilities?values.facilities.join(','):undefined,
                              mainImage:this.props.store.mainImage? this.props.store.mainImage:this.state.shopField.mainImage,
                              phone: values.phone
                          },
                          `Bearer ${localStorage.getItem('accessToken')}`).then(
                          (res) => {
                                  // console.log('res', res);
                                  this.props.store.getMainImage(null);
                                  message.success('店铺更新成功！');
                                  this.getData();
                                  this.setState({
                                      modalVisible: false,
                                      UpdateShopID:null,
                                      shopField:null
                                  });
                                  this.refs.form.resetFields();
                                  document.getElementById('ossfile').innerHTML = '';
                              }
                      ).catch(()=>{message.error('创建失败，请联系管理员。')})
                  }
              })
      }

  };

  showConfirm = (ID) => {
    const self = this;
    confirm({
      title: '确定要删除此店铺吗?',
      onOk() {
          Request.GraphQlRequest(deleteShop, { id : ID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
          (res) => {
              // console.log('res', res);
              self.getData();
              message.success('删除店铺成功！');
          } 
        ).catch(()=>{message.error('删除店铺失败！')})
      },
      onCancel() {},
    });
  }

  hideModal=() => {
    this.setState({
      modalVisible: false,
    });
    this.refs.form.resetFields();
    this.props.store.getMainImage(null);
  }

  error = (msg) => {
    message.error(msg);
  };

  addStaff = () => {

  }

  showModal = (id) => {
    const ID = parseFloat(id);
    this.setState({
      modalVisible1: true,
      shopID: ID
    });
    Request.GraphQlRequest(bindableRooms, {shopId: ID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
        (res) => {
            this.props.store.getBindData(res.bindableRooms);
        }
    )
  };

  //set room
  handleOk1 = (e) => {
    const shopId = parseInt(this.state.shopID);
    const room = parseInt(this.state.RadioValue);
    Request.GraphQlRequest(bindRoom, { shopId, room}, `Bearer ${localStorage.getItem('accessToken')}`).then(
      (res) => {
        // console.log('res', res);
          message.success("绑定成功！");
          this.setState({
            modalVisible1: false,
            RadioValue:null
          });
      }
    ).catch(()=>{message.error("店铺暂无可绑定直播间，绑定失败！")})
  }
  
  handleCancel = (e) => {
    // console.log(e);
    this.setState({
      modalVisible1: false,
    });
  }
  onRadioChange = (e) => {
    // console.log('radio checked', e.target.value);
    this.setState({
      RadioValue: e.target.value,
    });
  }


  //update shop
    UpdateShopInfo = (ID) => {
        const fieldData = this.state.data.filter(
            (entry) =>{
                if(parseInt(entry.id) === ID){
                    return entry
                }
            }
        );
        // console.log('fieldData',fieldData)
        this.setState({
            modalVisible: true,
            modalName:"更新店铺",
            shopField:fieldData[0],
            UpdateShopID:ID
        });
    }



  render() {
    // console.log('state', this.state.data);
    const shopData =  this.state.data &&
      this.state.data.map(
      (entry) => {
        return (
              <Card
                  key={entry.id}
                  hoverable
                  type="inner"
                  title={entry.name}
                  extra={
                      <div>
                          <Tooltip title="进入店铺"><Icon type="shop" onClick={()=>{Router.push(`/products?id=${entry.id}`); this.props.store.getCurPagePath('店铺商品')}}/></Tooltip >
                          <Divider type="vertical" />
                          {/*<Tooltip title="新增店员"><Icon type="user-add" onClick={ this.addStaff}/></Tooltip >*/}
                          <Tooltip title="绑定直播间"><Icon type="team" onClick={ () =>{this.showModal(entry.id)}}/></Tooltip >
                          <Divider type="vertical" />
                          <Tooltip title="更新店铺"><Icon type="edit" onClick={() =>{this.UpdateShopInfo(parseInt(entry.id))}}/></Tooltip >
                          <Divider type="vertical" />
                          <Tooltip title="删除店铺"><Icon type="delete" onClick={() =>{this.showConfirm(parseInt(entry.id))}} /></Tooltip >
                      </div>
                  }
              >
                  <Row type="flex" justify="space-around">
                      <Col span={6}>
                          <img alt="example"
                           style={{ width: '200px'}}
                           src={ entry.mainImage?  entry.mainImage : 'http://image.mzliaoba.com/pic/mzgg/4758068401/20180323/111.png' } />
                      </Col>
                      <Col span={7}>
                          <p>简要描述：{entry.desc}</p>
                          <p>店铺设施：{entry.facilities}</p>
                          <p>手机号：{entry.phone}</p>
                      </Col>
                      <Col span={6}>
                          <p>店铺类型：{(entry.categories && entry.categories[0]!== undefined)? entry.categories[0].name:null}</p>
                          <p>营业开始时间：{entry.bizTimeStart}</p>
                          <p>营业结束时间：{entry.bizTimeEnd}</p>
                      </Col>
                  </Row>
              </Card>
        )
      }
    );
    const RoomOptions = this.props.store.bindRoomData && this.props.store.bindRoomData.entries.map(
      (room) => {
        return (
          <Radio value={room.id} key={room.id}>{room.name}</Radio>
        )
      }
    );
    return (
      <div>
        {
          (this.props.store.userRole && this.props.store.userRole.indexOf('shop_biz') !== -1)
          &&
        <Affix offsetTop={8} target={() => document.getElementById('main-content-div')}>
            <Button type="primary" onClick={this.addShops}>
              <Icon type="plus-circle-o" />新增店铺
            </Button>
        </Affix>
        }
        <Modal title={this.state.modalName} visible={this.state.modalVisible} onOk={this.handleOk} onCancel={this.hideModal} maskClosable={false} width={550}>
          <CreateShopForm ref="form" shopData={this.state.shopField? this.state.shopField: null}/>
        </Modal>
        <Modal title="绑定直播间" visible={this.state.modalVisible1} onOk={this.handleOk1} onCancel={this.handleCancel} maskClosable={false} width={550}>
          可绑定直播间：
          <RadioGroup onChange={this.onRadioChange} value={this.state.RadioValue}>
            {(this.props.store.bindRoomData && this.props.store.bindRoomData.entries.length === 0)?  "暂无" :RoomOptions}
          </RadioGroup>
          <p>已绑定直播间：{(this.props.store.bindRoomData && this.props.store.bindRoomData.bind)? this.props.store.bindRoomData.bind.name : "暂无"}</p>
        </Modal>
        <Card title="店铺列表" style={{ marginTop:"15px"}}>
          { shopData.length ===0? '暂无创建店铺' : shopData }
        </Card>
      </div>
    );
  }
}

export default MyShopList;
