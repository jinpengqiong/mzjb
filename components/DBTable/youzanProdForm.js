import { Form, Input } from 'antd';
const FormItem = Form.Item;
import { inject, observer } from 'mobx-react'
import YouzanUploader from '../FileUploader/youzanUpload'
import dynamic from 'next/dynamic'
const RichText = dynamic(import('../richText/richText'))

@inject('store') @observer
class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        // console.log('www',this.props.productData.desc)
        if(this.props.productData){
            this.props.store.getRichTextContent(this.props.productData.desc)
        }
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
      console.log('props', this.props);
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
                    label={
                      <div style={{ display:'inline-block'}}>
                        <span style={{ color:'red'}}>*</span>
                        <span>{' '}商品图</span>
                      </div>
                    }
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
                    label="单价"
                >
                    {getFieldDecorator('price', {
                        rules: [{
                            type: 'string', message: '请输入单价!',
                        }, {
                            required: true, message: '请输入单价!',
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>

                {
                    this.props.updateState !== '更新商品'
                    &&
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
                }
                <FormItem
                    {...formItemLayout}
                    label="库存"
                >
                  {getFieldDecorator('quantity')(
                      <Input/>
                  )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="详情"
                >
                    {getFieldDecorator('detail_Info')(
                        <RichText />
                    )}
                </FormItem>
            </Form>
        );
    }
}

const YouzanProdForm = Form.create(
    {
        mapPropsToFields(props) {
            if (props.productData) {
                return {
                    title: Form.createFormField({
                        ...props.productData.title,
                        value: props.productData.title,
                    }),
                    price: Form.createFormField({
                        ...props.productData.price,
                        value: (parseInt(props.productData.price)/100).toFixed(2),
                    }),
                    quantity: Form.createFormField({
                        ...props.productData.quantity,
                        value: props.productData.quantity,
                    })
                };
            }
        }
    }
)(RegistrationForm);
export default YouzanProdForm;