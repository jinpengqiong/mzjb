import { Table, Input, Popconfirm, Pagination, message, Affix, Button, Icon, Modal, Tabs, notification, Divider } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react';
import SelfProdForm from './selfProdForm';
import YouzanProdForm from './stockProdForm'
const TabPane = Tabs.TabPane;

const queryProducts = `
      query ($page:Int, $pageSize: Int, $shopId:Int, $isDisplay:Boolean) {
        shopProducts(page:$page,pageSize:$pageSize,shopId:$shopId, isDisplay:$isDisplay){
          pageSize,
          pageNumber
          totalPages
          totalEntries
          entries{
            id
            title
            mainImage
            price
            desc
            detailUrl
          }
        }
      }
    `;


const UpdateProduct = `
mutation (
    $id:ID!,$baseinfo:ProductBaseinfo!, $shopId: Int!, $youzan:ProductYouzanArgs
    ) {
    updateProduct(
        id:$id,
        baseinfo:$baseinfo,
        shopId: $shopId,
        youzan:$youzan
    ){
        id
        title
        images
        price
        desc
        detailUrl
        imagesUrls{
            url
        }
    }
    }
`;

const deleteProduct = `
      mutation ($id:ID!,$shopId:ID!){
        deleteProduct(id:$id, shopId:$shopId){
          desc
          detailUrl
          id
          images
          price
          title
        }
      }
    `;



@inject('store') @observer
export default class InStock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            visible:false,
            productID:null,
            productFieldsData:null,
            columns : [
                {
                    dataIndex: 'id',
                    title: 'ID',
                    dataType: 'int',
                    width: 80,
                    primary: true,
                },
                {
                    dataIndex: 'title',
                    title: '商品名称',
                    dataType: 'varchar',
                    validator: [{type: 'string', message: '请输入商品名称',required:true}],
                    width: 150,
                },
                {
                    dataIndex: 'mainImage',
                    title: '商品图',
                    dataType: 'varchar',
                    width: 150,
                    render: text => <img src={text} style={{ width: 100 }}/>,
                },
                {
                    dataIndex: 'price',
                    title: '价格',
                    dataType: 'varchar',
                    width: 80,
                    validator: [{type: 'string', pattern: /^\d+(\.\d{1,2})?$/, message: '只能是数字哦。',required:true}],
                    render: text => `¥${((parseFloat(text)) / 100).toFixed(2)}`,
                },
                {
                    // 文件上传和图片上传其实是很类似的
                    dataIndex: 'desc',
                    title: '简要描述',
                    dataType: 'varchar',
                    width: 200,
                    validator: [{type: 'string', message: '请输入简要描述',required:true}],
                    render: text => `${text}`,
                },
                {
                    dataIndex: 'detailUrl',
                    title: '链接',
                    dataType: 'varchar',
                    width: 200,
                    render: text => <a href={text}>{text}</a>,
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 200,
                    render: (text, record) => (
                        <span>
            <a href="#" onClick={ ()=>{this.updateProduct(parseInt(record.id))}}>更新</a>
            <Divider type="vertical" />
            <Popconfirm title="确定要删除该商品吗?" onConfirm={()=>{this.confirm(record.id)}} okText="确认" cancelText="取消">
            <a href="#" >删除</a>
            </Popconfirm>
            </span>
                    ),
                }
            ]
        }
    }

    componentDidMount(){
        this.queryProdData(1);
    }

    queryProdData= (curPage) => {
        Request.GraphQlRequest(queryProducts, {page:curPage, pageSize: 8, shopId: localStorage.getItem('shopID'),isDisplay:false}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                console.log('res', res)
                this.props.store.getProductData(res.shopProducts.entries);
                res.shopProducts.entries.map(
                    (entry) => {
                        entry.key = entry.id
                    }
                )
                this.setState({
                    data: res.shopProducts
                });
            }
        )
    }

    onPageChange = (pageNumber) => {
        this.queryProdData(pageNumber);
    }

    handleOk = () => {
        this.refs.form3.validateFields((err, values) => {
            if (err) {
                message.error(err);
            } else {
                console.log('111',values)
                if(JSON.stringify(this.props.store.imgUrlID) === '[]'){
                    values.mainImage = values.detailUrl;
                }else{
                    values.mainImage = this.props.store.mainImage;
                }
                values.price = parseInt(parseFloat(values.price) * 100);
                // console.log('values', values);
                Request.GraphQlRequest(UpdateProduct,
                    {
                        baseinfo: values,
                        shopId: localStorage.getItem('shopID'),
                        id: this.state.productID
                    }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                    (res) => {
                        // console.log('res', res);
                        this.refs.form3.resetFields();
                        this.props.store.resetUrlIDs();
                        res.updateProduct.key = res.updateProduct.id;
                        delete res.updateProduct.imagesUrls;
                        delete res.updateProduct.images;
                        this.queryProdData(1);
                        this.setState({
                            visible: false
                        });
                        notification.success({
                            message: '更新成功',
                            duration: 3,
                        });
                        document.getElementById('ossfile').innerHTML = '';
                    }
                ).catch(()=>{message.error('更新失败！')})
            }
        })
    }


    handleCancel = () => {
        this.setState({
            visible: false
        });
        document.getElementById('ossfile').innerHTML = '';
        this.refs.form3.resetFields();
    }

    callback = (key) => {
        // console.log(key)
        this.props.store.getTabOption(key)
    }

    //删除
    confirm(id) {
        Request.GraphQlRequest(deleteProduct,
            { shopId: localStorage.getItem('shopID'), id}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) =>{
                message.success('删除成功！');
                this.queryProdData(1);
            }
        ).catch(()=>{message.error('删除失败！')})
    }


//control select keys
    onSelectChange = (selectedRowKeys) => {
        // console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.props.store.getselectedRowKeys(selectedRowKeys)
    }

    //updateProduct
    updateProduct = ( ID ) => {
        const fieldData = this.state.data.entries.filter(
            (entry) =>{
                if(parseInt(entry.id) === ID){
                    return entry
                }
            }
        );
        // console.log('fieldData',fieldData)
        this.setState({
            visible: true,
            productID:ID,
            productFieldsData:fieldData[0]
        });
    }

    render() {
        const rowSelection = {
            selectedRowKeys:this.props.store.selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <div>
                <Modal
                    title='更新商品'
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <SelfProdForm ref="form3" productData={this.state.productFieldsData}/>
                </Modal>
                <Table rowSelection={rowSelection} dataSource = {this.state.data? this.state.data.entries : null } columns={this.state.columns} pagination={false}/>
                {
                    (this.state.data && this.state.data.totalEntries !==0)
                    &&
                    <Pagination
                        defaultCurrent={1}
                        onChange={this.onPageChange}
                        total={this.state.data? this.state.data.totalEntries : 1}
                        style={{ marginLeft: "80%", marginTop: "10px"}}/>
                }
            </div>
        )
    }
}
