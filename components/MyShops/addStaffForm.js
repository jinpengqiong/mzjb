import { Form, Input, DatePicker, Button } from 'antd';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
import { TwitterPicker } from 'react-color'
import { inject, observer } from 'mobx-react'

@inject('store') @observer
class RegistrationForm extends React.Component {
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
          label="选择用户"
        >
          {getFieldDecorator('userId', {
            rules: [{
              type: 'string', message: '请选择一个用户!',
            }, {
              required: true, message: '请选择一个用户!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="角色"
        >
          {getFieldDecorator('role', {
            rules: [{
              type: 'string', message: '请选择用户角色!',
            }, {
              required: true, message: '请选择用户角色 !',
            }],
          })(
            <Input/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="用户名称"
        >
          {getFieldDecorator('desc', {
            rules: [{
              type: 'string', message: '请输入用户名称!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="图片链接"
        >
          {getFieldDecorator('logoUrl', {
            rules: [{
              type: 'string', message: '请输入商户logo图片链接!',
            }, {
              required: true, message: '请输入商户logo图片链接!',
            }],
          })(
            <Input placeholder="商户logo图片链接"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="卡券使用提醒"
        >
          {getFieldDecorator('notice', {
            rules: [{
              type: 'string', message: '请输入卡券使用提醒!',
            }, {
              required: true, message: '卡券使用提醒!',
            }],
          })(
            <Input placeholder="卡券使用提醒"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="使用时间范围"
        >
          {getFieldDecorator('range-time-picker', rangeConfig)(
            <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ width: "335px"}} />
          )}
        </FormItem>
      </Form>
    );
  }
}

const AddStaffForm = Form.create()(RegistrationForm);
export default AddStaffForm;