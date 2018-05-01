import React from 'react';
import { Card, Button, Icon, message, Form, Popconfirm, Pagination } from 'antd';
const { Meta } = Card;
const FormItem = Form.Item;
import uri from '../../utils/uri';
import { GraphQLClient } from 'graphql-request'
import { inject, observer } from 'mobx-react'
import VideoList from './videoList'


@inject('store') @observer
class MyVideo extends React.Component {
    
    render() {
        return (
        <div>
            <VideoList />
        </div>
        );
    }
}

export default MyVideo;
