import React from 'react';
import { message, Tabs, Icon } from 'antd';
import LoginFormWithPhone from '../components/loginTabs/byPhone';
import LoginFormWithAccount from '../components/loginTabs/byAccount';
const TabPane = Tabs.TabPane;
/**
 * 定义Login组件
 */
class Login extends React.Component {
  state = {
    requesting: false, // 当前是否正在请求服务端接口
  };


  render(){
    return (
      <div className="bgImage">
        <div className="login">
          <p>拇指聚宝</p>
          <Tabs defaultActiveKey="1">
            <TabPane tab={<span><Icon type="user" />账号登录</span>} key="1">
              <LoginFormWithAccount />
            </TabPane>
            <TabPane tab={<span><Icon type="mobile" />手机登录</span>} key="2">
              <LoginFormWithPhone />
            </TabPane>
          </Tabs>
        </div>
        <style jsx> { `
          .login {
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -150px 0 0 -150px;
            width: 300px;
            height: 300px;
          }
          .login p {
            font-family: HiraginoSansGB-W3;
            font-size: 40px;
            color: black;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
            text-align: center;
            padding-bottom: 40px;
          }
          html, body {
              width: 100%;
              height: 100%;
          }
          body{
              background-image: radial-gradient(circle,#99CCCC, #7171B7);
            }
        ` }</style>
      </div>
    );
  }
}


export default Login;
