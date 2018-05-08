import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import MyFooter from '../Footer/Footer';
import MyBreadcrumb from '../breadcrumb/breadcrumb';
import Router from 'next/router';
const SubMenu = Menu.SubMenu;
import { inject, observer } from 'mobx-react'


@inject('store') @observer
export default class MyLayout extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      collapsed: false,
      curPagePath:'首页'
    };
  }
  
  componentDidMount (){
    this.setState({
      localStor : localStorage
    })
    this.props.store.getRoleInfo(localStorage.getItem('role'));
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  handleClick = (e) => {
    // console.log('click ', e.key);
    this.props.store.getCurPagePath(e.key)
  }
  handleLogout = () => {
    const stor = this.state.localStor;
    // console.log('stor', stor)        
    stor!= null && stor.clear();
    Router.push('/login');
    this.props.store.getShopID('');
    this.props.store.getRoleInfo('');
  }
  render() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsed={this.state.collapsed}
        >
          <div className="logo" >
            <h2 style={{ textAlign:'center', color:'white' }}>
              {
                this.state.collapsed ? <img src='../../static/LOGO.png' style={{ width:20}}/> : '拇指聚宝'}
            </h2>
          </div>
          <Menu 
          theme="dark" 
          mode="inline" 
          onClick={this.handleClick} 
          selectedKeys={[this.props.store.curPagePath === ""? "我的店铺" : this.props.store.curPagePath]}>
            <Menu.Item key="我的店铺">
              <div onClick={()=>{ 
                Router.prefetch('/');
                Router.push('/')}}>
                <Icon type="shop" />
                <span>我的店铺</span>
              </div>
            </Menu.Item>
            {
              this.props.store.shopID
              &&
              <Menu.Item key="店铺商品">
                <div onClick={()=>{ 
                  Router.prefetch(`/products?id=${this.props.store.shopID}`); 
                  Router.push(`/products?id=${this.props.store.shopID}`)
                  this.props.store.getCurPagePath('店铺商品');
                }}>
                  <Icon type="appstore" />
                  <span>店铺商品</span>
                </div>
              </Menu.Item>
            }
            {
              this.props.store.shopID
              &&
              <Menu.Item key="我的卡券">
                <div onClick={()=>{ 
                  Router.prefetch(`/vouchers?id=${this.props.store.shopID}`);
                  Router.push(`/vouchers?id=${this.props.store.shopID}`)}}>
                  <Icon type="gift" />
                  <span>我的卡券</span>
                </div>
              </Menu.Item>
            }
            {
              this.props.store.shopID
              &&
              <Menu.Item key="广告管理">
                <div onClick={()=>{ 
                  Router.prefetch('/ad');
                  Router.push('/ad')}}>
                <Icon type="video-camera" />
                  <span>广告管理</span>
                </div>
              </Menu.Item>
            }
            {
              this.props.store.shopID
              &&
              <Menu.Item key="我的素材">
                <div onClick={()=>{ 
                  Router.prefetch('/resources');
                  Router.push('/resources')}}>
                  <Icon type="picture" />
                  <span>我的素材</span>
                </div>
              </Menu.Item>
            }
            {
              this.props.store.shopID
              &&
              <Menu.Item key="订单管理">
                <div onClick={()=>{ 
                  Router.prefetch('/order');
                  Router.push('/order')}}>
                  <Icon type="shopping-cart" />
                  <span>订单管理</span>
                </div>
              </Menu.Item>
            }
            {
              (this.props.store.userRole && this.props.store.userRole.indexOf('admin') !== -1)
              &&
              <Menu.Item key="用户列表">
                <div onClick={()=>{ 
                  Router.prefetch('/userList');
                  Router.push('/userList')}}>
                  <Icon type="user" />
                  <span>用户列表</span>
                </div>
              </Menu.Item>
            }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 16 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Menu
                mode="horizontal"
                style={{ lineHeight: '45px', float: 'right' }}
                >
                <SubMenu title={<span>你好，{this.state.localStor!= null && localStorage.getItem('nickname')}</span>}>
                  <Menu.Item key="1" >{<span onClick={this.handleLogout} style={{ display: 'block',width:"130px", textAlign:"center"}}><Icon type="logout" />退出登录</span>}</Menu.Item>
                </SubMenu>
            </Menu>
          </Header>
          <MyBreadcrumb />
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 320 }}>
            {this.props.children}
          </Content>
          <MyFooter/> 
        </Layout>
        <style jsx>{`
          .trigger {
            font-size: 22px;
            line-height: 64px;
            cursor: pointer;
            transition: color .3s;
          }
          .trigger:hover {
            color: #1890ff;
          }

          .logo {
            height: 32px;
            background: rgba(255,255,255,.2);
            margin: 16px;
          }
        `}</style>
      </Layout>
    );
  }
}
