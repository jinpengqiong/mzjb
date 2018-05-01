import { Form, Input, DatePicker, Button } from 'antd';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
import { TwitterPicker } from 'react-color'
import { inject, observer } from 'mobx-react'



const colorData ={
  "COLOR010":"#63b359",
  "COLOR020":"#2c9f67",
  "COLOR030":"#509fc9",
  "COLOR040":"#5885cf",
  "COLOR050":"#9062c0",
  "COLOR060":"#d09a45",
  "COLOR070":"#e4b138",
  "COLOR080":"#ee903c",
  "COLOR081":"#f08500",
  "COLOR082":"#a9d92d",
  "COLOR090":"#dd6549",
  "COLOR100":"#cc463d",
  "COLOR101":"#cf3e36",
  "COLOR102":"#5E6671"
};

@inject('store') @observer
class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          color: '',
        };
      }

  handleColorChange = (color, event) =>{
    this.setState({
      color: color.hex
    })
  }    
  
  // get obj values as array
  getObjectValues(obj){
        var values = [];
        for (var property in obj)
            values.push(obj[property]);
        return values;
    }

  validateTitleName = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value.length>9) {
      callback('请输入9个字以内的卡券名!');
    }
    callback();
  }

  validateBrandName = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value.length>12) {
      callback('请输入12个字以内的商家名称!');
    }
    callback();
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
    
    const rangeConfig = {
        rules: [{ type: 'array', required: true, message: '请选择卡券使用时间间隔!' }],
      };
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="卡券名"
        >
          {getFieldDecorator('title', {
            rules: [{
              type: 'string', message: '请输入卡券名!',
            }, {
              required: true, message: '请输入9个字以内的卡券名!',
            },
            , {
              validator: this.validateTitleName,
            }
          ],
          })(
            <Input placeholder="9个字以内的卡券名"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="商家名称"
        >
          {getFieldDecorator('brandName', {
            rules: [{
              type: 'string', message: '请输入商家名称!',
            }, {
              required: true, message: '请输入12个字以内的商家名称!',
            },
            {
              validator: this.validateBrandName,
            }
          ],
          })(
            <Input placeholder="12个字以内的商家名称"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="卡券使用说明"
        >
          {getFieldDecorator('desc', {
            rules: [{
              type: 'string', message: '请输入卡券使用说明!',
            }, {
              required: true, message: '请输入卡券使用说明!',
            }],
          })(
            <Input placeholder="卡券使用说明"/>
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
        <FormItem
          {...formItemLayout}
          label="卡券库存"
        >
          {getFieldDecorator('quantity', {
            rules: [{
              required: true, message: '请指定卡券库存!',
            }],
          })(
            <Input placeholder="卡券库存数量"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="卡券颜色"
        >
          {getFieldDecorator('color', {
            rules: [{
              required: true, message: '请选择卡券颜色!',
            }],
          })(
            <TwitterPicker 
            color={this.state.color}
            onChange={this.handleColorChange}
            colors={ this.getObjectValues(colorData)}
            />
          )}
        </FormItem>
      </Form>
    );
  }
}

const WrappedForm = Form.create()(RegistrationForm);
 export default WrappedForm;