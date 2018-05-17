import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import BindLiveRoom from '../components/settings/bindLiveRoom'
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
                            type="card"
                            // onChange={this.onTabsChange}
                            hideAdd>
                            <TabPane tab='绑定直播间' key="1">
                                <BindLiveRoom />
                            </TabPane>
                            <TabPane tab='自动回复设置' key="2" >
                                222
                            </TabPane>
                        </Tabs>
                    </MyLayout>
                </Spin>
            </Provider>
        )
    }
}