import { Table, Select, Popconfirm, Pagination, message, Affix, Button, Icon, Modal, notification, Divider, Radio, Tabs } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react';
import SelfProdForm from './selfProdForm';
import YouzanProdForm from './youzanProdForm'
const Option = Select.Option;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;

const addProduct = `
mutation (
    $baseinfo:ProductBaseinfo!, $shopId: Int!, $type:ProductType!, $youzan:ProductYouzanArgs
    ) {
    createProduct(
        baseinfo:$baseinfo,
        shopId: $shopId,
        type:$type,
        youzan:$youzan
    ){
        id
        title
        images
        price
        desc
        detailUrl
        imagesUrls{
            url
        }
    }
    }
`;

@inject('store') @observer
export default class CreateProd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){}


    //select Radio to group
    onRadioChange = (e) => {
        // console.log('radio checked', e.target.value);
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
                <Radio.Group value={this.state.tagName} onChange={this.onRadioChange} style={{ marginBottom: 16 }}>
                    <Radio.Button value="创建外链商品">出售中</Radio.Button>
                    <Radio.Button value="创建自有商品">仓库中</Radio.Button>
                </Radio.Group>
            </div>
        )
    }
}
