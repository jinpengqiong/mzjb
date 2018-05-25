import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import MyFooter from '../Footer/Footer';
import MySider from '../Sider/Sider';
import MyHeader from '../Header/Header';
import Router from 'next/router';
const SubMenu = Menu.SubMenu;
import { inject, observer } from 'mobx-react'


@inject('store') @observer
export default class MyLayout extends React.Component {
  constructor (props){
    super(props)
      this.state={
          localStor:null
      }
  }
  
  componentDidMount (){
    this.setState({
      localStor : localStorage
    })
    this.props.store.getRoleInfo(localStorage.getItem('role'));
  }

  render() {
    return (
        <Layout >
          <MySider />
        <Layout style={{  marginLeft: this.props.store.collapsed? '100px' :'140px' }}>
          <MyHeader />
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 320 }}>
            {this.props.children}
          </Content>
          <MyFooter/> 
        </Layout>
      </Layout>
    );
  }
}
