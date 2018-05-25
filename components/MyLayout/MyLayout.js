import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import MyFooter from '../Footer/Footer';
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
        <Layout >
        <Sider
          trigger={null}
          width="140px"
          collapsed={this.state.collapsed}
          style={{ height:'100%', position:'fixed' }}
        >
          <div className="logo" >
            <h2 style={{ textAlign:'center', color:'white' }}>
              <img src='../../static/LOGO.png' style={{ width:20}}/>
            </h2>
          </div>
          <Menu 
          theme="dark" 
          mode="inline" 
          onClick={this.handleClick} 
          selectedKeys={[this.props.store.curPagePath === ""? "选货" : this.props.store.curPagePath]}>
            <Menu.Item key="选货">
              <div onClick={()=>{ 
                Router.prefetch('/');
                Router.push('/')}}>
                <Icon type="shop" />
                <span>选货</span>
              </div>
            </Menu.Item>
            <Menu.Item key="商品">
              <div onClick={()=>{
                Router.prefetch('/products');
                Router.push('/products')
                this.props.store.getCurPagePath('店铺');
              }}>
                <Icon type="appstore" />
                <span>商品</span>
              </div>
            </Menu.Item>
            <Menu.Item key="素材">
              <div onClick={()=>{
                Router.prefetch('/resources');
                Router.push('/resources')}}>
                <Icon type="picture" />
                <span>素材</span>
              </div>
            </Menu.Item>
            <Menu.Item key="订单">
              <div onClick={()=>{
                Router.prefetch('/order');
                Router.push('/order')}}>
                <Icon type="shopping-cart" />
                <span>订单</span>
              </div>
            </Menu.Item>
            <Menu.Item key="设置">
                <div onClick={()=>{
                    Router.prefetch('/settings');
                    Router.push('/settings')}}>
                    <Icon type="setting" />
                    <span>设置</span>
                </div>
            </Menu.Item>
            {
              (this.props.store.userRole && this.props.store.userRole.indexOf('admin') !== -1)
              &&
              <Menu.Item key="用户">
                <div onClick={()=>{ 
                  Router.prefetch('/userList');
                  Router.push('/userList')}}>
                  <Icon type="user" />
                  <span>用户</span>
                </div>
              </Menu.Item>
            }
          </Menu>
        </Sider>
        <Layout style={{  marginLeft: this.state.collapsed? '100px' :'140px' }}>
          <Header style={{ background: '#fff', padding: 16,marginLeft: this.state.collapsed? 15:0 }}>
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
          }bgy  cv
          .trigger:hover {
            color: #1890ff;
          }

          .logo {
            height: 32px;
            margin: 16px;
          }
        `}</style>
      </Layout>
    );
  }
}
