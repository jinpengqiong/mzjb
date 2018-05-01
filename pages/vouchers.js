import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import MyVoucherList from '../components/vouchersList/vouchersList'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';

export default class MyVouchers extends React.Component {
  static getInitialProps ({ query: { id }, req }) {
      const isServer = !!req
      const store = initStore(isServer)
      return { shopID : id, isServer }
    }
    constructor (props) {
      super(props)
      this.store = initStore(props.isServer)
    }
    componentDidMount(){
      if(!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null ){
        Router.push('/login')
      }else if(this.props.shopID === null){
        Router.push('/shops')
      }
    }
  render () {
    return (
      <Provider store={this.store}>
        <MyLayout>
            <MyVoucherList shopID={this.props.shopID} />
        </MyLayout>
      </Provider>  
      )
    }
}