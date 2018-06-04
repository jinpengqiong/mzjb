import { Table, Select, Popconfirm, Pagination, message, Affix, Button, Icon, Modal, notification, Divider, Radio, Tabs } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react';
import SelfProdForm from './selfProdForm';
import YouzanProdForm from './youzanProdForm'
const Option = Select.Option;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;



@inject('store') @observer
export default class CreateProd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radioValue:"新增外链商品"
        }
    }

    componentDidMount(){}


    //select Radio to group
    onRadioChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            radioValue: e.target.value,
        });
    }
    handleRadioCancel = () => {
        this.setState({
            radioValue: null,
            groupModalVisible:false
        });
    }

    handleGroupModalOk = () => {
        if(this.state.radioValue){
            Request.GraphQlRequest(changeProductTag, {id:this.state.productID, shopId: localStorage.getItem('shopID'), tagId:this.state.radioValue}, `Bearer ${localStorage.getItem('accessToken')}`).then(
                (res) => {
                    // console.log('OK', res)
                    this.setState({
                        radioValue: null,
                        groupModalVisible:false,
                        productID:''
                    });
                    message.success('添加成功！')
                    this.queryProdData(1);
                }
            )
        }
    }

    render() {
        return (
            <div>
                <Radio.Group value={this.state.radioValue} onChange={this.onRadioChange} style={{ marginBottom: 16 }}>
                    <Radio.Button value="新增外链商品">创建外链商品</Radio.Button>
                    <Radio.Button value="新增自有商品">创建自有商品</Radio.Button>
                </Radio.Group>
                {
                    this.state.radioValue ==='新增外链商品'?
                        <SelfProdForm />
                            :
                    this.state.radioValue ==='新增自有商品'?
                        <YouzanProdForm />
                            :
                            null
                }
            </div>
        )
    }
}
