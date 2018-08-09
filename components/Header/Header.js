import { Layout, Menu, Icon, Modal, message, Radio, Tag, Input, Tooltip } from 'antd';
const { Header } = Layout;
import Router from 'next/router';
const SubMenu = Menu.SubMenu;
import { inject, observer } from 'mobx-react'
import SetPassword from './setPassword'
import Request from '../../utils/graphql_request';
import uri from '../../utils/uri';
import isEmpty from 'lodash/isEmpty';
import { request } from 'graphql-request'

const RadioGroup = Radio.Group;

const resetPassword = `
        mutation ($phone:String!, $code: String!, $password: String!) {
          resetPassword(phone:$phone, code: $code, password:$password){
            phone
            nickname
          }
        }
        `;

const updateShop = `
      mutation ($id:Int!, $name: String) {
        updateShop(id:$id, name: $name){
          name
          id
        }
      }
    `;

const manageShops = `
      query($page: Int, $pageSize:Int) {
        manageShops(page:$page, pageSize:$pageSize){
          entries{
            id
            name
            phone
            staffs{
            id
            name
            user{
              nickname
              phone
              id
            }
          }
        }
      }
    }`;

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

@inject('store') @observer
export default class MyHeader extends React.Component {
  constructor (props){
      super(props)
      this.state = {
          visible:false,
          visible1:false,
          visible2:false,
          shopsData:null,
          radioValue:null,
          curShopName:null,
          shopNameValue:null
      }
  }

  componentDidMount (){
    this.getShopData()

  }

  getShopData = () => {
    const variables = {
      page:1,
      pageSize: 20,
    };
    Request.GraphQlRequest(queryShops, variables, `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
          // console.log('queryShops',res);
          // console.log('localStorage',localStorage.getItem('shopID'));
          if(!localStorage.getItem('shopID')){
            localStorage.setItem('shopID', parseInt(res.myShops.entries[0].id))
            localStorage.setItem('OriginalID', parseInt(res.myShops.entries[0].id))
            localStorage.setItem('OriginalName', res.myShops.entries[0].name)
          }
          if(localStorage.getItem('shopID') === localStorage.getItem('OriginalID')){
            this.setState({
              radioValue:localStorage.getItem('OriginalID'),
              curShopName: localStorage.getItem('OriginalName') + '(自有)'
            })
          } else {
            this.setState({
              radioValue:localStorage.getItem('shopID'),
              curShopName: localStorage.getItem('managedShop') + '(管理)'
            })
          }
        }
    ).catch(
        err => {
          this.setState({
            curShopName: '普通用户'
          })
          message.info('请联系管理员授权，以便进行店铺管理')
          console.log('getData err',err)
        }
    )
  }

  toggle = () => {
      this.props.store.changeCollapse()
  }

  handleLogout = () => {
      localStorage.clear();
      Router.push('/login');
      this.props.store.getShopID('');
      this.props.store.getRoleInfo('');
  }


  //reset password
  handleOk = e => {
    this.refs.form.validateFields(
        (err, values) => {
      if (!err) {
          request(uri, resetPassword, {phone: values.phone, code:values.code, password:values.password }).then(
              res => {
                // console.log('res', res)
                message.success('密码设置成功！');
                this.refs.form.resetFields();
                this.setState({
                  visible: false,
                });
              }
          ).catch(err => console.error(err))
        }
      }
    )
  }

  handleCancel = e => {
    this.refs.form.resetFields();
    this.setState({
      visible: false
    });
  }

  setPassword = () => {
    this.setState({
      visible: true,
    });
  }


  //swtich shops
  swtichShopsOk = () => {
    if(this.state.radioValue === localStorage.getItem('OriginalID')){
      localStorage.setItem('shopID', parseInt(localStorage.getItem('OriginalID')) )
      localStorage.setItem('phone', this.state.shopsData[0].staffs[0].user.phone)
      this.setState({
        curShopName: localStorage.getItem('OriginalName')+'(自有)'
      })
    }else{
      const i = this.state.shopsData.findIndex(
          index => {
            if(index.id === this.state.radioValue){
              return index
            }
          }
      )
      // console.log('i', i)
      localStorage.setItem('shopID', parseInt(this.state.radioValue))
      localStorage.setItem('phone', this.state.shopsData[i].name.split('_')[1])
      localStorage.setItem('managedShop', this.state.shopsData[i].name)
      this.setState({
        curShopName: this.state.shopsData[i].name + '(管理)'
      })
    }

    this.setState({
      visible1: false,
    });
    message.success('店铺切换成功')
    Router.push('/');
  }

  swtichShopsCancel = () => {
    this.setState({
      visible1: false,
      radioValue:null
    });
  }


  getManagedShops = () => {
    Request.GraphQlRequest(manageShops, {page:1, pageSize:20}, `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
          console.log('getManagedShops', res)
          this.setState({
            shopsData : res.manageShops.entries
          })
        }
    ).catch(err => console.error(err))
  }

  switchShops = () => {
    this.setState({
      visible1: true,
    })
    this.getManagedShops()
  }


  onRadioChange = (e) => {
    // console.log('radio checked', e.target.value);
    this.setState({
      radioValue: e.target.value,
    });
  }

  changeShopName = () => {
    this.setState({
      visible2: true,
    });
  }

  handleInputChange = e => {
    // console.log('e', e.target.value)
    this.setState({
      shopNameValue: e.target.value
    });
  }

  handleNameChange = () => {
    Request.GraphQlRequest(updateShop, {id:parseInt(localStorage.getItem('shopID')), name:this.state.shopNameValue}, `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
          // console.log('handleNameChange', res)
          this.setState({
            curShopName : res.updateShop.name,
          })
          if(localStorage.getItem('shopID') === localStorage.getItem('OriginalID')){
            localStorage.setItem('OriginalName', res.updateShop.name)
          }else {
            localStorage.setItem('managedShop', res.updateShop.name)
          }
          this.setState({
            visible2: false,
          });
          message.success('更新成功')
        }
    ).catch(err => console.error(err))
  }

  handleNameCancel = () => {
    this.setState({
      visible2: false,
      shopNameValue:null
    })
  }

  render() {
    return (
        <Layout>
            <Header style={{ background: '#fff', padding: 16,marginLeft: this.props.store.collapsed? 15:0 }}>
                <Icon
                    className="trigger"
                    type={this.props.store.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '45px', float: 'right' }}
                >
                  <Menu.Item key="inShop">
                    当前店铺：
                    <Tag color="#2db7f5">{ this.state.curShopName}</Tag>
                    <Tooltip title="更新店铺名">
                      <Icon type="edit" onClick={this.changeShopName}/>
                    </Tooltip>
                  </Menu.Item>
                    <SubMenu title={<span>{ '您好，'+ localStorage.getItem('nickname')}</span>}>
                        <Menu.Item key="1" >
                          {
                              <span onClick={this.setPassword} style={{ display: 'block',width:"130px", textAlign:"center"}}>
                              <Icon type="lock" />设置密码</span>
                          }
                        </Menu.Item>
                        <Menu.Item key="2" >
                          {
                              <span onClick={this.switchShops} style={{ display: 'block',width:"130px", textAlign:"center"}}>
                              <Icon type="select" />切换店铺</span>
                          }
                        </Menu.Item>
                        <Menu.Item key="3" >
                          {
                              <span onClick={this.handleLogout} style={{ display: 'block',width:"130px", textAlign:"center"}}>
                              <Icon type="logout" />退出登录</span>
                          }
                        </Menu.Item>
                    </SubMenu>
                </Menu>
                <Modal
                    title="设置密码"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                  <SetPassword ref="form"/>
                </Modal>
                <Modal
                    title="更新店铺名"
                    visible={this.state.visible2}
                    onOk={this.handleNameChange}
                    onCancel={this.handleNameCancel}
                >
                  店铺名：<Input value={this.state.shopNameValue} onChange={this.handleInputChange} style={{ width:'300px'}}/>
                </Modal>
                <Modal
                    title="切换店铺"
                    visible={this.state.visible1}
                    onOk={this.swtichShopsOk}
                    onCancel={this.swtichShopsCancel}
                  >
                  <RadioGroup onChange={this.onRadioChange} value={this.state.radioValue}>
                    <h3>自有店铺：</h3>
                    <Radio value={localStorage.getItem('OriginalID')} key={localStorage.getItem('OriginalID')}>{ localStorage.getItem('OriginalName') }</Radio>
                    <br/>
                    <br/>
                    <h3>可管理店铺：</h3>
                    {
                      isEmpty(this.state.shopsData)?
                        '暂无'
                          :
                      this.state.shopsData.map(
                          item => {
                            return <Radio value={item.id} key={item.id}>{item.name}</Radio>
                          }
                      )
                    }
                </RadioGroup>
                </Modal>
            </Header>
            <style jsx>{`
              .trigger {
                font-size: 22px;
                line-height: 64px;
                cursor: pointer;
                transition: color .3s;
              }bgy  cv
              .trigger:hover {
                color: #1890ff;
              }
            `}</style>
        </Layout>
    );
  }
}
