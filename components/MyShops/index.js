import React from 'react';
import Router from 'next/router';
import {Card, Row, Col, Affix, Button, Icon, Modal, Form, Input, message, Tooltip, Radio } from 'antd';
const { Meta } = Card;
const FormItem = Form.Item;
const confirm = Modal.confirm;
import uri from '../../utils/uri';
import { GraphQLClient } from 'graphql-request'
import { inject, observer } from 'mobx-react'
const RadioGroup = Radio.Group;

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
            owner
          }
        }
      }
      `;

const addShop = `
      mutation ($desc: String!, $name: String!){
        createShop(desc:$desc,name:$name){
          desc
          id
          name
          owner
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
      newShopName: '',
      newShopDesc: '',
      id: null,
      data: [],
      modalVisible: false,
      modalVisible1: false,
      RadioValue:null,
      shopID:null
    };
  }
  componentDidMount() {
    if(!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null){
      Router.push('/login')
    }else{
      this.getData();
    }
  }

  onChangeShopName = (e) => {
    this.setState({ newShopName: e.target.value });
  }

  onChangeShopDesc = (e) => {
    // console.log('newShopDesc', e.target.value);
    this.setState({ newShopDesc: e.target.value });
  }
  async getData(){
    const variables = {
      page: 1,
      pageSize: 5,
    };
    const client = new GraphQLClient(uri, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      const res = await client.request(queryShops, variables);
      console.log('res',res)
      this.setState({
        data: res.myShops.entries
      })
  }
  addShops = () => {
    this.setState({
      modalVisible: true,
    });
  }

  handleModalOk =() => {
    if (!this.state.newShopDesc || !this.state.newShopName){
      this.error('店铺名或描述不能为空哦！');
    } else {
      if (this.state.data.length < 5){
        const client = new GraphQLClient(uri, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        client.request(addShop, {desc: this.state.newShopDesc, name: this.state.newShopName }).then(
          (res) => {
            console.log('abcde',res);
            this.setState({
              modalVisible: false,
              newShopDesc: '',
              newShopName: '',
            });
            this.getData();
          }
        )
      } else {
        this.error('一个账号最多只能创建5个店铺哦！');
        this.setState({
          modalVisible: false,
          newShopDesc: '',
          newShopName: '',
        });
      }
    }
  }

  showConfirm = (ID) => {
    const client = new GraphQLClient(uri, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    const self = this;
    confirm({
      title: '确定要删除此店铺吗?',
      onOk() {
        client.request(deleteShop, { id : ID}).then(
          (res) => {
            if(!res.errors){
              console.log('res', res);
              self.getData();
              message.success('删除店铺成功！');
            }else { 
              message.error('删除店铺失败！')
            }
          } 
        )
      },
      onCancel() {},
    });
  }

  hideModal=() => {
    this.setState({
      modalVisible: false,
      newShopDesc: '',
      newShopName: '',
    });
  }
  error = (msg) => {
    message.error(msg);
  };

  addStaff = () => {
    const client = new GraphQLClient(uri, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    
  }

  showModal = (id) => {
    const client = new GraphQLClient(uri, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    const ID = parseFloat(id)
    this.setState({
      modalVisible1: true,
      shopID: ID
    });
    client.request(bindableRooms, {shopId: ID}).then(
      (res) => {
        console.log('res', res)
        this.props.store.getBindData(res.bindableRooms)
      }
    )
  }
  //set room
  handleOk1 = (e) => {
    console.log(e);
    const client = new GraphQLClient(uri, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    const shopId = parseInt(this.state.shopID);
    const room = parseInt(this.state.RadioValue);
    client.request(bindRoom, { shopId, room}).then(
      (res) => {
        // console.log('res', res);
        if(res.errors){
          message.success("店铺暂无可绑定直播间，绑定失败！");
        }else{
          message.success("绑定成功！");
          this.setState({
            modalVisible1: false,
            RadioValue:null
          });
        }
      }
    )
    
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      modalVisible1: false,
    });
  }
  onRadioChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      RadioValue: e.target.value,
    });
  }
  
  render() {
    // console.log('state', this.state.data);
    const shopData =  this.state.data &&
      this.state.data.map(
      (entry) => {
        return (
          <Col span={4} key={entry.id} >
              <Card
                cover={<img alt="example" src="http://image.mzliaoba.com/pic/mzgg/4758068401/20180323/111.png" />}
                actions={[
                <Tooltip title="进入店铺"><Icon type="shop" onClick={()=>{Router.push(`/products?id=${entry.id}`); this.props.store.getCurPagePath('店铺商品')}}/></Tooltip >,
                // <Tooltip title="新增店员"><Icon type="user-add" onClick={ this.addStaff}/></Tooltip >,
                <Tooltip title="绑定直播间"><Icon type="team" onClick={ () =>{this.showModal(entry.id)}}/></Tooltip >,
                // <Tooltip title="更新店铺"><Icon type="edit" onClick={() =>{this.updateShopInfo(parseInt(entry.id))}}/></Tooltip >, 
                <Tooltip title="删除店铺"><Icon type="delete" onClick={() =>{this.showConfirm(parseInt(entry.id))}} /></Tooltip >
              ]}
              >
                <Meta title={entry.name} description={entry.desc} />
              </Card>
          </Col>
        )
      }
    );
    const RoomOptions = this.props.store.bindRoomData && this.props.store.bindRoomData.entries.map(
      (room) => {
        return (
          <Radio value={room.id} key={room.id}>{room.name}</Radio>
        )
      }
    )
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
        <Modal title="新增店铺" visible={this.state.modalVisible} onOk={this.handleModalOk} onCancel={this.hideModal} maskClosable={false} width={550}>
          <Input
            placeholder="请输入店铺名"
            prefix={<Icon type="shop" style={{ color: 'rgba(0,0,0,.25)' }} />}
            value={this.state.newShopName}
            onChange={this.onChangeShopName}
          />
          <Input
            placeholder="请输入店铺描述"
            style={{ marginTop:'13px' }}
            prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)'}} />}
            value={this.state.newShopDesc}
            onChange={this.onChangeShopDesc}
          />
        </Modal>
        <Modal title="绑定直播间" visible={this.state.modalVisible1} onOk={this.handleOk1} onCancel={this.handleCancel} maskClosable={false} width={550}>
          可绑定直播间：
          <RadioGroup onChange={this.onRadioChange} value={this.state.RadioValue}>
            {(this.props.store.bindRoomData && this.props.store.bindRoomData.entries.length === 0)?  "暂无" :RoomOptions}
          </RadioGroup>
          <p>已绑定直播间：{(this.props.store.bindRoomData && this.props.store.bindRoomData.bind)? this.props.store.bindRoomData.bind.name : "暂无"}</p>
        </Modal>
        <Row style={{ marginTop: 40 }} type="flex" justify="space-around">
          { shopData.length ===0? '暂无创建店铺' : shopData }
        </Row>
      </div>
    );
  }
}

export default MyShopList;
