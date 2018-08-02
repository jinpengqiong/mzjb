import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
import Router from 'next/router';
import { inject, observer } from 'mobx-react'
// import { fax } from "react-icons/fa";

@inject('store') @observer
export default class MySider extends React.Component {
    constructor (props){
        super(props);
    }

    handleClick = (e) => {
        // console.log('click ', e.key);
        this.props.store.getCurPagePath(e.key)
    }

    render() {
        return (
            <Layout >
                <Sider
                    trigger={null}
                    width="140px"
                    collapsed={this.props.store.collapsed}
                    style={{ height:'100%', position:'fixed' }}
                >
                    <div className="logo" >
                        <h2 style={{ textAlign:'center', color:'white' }}>
                            <img src='../../static/LOGO.png' style={{ width:20}}/>
                        </h2>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        onClick={this.handleClick}
                        selectedKeys={[this.props.store.curPagePath === ""? "选货" : this.props.store.curPagePath]}>
                        <Menu.Item key="选货">
                            <div onClick={()=>{
                                Router.prefetch('/');
                                Router.push('/')}}>
                                <Icon type="shop" />
                                <span>选货</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="商品">
                            <div onClick={()=>{
                                Router.prefetch('/products');
                                Router.push('/products')
                                this.props.store.getCurPagePath('店铺');
                            }}>
                                <Icon type="appstore" />
                                <span>商品</span>
                            </div>
                        </Menu.Item>
                        {/*<Menu.Item key="素材">*/}
                            {/*<div onClick={()=>{*/}
                                {/*Router.prefetch('/resources');*/}
                                {/*Router.push('/resources')}}>*/}
                                {/*<Icon type="picture" />*/}
                                {/*<span>素材</span>*/}
                            {/*</div>*/}
                        {/*</Menu.Item>*/}
                        <Menu.Item key="订单">
                            <div onClick={()=>{
                                Router.prefetch('/order');
                                Router.push('/order')}}>
                                <Icon type="shopping-cart" />
                                <span>订单</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="设置">
                            <div onClick={()=>{
                                Router.prefetch('/settings');
                                Router.push('/settings')}}>
                                <Icon type="setting" />
                                <span>设置</span>
                            </div>
                        </Menu.Item>
                        {
                            (this.props.store.userRole && this.props.store.userRole.indexOf('admin') !== -1)
                            &&
                            <Menu.Item key="用户">
                                <div onClick={()=>{
                                    Router.prefetch('/userList');
                                    Router.push('/userList')}}>
                                    <Icon type="user" />
                                    <span>用户</span>
                                </div>
                            </Menu.Item>
                        }
                    </Menu>
                </Sider>
                <style jsx>{`
                  .logo {
                    height: 32px;
                    margin: 16px;
                  }
                `}</style>
            </Layout>
        );
    }
}
