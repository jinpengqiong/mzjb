import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import SupplierOrder from '../components/suppliers/supplier_order'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';
import { Spin } from 'antd';

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
              <SupplierOrder />
            </MyLayout>
          </Spin>
        </Provider>
    )
  }
}