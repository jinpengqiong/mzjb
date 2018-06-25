import React from 'react';
import Router from 'next/router';
import { Carousel } from 'antd';
import { Button, Col, Row, message } from 'antd';
import { inject, observer } from 'mobx-react';
import Request from '../../utils/graphql_request';

const createProduct = `
      mutation ($baseinfo: ProductBaseinfo!, $itemId: String, $shopId: ID!, $type: ProductType!, $youzan: ProductYouzanArgs) {
        createProduct(baseinfo:$baseinfo, itemId:$itemId, shopId:$shopId, type:$type,youzan:$youzan){
            detailUrl
            id
            insertedAt
            itemId
            mainImage
            price
            title
        }
    }
  `;

@inject('store') @observer
export default class ProdDetails extends React.Component {
    componentDidMount() {
        if (!localStorage.getItem('accessToken')) {
            Router.push('/login')
        }
    }

    addToShop = () => {
        const baseinfo = {
            desc: this.props.store.ProdDetailData.item.title,
            detailUrl:this.props.store.ProdDetailData.item.detailUrl,
            isDisplay:true,
            mainImage:this.props.store.ProdDetailData.item.itemImgs[0].thumbnail,
            price:this.props.store.ProdDetailData.item.price,
            title:this.props.store.ProdDetailData.item.title
        };
        Request.GraphQlRequest(createProduct, {
            baseinfo,
            itemId:(this.props.store.ProdDetailData.item.itemId).toString(),
            shopId:localStorage.getItem('shopID'),
            type:'YOUXUAN'
        }, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                this.props.store.changeIsExisted();
                message.success('添加成功！')
            }
        ).catch(()=>{message.error('出错了，请联系管理员！')})
    }

    addToStock  = () => {
        const baseinfo = {
            desc: this.props.store.ProdDetailData.item.title,
            detailUrl:this.props.store.ProdDetailData.item.detailUrl,
            isDisplay:false,
            mainImage:this.props.store.ProdDetailData.item.itemImgs[0].thumbnail,
            price:this.props.store.ProdDetailData.item.price,
            title:this.props.store.ProdDetailData.item.title
        };
        Request.GraphQlRequest(createProduct, {
            baseinfo,
            itemId:(this.props.store.ProdDetailData.item.itemId).toString(),
            shopId:localStorage.getItem('shopID'),
            type:'YOUXUAN'
        }, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('res',res);
                this.props.store.changeIsExisted();
                message.success('添加成功！')
            }
        ).catch(()=>{message.error('出错了，请联系管理员！')})
    }

    render() {
        if(this.props.store.ProdDetailData){
            const imgsItems = this.props.store.ProdDetailData.item.itemImgs.map(
                (item) => {
                   return(
                       <div>
                           <img src={item.medium} style={{ width:'450px' }}/>
                       </div>
                   )
                }
            )
            return (
                <div>
                    <Row>
                        <Col span={10} offset={1}>
                            <Carousel autoplay effect="fade" speed='4000'>
                                { imgsItems }
                            </Carousel>
                        </Col>
                        <Col span={11} offset={1}>
                            <h2>{this.props.store.ProdDetailData.item.title}</h2>
                            <p>价格：{'¥'+this.props.store.ProdDetailData.item.price}</p>
                            <p>运费： {this.props.store.ProdDetailData.item.postFee ===0? "包邮" : '¥'+(this.props.store.ProdDetailData.item.postFee/100).toFixed(2) }</p>
                            <p>总销量：{ this.props.store.ProdDetailData.item.soldNum + '件'}</p>
                            <p>总库存：{this.props.store.ProdDetailData.item.quantity}</p>
                            {/*<p>创建时间：{this.props.store.ProdDetailData.item.createTime}</p>*/}
                            {
                                (this.props.store.ProdDetailData && this.props.store.ProdDetailData.alreadyExist)?
                                    <Button type="primary" disabled>已添加到店铺</Button>
                                    :
                                    <div>
                                        <Button type="primary" onClick={this.addToShop} style={{ marginRight: '15px'}}>上架到店铺</Button>
                                        <Button type="primary" onClick={this.addToStock}>添加到仓库</Button>
                                    </div>
                            }
                        </Col>
                    </Row>
                    <style jsx>{`
                        .ant-carousel .slick-slide {
                          text-align: center;
                          height: 500px;
                          line-height: 400px;
                          background: transparent;
                          overflow: hidden;
                        }
                    `}
                    </style>
                </div>
            )
        }else{
            return null
        }
    }
}
