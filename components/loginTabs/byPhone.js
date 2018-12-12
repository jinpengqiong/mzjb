import { Form, Icon, Input, Button, Row, Col, message, Modal, Radio } from 'antd';
import Router from 'next/router';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
import { request } from 'graphql-request'
import uri from '../../utils/uri';



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
        is_supplier
        supplier_name
    }
  }
}
`;


class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: false,
      visible:false,
      radioValue:1
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        request(uri, submitByPhone,{ phone: values.phone, code: values.SmsCode}).then(
          res => {
                  localStorage.setItem('role', res.smsLogin.user.role);
                  localStorage.setItem('accessToken', res.smsLogin.accessToken);
                  localStorage.setItem('accountid', res.smsLogin.user.accountid);
                  localStorage.setItem('nickname', res.smsLogin.user.nickname);
                  localStorage.setItem('phone', res.smsLogin.user.phone);
                  if(res.smsLogin.user.supplier_name === '供货商测试分组'){
                    localStorage.setItem('group', '1');
                  } else {
                    localStorage.setItem('group', '0');
                  }
                  if(res.smsLogin.user.is_supplier){
                    this.setState({
                      visible:true
                    })
                  }else {
                    Router.push('/')
                    message.success(`${localStorage.getItem('nickname')} 欢迎回来`);
                  }
              }
        ).catch(()=>{message.error('用户名或密码错误，登录失败！')})
      }
    });
  }

  //check the phone format
  isPoneAvailable(str) {  
    var myreg=/^[1][0-9]{10}$/;  
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
        res => {
          if(res.smsCode.result === "OK"){
            message.success('验证码发送成功！');
          }
        }
      )
    }else{
      message.error("请输入正确手机号");
    }
  }

  onRadioChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      radioValue: e.target.value,
    });
  }

  handleOk = () => {
    const role = localStorage.getItem('role')
    if(this.state.radioValue === 1){
      Router.push('/')
      message.success(`${localStorage.getItem('nickname')} 欢迎回来`);
    }else if(this.state.radioValue === 2){
      localStorage.setItem('role', role+',supplier');
      Router.push('/suppliers')
      message.success(`${localStorage.getItem('nickname')} 欢迎回来`);
    }
  }

  handleCancel = () => {
    this.setState({
      visible:false,
      radioValue:1
    })
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
        <Modal
            title="选择管理页面"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            maskClosable={false}>
          <RadioGroup onChange={this.onRadioChange} value={this.state.radioValue}>
            <Radio value={1}>商品管理页面</Radio>
            <Radio value={2}>供货商订单管理页面</Radio>
          </RadioGroup>
        </Modal>
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