import React from 'react';
import { Card, Button, Icon, message, Popconfirm, Pagination } from 'antd';
const { Meta } = Card;
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import ResourUploader from '../FileUploader/resourcesUpload'

const queryShopMedia = `
    query ($page: Int, $pageSize: Int, $shopId: ID!, $type: MediaType) {
        shopMedias(page:$page, pageSize:$pageSize, shopId:$shopId, type:$type){
        totalEntries
        totalPages
        pageNumber
        pageSize
        entries{
          id
          name
          url
          type
        }
      }
    }
    `;

const deleteMedia = `
    mutation ($id:Int!, $shopId: Int!) {
        deleteMedia(id:$id, shopId:$shopId){
            id
            url
    }
}
`;



@inject('store') @observer
class PicList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:null
        };
    }
    componentDidMount() {
        this.getData(1);
    }
    getData = ( page ) => {
        const variables = {
            page, 
            pageSize:10, 
            shopId: localStorage.getItem('shopID'),
            type:'PIC'
        };
        Request.GraphQlRequest(queryShopMedia, variables, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('res',res)
                this.setState({
                    data: res.shopMedias
                })
            }
        )
    }
    confirm(id) {
        Request.GraphQlRequest(deleteMedia, { id, shopId: localStorage.getItem('shopID')}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                    message.success('删除成功！');
                    this.getData(1);
                } 
        ).catch(()=>{message.error('出错了，请重试！')})
      }


    onChange = (pageNumber) =>  {
    this.getData(pageNumber)
    }

    render() {
        const PicData =  this.state.data &&
        this.state.data.entries.map(
        (entry) => {
            return (
            <Card
                key={entry.id}
                hoverable
                style={{ width: 200, margin: 15 }}
                cover={<img alt="example" style={{ width: 200, height:200,textAlign:"center" }} src={entry.url} />}
                extra={
                    <Popconfirm 
                    title="确认要删除吗?" 
                    onConfirm={() =>{this.confirm(parseInt(entry.id))}} 
                    okText="确认"
                    cancelText="取消">
                        <a href="#" >删除</a>
                    </Popconfirm>
            }>
            </Card>
            )
        }
        );
        return (
            <div>
                <ResourUploader refreshData={()=>{ this.getData(1)}}/>
                <div style={{ marginTop: 40 , display: 'flex', justifyContent: 'flex-start', alignContent: 'space-between', flexWrap:'wrap'}} >
                    { PicData }
                </div>
                {
                (this.state.data && this.state.data.totalEntries !==0)
                &&
                <Pagination 
                defaultCurrent={1} 
                current={this.state.data.pageNumber}
                onChange={this.onChange}
                total={this.state.data? this.state.data.totalEntries : 1} 
                style={{ marginLeft: "80%", marginTop: "10px"}}/>
                }
        </div>
        );
    }
}

export default PicList;
