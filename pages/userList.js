import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import UserList from '../components/userList/list'
import { Provider } from 'mobx-react'
import { initStore } from '../store'

export default class MyVouchers extends React.Component {
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
      }
    }
  render () {
    return (
    <Provider store={this.store}>
      <MyLayout>
          <UserList />
      </MyLayout>
    </Provider>  
    )
  }
}