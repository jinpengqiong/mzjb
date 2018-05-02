import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;
import { inject, observer } from 'mobx-react'
import FileUploader from '../FileUploader/index';


@inject('store') @observer
class ShopForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { getFieldDecorator } = this.props.form;

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
                    label="商家Logo"
                >
                    {getFieldDecorator('logo', {
                        rules: [{
                            type: 'string', message: '请输入商家Logo!',
                        }],
                    })(
                        <FileUploader />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="封面图片"
                >
                    {getFieldDecorator('mainImage', {
                        rules: [{
                            type: 'string', message: '请输入封面图片!',
                        }],
                    })(
                        <FileUploader />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="店铺图片"
                >
                    {getFieldDecorator('images', {
                        rules: [{
                            type: 'string', message: '请输入店铺图片!',
                        }],
                    })(
                        <FileUploader />
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
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="营业结束时间"
                >
                    {getFieldDecorator('bizTimeStart', {
                        rules: [{
                            type: 'string', message: '请输入营业结束时间!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
            </Form>
        );
    }
}

const createShopForm = Form.create()(ShopForm);
export default createShopForm;