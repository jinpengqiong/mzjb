import React from 'react';
import { Tabs, Spin } from 'antd';
const TabPane = Tabs.TabPane;
import MyLayout from '../components/MyLayout/MyLayout';
import MyPICS from '../components/resources/pics';
import MyVideo from '../components/resources/video';
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
        this.store.getCurPagePath('素材');
    }
  }
  callback(key) {
    console.log(key);
  }
  render () {
    return (
    <Provider store={this.store}>
        <Spin spinning={this.state.loading} size="large">
            <MyLayout>
              <Tabs onChange={this.callback} tabPosition="left">
                  <TabPane tab="图片文件" key="1">
                    <MyPICS />
                  </TabPane>
                  <TabPane tab="视频文件" key="2">
                    <MyVideo />
                  </TabPane>
              </Tabs>
            </MyLayout>
          </Spin>
    </Provider>  
    )
  }
}