import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import ProdTable from '../components/DBTable/tableComponent'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';
import { inject, observer } from 'mobx-react'

export default class Products extends React.Component {
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
    }else{
      this.store.getShopID(parseInt(this.props.shopID));
    }
  }
  render () {
    return (
    <Provider store={this.store}>
      <MyLayout>
        <ProdTable shopID={this.props.shopID}/>
      </MyLayout>
    </Provider>  
    )
  }
}

