import { Layout, Menu, Icon } from 'antd';
const { Header } = Layout;
import Router from 'next/router';
const SubMenu = Menu.SubMenu;
import { inject, observer } from 'mobx-react'


@inject('store') @observer
export default class MyHeader extends React.Component {
    constructor (props){
        super(props)
        this.state={
            localStor:null
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
        // console.log('stor', stor)
        stor!= null && this.props.stor.clear();
        Router.push('/login');
        this.props.store.getShopID('');
        this.props.store.getRoleInfo('');
    }
    render() {
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
                            <SubMenu title={<span>你好，{this.state.localStor!= null && localStorage.getItem('nickname')}</span>}>
                                <Menu.Item key="1" >{<span onClick={this.handleLogout} style={{ display: 'block',width:"130px", textAlign:"center"}}><Icon type="logout" />退出登录</span>}</Menu.Item>
                            </SubMenu>
                        </Menu>
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
