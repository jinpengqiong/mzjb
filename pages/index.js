import MyLayout from '../components/MyLayout/MyLayout';
import ChooseProducts from '../components/ChooseProducts/index';
import ProdDetails from '../components/ChooseProducts/prodDetails';
import { Provider } from 'mobx-react'
import { initStore  } from '../store'
import Router from 'next/router';
import { Tabs, Spin, Radio, Affix } from 'antd';
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
        // console.log('props', props)
        this.store = initStore(props.isServer)
        this.state = {
            loading:true,
            categoryData:null,
            tagListData:null,
            tagId:null
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
            this.queryCategory()
            this.queryTagList()
        }
    }

    queryCategory = () => {
      Request.GraphQlRequest(queryCategories, { type: 'PRODUCT' }, `Bearer ${localStorage.getItem('accessToken')}`).then(
          res => {
            console.log('queryCategories',res);
            this.setState({
              categoryData: res.categories.entries
            })
          }
      ).catch( err => console.error(err))
    }

    queryTagList = () => {
      Request.GraphQlRequest( queryTagList, null, `Bearer ${localStorage.getItem('accessToken')}`).then(
          res => {
            console.log('queryTagList',res);
            this.setState({
              tagListData: res.youzanTaglist
            })
          }
      ).catch( err => console.error(err))
    }

    onChange = (activeKey) => {
        this.store.changeKey(activeKey)
        const tagId = this.state.tagListData.find(
            value => {
                const tag = this.state.categoryData.find(
                    item => {
                      if(item.id === activeKey){
                        return item
                      }
                    })
                if(tag.name === value.name){
                      return value
                }
            }
        )
        this.setState({
          tagId:tagId.id
        })
    }

    onRadioChange = (e) => {
      console.log('e',e.target.value)
      this.setState({
        tagId:e.target.value
      })
    }

    render () {
        return (
            <Provider store={this.store}>
                <Spin spinning={this.state.loading} size="large">
                    <MyLayout>
                        <Tabs
                        activeKey={this.store.chooseProdKey}
                        tabPosition="left"
                        onChange={this.onChange}
                        hideAdd>
                            <TabPane tab='优选商城' key="0">
                                  <ChooseProducts />
                            </TabPane>
                            {
                                this.state.categoryData
                                &&
                                this.state.categoryData.map(
                                    tag => {
                                        return (
                                            <TabPane tab={tag.name} key={tag.id}>
                                              <Affix offsetTop={10}>
                                                <Radio.Group value={this.state.tagId} onChange={this.onRadioChange} style={{ marginBottom: 16 }}>
                                                  {
                                                    this.state.tagListData && this.state.tagListData.map(
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
                                                    this.state.tagListData && this.state.tagListData.map(
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
                                              </Affix>
                                              <ChooseProducts tagId={this.state.tagId}/>
                                            </TabPane>
                                        )
                                    }
                                )
                            }
                          {
                            this.store.isTabOpen
                            &&
                            <TabPane tab='商品详情' key="-1" >
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
