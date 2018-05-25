import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import OrderManagement from '../components/myOrder/myOrder'
import SelfOrder from '../components/myOrder/selfOrder'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';
import { Spin, Tabs } from 'antd';
const TabPane = Tabs.TabPane;


export default class MyOrder extends React.Component {
    static getInitialProps ({ req }) {
        const isServer = !!req
        const store = initStore(isServer)
        return { isServer }
      }
      constructor (props) {
        super(props)
        this.store = initStore(props.isServer)
          this.state = {
              loading:true
          }
      }

  componentDidMount(){
    if(!localStorage.getItem('accessToken')){
      Router.push('/login')
    }else{
        this.setState({
            loading:false
        })
        this.store.getCurPagePath('订单');
    }
  }

  callback = (key) =>{
      console.log(key);
  }
  render () {
    return (
    <Provider store={this.store}>
        <Spin spinning={this.state.loading} size="large">
          <MyLayout>
              <Tabs
                  tabPosition="left"
                  onChange={this.callback}
                  hideAdd>
                  <TabPane tab='客户订单' key="1">
                      <OrderManagement />
                  </TabPane>
                  <TabPane tab='个人订单' key="2" >
                      <SelfOrder />
                  </TabPane>
              </Tabs>
          </MyLayout>
        </Spin>
    </Provider>  
    )
  }
}