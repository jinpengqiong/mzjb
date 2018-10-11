import { Form, Input } from 'antd';
const FormItem = Form.Item;
import { inject, observer } from 'mobx-react'
import ShopImgUploader from '../FileUploader/shopImgUpload'

@inject('store') @observer
class RegistrationForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                md: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                md: { span: 19 },
            },
        };


        return (
            <Form>
                <FormItem
                    {...formItemLayout}
                    label={
                      <div style={{ display:'inline-block'}}>
                        <span style={{ color:'red'}}>*</span>
                        <span>{' '}商品图</span>
                      </div>
                    }
                >
                    {getFieldDecorator('picurl')(
                        <ShopImgUploader />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="标题"
                >
                    {getFieldDecorator('title', {
                        rules: [{
                            type: 'string', message: '请输入标题!',
                        }, {
                            required: true, message: '请输入标题!',
                        }
                        ],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="描述"
                >
                    {getFieldDecorator('description', {
                        rules: [{
                            type: 'string', message: '请输入描述!',
                        }, {
                            required: true, message: '请输入描述!',
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="URL"
                >
                    {getFieldDecorator('url', {
                        rules: [{
                            type: 'string', message: '请输入URL!',
                        }, {
                            required: true, message: '请输入URL!',
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>
            </Form>
        );
    }
}

const SelfReplyForm = Form.create()(RegistrationForm);
export default SelfReplyForm;