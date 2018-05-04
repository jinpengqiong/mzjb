import { Form, Input, Select, Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;
const Option = Select.Option;
import { inject, observer } from 'mobx-react'
import ShopImgUploader from '../FileUploader/shopImgUpload';
import Request from '../../utils/graphql_request';


const shopCategories = `
    query($type: CategoryType!) {
    categories(type:$type){
        pageSize
        pageNumber
        totalPages
        entries{
          id
          name
        }
    }
  }
`;

@inject('store') @observer
class ShopForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shopCategories:null
        };
    }

    componentDidMount(){
        Request.GraphQlRequest(shopCategories, { type: 'PRODUCT'}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('res', res);
                this.setState({
                    shopCategories: res.categories.entries
                })
            }
        )
    }
    onCheckChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const catagoryOptions = this.state.shopCategories && this.state.shopCategories.map(
            (entry) => {
                return <Option value={entry.id} key={entry.id}>{entry.name}</Option>
            }
        )
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                md: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                md: { span: 16 },
            },
        };
        const options = [
            { label: 'WIFI', value: 'WIFI' },
            { label: '停车', value: '停车' },
            { label: '支付宝支付', value: '支付宝支付' },
            { label: '微信支付', value: '微信支付' },
        ];

        return (
            <Form>
                <FormItem
                    {...formItemLayout}
                    label="店铺名"
                >
                    {getFieldDecorator('name', {
                        rules: [{
                            type: 'string', message: '请输入店铺名!',
                        }, {
                            required: true, message: '请输入店铺名!',
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="店铺描述"
                >
                    {getFieldDecorator('desc', {
                        rules: [{
                            type: 'string', message: '请输入店铺描述!',
                        }, {
                            required: true, message: '请输入店铺描述 !',
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="店铺封面图片"
                >
                    {getFieldDecorator('mainImage', {
                        rules: [{
                            type: 'string', message: '请输入封面图片!',
                        }],
                    })(
                        <ShopImgUploader />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="手机号"
                >
                    {getFieldDecorator('phone', {
                        rules: [{
                            type: 'string', message: '请输入手机号!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="营业开始时间"
                >
                    {getFieldDecorator('bizTimeStart', {
                        rules: [{
                            type: 'string', message: '请输入营业开始时间!',
                        }],
                    })(
                        <Input placeholder="输入营业开始时间，如8：00"/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="营业结束时间"
                >
                    {getFieldDecorator('bizTimeEnd', {
                        rules: [{
                            type: 'string', message: '请输入营业结束时间!',
                        }],
                    })(
                        <Input placeholder="输入营业结束时间，如22：00"/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="店铺类型"
                >
                    {getFieldDecorator('categoryId', {
                        rules: [{
                            type: 'string', message: '请选择店铺类型!',
                        }],
                    })(
                        <Select style={{ width: 120 }} >
                            { catagoryOptions }
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="店内设施"
                >
                    {getFieldDecorator('facilities', {
                        rules: [{
                            type: 'array', message: '请选择店内设施!',
                        }],
                    })(
                        <CheckboxGroup options={options} onChange={this.onCheckChange} />
                    )}
                </FormItem>
            </Form>
        );
    }
}

const CreateShopForm = Form.create()(ShopForm);
export default CreateShopForm;