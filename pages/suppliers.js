import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import SupplierOrder2 from '../components/suppliers/supplier_order2'
import SettleSupplier from '../components/suppliers/settle_supplier'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';
import { Spin, Tabs } from 'antd';
const TabPane = Tabs.TabPane;



export default class Suppliers extends React.Component {
  constructor (props) {
    super(props)
    this.store = initStore(props.isServer)
    this.state = {
    }
  }

  componentDidMount(){
    if(!localStorage.getItem('accessToken')){
      Router.push('/login')
    }else{
      this.setState({
        loading:false
      })
      this.store.getCurPagePath('供应商订单');
    }
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
                <TabPane tab='订单' key="1">
                  <SupplierOrder2 />
                </TabPane>
                <TabPane tab='结算清单' key="2" >
                  <SettleSupplier />
                </TabPane>
              </Tabs>
            </MyLayout>
          </Spin>
        </Provider>
    )
  }
}