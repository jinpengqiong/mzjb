import React from 'react';
import Router from 'next/router';
import {Card, Button, Pagination } from 'antd';
import { inject, observer } from 'mobx-react';
import Request from '../../utils/graphql_request';
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
              origin
              itemImgs{
                combine
                created
                medium
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
            data:null
        };
    }

    componentDidMount() {
        if (!localStorage.getItem('accessToken')) {
            Router.push('/login')
        } else{
          this.getData(1);
          this.queryYouxuanProd(1)
        }
    }

    getData = (page) => {
        const variables = {
            page,
            pageSize: 20,
        };
        Request.GraphQlRequest(queryShops, variables, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('res',res);
                this.props.store.getShopID(parseInt(res.myShops.entries[0].id))
                localStorage.setItem('shopID', parseInt(res.myShops.entries[0].id))
            }
        )
    }

    queryYouxuanProd = (page) => {
        Request.GraphQlRequest(queryYouxuanPROD, { pageNo:page, pageSize: 20}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('res',res);
                this.setState({
                    data: res.youxuanProducts
                })
            }
        )
    }

    onChange = (page) => {
        // console.log('page', page)
        this.getData(page);
    }

    render() {
        const youzanPROD = this.state.data && this.state.data.items.map(
            (item) => {
                return (
                    <div className='card_entity' style={{ marginRight:'20px', marginBottom:'20px'}}>
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
                            <Button onClick={
                                () =>{
                                Request.GraphQlRequest(querySpecificPROD, { shopId:parseInt(localStorage.getItem('shopID')), itemId:(item.itemId).toString() }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                                    (res) => {
                                        // console.log('res',res);
                                        this.props.store.changeShown();
                                        this.props.store.changeKey('2');
                                        this.props.store.getProdDetailData(res.getYouxuanProduct)
                                    }
                                )
                            }}>查看详情</Button>
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                )
            }
        )
        console.log('2222', this.state.data)
        return (
            <div>
                <div style={{ background: '#ECECEC', padding: '30px', marginTop: "10px",display:"flex", justifyContent:'flex-start', flexWrap:'wrap'}}>
                    {
                        (this.state.data && JSON.stringify(this.state.data.items) !== '[]')?
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
