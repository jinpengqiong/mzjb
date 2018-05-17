import React from 'react';
import Router from 'next/router';
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
            detailUrl:this.props.store.ProdDetailData.item.itemImgs[0].url,
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
            detailUrl:this.props.store.ProdDetailData.item.itemImgs[0].url,
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
            return (
                <div>
                    <Row>
                        <Col span={10} offset={2}>
                            <img src={this.props.store.ProdDetailData.item.itemImgs[0].url} style={{ width:"350px"}}/>
                        </Col>
                        <Col span={12}>
                            <h3>{this.props.store.ProdDetailData.item.title}</h3>
                            <p>价格：{'¥'+this.props.store.ProdDetailData.item.price}</p>
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
                </div>
            )
        }else{
            return null
        }
    }
}
