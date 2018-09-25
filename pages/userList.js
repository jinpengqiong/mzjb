import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import UserList from '../components/userList/list'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import { Spin } from 'antd';
import Router from 'next/router';

export default class UserGrant extends React.Component {
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
        if(this.store.userRole && this.store.userRole.indexOf('admin') !== -1){
          this.store.getCurPagePath('用户');
          this.setState({
            loading:false
          })
        }else {
          Router.push('/login')
        }
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