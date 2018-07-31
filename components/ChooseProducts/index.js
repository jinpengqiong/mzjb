import React from 'react';
import Router from 'next/router';
import {Card, Button, Pagination } from 'antd';
import { inject, observer } from 'mobx-react';
import Request from '../../utils/graphql_request';
import isEmpty from 'lodash/isEmpty';
const { Meta } = Card;

const queryShops = `
      query ($page:Int, $pageSize: Int) {
        myShops(page:$page,pageSize:$pageSize){
          totalEntries
          totalPages
          pageNumber
          pageSize
          entries{
              desc
              id
              name
              phone
              mainImage
              bizTimeEnd
              bizTimeStart
              facilities
              categories{
                name
                id
              }
          }
        }
      }
      `;

const queryYouxuanPROD = `
      query ($orderBy: String, $pageNo: Int, $pageSize: Int, $q: String) {
        youxuanProducts(orderBy:$orderBy,pageNo:$pageNo, pageSize:$pageSize, q:$q){
          count
          items{
              itemId
              detailUrl
              item_no
              price
              title
              quantity
              itemImgs{
                thumbnail
                url
              }
          }
        }
      }
      `;

const querySpecificPROD = `
      query ($shopId: Int!, $itemId:String!) {
        getYouxuanProduct(shopId:$shopId, itemId:$itemId){
            alreadyExist
            item{
              price
              itemId
              itemType
              detailUrl
              itemNo
              createTime
              itemType
              quantity
              title
              desc
              itemNo
              num
              postFee
              soldNum
              itemImgs{
                medium
                thumbnail
              }
            }
          }
        }
      `;

const queryYouzanProducts = `
      query ($orderBy: String, $pageNo: Int, $pageSize: Int, $q: String,$tagId: Int){
        youzanProducts(orderBy:$orderBy,pageNo:$pageNo, pageSize:$pageSize, q:$q, tagId:$tagId){
              count
              items{
                  itemId
                  detailUrl
                  item_no
                  price
                  title
                  quantity
                  itemImgs{
                    thumbnail
                    url
              }
          }
        }
      }
      `;


@inject('store') @observer
export default class ChooseProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:null,
            shopID:null
        };
    }

    componentDidMount() {
        if (!localStorage.getItem('accessToken')) {
            Router.push('/login')
        } else{
          if(!localStorage.getItem('shopID') ){
              this.getData(1)
          }
          if(this.props.store.chooseProdKey === '0'){
            this.queryYouxuanProd(1)
          }else{
            this.queryYouZanProd(1, parseInt(this.props.tagId))
          }
        }
    }

    componentWillReceiveProps(nextProps, nextState){
      // console.log('nextProps', nextProps)
      if(this.props.store.chooseProdKey !== '0'){
        this.queryYouZanProd(1, parseInt(nextProps.tagId))
      }
    }

    getData = (page) => {
        const variables = {
            page,
            pageSize: 20,
        };
        Request.GraphQlRequest(queryShops, variables, `Bearer ${localStorage.getItem('accessToken')}`).then(
            res => {
                // console.log('queryShops',res);
                this.props.store.getShopID(parseInt(res.myShops.entries[0].id))
                localStorage.setItem('shopID', parseInt(res.myShops.entries[0].id))
                localStorage.setItem('OriginalID', parseInt(res.myShops.entries[0].id))
            }
        ).catch(err => console.log('getData err',err))
    }

    queryYouxuanProd = (page) => {
        Request.GraphQlRequest(queryYouxuanPROD, { pageNo:page, pageSize: 20}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            res => {
                // console.log('queryYouXuanProd',res);
                res.youxuanProducts.items.map(
                    (item) => {
                        item.price = (item.price/100).toFixed(2)
                    }
                )
                this.setState({
                    data: res.youxuanProducts
                })
            }
        ).catch(err => console.log('queryYouxuanProd err',err))
    }

    queryYouZanProd = (page, tagID) => {
      if(tagID){
        Request.GraphQlRequest(queryYouzanProducts, { pageNo:page, pageSize: 20, tagId:tagID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            res => {
              // console.log('queryYouZanProd',res);
              res.youzanProducts.items.map(
                  (item) => {
                    item.price = (item.price/100).toFixed(2)
                  }
              )
              this.setState({
                data: res.youzanProducts
              })
            }
        ).catch(err => console.log('queryYouZanProd err',err))
      }
    }

  querySpecificPROD = (ID) => {
    Request.GraphQlRequest(querySpecificPROD, { shopId: parseInt(localStorage.getItem('shopID')), itemId: ID.toString() }, `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
          res.getYouxuanProduct.item.price = (res.getYouxuanProduct.item.price/100).toFixed(2);
          res.getYouxuanProduct.tabId = this.props.store.chooseProdKey
          this.props.store.switchTabShown(true);
          this.props.store.changeKey('-1');
          this.props.store.getProdDetailData(res.getYouxuanProduct)
          console.log('querySpecificPROD', res)
        }
    ).catch(err => console.log('querySpecificPROD err',err))
  }

    onChange = (page) => {
        this.getData(page);
    }

    render() {
        const youzanPROD = this.state.data && this.state.data.items.map(
            item => {
                return (
                    <div className='card_entity' style={{ marginRight:'20px', marginBottom:'20px'}} key={item.itemId}>
                        <Card
                            key={item.itemId}
                            style={{ width: '220px', height: '320px' }}
                            cover={<img alt="example" src={item.itemImgs[0].thumbnail} style={{ width:'220px'}}/>}
                        >
                            <Meta
                                title={item.title}
                                description={'¥'+item.price}
                            />
                        </Card>
                        <div className="cover">
                            <Button onClick={ () => {this.querySpecificPROD(item.itemId)} }>查看详情</Button>
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                )
            }
        )
        return (
            <div>
                <div style={{ background: '#ECECEC', padding: '30px', marginTop: "10px", display:"flex", justifyContent:'flex-start', flexWrap:'wrap'}}>
                    {
                        (this.state.data && !isEmpty(this.state.data.items))?
                            youzanPROD
                            :
                            '暂无'
                    }
                </div>
                {
                (this.state.data && this.state.data.count !==0)
                &&
                <Pagination
                defaultCurrent={1}
                pageSize={20}
                onChange={this.onChange}
                total={this.state.data? this.state.data.count : 1}
                style={{ float: "right", marginTop: "10px"}}/>
                }
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
                    .card_entity{ float: left; width: 220px; height: 320px;position: relative; overflow: hidden; }
                    .cover Button { margin: 30px auto; }
                    .cover { width: 220px; height: 320px; background: rgba(224, 226, 229, 0.7); position: absolute; left: 0px; top: 0px; text-align: center; color: #ffffff; transition:all 0.5s ease 0s; -webkit-transition:all 0.5s ease 0s; -moz-transition:all 0.5s ease 0s;transform:translateY(320px); -webkit-transform:translateY(320px); -moz-transform:translateY(320px);}
                    .cover p { margin-top: 10px; font-size: 14px; }
                    .card_entity:hover .cover { transform:translateY(0px); -webkit-transform:translateY(0px); -moz-transform:translateY(0px)}
                    `
                }
                </style>
            </div>
        )
    }
}
