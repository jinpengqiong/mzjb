import { Card, Input, Popconfirm, Pagination, message, Affix, Button, Icon, Modal, Row, Col, Radio } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react'
import AdPlaylistForm from './adPlaylistForm';
import moment from 'moment';
const RadioGroup = Radio.Group;

const queryADPlayList = `
    query ($page: Int, $pageSize: Int, $shopId: Int!) {
        adPlaylists(page:$page, pageSize:$pageSize, shopId:$shopId){
            pageNumber
            totalEntries
            totalPages
            entries{
                id
                name
                insertedAt
                adMedias{
                    id
                    insertedAt
                    mediaId
                    media{
                        id
                        url
                    }
                }
            }
        }
    }
`;

const createAdPlaylist = `
    mutation (
        $adMedias: [ID]!,
        $shopId: ID!,
        $name: String!) {
            createAdPlaylist(
            adMedias: $adMedias,
            shopId: $shopId,
            name: $name){
            id
            insertedAt
            updatedAt
            name
            adMedias{
                id 
                mediaId
                structDesc
                media{
                    id
                    name
                }
            }
        }
    }
`;

const setPlaylist = `
    mutation (
        $shopId: Int!,
        $playlist:Int!,
        ) {
            setPlaylist(shopId: $shopId,
                playlist: $playlist,
                ){
                id  
                name
            }
        }
    `;

    const deleteAdPlaylist = `
        mutation (
            $id: Int!,
            $shopId:Int!,
            ) {
                deleteAdPlaylist(id: $id,
                    shopId: $shopId,
                    ){
                    id 
                }
            }
        `;

@inject('store') @observer
export default class ADPlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        data:null,
        modalVisible: false,
        value:''
    }
  }
  componentDidMount(){
    this.queryADPlayListData(1);
  }

  queryADPlayListData(curPage){
      Request.GraphQlRequest(queryADPlayList, {page:curPage, pageSize: 4, shopId: this.props.store.shopID }, `Bearer ${localStorage.getItem('accessToken')}`).then(
        (res) => {
            console.log('res', res);
            this.setState({
                data: res.adPlaylists
            })
        }
    )
  }

  handleOk = (e) => {
    this.refs.form.validateFields((err, values) => {
        if (err) {
            message.error(err);
        }else{
            Request.GraphQlRequest(createAdPlaylist, {adMedias: this.props.store.checkedValues1, shopId: this.props.store.shopID, name: values.name}, `Bearer ${localStorage.getItem('accessToken')}`).then(
                (res) => {
                    console.log('createAdPlaylist', res);
                    this.setState({
                        modalVisible: false,
                    });
                    message.success('创建成功！');
                    this.props.store.setChecked1('');
                    this.queryADPlayListData(1);
                    this.refs.form.resetFields();
                }
            )
        }
    })
  }
  
  confirm = (id) => {
      Request.GraphQlRequest(deleteAdPlaylist, { shopId: this.props.store.shopID, id}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) =>{
                if(res.errors){
                    message.success('删除失败！');
                }else{
                    console.log('res', res);
                    message.success('删除成功！');
                    this.queryADPlayListData(1);
                    this.props.store.getADMediaID('');
                }
            }
        )
    }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
        modalVisible: false,
    });
  }
  handleClick = () => {
    this.setState({
        modalVisible: true,
      });
  }
  onChange(pageNumber) {
    this.queryADPlayListData(pageNumber);
  }

  handleSetChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
      const playlist = parseInt(e.target.value);
      Request.GraphQlRequest(setPlaylist, { shopId: this.props.store.shopID, playlist}, `Bearer ${localStorage.getItem('accessToken')}`).then(
          (res) => {
            if(!res.errors){
                message.success('设置成功！')
            }
          }
      )
  }

  render() {
    const voucherData =  this.state.data &&
    this.state.data.entries.map(
    (entry) => {
            return (
                <Card
                key={entry.id}
                hoverable
                type="inner"
                title={entry.name}
                extra={
                    <div>
                        <Radio value={entry.id}>设置为当前播单</Radio>
                        <Popconfirm title="确定要删除吗?" onConfirm={()=>{this.confirm(entry.id)}} onCancel={this.cancel} okText="Yes" cancelText="No">
                            <a href="#" >删除</a>
                        </Popconfirm>
                    </div>
                }>
                    <Row type="flex" justify="space-around">
                        <Col span={12}>
                            <p>播单ID：{entry.id}</p> 
                            <p>播单名称：{entry.name}</p>
                            <p>创建时间：{moment(entry.insertedAt).format('YYYY-MM-DD HH:mm')}</p>  
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
                <Icon type="plus-circle-createVoucherso" />新增播单
                </Button>
            </Affix>
            <Modal title="新增播单" visible={this.state.modalVisible} onOk={this.handleOk} onCancel={this.handleCancel} maskClosable={false} width={550}>
                <AdPlaylistForm ref="form"/>
            </Modal>
            <RadioGroup onChange={this.handleSetChange} value={this.state.value} style={{ width: '100%' }} >
                <Card title="播单列表" style={{ marginTop: 20 }}>
                    { this.state.data && this.state.data.entries.length === 0? '暂无播单' : voucherData }
                </Card>
            </RadioGroup>
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
    )
  }
}
