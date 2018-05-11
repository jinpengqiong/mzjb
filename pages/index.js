import MyLayout from '../components/MyLayout/MyLayout';
import ChooseProducts from '../components/ChooseProducts/index';
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;


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

    render () {
        return (
            <Provider store={this.store}>
                <MyLayout>
                    <Tabs defaultActiveKey="1" type="editable-card" hideAdd>
                        <TabPane tab='选货专区' key="1" closeable={false}>
                            <ChooseProducts />
                        </TabPane>
                        <TabPane tab='商品详情' key="2" closeable={true}>

                        </TabPane>
                    </Tabs>
                </MyLayout>
            </Provider>
        )
    }
}
