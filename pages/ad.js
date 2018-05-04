import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import MyLayout from '../components/MyLayout/MyLayout';
import ADList from '../components/adManagement/adlist';
import ADPlayList from '../components/adManagement/adPlaylists';
import Router from 'next/router';
import { Provider } from 'mobx-react'
import { initStore } from '../store'

export default class Products extends React.Component {
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
        Router.push('/')
    }
  }
  callback(key) {
    console.log(key);
  }
  render () {
    return (
    <Provider store={this.store}>
      <MyLayout>
        <Tabs onChange={this.callback} type="card">
            <TabPane tab="广告列表" key="1">
                <ADList />
            </TabPane>
            <TabPane tab="广告播单" key="2">
                <ADPlayList />
            </TabPane>
        </Tabs>
      </MyLayout>
    </Provider>  
    )
  }
}