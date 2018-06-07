import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import BindLiveRoom from '../components/settings/bindLiveRoom'
import AutoReply from '../components/settings/autoReply'
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
        if(!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null ){
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
                            <TabPane tab='绑定直播间' key="1">
                                <BindLiveRoom />
                            </TabPane>
                            <TabPane tab='自动回复' key="2" >
                                <AutoReply />
                            </TabPane>
                            <TabPane tab='商品页模版' key="3" >
                                111
                            </TabPane>
                        </Tabs>
                    </MyLayout>
                </Spin>
            </Provider>
        )
    }
}