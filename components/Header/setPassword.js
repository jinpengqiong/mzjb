import { Form, Input, Button, Row, Col, Icon, message } from 'antd';
const FormItem = Form.Item;
import { inject, observer } from 'mobx-react'
import { request } from 'graphql-request'
import uri from '../../utils/uri';


const querySmsCode = `
  mutation($phone: String!) {
    smsCode(phone:$phone){
      result
  }
}`;

@inject('store') @observer
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: false
    };
  }
  componentDidMount(){

  }

  getSmsCode = () => {
    const values = this.props.form.getFieldsValue()
    if(this.isPoneAvailable(values.phone)){
      this.countDown();
      request(uri, querySmsCode, {phone: values.phone}).then(
          (res) => {
            if(res.smsCode.result === "OK"){
              message.success('验证码发送成功！');
            }
          }
      )
    }else{
      message.error("请输入正确手机号");
    }
  }

  isPoneAvailable(str) {
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(str)) {
      return false;
    } else {
      return true;
    }
  }

  countDown = () => {
    let count = 59;
    this.setState({ count });
    this.interval = setInterval(() => {
      count -= 1;
      this.setState({ count });
      if (count === 0) {
        this.setState({ count: false });
        clearInterval(this.interval);
      }
    }, 1000);
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
    const { count } = this.state;

    return (
        <Form>
          <FormItem
              {...formItemLayout}
              label="手机号码"
          >
            {getFieldDecorator('phone', {
              rules: [{
                type: 'string', message: '请输入手机号码!',
              }, {
                required: true, message: '请输入手机号码!',
              }
              ],
            })(
                <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
            )}
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="短信验证码"
          >
            <Row gutter={16}>
              <Col span={15}>
                {getFieldDecorator('code', {
                  rules: [{ required: true, message: '请输入验证码!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入验证码" />
                )}
              </Col>
              <Col span={9}>
                <Button disabled={count} onClick={this.getSmsCode}>{count ? `${count} s` : '获取验证码'}</Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="登录密码"
          >
            {getFieldDecorator('password', {
              rules: [{
                type: 'string', message: '请输入登录密码!',
              }, {
                required: true, message: '请输入登录密码!',
              }],
            })(
                <Input prefix={<Icon type="hdd" style={{ color: 'rgba(0,0,0,.25)' }} />} type='password'/>
            )}
          </FormItem>
        </Form>
    );
  }
}

const SetPassword = Form.create()(RegistrationForm);
export default SetPassword;