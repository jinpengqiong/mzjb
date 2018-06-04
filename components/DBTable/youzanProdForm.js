import { Form, Input, Button, Radio, notification, message } from 'antd';
const FormItem = Form.Item;
import { inject, observer } from 'mobx-react'
import YouzanUploader from '../FileUploader/youzanUpload'
import Request from "../../utils/graphql_request";
const RadioGroup = Radio.Group;


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
class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                message.error(err);
            }else{
                console.log('1112', values);
                if(!this.props.store.mainImage){
                    message.error('请先上传图片，再提交！')
                }else{
                    values.mainImage = this.props.store.mainImage;
                    values.price = parseInt(parseFloat(values.price)*100);
                    values.isDisplay = values.state ==='仓库中'?  false : true;
                    delete values.state;
                    Request.GraphQlRequest(addProduct,
                        { baseinfo: values, shopId: localStorage.getItem('shopID'), type: 'YOUZAN' ,youzan: { imageIds: this.props.store.imageId, quantity:1000}}, `Bearer ${localStorage.getItem('accessToken')}`).then(
                        (res)=>{
                            console.log('res', res);
                            this.props.form.resetFields();
                            res.createProduct.mainImage = this.props.store.mainImage;
                            res.createProduct.key = res.createProduct.id;
                            document.getElementById('ossfile3').innerHTML = '';
                            this.props.store.getMainImage('')
                            this.props.store.getimageId('')
                            this.props.store.changeActiveKey('1')
                            notification.success({
                                message: '新增成功',
                                duration: 3,
                            });
                        }
                    ).catch(()=>{message.error('新增失败！')})
                }
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                md: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                md: { span: 15 },
            },
        };


        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="商品名称"
                >
                    {getFieldDecorator('title', {
                        rules: [{
                            type: 'string', message: '请输入商品名称!',
                        }, {
                            required: true, message: '请输入商品名称!',
                        }
                        ],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="商品图(必选)"
                >
                    {getFieldDecorator('mainImage', {
                        rules: [{
                            type: 'string', message: '请输入商家名称!',
                        }
                        ],
                    })(
                        <YouzanUploader />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="价格"
                >
                    {getFieldDecorator('price', {
                        rules: [{
                            type: 'string', message: '请输入价格!',
                        }, {
                            required: true, message: '请输入价格!',
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="简要描述"
                >
                    {getFieldDecorator('desc', {
                        rules: [{
                            type: 'string', message: '请输入简要描述!',
                        }, {
                            required: true, message: '请输入简要描述!',
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="商品状态"
                >
                    {getFieldDecorator('state', {
                        rules: [{
                            type: 'string', message: '请选择状态!',
                        }, {
                            required: true, message: '请选择状态!',
                        }],
                    })(
                        <RadioGroup >
                            <Radio value='仓库中'>仓库中</Radio>
                            <Radio value='出售中'>出售中</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                        sm: { span: 15, offset: 8 },
                    }}
                >
                    <Button type="primary" htmlType="submit">提交</Button>
                </FormItem>
            </Form>
        );
    }
}

const YouzanProdForm = Form.create()(RegistrationForm);
export default YouzanProdForm;