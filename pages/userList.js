import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import UserList from '../components/userList/list'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import { Spin } from 'antd';


export default class MyVouchers extends React.Component {
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
      if(!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null ){
        Router.push('/login')
      }else{
          this.setState({
              loading:false
          })
          this.store.getCurPagePath('用户');
      }
    }
  render () {
    return (
    <Provider store={this.store}>
        <Spin spinning={this.state.loading} size="large">
          <MyLayout>
              <UserList />
          </MyLayout>
        </Spin>
    </Provider>  
    )
  }
}