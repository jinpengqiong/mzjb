import { Form, Input } from 'antd';
const FormItem = Form.Item;
import { inject, observer } from 'mobx-react'
import YouzanUploader from '../FileUploader/youzanUpload'
import RichText from '../richText/richText'


@inject('store') @observer
class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
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
                md: { span: 19 },
            },
        };


        return (
            <Form>
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
                    label="商品图"
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
                    label="详情"
                >
                    {getFieldDecorator('details')(
                        <RichText />
                    )}
                </FormItem>
            </Form>
        );
    }
}

const YouzanProdForm = Form.create()(RegistrationForm);
export default YouzanProdForm;