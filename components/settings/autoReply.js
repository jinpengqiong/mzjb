import { Col, Row, Button, Modal, message, Icon, Input, Pagination, Popconfirm,Tooltip } from 'antd';
import Request from '../../utils/graphql_request';
import SelfReplyForm from './setAutoreplyForm'
import { inject, observer } from 'mobx-react'
import UUIDGen from '../../utils/uuid_generator'
import isEmpty from 'lodash/isEmpty';

const listAutoreply = `
    query ($shopId: ID!,$page: Int, $pageSize: Int) {
        listAutoreply(shopId:$shopId, page:$page, pageSize:$pageSize){
            entries{
              replyBody
              keyWord
              id
            }
            pageNumber
            totalPages
            totalEntries
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
            keyWord:''
        }
    }

    componentDidMount(){
        this.queryAutoReply(1)
        if(this.state.autoReplyData && this.state.autoReplyData.entries.length ===5){
            this.setState({
                hiddenAdd: true,
            })
        }
    }

    //query autoReply list
    queryAutoReply = (page) => {
        Request.GraphQlRequest(listAutoreply, {shopId:parseInt(localStorage.getItem('shopID')), page, pageSize: 3}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('listAutoreply', res.listAutoreply)
                this.setState({
                    autoReplyData: res.listAutoreply
                })
            }
        ).catch(err => console.error(err))
    }

    //set MainTitle
    handleMainTitle = () => {
        this.setState({
            visible:true,
        })
    }

    //set SubTitle1
    handleSubTitle1 = () => {
        if(isEmpty(this.props.store.replyBody)){
            message.error('请先设置封面图文！')
        }else{
            this.setState({
                visible:true,
            })
        }
    }

    //modal OK action
    handleOk = () => {
        this.refs.form.validateFields((err, values) => {
            if (err) {
                message.error(err);
            }else{
                // console.log('values', values)
                const replyBody = {
                    "title": values.title,
                    "description": values.description,
                    "url": values.url,
                    "picurl": this.props.store.mainImage
                };
                this.props.store.addReplyBody(replyBody); 
                this.refs.form.resetFields();
                document.getElementById('ossfile').innerHTML = ''; 
                this.setState({
                    visible:false
                })
            }
        })
    }

    //handle submit
    handleSubmit = () => {
        if(this.state.keyWord==='' ){
            message.error('请输入关键词后，再提交！')
        }else if( isEmpty(this.props.store.replyBody)){
            message.error('请设置图文后，再提交！')
        }else{
            Request.GraphQlRequest(addAutoreply, {shopId:parseInt(localStorage.getItem('shopID')), keyWord:this.state.keyWord, replyBody:JSON.stringify(this.props.store.replyBody) }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                res => {
                    // console.log('Autoreply', res)
                    message.success('设置成功！')
                    this.setState({
                        keyWord: ''
                    })
                    this.queryAutoReply(1)
                    this.props.store.clearReplyBody()
                }
            ).catch(err => console.error(err))
        }
    }
    //modal cancel action
    handleCancel = () => {
        this.setState({
            visible:false
        })
    }

    //delete one autoreply
    confirm = (ID) =>{
        Request.GraphQlRequest(delAutoreply, {shopId:parseInt(localStorage.getItem('shopID')), id:ID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('Autoreply', res)
                message.success('删除成功！')
                this.queryAutoReply(1)
            }
        ).catch(err => console.error(err))
    }

    // save keyword
    onKeywordChange = (e) => {
        this.setState({
            keyWord: e.target.value
        })
    }
    //query paged qutoreply list
    onPageChange = (page) => {
        // console.log('page', page)
        this.queryAutoReply(page)
    }

    render() {
        const rBodies = !isEmpty(this.props.store.replyBody)?  this.props.store.replyBody.toJS(): null;
        // console.log('111',this.state.autoReplyData);
        const autoReplyLists = this.state.autoReplyData && this.state.autoReplyData.entries.map(
            (item) => {
                const ReplyBody = JSON.parse(item.replyBody)
                return (
                    <div style={{ width:'300px', marginLeft:"30px", marginTop:"25px", border:'2px solid #ECECEC'}} id={item.id} key={UUIDGen.uuid(8, 10)}>
                        <div style={{ marginTop:"10px", marginBottom:'10px'}}>
                            <p>关键词：<span style={{color:"red" }}>{item.keyWord}</span>
                              {
                                localStorage.getItem('shopID') === localStorage.getItem('OriginalID')
                                  &&
                                  <Tooltip title="删除">
                                      <Popconfirm title="确定要删除吗?" onConfirm={()=>{this.confirm(item.id)}} >
                                          <Icon type="delete" style={{float:"right", marginRight:'10px'}}/>
                                      </Popconfirm>
                                  </Tooltip>
                              }
                            </p>
                        </div>
                        <div className='main' key={UUIDGen.uuid(8, 10)}>
                            <img style={{ width:'295px', height:"200px"}}
                                 src={ReplyBody[0].picurl}
                                 alt="封面"/>
                            <span style={{ height:"20px", width:"300px", textAlign:"center",position:"absolute", top:"180px", left:"0px", background:'#fff'}}>
                                    { ReplyBody[0].title}
                            </span>
                        </div>
                        {
                            ReplyBody[1]
                            &&
                            <div className='sub1' key={UUIDGen.uuid(8, 10)}>
                                <Row>
                                    <Col span={8}>
                                        <img style={{ width:'100px', textAlign:"left"}}
                                             src={ReplyBody[1].picurl}
                                             alt="副标题"/>
                                    </Col>
                                    <Col span={15} offset={1}>
                                        <span>
                                            { ReplyBody[1].title}
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                        }
                        {
                            ReplyBody[2]
                            &&
                            <div className='sub1' key={UUIDGen.uuid(8, 10)}>
                                <Row>
                                    <Col span={8}>
                                        <img style={{ width:'100px', textAlign:"left"}}
                                             src={ReplyBody[2].picurl}
                                             alt="副标题"/>
                                    </Col>
                                    <Col span={15} offset={1}>
                                        <span>
                                            { ReplyBody[2].title}
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                        }
                        {
                            ReplyBody[3]
                            &&
                            <div className='sub1' key={UUIDGen.uuid(8, 10)}>
                                <Row>
                                    <Col span={8}>
                                        <img style={{ width:'100px', textAlign:"left"}}
                                             src={ReplyBody[3].picurl}
                                             alt="副标题"/>
                                    </Col>
                                    <Col span={15} offset={1}>
                                        <span>
                                            { ReplyBody[3].title}
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                        }
                        {
                            ReplyBody[4]
                            &&
                            <div className='sub1' key={UUIDGen.uuid(8, 10)}>
                                <Row>
                                    <Col span={8}>
                                        <img style={{ width:'100px', textAlign:"left"}}
                                             src={ReplyBody[4].picurl}
                                             alt="副标题"/>
                                    </Col>
                                    <Col span={15} offset={1}>
                                        <span>
                                            { ReplyBody[4].title}
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                        }
                   </div>
                )
            }
        )
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <div style={{ width:'300px', border:'2px dashed #ECECEC'}}>
                            <p style={{ marginBottom:"8px"}}>关键词：<Input onChange={this.onKeywordChange} value={this.state.keyWord}/></p>
                            <div className='main' key={UUIDGen.uuid(8, 10)}>
                                <img style={{ width:'295px', height:"200px"}}
                                     src={(rBodies && rBodies[0])? rBodies[0].picurl :"http://via.placeholder.com/350x145?text=cover" }
                                     alt="封面"/>
                                <span style={{ height:"20px", width:"300px", textAlign:"center",position:"absolute", top:"180px", left:"0px", background:'#fff'}}>
                                    { (rBodies && rBodies[0])? rBodies[0].title :"主标题"}
                                </span>
                                <span className='cover'>
                                    <Button type='primary' onClick={this.handleMainTitle}>设置主标题</Button>
                                </span>
                            </div>
                            <div className='sub1' key={UUIDGen.uuid(8, 10)}>
                                <Row>
                                    <Col span={8}>
                                        <img style={{ width:'100px', textAlign:"left"}}
                                             src={(rBodies && rBodies[1])?  rBodies[1].picurl : "http://via.placeholder.com/300x200?text=sub-cover"}
                                             alt="副标题"/>
                                    </Col>
                                    <Col span={15} offset={1}>
                                        <span>
                                            { (rBodies && rBodies[1])? rBodies[1].title:"副标题"}
                                        </span>
                                    </Col>
                                </Row>
                                <span className='subCover1'>
                                    <Button type='primary' onClick={this.handleSubTitle1}>设置副标题</Button>
                                </span>
                            </div>
                            <div className='sub1' key={UUIDGen.uuid(8, 10)}>
                                <Row>
                                    <Col span={8}>
                                        <img style={{ width:'100px', textAlign:"left"}}
                                             src={(rBodies && rBodies[2])?  rBodies[2].picurl : "http://via.placeholder.com/300x200?text=sub-cover"}
                                             alt="副标题"/>
                                    </Col>
                                    <Col span={15} offset={1}>
                                        <span>
                                            { (rBodies && rBodies[2])? rBodies[2].title:"副标题"}
                                        </span>
                                    </Col>
                                </Row>
                                <span className='subCover1'>
                                    <Button type='primary' onClick={this.handleSubTitle1}>设置副标题</Button>
                                </span>
                            </div>
                            <div className='sub1' key={UUIDGen.uuid(8, 10)}>
                                <Row>
                                    <Col span={8}>
                                        <img style={{ width:'100px', textAlign:"left"}}
                                             src={(rBodies && rBodies[3])?  rBodies[3].picurl : "http://via.placeholder.com/300x200?text=sub-cover"}
                                             alt="副标题"/>
                                    </Col>
                                    <Col span={15} offset={1}>
                                        <span>
                                            { (rBodies && rBodies[3])? rBodies[3].title:"副标题"}
                                        </span>
                                    </Col>
                                </Row>
                                <span className='subCover1'>
                                    <Button type='primary' onClick={this.handleSubTitle1}>设置副标题</Button>
                                </span>
                            </div>
                            <div className='sub1' key={UUIDGen.uuid(8, 10)}>
                                <Row>
                                    <Col span={8}>
                                        <img style={{ width:'100px', textAlign:"left"}}
                                             src={(rBodies && rBodies[4])?  rBodies[4].picurl : "http://via.placeholder.com/300x200?text=sub-cover"}
                                             alt="副标题"/>
                                    </Col>
                                    <Col span={15} offset={1}>
                                        <span>
                                            { (rBodies && rBodies[4])? rBodies[4].title:"副标题"}
                                        </span>
                                    </Col>
                                </Row>
                                <span className='subCover1'>
                                    <Button type='primary' onClick={this.handleSubTitle1}>设置副标题</Button>
                                </span>
                            </div>
                        </div>
                        <Button type='primary' style={{ marginLeft:"100px", marginTop:"15px"}} onClick={this.handleSubmit}>提交</Button>
                    </Col>
                    <Modal
                        title="设置"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <SelfReplyForm ref='form'/>
                    </Modal>
                    <Col span={17} offset={1}>
                        <h3 style={{ marginLeft:'60px' }}>已创建的回复列表：</h3>
                        <div style={{ padding: '30px', marginTop: "10px",display:"flex", justifyContent:'flex-start', flexWrap:'wrap'}}>
                            { ( this.state.autoReplyData && !isEmpty(this.state.autoReplyData.entries) ) ? autoReplyLists : "暂无" }
                        </div>
                    </Col>
                </Row>
                {
                    (this.state.autoReplyData && this.state.autoReplyData.totalEntries !==0)
                    &&
                    <Pagination
                        current={this.state.autoReplyData.pageNumber}
                        onChange={this.onPageChange}
                        pageSize={3}
                        total={ this.state.autoReplyData.totalEntries }
                        style={{ float: "right", marginTop: "10px"}}
                    />
                }
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
