import React from 'react';

import { notification } from 'antd';

class Header extends React.Component {

    constructor(props) {

        super(props);

        this.loginOut = this.loginOut.bind(this);

    }

    loginOut() {

        localStorage.clear();

        notification.destroy();

        // browserHistory.push('/login')

    }

    render() {
        return (
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">首页</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        );

    }
}

export default Header;
