import React from 'react';
import Router from 'next/router';
import {Card, Carousel, Tag } from 'antd';
import { inject, observer } from 'mobx-react';
import Request from '../../utils/graphql_request';
const { Meta } = Card;


@inject('store') @observer
export default class ChooseProducts extends React.Component {
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
    onChange(a, b, c) {
        console.log(a, b, c);
    }

    render() {
        return (
            <div>
                <Carousel afterChange={this.onChange}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <div style={{ background: '#ECECEC', padding: '30px', marginTop: "10px",display:"flex", justifyContent:'flex-start', flexWrap:'wrap'}}>
                            <Card
                                style={{ width: 200, marginRight:'20px' }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                extra={<a href="#">商品详情</a>}
                            >
                                <Meta
                                    title="Europe Street beat"
                                />
                                <Tag color="green" style={{ float:"right", marginTop:"10px"}}>已添加</Tag>
                            </Card>
                    </div>
                <style jsx>{
                    `
                    .ant-carousel .slick-slide {
                      text-align: center;
                      height: 240px;
                      line-height: 160px;
                      background: #364d79;
                      overflow: hidden;
                    }

                    .ant-carousel .slick-slide h3 {
                      color: #fff;
                    }
                    `
                }
                </style>
            </div>
        )
    }
}
