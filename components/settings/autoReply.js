import { Col, Row, Button, Modal, Input } from 'antd';
import Request from '../../utils/graphql_request';
import {MegadraftEditor, editorStateFromRaw} from "megadraft";
import ShopImgUploader from '../FileUploader/shopImgUpload'

const ownedRooms = `
    query ($shopId: ID!) {
        ownedRooms(shopId:$shopId){
            desc
            id
            name
        }
    }
`;

const listShoproom = `
    query ($shopId: Int!) {
        listShoproom(shopId:$shopId){
            roomId
            roomName
            id
        }
    }
`;

const addShoproom = `
    mutation ($shopId: Int!,$roomId:Int!) {
        addShoproom(shopId:$shopId, roomId:$roomId){
            id
            roomId
        }
    }
`;

const delShoproom = `
    mutation ($shopId: Int!,$id:ID!) {
        delShoproom(shopId:$shopId, id:$id){
            id
            roomId
        }
    }
`;

export default class AutoReply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false
        }
    }

    componentDidMount(){

    }

    //set MainTitle
    handlMainTitle = () => {
        this.setState({
            visible:true
        })
    }

    //set SubTitle1
    handlSubTitle1 = () => {
        this.setState({
            visible:true
        })
    }
    //set SubTitle2
    handlSubTitle2 = () => {
        this.setState({
            visible:true
        })
    }
    //set SubTitle3
    handlSubTitle3 = () => {
        this.setState({
            visible:true
        })
    }

    //modal cancel action
    handleCancel = () => {
        this.setState({
            visible:false
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={6} offset={4}>
                        <div style={{ width:'300px', height:"520px"}}>
                            <div className='main'>
                                <img style={{ width:'300px', height:"200px"}} src="https://img.yzcdn.cn/upload_files/2017/06/19/Ftop_OvaetEyGl2LcpzH4IAqzGYy.png?imageView2/2/w/290/h/290/q/75/format/jpg" alt="封面"/>
                                <span style={{ height:"10px", textAlign:"center",position:"absolute", top:"168px", left:"7px"}}>封面示例</span>
                                <span className='cover'>
                                    <Button type='primary' onClick={this.handlMainTitle}>设置主标题</Button>
                                </span>
                            </div>
                                <div className='sub1'>
                                    <img style={{ width:'100px', textAlign:"left"}} src="https://img.yzcdn.cn/upload_files/2017/06/19/Ftop_OvaetEyGl2LcpzH4IAqzGYy.png?imageView2/2/w/290/h/290/q/75/format/jpg" alt="封面"/>
                                    <span>副标题一</span>
                                    <span className='subCover1'>
                                        <Button type='primary' onClick={this.handlSubTitle1}>设置副标题</Button>
                                    </span>
                                </div>
                                <div className='sub2'>
                                    <img style={{ width:'100px'}} src="https://img.yzcdn.cn/upload_files/2017/06/19/Ftop_OvaetEyGl2LcpzH4IAqzGYy.png?imageView2/2/w/290/h/290/q/75/format/jpg" alt="封面"/>
                                    <span>副标题二</span>
                                    <span className='subCover2'>
                                        <Button type='primary' onClick={this.handlSubTitle2}>设置副标题</Button>
                                    </span>
                                </div>
                                <div className='sub3'>
                                    <img style={{ width:'100px'}} src="https://img.yzcdn.cn/upload_files/2017/06/19/Ftop_OvaetEyGl2LcpzH4IAqzGYy.png?imageView2/2/w/290/h/290/q/75/format/jpg" alt="封面"/>
                                    <span>副标题三</span>
                                    <span className='subCover3'>
                                        <Button type='primary' onClick={this.handlSubTitle3}>设置副标题</Button>
                                    </span>
                                </div>
                        </div>
                    </Col>
                    <Modal
                        title="标题设置"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        封面上传：
                        <ShopImgUploader />
                        <br/>
                        <p>标题：<Input type="text" style={{ width:'300px'}}/></p>
                        <br/>
                        <p>URL: <Input type="text" style={{ width:'300px', marginLeft:"8px"}}/></p>
                    </Modal>
                </Row>
                <Row>
                    <Col span={10} offset={10}>
                        <Button type='primary'>提交设置</Button>
                    </Col>
                </Row>
                <style jsx>{
                    `
                    .main{ float: left; width: 300px; height: 220px; position: relative; overflow: hidden}
                    .cover Button { margin: 60px auto; }
                    .cover { width: 300px; height: 220px; background: rgba(224, 226, 229, 0.7); position: absolute; left: 0px; top: 0px; text-align: center; color: #ffffff; transform-origin: right bottom; -webkit-transform-origin: right bottom; -moz-transform-origin: right bottom; -webkit-transform-origin: right bottom; -moz-transform-origin: right bottom; transform: rotate(90deg); -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); transition: all 0.35s; -webkit-transition: all 0.35s; -moz-transition: all 0.35s; }
                    .main:hover .cover { transform: rotate(0deg); -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); }

                    .sub1{ float: left; width: 300px; height: 100px;position: relative; overflow: hidden}
                    .subCover1 Button { margin: 25px auto; }
                    .subCover1 { width: 300px; height: 100px; background: rgba(224, 226, 229, 0.7); position: absolute; left: 0px; top: 0px; text-align: center; color: #ffffff; transform-origin: right bottom; -webkit-transform-origin: right bottom; -moz-transform-origin: right bottom; transform: rotate(90deg); -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); transition: all 0.35s; -webkit-transition: all 0.35s; -moz-transition: all 0.35s; }
                    .sub1:hover .subCover1 { transform: rotate(0deg); -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); }

                    .sub2{ float: left; width: 300px; height: 100px;position: relative; overflow: hidden}
                    .subCover2 Button { margin: 25px auto; }
                    .subCover2 { width: 300px; height: 100px; background: rgba(224, 226, 229, 0.7); position: absolute; left: 0px; top: 0px; text-align: center; color: #ffffff; transform-origin: right bottom; -webkit-transform-origin: right bottom; -moz-transform-origin: right bottom; transform: rotate(90deg); -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); transition: all 0.35s; -webkit-transition: all 0.35s; -moz-transition: all 0.35s; }
                    .sub2:hover .subCover2 { transform: rotate(0deg); -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); }

                    .sub3{ float: left; width: 300px; height: 100px;position: relative; overflow: hidden}
                    .subCover3 Button { margin: 25px auto; }
                    .subCover3 { width: 300px; height: 100px; background: rgba(224, 226, 229, 0.7); position: absolute; left: 0px; top: 0px; text-align: center; color: #ffffff; transform-origin: right bottom; -webkit-transform-origin: right bottom; -moz-transform-origin: right bottom; transform: rotate(90deg); -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); transition: all 0.35s; -webkit-transition: all 0.35s; -moz-transition: all 0.35s; }
                    .sub3:hover .subCover3 { transform: rotate(0deg); -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); }
                    `
                }
                </style>
            </div>
        )
    }
}
