import { Form, Icon, Input, Button, message } from 'antd';
import Router from 'next/router';
const FormItem = Form.Item;
import { request } from 'graphql-request'
import uri from '../../utils/uri';



class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        const mutation = `
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
              }
            }
          }
          `;
        const variables = {
            phone: values.userName,
            password: values.password
          };
          request(uri, mutation, variables).then(
            (res)=>{
                console.log('res', res)
                if(!res.errors){
                    message.success('登录成功！');
                    localStorage.setItem('accessToken', res.login.accessToken);
                    localStorage.setItem('accountid', res.login.user.accountid);
                    localStorage.setItem('mzAccountid', res.login.user.mzAccountid);
                    localStorage.setItem('nickname', res.login.user.nickname);
                    localStorage.setItem('role', res.login.user.role);
                    localStorage.setItem('phone', res.login.user.phone);
                    Router.push('/')
                }
            }
        ).catch(()=>{message.error('登录失败！')})
      }
    });
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
          {/* <a href="" style={{float: 'right'}}>现在注册!</a> */}
        </FormItem>
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