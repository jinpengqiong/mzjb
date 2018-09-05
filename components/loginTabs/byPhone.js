import { Form, Icon, Input, Button, Checkbox, Row, Col, message } from 'antd';
import Router from 'next/router';
const FormItem = Form.Item;
import { request, GraphQLClient } from 'graphql-request'
import uri from '../../utils/uri';
// const uri = 'http://shop.muzhiyun.cn/api/graphiql';
const querySmsCode = `
  mutation($phone: String!) {
    smsCode(phone:$phone){
      result
  }
}`;
const submitByPhone = `
mutation ($phone:String!, $code: String!) {
  smsLogin(phone:$phone, code: $code){
    accessToken
    user  {
        id
        updatedAt
        accountid
        nickname
        phone
        role
        mzAccountid
    }
  }
}
`;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: false
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        request(uri, submitByPhone,{ phone: values.phone, code: values.SmsCode}).then(
          res => {
                  message.success('登录成功！')
                  localStorage.setItem('accessToken', res.smsLogin.accessToken);
                  localStorage.setItem('accountid', res.smsLogin.user.accountid);
                  localStorage.setItem('nickname', res.smsLogin.user.nickname);
                  localStorage.setItem('role', res.smsLogin.user.role);
                  localStorage.setItem('phone', res.smsLogin.user.phone);
                  localStorage.setItem('lgTime', new Date().getTime());
                  if(res.login.user.role.indexOf('supplier') === -1){
                    Router.push('/')
                  }else {
                    Router.push('/suppliers')
                  }
              }
        ).catch(()=>{message.error('用户名或密码错误，登录失败！')})
      }
    });
  }
  //check the phone format
  isPoneAvailable(str) {  
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
    if (!myreg.test(str)) {  
        return false;  
    } else {  
        return true;  
    }  
  }
  //set code button graify
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

  componentWillUnmount() {
    clearInterval(this.interval);
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

  render() {
    const { getFieldDecorator } = this.props.form;
    const { count } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入手机号!' }],
          })(
            <Input prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" />
          )}
        </FormItem>
        <FormItem>
          <Row gutter={16}>
            <Col span={15}>
              {getFieldDecorator('SmsCode', {
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
        <FormItem>
          <Row>
            <Col span={24}>
              <Button type="primary" htmlType="submit" style={{width:'300px'}}>
                登录
              </Button>
              {/* <a href="" style={{float: 'right'}}>现在注册!</a> */}
            </Col>
          </Row>
        </FormItem>
        {/* <style jsx>{`
            .login-form {
                max-width: 300px;
            }
            .login-form-forgot {
                float: right;
            }
            .login-form-button {
                width: 100%;
            }
        `}</style> */}
      </Form>
    );
  }
}

const LoginFormWithPhone = Form.create()(NormalLoginForm);
export default LoginFormWithPhone;