import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import ProdTable from '../components/DBTable/tableComponent'
import InStock from '../components/DBTable/inStock'
import GroupProduct from '../components/DBTable/groupProduct'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';
import { Tabs, Spin, Radio } from 'antd';
import Request from "../utils/graphql_request";
import { observer } from 'mobx-react'
const TabPane = Tabs.TabPane;

const shopTags = `
    query ($shopId:ID!) {
        shopTags(shopId:$shopId){
          id
          insertedAt
          name
          weight
        }
      }
`;

@observer
export default class Products extends React.Component {
  constructor (props) {
    super(props)
    this.store = initStore(props.isServer);
      this.state = {
          loading:true,
          isShown:true,
          tagName:'出售中',
          tagData:null
      }
  }


  componentDidMount(){
    if(!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null ){
      Router.push('/login')
    }else if(this.props.shopID === null){
      Router.push('/')
    }else{
        this.setState({
            loading:false
        })
        this.queryTags();
    }
  }
    onChange = (e) => {
      // console.log('e',e.target.value)
        this.setState({
            tagName:e.target.value
        })
   }

   onTabsChange = (key) => {
       // console.log(key);
        this.store.changeActiveKey(key)
        this.queryTags();
   }

    queryTags = () =>{
        Request.GraphQlRequest(shopTags, {shopId: localStorage.getItem('shopID')}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('111', res)
                this.setState({
                    tagData: res.shopTags
                })
            }
        )
    }
    
  render () {
      console.log('store', this.store)
    return (
    <Provider store={this.store}>
        <Spin spinning={this.state.loading} size="large">
          <MyLayout>
              <Tabs
                  activeKey={this.store.prodActiveKey}
                  tabPosition="left"
                  onChange={this.onTabsChange}
                  hideAdd>
                  <TabPane tab='商品管理' key="1">
                      <Radio.Group value={this.state.tagName} onChange={this.onChange} style={{ marginBottom: 16 }}>
                          <Radio.Button value="出售中">出售中</Radio.Button>
                          <Radio.Button value="仓库中">仓库中</Radio.Button>
                      </Radio.Group>
                      {
                          this.state.tagName ==='出售中'?
                              <ProdTable shopTags={this.state.tagData}/>
                              :
                          this.state.tagName ==='仓库中'?
                              <InStock shopTags={this.state.tagData}/>
                              :null
                      }
                  </TabPane>
                  <TabPane tab='商品分组' key="2" >
                      <GroupProduct />
                  </TabPane>
                  {
                      this.store.prodActiveKey === "3"
                      &&
                      <TabPane tab='新增商品' key="3" >
                          1111
                      </TabPane>
                  }
                  {
                      this.store.prodActiveKey === "4"
                      &&
                      <TabPane tab='更新自有商品' key="4" >
                          22222
                      </TabPane>
                  }
              </Tabs>
          </MyLayout>
        </Spin>
    </Provider>  
    )
  }
}

