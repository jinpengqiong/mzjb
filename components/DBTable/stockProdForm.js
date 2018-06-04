import { Form, Input, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import { inject, observer } from 'mobx-react'

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
          label="分组名称"
        >
          {getFieldDecorator('name', {
            rules: [{
              type: 'string', message: '请输入分组名称!',
            }, {
              required: true, message: '请输入分组名称!',
            }
          ],
          })(
            <Input/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="分组优先级"
        >
          {getFieldDecorator('weight', {
            rules: [{
              type: 'string', message: '请选择分组优先级!',
            }
          ],
          })(
              <Select style={{ width: 80 }} >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
              </Select>
          )}
        </FormItem>
      </Form>
    );
  }
}

const StockProdForm = Form.create(
    {
        mapPropsToFields(props) {
            // console.log('props', props);
            if (props.GroupData) {
                return {
                    name: Form.createFormField({
                        ...props.GroupData.name,
                        value: props.GroupData.name,
                    }),
                    weight: Form.createFormField({
                        ...props.GroupData.weight,
                        value: props.GroupData.weight.toString(),
                    })
                };
            }
        }
    }
)(RegistrationForm);
 export default StockProdForm;