import { Table, Input, Popconfirm, Pagination, message, Affix, Button, Icon, Modal, Tabs, notification, Divider } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react';
import SelfProdForm from './selfProdForm';
import YouzanProdForm from './youzanProdForm'
const TabPane = Tabs.TabPane;

const queryProducts = `
      query ($page:Int, $pageSize: Int, $shopId:Int) {
        shopProducts(page:$page,pageSize:$pageSize,shopId:$shopId){
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

const addProduct = `
mutation (
    $baseinfo:ProductBaseinfo!, $shopId: Int!, $type:ProductType!, $youzan:ProductYouzanArgs
    ) {
    createProduct(
        baseinfo:$baseinfo,
        shopId: $shopId,
        type:$type,
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

const sendPicadToLive = `
      mutation ($id:ID!,$shopId:ID!, $cartTime:Int){
        sendPicadToLive(id:$id, shopId:$shopId, cartTime:$cartTime){
          result
        }
      }
    `;

@inject('store') @observer
export default class ProdTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: null, 
        visible:false,
        shopID: parseInt(props.shopID),
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
            width: 200,
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
            width: 150,
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
            width: 150,
            render: (text, record) => (
                <span>
                <Popconfirm title="确定要发送吗?" onConfirm={()=>{this.confirm1(record.id)}}  okText="确认" cancelText="取消">
                    <a href="javascript:;" >发送直播间</a>
                </Popconfirm>
                <Divider type="vertical" />
                    <a href="#" >编辑</a>
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
    Request.GraphQlRequest(queryProducts, {page:curPage, pageSize: 8, shopId: this.state.shopID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
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

  onClickInsert = () => {
    this.setState({
        visible: true,
      });
  }
  handleOk = (e) => {
      if(this.props.store.TabOption === '1'){
        this.refs.form1.validateFields((err, values) => {
            if (err) {
                message.error(err);
            }else{ 
                console.log('values', values);
                values.images = this.props.store.imgUrlID.join(',');
                values.price = parseInt(parseFloat(values.price)*100);
                Request.GraphQlRequest(addProduct, { baseinfo: values, shopId: this.props.shopID, type: 'LINK' }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                    (res)=>{
                        console.log('res', res);
                        this.refs.form1.resetFields();
                        this.props.store.resetUrlIDs();
                        res.createProduct.mainImage = res.createProduct.imagesUrls[0].url;
                        res.createProduct.key = res.createProduct.id;
                        delete res.createProduct.imagesUrls;
                        delete res.createProduct.images;
                        this.queryProdData(1);
                        this.setState({
                            visible: false
                        });
                        document.getElementById('ossfile').innerHTML = '';
                        notification.success({
                            message: '新增成功',
                            duration: 3,
                          });
                    }
                )
            }   
        })
      }else if(this.props.store.TabOption === '2'){
        this.refs.form2.validateFields((err, values) => {
            if (err) {
                message.error(err);
            }else{ 
                console.log('values', values);
                values.images = this.props.store.imgUrlID.join(',');
                values.price = parseInt(parseFloat(values.price)*100);
                Request.GraphQlRequest(addProduct,
                    { baseinfo: values, shopId: this.props.shopID, type: 'YOUZAN' ,youzan: { imageIds: this.props.store.imageId, quantity:1000}}, `Bearer ${localStorage.getItem('accessToken')}`).then(
                    (res)=>{
                        console.log('res', res);
                        if(!res.errors){
                            this.refs.form2.resetFields();
                            this.props.store.resetUrlIDs();
                            res.createProduct.mainImage = res.createProduct.imagesUrls[0].url;
                            res.createProduct.key = res.createProduct.id;
                            delete res.createProduct.imagesUrls;
                            delete res.createProduct.images;
                            this.queryProdData(1);
                            document.getElementById('ossfile1').innerHTML = '';
                            this.setState({
                                visible: false
                            });
                            notification.success({
                                message: '新增成功',
                                duration: 3,
                            });
                        }
                        
                    }
                )
            }   
        })
      }
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  callback = (key) => {
      console.log(key)
    this.props.store.getTabOption(key)
  }

  //删除
  confirm(id) {
      Request.GraphQlRequest(deleteProduct,
          { shopId: this.state.shopID, id}, `Bearer ${localStorage.getItem('accessToken')}`).then(
        (res) =>{
            if(res.errors){
                message.success('删除失败！');
            }else{
                console.log('res', res);
                message.success('删除成功！');
                this.queryProdData(1);
            }
        }
    )
}

//发送直播间
confirm1 = (id) => {
      const ID= parseFloat(id);
    Request.GraphQlRequest(sendPicadToLive,
        { shopId: this.state.shopID, id:ID, cartTime:5000}, `Bearer ${localStorage.getItem('accessToken')}`).then(
        (res) =>{
            if(res.errors){
                message.success('发送失败！');
            }else{
                // console.log('res', res);
                message.success('发送成功！');
                this.queryProdData(1);
            }
        }
    )
}

//control select keys
onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.props.store.getselectedRowKeys(selectedRowKeys)
  }
  render() {
    const rowSelection = {
        selectedRowKeys:this.props.store.selectedRowKeys,
        onChange: this.onSelectChange,
      };
    return (
        <div>
            <Affix offsetTop={8} target={() => document.getElementById('main-content-div')} style={{ marginBottom:"10px"}}>
              <Button type="primary" onClick={this.onClickInsert}>
                <Icon type="plus-circle-o"/> 新增商品
              </Button>
            </Affix>
            <Modal
            title="新增"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            >
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="外链商品" key="1">
                        <SelfProdForm ref="form1"/>
                    </TabPane>
                    <TabPane tab="自有商品" key="2">
                        <YouzanProdForm ref="form2"/>
                    </TabPane>
                </Tabs>
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
