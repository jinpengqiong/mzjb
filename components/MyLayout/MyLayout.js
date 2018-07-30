import { Layout } from 'antd';
import MyFooter from '../Footer/Footer';
import MySider from '../Sider/Sider';
import dynamic from 'next/dynamic'
import { inject, observer } from 'mobx-react'
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
const { Content } = Layout;
const MyHeader = dynamic(import('../Header/Header'), {
  ssr: false
})


@inject('store') @observer
export default class MyLayout extends React.Component {
  constructor (props){
    super(props)
  }
  
  componentDidMount (){
    this.props.store.getRoleInfo(localStorage.getItem('role'));
  }

  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Layout >
          <MySider />
          <Layout style={{  marginLeft: this.props.store.collapsed? '100px' :'140px' }}>
            <MyHeader />
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 'calc(88vh - 69px)' }}>
                {this.props.children}
              </Content>
            <MyFooter />
          </Layout>
        </Layout>
      </LocaleProvider>
    );
  }
}
