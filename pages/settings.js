import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import BindLiveRoom from '../components/settings/bindLiveRoom'
import AutoReply from '../components/settings/autoReply'
import ProdModule from '../components/settings/prodModule'
import GrantAdmin from '../components/settings/admin_grant'
import Router from 'next/router';
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import { Spin, Tabs } from 'antd';
const TabPane = Tabs.TabPane;


export default class Settings extends React.Component {
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
        }else{
            this.setState({
                loading:false
            });
            this.store.getCurPagePath('设置');
        }
    }
    render () {
        return (
            <Provider store={this.store}>
                <Spin spinning={this.state.loading} size="large">
                    <MyLayout>
                        <Tabs
                            // activeKey={this.store.activeKey}
                            tabPosition="left"
                            // onChange={this.onTabsChange}
                            hideAdd>
                            <TabPane tab='微页面模版' key="1" >
                                <ProdModule />
                            </TabPane>
                            <TabPane tab='绑定直播间' key="2">
                                <BindLiveRoom />
                            </TabPane>
                            <TabPane tab='自动回复' key="3" >
                                <AutoReply />
                            </TabPane>
                            <TabPane tab='管理员' key="4" >
                                <GrantAdmin />
                            </TabPane>
                        </Tabs>
                    </MyLayout>
                </Spin>
            </Provider>
        )
    }
}