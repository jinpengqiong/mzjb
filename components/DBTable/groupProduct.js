import { Table, Affix, Popconfirm, Button, Modal, message, Divider } from 'antd';
import StockProdForm from './stockProdForm'
import Request from '../../utils/graphql_request';
import moment from 'moment'


const shopTags = `
    query ($shopId:ID!,) {
        shopTags(shopId:$shopId){
          id
          insertedAt
          name
          weight
        }
      }
`;

const createProdTags = `
      mutation ($name:String!,$shopId: ID!, $weight: Int) {
        createProductTag(name:$name,shopId:$shopId, weight:$weight){
          id
          insertedAt
          name
          weight
        }
    }
  `;

const updateProdTags = `
      mutation ($name:String,$shopId: ID!, $weight: Int, $tagId:ID!) {
        updateProductTag(name:$name,shopId:$shopId, weight:$weight,tagId:$tagId){
          id
          insertedAt
          name
          weight
        }
    }
  `;

const deleteGroup = `
    mutation ($shopId: ID!,$tagId:ID!) {
        deleteProductTag(shopId:$shopId,tagId:$tagId){
          id
          insertedAt
          name
          weight
        }
    }
`;

export default class GroupProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:null,
            visible:false,
            ModalName:'',
            tagId:'',
            groupFieldsData:null,
            columns : [
                {
                    title: 'ID',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '分组名称',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '优先级',
                    dataIndex: 'weight',
                    key: 'weight',
                },
                {
                    title: '创建时间',
                    dataIndex: 'insertedAt',
                    key: 'insertedAt',
                    render: text => <span>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</span>,
                },
                {
                    title: '操作',
                    key: 'action',
                    render: (text, record) => (
                        <span>
                            <a href="#" onClick={ ()=>{this.updateGroup(parseInt(record.id))}}>更新</a>
                        <Divider type="vertical" />
                        <Popconfirm title="确定要删除该分组吗?" onConfirm={()=>{this.confirm(record.id)}} okText="确认" cancelText="取消">
                            <a href="#" >删除</a>
                        </Popconfirm>
                        </span>
                    ),
                }
            ]
        }
    }
    componentDidMount(){
        this.queryTags();
    }

    queryTags = () =>{
        Request.GraphQlRequest(shopTags, {shopId: localStorage.getItem('shopID')}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('res', res)
                this.setState({
                    data: res.shopTags
                })
            }
        )
    }
    addGroup = () => {
        this.setState({
            visible: true,
            ModalName:'新增分组'
        })
    }

    updateGroup = (ID) => {
        const fieldData = this.state.data.filter(
            (entry) =>{
                if(parseInt(entry.id) === ID){
                    return entry
                }
            }
        );
        // console.log('fieldData',fieldData)
        this.setState({
            visible: true,
            ModalName:'更新分组',
            tagId:ID,
            groupFieldsData:fieldData[0]
        })
    }

    handleCancel = () => {
        this.refs.form.resetFields();
        this.setState({
            visible: false,
            ModalName:''
        })
    }

    handleOk = () => {
        if(this.state.ModalName === '新增分组'){
            this.refs.form.validateFields(
                (err, values) => {
                    if (err) {
                        message.error(err);
                    } else {
                        Request.GraphQlRequest(createProdTags, {
                            shopId: localStorage.getItem('shopID'),
                            name: values.name,
                            weight: parseInt(values.weight)
                        }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                            (res) => {
                                // console.log('res', res)
                                message.success('新增成功！');
                                this.refs.form.resetFields();
                                this.setState({
                                    visible: false,
                                    ModalName:'',
                                })
                                this.queryTags();
                            }
                        )
                    }
                })
        }else if(this.state.ModalName === '更新分组'){
            this.refs.form.validateFields(
                (err, values) => {
                    if (err) {
                        message.error(err);
                    } else {
                        Request.GraphQlRequest(updateProdTags, {
                            shopId: localStorage.getItem('shopID'),
                            name: values.name,
                            weight: parseInt(values.weight),
                            tagId: this.state.tagId
                        }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                            (res) => {
                                // console.log('res', res)
                                message.success('更新成功！');
                                this.refs.form.resetFields();
                                this.setState({
                                    visible: false,
                                    ModalName:'',
                                    tagId:''
                                });
                                this.queryTags();
                            }
                        )
                    }
                }
            )
        }
    }

    confirm = (ID) => {
        Request.GraphQlRequest(deleteGroup, {
            shopId: localStorage.getItem('shopID'),
            tagId: ID
        }, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('res', res)
                message.success('删除成功！');
                this.queryTags();
            }
        )
    }

    render(){
        return (
            <div>
                <Affix>
                    <Button type="primary" style={{ marginBottom:'10px'}} onClick={this.addGroup}>新增分组</Button>
                </Affix>
                <Modal
                    title={this.state.ModalName}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <StockProdForm ref='form' GroupData={this.state.groupFieldsData}  />
                </Modal>
                <Table bordered dataSource={this.state.data? this.state.data : null } columns={this.state.columns} pagination={false}/>
            </div>
        )
    }
}
