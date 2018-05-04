import React from 'react';
import { Card, Button, Icon, message, Popconfirm, Pagination, Checkbox } from 'antd';
const { Meta } = Card;
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import VideoUploader from '../FileUploader/videoupload'

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
class VideoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:null
        };
    }
    componentDidMount() {
        this.getData(1);
    }

    getData( page ){
        const variables = {
            page, 
            pageSize:10, 
            shopId: this.props.store.shopID, 
            type:'VIDEO'
        };
        Request.GraphQlRequest(queryShopMedia, variables, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                this.setState({
                    data: res.shopMedias
                })
            }
        )
    }
    

    confirm(id) {
        Request.GraphQlRequest(deleteMedia, { id, shopId: this.props.store.shopID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                if(!res.errors){
                    message.success('删除成功！');
                    this.getData(1);
                } 
            }
        )
    }


    onChange = (pageNumber) =>  {
    this.getData(pageNumber);
    }

    handleChcekChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
        this.props.store.setChecked(checkedValues)
      }
    render() {
        const VideoData =  this.state.data &&
        this.state.data.entries.map(
        (entry) => {
            return (
                <Card
                key={entry.id}
                hoverable
                style={{ width: 240, margin: 15 }}
                cover={<video alt="example" src={entry.url} controls="control"/>}
                extra={
                    <div>
                        <Checkbox 
                        onChange={() =>{this.handleChcekChange(entry.id)}} 
                        checked={this.props.store.isChecked} 
                        value={entry.id} >
                        选中
                        </Checkbox>
                        <Popconfirm 
                        title="确认要删除吗?" 
                        onConfirm={() =>{this.confirm(parseInt(entry.id))}} 
                        okText="Yes"
                        cancelText="No" >
                            <a href="#" >删除</a>
                        </Popconfirm>
                    </div>} >
                </Card>
                )
            }
        )

        return (
        <div>
            <VideoUploader refreshData={()=>{ this.getData(1)}}/>
            <Checkbox.Group onChange={this.handleChcekChange} style={{display:"inline"}} value={this.props.store.checkedValues}>
            <div 
            style={{ marginTop: 40 , display: 'flex', justifyContent: 'flex-start', alignContent: 'space-between', flexWrap:'wrap'}} >
                {VideoData}
            </div>
            </Checkbox.Group>
            <Pagination 
            defaultCurrent={1} 
            onChange={this.onChange}
            current={this.state.data? this.state.data.pageNumber : 1}
            total={this.state.data? this.state.data.totalEntries : 1} 
            style={{ marginLeft: "80%", marginTop: "10px"}}/>
        </div>
        );
    }
}

export default VideoList;
