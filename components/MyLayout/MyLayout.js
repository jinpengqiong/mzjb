import { Layout } from 'antd';
const { Content } = Layout;
import MyFooter from '../Footer/Footer';
import MySider from '../Sider/Sider';
import MyHeader from '../Header/Header';
import { inject, observer } from 'mobx-react'
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

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
      <LocaleProvider locale={zh_CN}>
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
      </LocaleProvider>
    );
  }
}
