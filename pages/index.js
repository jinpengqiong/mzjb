import MyLayout from '../components/MyLayout/MyLayout';
import ChooseProducts from '../components/ChooseProducts/index';
import ProdDetails from '../components/ChooseProducts/prodDetails';
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';
import { Tabs, Spin } from 'antd';
const TabPane = Tabs.TabPane;
import { observer } from 'mobx-react'


@observer
export default class MainPage extends React.Component {
    constructor (props) {
        super(props)
        console.log('props', props)
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
            this.store.getCurPagePath('选货');
        }
    }

    onChange = (activeKey) => {
        this.store.changeKey(activeKey)
    }

    render () {
        console.log('store', this.store)
        return (
            <Provider store={this.store}>
                <Spin spinning={this.state.loading} size="large">
                    <MyLayout>
                        <Tabs
                        activeKey={this.store.activeKey}
                        type="card"
                        onChange={this.onChange}
                        hideAdd>
                            <TabPane tab='优选商品' key="1">
                                <ChooseProducts />
                            </TabPane>
                            {
                               this.store.isShown
                               &&
                               <TabPane tab='商品详情' key="2" >
                                    <ProdDetails />
                               </TabPane>
                            }
                        </Tabs>
                    </MyLayout>
                </Spin>
            </Provider>
        )
    }
}
