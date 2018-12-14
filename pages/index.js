import MyLayout from '../components/MyLayout/MyLayout';
import ChooseProducts from '../components/ChooseProducts/index';
import ProdDetails from '../components/ChooseProducts/prodDetails';
import { Provider } from 'mobx-react'
import { initStore  } from '../store'
import Router from 'next/router';
import { Tabs, Spin, Radio } from 'antd';
const TabPane = Tabs.TabPane;
import { observer } from 'mobx-react'
import Request from '../utils/graphql_request';

const queryCategories = `
      query ($type: CategoryType!) {
        categories(type:$type){
          entries{
              id
              name
            }
        }
      }
      `;

const queryTagList = `
      query {
        youzanTaglist{
              id
              name
          }
      }
      `;


@observer
export default class MainPage extends React.Component {
    constructor (props) {
        super(props)
        this.store = initStore(props.isServer)
        this.state = {
            loading:true,
            tagId:null,
            isShown:false
        }
    }

    componentDidMount(){
        if(!localStorage.getItem('accessToken')){
            Router.push('/login')
        }else{
            this.setState({
                loading:false
            })
            if(localStorage.getItem('group') ==='1'){
              this.setState({
                isShown:true
              })
            }
            this.store.getCurPagePath('选货');
            this.queryCategory()
            this.queryTagList()
        }
    }


    queryCategory = () => {
      Request.GraphQlRequest(queryCategories, { type: 'PRODUCT' }, `Bearer ${localStorage.getItem('accessToken')}`).then(
          res => {
            // console.log('queryCategories',res);
            this.store.getCategories(res.categories.entries)
            this.setState({
              categoryData: res.categories.entries
            })
          }
      ).catch( err => Request.token_auth(err))
    }

    queryTagList = () => {
      Request.GraphQlRequest( queryTagList, null, `Bearer ${localStorage.getItem('accessToken')}`).then(
          res => {
            // console.log('queryTagList',res);
            this.store.getTagListData(res.youzanTaglist)
            this.setState({
              tagListData: res.youzanTaglist
            })
          }
      ).catch( err => Request.token_auth(err))
    }

    onChange = activeKey => {
        this.store.changeKey(activeKey)
        if(activeKey !== '0' && activeKey !=='-1'){
          const tag = this.store.categories.find(item => item.id === activeKey)
          console.log('tag',tag)
          const tagId = this.store.tagListData.find(value =>  value.name === tag.name )
          this.setState({
            tagId:tagId.id
          })
        }
    }

    onRadioChange = (e) => {
      // console.log('e',e.target.value)
      this.setState({
        tagId:e.target.value
      })
    }

    render () {
        return (
            <Provider store={this.store}>
                <Spin spinning={this.state.loading} size="large">
                    <MyLayout>
                          {
                            this.store.isTabOpen?
                              <ProdDetails />
                                :
                                <Tabs
                                    activeKey={this.store.chooseProdKey}
                                    tabPosition="left"
                                    onChange={this.onChange}
                                    style={{ height: 800, overflowY: 'scroll' }}
                                    hideAdd>
                                    <TabPane tab='优选商城' key="0">
                                      <ChooseProducts />
                                    </TabPane>
                                  {
                                    this.state.isShown
                                      &&
                                    <TabPane tab='供货商测试分组' key="-1">
                                      <ChooseProducts tagId='103317078'/>
                                    </TabPane>
                                  }
                                  {
                                    this.store.categories
                                    &&
                                    this.store.categories.map(
                                        tag => {
                                          return (
                                              <TabPane tab={tag.name} key={tag.id}>
                                                <Radio.Group value={this.state.tagId} onChange={this.onRadioChange} style={{ marginBottom: 16 }}>
                                                  {
                                                    this.store.tagListData && this.store.tagListData.map(
                                                        item => {
                                                          if(item.name === tag.name){
                                                            return (
                                                                <Radio.Button
                                                                    value={item.id}
                                                                    key={item.id}
                                                                >
                                                                  {item.name}
                                                                </Radio.Button>
                                                            )
                                                          }
                                                        }
                                                    )
                                                  }
                                                  {
                                                    this.store.tagListData && this.store.tagListData.map(
                                                        item => {
                                                          if(item.name === tag.name+'-特价'){
                                                            return (
                                                                <Radio.Button
                                                                    value={item.id}
                                                                    key={item.id}
                                                                >
                                                                  特价商品
                                                                </Radio.Button>
                                                            )
                                                          }
                                                        }
                                                    )
                                                  }
                                                </Radio.Group>
                                                <ChooseProducts tagId={this.state.tagId}/>
                                              </TabPane>
                                          )
                                        }
                                    )
                                  }
                                </Tabs>
                          }
                    </MyLayout>
                </Spin>
            </Provider>
        )
    }
}
