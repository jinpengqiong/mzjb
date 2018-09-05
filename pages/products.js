import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import ProdTable from '../components/DBTable/tableComponent'
import InStock from '../components/DBTable/inStock'
import GroupProduct from '../components/DBTable/groupProduct'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Router from 'next/router';
import { Tabs, Spin, Radio, Affix } from 'antd';
import Request from "../utils/graphql_request";
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
    if(!localStorage.getItem('accessToken')){
      Router.push('/login')
    }else if(this.props.shopID === null){
      Router.push('/')
    }else{
        this.store.getShopID(parseInt(this.props.shopID));
        this.setState({
            loading:false
        })
        this.store.getCurPagePath('商品');
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
                // console.log('tagData', res)
                this.setState({
                    tagData: res.shopTags
                })
            }
        ).catch( err => Request.token_auth(err))
    }
    
  render () {
    return (
    <Provider store={this.store}>
        <Spin spinning={this.state.loading} size="large">
          <MyLayout>
              <Tabs
                  activeKey={this.store.activeKey}
                  tabPosition="left"
                  onChange={this.onTabsChange}
                  hideAdd>
                  <TabPane tab='商品管理' key="商品管理">
                      <Affix offsetTop={10}>
                        <Radio.Group value={this.state.tagName} onChange={this.onChange} style={{ marginBottom: 16 }}>
                            <Radio.Button value="出售中">出售中</Radio.Button>
                            <Radio.Button value="仓库中">仓库中</Radio.Button>
                        </Radio.Group>
                      </Affix>
                      {
                          this.state.tagName ==='出售中'?
                              <ProdTable shopTags={this.state.tagData}/>
                              :
                          this.state.tagName ==='仓库中'?
                              <InStock shopTags={this.state.tagData}/>
                              :null
                      }
                  </TabPane>
                  <TabPane tab='商品分组' key="商品分组" >
                      <GroupProduct />
                  </TabPane>
              </Tabs>
          </MyLayout>
        </Spin>
    </Provider>  
    )
  }
}

