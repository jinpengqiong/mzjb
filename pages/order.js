import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import OrderManagement from '../components/myOrder/myOrder'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';
import { inject, observer } from 'mobx-react'

export default class MyOrder extends React.Component {
    static getInitialProps ({ req }) {
        const isServer = !!req
        const store = initStore(isServer)
        return { isServer }
      }
      constructor (props) {
        super(props)
        this.store = initStore(props.isServer)
      }

  componentDidMount(){
    if(!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null ){
      Router.push('/login')
    }else if(this.store.shopID === null){
      Router.push('/shops')
    }
  }

  render () {
    return (
    <Provider store={this.store}>
      <MyLayout>
          <OrderManagement />
      </MyLayout>
    </Provider>  
    )
  }
}