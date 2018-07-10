import { Layout, Menu, Icon, Modal, message } from 'antd';
const { Header } = Layout;
import Router from 'next/router';
const SubMenu = Menu.SubMenu;
import { inject, observer } from 'mobx-react'
import SetPassword from './setPassword'
import { request } from 'graphql-request'
import uri from '../../utils/uri';

const resetPassword = `
mutation ($phone:String!, $code: String!, $password: String!) {
  resetPassword(phone:$phone, code: $code, password:$password){
    phone
    nickname
  }
}
`;


@inject('store') @observer
export default class MyHeader extends React.Component {
  constructor (props){
      super(props)
      this.state={
          localStor:null,
          visible:false
      }
  }

  componentDidMount (){
      this.setState({
          localStor : localStorage
      })
  }

  toggle = () => {
      this.props.store.changeCollapse()
  }

  handleLogout = () => {
      const stor = this.state.localStor;
      stor!= null && stor.clear();
      Router.push('/login');
      this.props.store.getShopID('');
      this.props.store.getRoleInfo('');
  }

  handleOk = (e) => {
    this.refs.form.validateFields(
        (err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        request(uri, resetPassword, {phone: values.phone, code:values.code, password:values.password }).then(
            (res) => {
              // console.log('res', res)
              message.success('密码设置成功！');
              this.refs.form.resetFields();
              this.setState({
                visible: false,
              });
            }
        ).catch(
            (err) => {
              console.error(err)
            }
        )

      }
    }
    )
  }

  handleCancel = (e) => {
    this.refs.form.resetFields();
    this.setState({
      visible: false,
    });
  }

  setPassword = () => {
    this.setState({
      visible: true,
    });
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    // const { getFieldDecorator } = this.props.form;

    return (
        <Layout>
            <Header style={{ background: '#fff', padding: 16,marginLeft: this.props.store.collapsed? 15:0 }}>
                <Icon
                    className="trigger"
                    type={this.props.store.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '45px', float: 'right' }}
                >
                    <SubMenu title={<span>{this.state.localStor!= null? '您好，'+ localStorage.getItem('nickname') : null}</span>}>
                        <Menu.Item key="1" >
                          {
                              <span onClick={this.setPassword} style={{ display: 'block',width:"130px", textAlign:"center"}}>
                              <Icon type="lock" />设置密码</span>
                          }
                        </Menu.Item>
                        <Menu.Item key="2" >
                          {
                              <span onClick={this.handleLogout} style={{ display: 'block',width:"130px", textAlign:"center"}}>
                              <Icon type="logout" />退出登录</span>
                          }
                        </Menu.Item>
                    </SubMenu>
                </Menu>
                <Modal
                    title="设置密码"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                  <SetPassword ref="form"/>
                </Modal>
            </Header>
            <style jsx>{`
              .trigger {
                font-size: 22px;
                line-height: 64px;
                cursor: pointer;
                transition: color .3s;
              }bgy  cv
              .trigger:hover {
                color: #1890ff;
              }
            `}</style>
        </Layout>
    );
  }
}
