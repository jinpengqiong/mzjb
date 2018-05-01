import React from 'react';
import { Card, Button, Icon, message, Form, Popconfirm, Pagination } from 'antd';
const { Meta } = Card;
const FormItem = Form.Item;
import uri from '../../utils/uri';
import { GraphQLClient } from 'graphql-request'
import { inject, observer } from 'mobx-react'
import PicList from './picList'

@inject('store') @observer
class MyPICS extends React.Component {
    render() {
        return (
            <div>
                <PicList />
        </div>
        );
    }
}

export default MyPICS;
