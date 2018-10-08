import { Form, Icon, Input, Button, message, Modal, Radio } from 'antd';
import Router from 'next/router';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
import { request } from 'graphql-request'
import uri from '../../utils/uri';
const accountLogin = `
          mutation ($phone:String!, $password: String!) {
            login(phone:$phone,password:$password){
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
  constructor(props){
    super(props)
    this.state = {
      visible:false,
      radioValue:1
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);

        const variables = {
            phone: values.userName,
            password: values.password
          };
          request(uri, accountLogin, variables).then(
            res => {
                console.log('res', res)
                if(!res.errors){
                    localStorage.setItem('role', res.login.user.role);
                    localStorage.setItem('accessToken', res.login.accessToken);
                    localStorage.setItem('accountid', res.login.user.accountid);
                    localStorage.setItem('mzAccountid', res.login.user.mzAccountid);
                    localStorage.setItem('nickname', res.login.user.nickname);
                    localStorage.setItem('phone', res.login.user.phone);
                    if(res.login.user.supplier_name === '供货商测试分组'){
                      localStorage.setItem('group', '1');
                    }else{
                      localStorage.setItem('group', '0');
                    }
                    if(res.login.user.is_supplier){
                      this.setState({
                        visible:true
                      })
                    }else {
                      Router.push('/')
                      message.success(`${localStorage.getItem('nickname')} 欢迎回来`);
                    }
                }
            }
        ).catch(()=>{message.error('用户名或密码错误，登录失败！')})
      }
    });
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
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '输入用户名或手机号!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="输入用户名或手机号" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="输入密码" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" style={{width:'300px'}}>
            登录
          </Button>
        </FormItem>

        <Modal
            title="选择管理页面"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            okText={'确定'}
            cancelText={'取消'}
        >
          <RadioGroup onChange={this.onRadioChange} value={this.state.radioValue}>
            <Radio value={1}>商品管理页面</Radio>
            <Radio value={2}>供货商订单管理页面</Radio>
          </RadioGroup>
        </Modal>

        <style jsx>{`
            .login-form {
                max-width: 300px;
            }
            .login-form-forgot {
                float: right;
            }
            .login-form-button {
                width: 100%;
            }
        `}</style>
      </Form>
    );
  }
}

const LoginFormWithAccount = Form.create()(NormalLoginForm);
export default LoginFormWithAccount;