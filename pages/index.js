import MyLayout from '../components/MyLayout/MyLayout';
import ChooseProducts from '../components/ChooseProducts/index';
import ProdDetails from '../components/ChooseProducts/prodDetails';
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;
import { observer } from 'mobx-react'


@observer
export default class MainPage extends React.Component {
    static getInitialProps ({ req }) {
        const isServer = !!req
        const store = initStore(isServer);
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

    onChange = (activeKey) => {
        this.store.changeKey(activeKey)
    }

    render () {
        console.log('store', this.store)
        return (
            <Provider store={this.store}>
                <MyLayout>
                    <Tabs 
                    activeKey={this.store.activeKey}  
                    type="card" 
                    onChange={this.onChange} 
                    hideAdd>
                        <TabPane tab='严选商品' key="1">
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
            </Provider>
        )
    }
}
