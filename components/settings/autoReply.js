import { Col, Row, Button, Modal, message, Icon, Input } from 'antd';
import Request from '../../utils/graphql_request';
import {MegadraftEditor, editorStateFromRaw} from "megadraft";
import SelfReplyForm from './setAutoreplyForm'
import { inject, observer } from 'mobx-react'
import UUIDGen from '../../utils/uuid_generator'

const listAutoreply = `
    query ($shopId: ID!) {
        listAutoreply(shopId:$shopId){
            entries{
              replyBody
              keyWord
              id
            }
            pageNumber
            pageSize
            totalPages
                }
            }
`;

const addAutoreply = `
    mutation ($shopId: Int!,$keyWord:String!, $replyBody: String!) {
        addAutoreply(shopId:$shopId, keyWord:$keyWord, replyBody:$replyBody){
            id
            insertedAt
            keyWord
            replyBody
            updatedAt
        }
    }
`;

const delAutoreply = `
    mutation ($shopId: Int!,$id:ID!) {
        delAutoreply(shopId:$shopId, id:$id){
            id
            replyBody
        }
    }
`;

@inject('store') @observer
export default class AutoReply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            hiddenAdd:false,
            autoReplyData:null,
            position:null
        }
    }

    componentDidMount(){
        this.queryAutoReply()
        if(this.state.autoReplyData && this.state.autoReplyData.entries.length ===5){
            this.setState({
                hiddenAdd: true,
            })
        }
    }

    //query autoReply list
    queryAutoReply = () => {
        Request.GraphQlRequest(listAutoreply, {shopId:parseInt(localStorage.getItem('shopID'))}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                console.log('listAutoreply', res)
                this.setState({
                    autoReplyData: res.listAutoreply
                })
            }
        )
    }

    //set MainTitle
    handleMainTitle = () => {
        this.setState({
            visible:true,
            position:0
        })
    }

    //set SubTitle1
    handleSubTitle1 = (pos) => {
        this.setState({
            visible:true,
            position:pos
        })
    }

    //modal OK action
    handleOk = () => {
        this.refs.form.validateFields((err, values) => {
            if (err) {
                message.error(err);
            }else{
                console.log('values', values)
                const replyBody = [{
                    "title": values.title,
                    "description": values.description,
                    "url": values.url,
                    "picurl": this.props.store.mainImage
                }];
                Request.GraphQlRequest(addAutoreply, {shopId:parseInt(localStorage.getItem('shopID')), keyWord:values.keyWord, replyBody:JSON.stringify(replyBody) }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                    (res) => {
                        // console.log('Autoreply', res)
                        message.success('设置成功！')
                        this.queryAutoReply()
                        this.refs.form.resetFields();
                        document.getElementById('ossfile').innerHTML = '';
                        this.setState({
                            visible:false
                        })
                    }
                )
            }
        })
    }

    //modal cancel action
    handleCancel = () => {
        this.setState({
            visible:false
        })
    }

    // add subtitle
    addSubTitle = () => {
        const position = this.props.store.subTitleArr.length+2;
        const ID= (this.state.autoReplyData && this.state.autoReplyData.entries[position]) &&  this.state.autoReplyData.entries[position].id
        console.log('position',position)
        const subs = (
            <div className='sub1' key={ UUIDGen.uuid(8, 10) }>
                <img style={{width: '100px', textAlign: "left"}}
                     src={ (this.state.autoReplyData.entries && this.state.autoReplyData.entries[position])? (JSON.parse(this.state.autoReplyData.entries[position].replyBody))[0].picurl : "http://iph.href.lu/100x100?text=副图片"}
                     alt="封面"/>
                <span>
                    { (this.state.autoReplyData.entries && this.state.autoReplyData.entries[position])? (JSON.parse(this.state.autoReplyData.entries[position].replyBody))[0].title : "副标题"}
                </span>
                <span className='subCover1'>
                    <Button type='primary' onClick={()=>{this.handleSubTitle1(position)}}>设置副标题</Button>
                    <Button type='primary' style={{ marginLeft:"10px"}} onClick={()=>{this.deleteSubTitle1(ID)}}>删除</Button>
                </span>
            </div>
        );
        this.props.store.addSUbtitle(subs)
        if (this.props.store.subTitleArr.length === 3) {
            this.setState({
                hiddenAdd: true,
            })
        }
    }

    //delete one autoreply
    deleteSubTitle1 = (ID) =>{
        Request.GraphQlRequest(delAutoreply, {shopId:parseInt(localStorage.getItem('shopID')), id:ID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('Autoreply', res)
                message.success('删除成功！')
                this.queryAutoReply()
            }
        )
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <div style={{ width:'300px'}}>
                            <p>关键词：<Input/></p>
                            <div className='main' key='main'>
                                <img style={{ width:'300px', height:"200px"}}
                                     src="http://iph.href.lu/300x200?text=封面" alt="封面"/>
                                <span style={{ height:"20px", width:"300px", textAlign:"center",position:"absolute", top:"180px", left:"0px", background:'#fff'}}>
                                    { (this.state.autoReplyData && this.state.autoReplyData.entries[0])? (JSON.parse(this.state.autoReplyData.entries[0].replyBody))[0].title : "封面标题"}
                                </span>
                                <span className='cover'>
                                    <Button type='primary' onClick={this.handleMainTitle}>设置主标题</Button>
                                    <Button type='primary' style={{ marginLeft:"10px"}} onClick={()=>{this.deleteSubTitle1(this.state.autoReplyData.entries[0] ?this.state.autoReplyData.entries[0].id:null)}}>删除</Button>
                                </span>
                            </div>
                            <div className='sub1' key='sub1'>
                                <img style={{ width:'100px', textAlign:"left"}}
                                     src={ (this.state.autoReplyData && this.state.autoReplyData.entries[1])? (JSON.parse(this.state.autoReplyData.entries[1].replyBody))[0].picurl : "http://iph.href.lu/100x100?text=副图片"}
                                     alt="封面"/>
                                <span>
                                    { (this.state.autoReplyData && this.state.autoReplyData.entries[1])? (JSON.parse(this.state.autoReplyData.entries[1].replyBody))[0].title : "副标题"}
                                </span>
                                <span className='subCover1'>
                                    <Button type='primary' onClick={this.handleSubTitle1}>设置副标题</Button>
                                    <Button type='primary' style={{ marginLeft:"10px"}} onClick={()=>{this.deleteSubTitle1(this.state.autoReplyData.entries[1] ?this.state.autoReplyData.entries[0].id:null)}}>删除</Button>
                                </span>
                            </div>
                            {
                                this.props.store.subTitleArr.toJS()
                            }
                            {
                                !this.state.hiddenAdd
                                &&
                                <div
                                    onClick={this.addSubTitle}
                                    style={{ float: "left",width:'300px', textAlign:"center", lineHeight:"100px", height:'100px', border:"1px dashed black"}}
                                >
                                    <Icon type="plus" />
                                </div>
                            }
                        </div>
                        <Button type='primary' style={{ marginLeft:"100px", marginTop:"15px"}}>提交</Button>
                    </Col>
                    <Modal
                        title="设置"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <SelfReplyForm ref='form'/>
                    </Modal>
                    <Col span={6} offset={1}>
                        <p>已创建的回复列表：</p>
                    </Col>
                </Row>
                <style jsx>{
                    `
                    .main{ width: 300px; height: 220px; position: relative; overflow: hidden}
                    .cover Button { margin: 60px auto; }
                    .cover { width: 300px; height: 220px; background: rgba(224, 226, 229, 0.7); position: absolute; left: 0px; top: 0px; text-align: center; color: #ffffff; transform-origin: right bottom; -webkit-transform-origin: right bottom; -moz-transform-origin: right bottom; -webkit-transform-origin: right bottom; -moz-transform-origin: right bottom; transform: rotate(90deg); -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); transition: all 0.35s; -webkit-transition: all 0.35s; -moz-transition: all 0.35s; }
                    .main:hover .cover { transform: rotate(0deg); -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); }

                    .sub1{ width: 300px; height: 100px; position: relative; overflow: hidden}
                    .subCover1 Button { margin: 25px auto; }
                    .subCover1 { width: 300px; height: 100px; background: rgba(224, 226, 229, 0.7); position: absolute; left: 0px; top: 0px; text-align: center; color: #ffffff; transform-origin: right bottom; -webkit-transform-origin: right bottom; -moz-transform-origin: right bottom; transform: rotate(90deg); -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); transition: all 0.35s; -webkit-transition: all 0.35s; -moz-transition: all 0.35s; }
                    .sub1:hover .subCover1 { transform: rotate(0deg); -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); }
                    `
                }
                </style>
            </div>
        )
    }
}
