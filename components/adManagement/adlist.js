import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import { Card, Col, Row, Affix, Button, Icon, Modal, message, Popconfirm, Pagination, Checkbox } from 'antd';
import AdlistForm from './adlistForm';
import moment from 'moment';
const { Meta } = Card;



const queryADList = `
    query ($page: Int, $pageSize: Int, $shopId: Int!) {
        adMedias(page:$page, pageSize:$pageSize, shopId:$shopId){
            pageNumber
            totalEntries
            totalPages
            entries{
                id
                insertedAt
                structDesc
                media{
                    id
                    name
                    url
                    type
                }
            }
        }
    }
`;
const createAD = `
    mutation (
        $mediaId: ID!,
        $shopId: ID!,
        $structDesc: String!) {
        createAdMedia(mediaId: $mediaId,
            shopId: $shopId,
            structDesc: $structDesc){
            id
            insertedAt
            structDesc
            media{
                id 
                url
                type
            }
        }
    }
`;

const deleteADMedias = `
mutation (
    $id: Int!,
    $shopId:Int!,
    ) {
        deleteADMedia(id: $id,
            shopId: $shopId,
            ){
            id 
        }
    }
`;



@inject('store') @observer
export default class ADList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        data:null,
        modalVisible: false
    }
  }
  componentDidMount(){
    this.queryADListData(1);
  }

  queryADListData = (curPage) => {
    Request.GraphQlRequest(queryADList, {page:curPage, pageSize: 4, shopId: this.props.store.shopID }, `Bearer ${localStorage.getItem('accessToken')}`).then(
        (res) => {
            // console.log('res', res);
            this.setState({
                data: res.adMedias
            })
        }
    )
  }

  handleOk = () => {
    const mediaId = parseInt(this.props.store.checkedValues[0]);
    if(this.props.store.weight && this.props.store.position && this.props.store.backgroundColor){
        let structDesc = {
            "type": "image",
            "position": this.props.store.position,
            "title": this.props.store.title,
            "images": this.props.store.images,
            "id": this.props.store.selectedRowKeys[0],
            "weight": this.props.store.weight,
            "createAt": moment().format('X'),
            "detailUrl": this.props.store.detailUrl,
            "backgroundColor": this.props.store.backgroundColor
        };

    Request.GraphQlRequest(createAD, {mediaId, shopId: this.props.store.shopID, structDesc: JSON.stringify(structDesc)}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('res', res);
                this.props.store.getselectedRowKeys(null);
                this.props.store.getStrucInfo('','','');
                this.props.store.getWeight(null);
                this.props.store.getPosition(null);
                this.props.store.getColor(null);
                this.props.store.getVideoID('');
                this.props.store.getVideoID('');
                this.props.store.setChecked('');
                this.props.store.setChecked1('');
                this.refs.form.resetFields();
                this.setState({
                    modalVisible: false,
                });
                message.success('创建成功！');
                this.queryADListData(1);
            }
        )
    }else{
        message.error('有必选项未填写！');
    }
  }

  handleCancel = (e) => {
    // console.log(e);
    this.setState({
        modalVisible: false,
    });
    this.props.store.setChecked('');
    this.refs.form.resetFields();
  }

  handleClick = () => {
    this.setState({
        modalVisible: true,
      });
  }

  onChange = (pageNumber) => {
    this.queryADListData(pageNumber);
  }

  confirm(id) {
      Request.GraphQlRequest(deleteADMedias, { shopId: this.props.store.shopID, id}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) =>{
                    // console.log('res', res);
                    message.success('删除成功！');
                    this.queryADListData(1);
            }
        ).catch(()=>{message.error('删除失败！')})
    }

    handleChcekChange = (checkedValues) => {
        this.props.store.setChecked1(checkedValues)
      }

  render() {
    const voucherData =  this.state.data &&
    this.state.data.entries.map(
    (entry) => {

        if(typeof entry.structDesc === 'string'){
            entry.structDesc = JSON.parse(entry.structDesc);
        }
            return (
                <Card
                key={entry.id}
                hoverable
                type="inner"
                title={entry.structDesc.title}
                style={{backgroundColor: entry.structDesc.backgroundColor}}
                extra={
                    <div>
                        <Checkbox onChange={() =>{this.handleChange(entry.id)}} value={entry.id}>选中</Checkbox>
                        <Popconfirm title="确定要删除吗?" onConfirm={()=>{this.confirm(entry.id)}} onCancel={this.cancel} okText="确认" cancelText="取消">
                            <a href="#">删除</a>
                        </Popconfirm>
                    </div>
                }>
                    <Row type="flex" justify="space-around">
                        <Col span={8}>
                        <video alt="example"
                        poster="http://imagemediatest.muzhiyun.cn/pic/user/8196398791/20180426/00205497.jpg"
                        controls="control"
                        style={{ width: '240px',height:"240px"}} 
                        src={entry.media? entry.media.url :"#"} />
                        </Col>
                        <Col span={12}>
                            <p>广告ID：{entry.id}</p> 
                            <p>视频ID：{entry.media? entry.media.id : null}</p>
                            <p>商品名称：{entry.structDesc.title}</p>
                            <p>创建时间：{moment(entry.insertedAt).format('YYYY-MM-DD HH:mm')}</p>
                            <p><a href={entry.structDesc.detailUrl} target='_blank'>商品链接</a></p>
                        </Col>
                    </Row>
                </Card>
            )
        }
    );
    return (
        <div>
            <Affix offsetTop={8} target={() => document.getElementById('main-content-div')}>
                <Button type="primary" onClick={this.handleClick}>
                    <Icon type="plus-circle-o" />新增广告
                </Button>
            </Affix>
            <Modal title="新增广告" visible={this.state.modalVisible} onOk={this.handleOk} onCancel={this.handleCancel} maskClosable={false} width={550}>
                <AdlistForm ref='form'/>
            </Modal>
            <Checkbox.Group style={{ width: '100%' }} onChange={this.handleChcekChange} value={this.props.store.checkedValues1}>
                <Card title="广告列表" style={{ marginTop: 20 }}>
                    { this.state.data && this.state.data.entries.length === 0? '暂无广告' : voucherData }
                </Card>
            </Checkbox.Group>
            {
            (this.state.data && this.state.data.totalEntries !==0)
            &&
            <Pagination 
            current={this.state.data.pageNumber}
            onChange={this.onChange}
            total={this.state.data? this.state.data.totalEntries : 1} 
            style={{ marginLeft: "80%", marginTop: "10px"}}/>
            }
        </div>
    )
  }
}
