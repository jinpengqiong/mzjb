import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import OrderManagement from '../components/myOrder/myOrder'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';
import { Spin } from 'antd';

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
    }else if(this.store.shopID === null){
      Router.push('/')
    }else{
        this.setState({
            loading:false
        })
    }
  }

  render () {
    return (
    <Provider store={this.store}>
        <Spin spinning={this.state.loading} size="large">
          <MyLayout>
              <OrderManagement />
          </MyLayout>
        </Spin>
    </Provider>  
    )
  }
}