import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import ProdTable from '../components/DBTable/tableComponent'
import InStock from '../components/DBTable/inStock'
import GroupProduct from '../components/DBTable/groupProduct'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';
import { Tabs, Spin } from 'antd';
const TabPane = Tabs.TabPane;


export default class Products extends React.Component {
  constructor (props) {
    super(props)
    this.store = initStore(props.isServer);
      this.state = {
          loading:true
      }
  }


  componentDidMount(){
    if(!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null ){
      Router.push('/login')
    }else if(this.props.shopID === null){
      Router.push('/')
    }else{
        this.store.getShopID(parseInt(this.props.shopID));
        this.setState({
            loading:false
        })
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
                  // onChange={this.onChange}
                  hideAdd>
                  <TabPane tab='商品管理' key="1">
                      <Tabs
                          type="line"
                          hideAdd>
                          <TabPane tab='出售中' key='出售中'>
                              <ProdTable />
                          </TabPane>
                          <TabPane tab='仓库中' key='仓库中'>
                            <InStock />
                          </TabPane>
                      </Tabs>

                  </TabPane>
                  <TabPane tab='商品分组' key="2" >
                      <GroupProduct />
                  </TabPane>
              </Tabs>
          </MyLayout>
        </Spin>
    </Provider>  
    )
  }
}

