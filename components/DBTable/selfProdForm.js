import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;
import { inject, observer } from 'mobx-react'
import FileUploader from '../FileUploader/index'

@inject('store') @observer
class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          color: '',
        };
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
            <FileUploader />
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
          label="链接地址"
        >
          {getFieldDecorator('detailUrl', {
            rules: [{
              type: 'string', message: '请输入链接地址!',
            }, {
              required: true, message: '请输入链接地址!',
            }],
          })(
            <Input/>
          )}
        </FormItem>
      </Form>
    );
  }
}

const SelfProdForm = Form.create({
    mapPropsToFields(props) {
        console.log('props', props);
        if (props.productData) {
            return {
                title: Form.createFormField({
                    ...props.productData.title,
                    value: props.productData.title,
                }),
                desc: Form.createFormField({
                    ...props.productData.desc,
                    value: props.productData.desc,
                }),
                price: Form.createFormField({
                    ...props.productData.price,
                    value: props.productData.price,
                }),
                detailUrl: Form.createFormField({
                    ...props.productData.detailUrl,
                    value: props.productData.detailUrl,
                })
            };
        }
    }
})(RegistrationForm);
 export default SelfProdForm;