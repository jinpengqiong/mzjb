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
        if(this.props.store.ProdDetailData){
            return (
                <div>
                    <Row>
                        <Col span={6} offset={2}>
                            <img src={this.props.store.ProdDetailData.item.itemImgs[0].url} style={{ width:"260px"}}/>
                        </Col>
                        <Col span={16}>
                            <h3>{this.props.store.ProdDetailData.item.title}</h3>
                            <p>价格：{'¥'+this.props.store.ProdDetailData.item.price}</p>
                            <p>总库存：{this.props.store.ProdDetailData.item.quantity}</p>
                            {
                                this.props.store.ProdDetailData.alreayExist !==null?
                                    <Button type="primary" disabled>已添加到店铺</Button>
                                    :
                                    <div>
                                        <Button type="primary" style={{ marginRight: '15px'}}>上架到店铺</Button>
                                        <Button type="primary">添加到仓库</Button>
                                    </div>
                            }

                        </Col>
                    </Row>
                </div>
            )
        }else{
            return
        }
    }
}
