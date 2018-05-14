import React from 'react';
import Router from 'next/router';
import { Button, Col, Row } from 'antd';
import { inject, observer } from 'mobx-react';
import Request from '../../utils/graphql_request';


@inject('store') @observer
export default class ProdDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        if (!localStorage.getItem('accessToken')) {
            Router.push('/login')
        }
        // else{
        //   this.getData();
        // }
    }

    // getData() {
    //     const variables = {
    //         page: 1,
    //         pageSize: 5,
    //     };
    //     Request.GraphQlRequest(queryShops, variables, `Bearer ${localStorage.getItem('accessToken')}`).then(
    //         (res) => {
    //             // console.log('res',res);
    //             this.setState({
    //                 data: res.myShops.entries
    //             })
    //         }
    //     )
    // }

    render() {
        return (
            <div>
                <Row>
                    <Col span={6} offset={2}>
                        <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ width:"200px"}}/>
                    </Col>
                    <Col span={16}>
                        <h3>韩国mog one电子声波驱蚊手环 模拟蚊子讨厌的声音丨多项安全认证丨长时续航</h3>
                        <Button type="primary" style={{ marginRight: '15px'}}>上架到店铺</Button>
                        <Button type="primary">添加到仓库</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
