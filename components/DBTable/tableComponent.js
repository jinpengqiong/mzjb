import { Table, Select, Popconfirm, Pagination, message, Affix, Button, Icon, Modal, Tabs, notification, Divider } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react';
import SelfProdForm from './selfProdForm';
const Option = Select.Option;
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
            type
          }
        }
      }
    `;

const shopTags = `
    query ($shopId:ID!) {
        shopTags(shopId:$shopId){
          id
          insertedAt
          name
          weight
        }
      }
`;

const tagProducts = `
    query ($shopId:ID!, $tagId:ID!) {
        tagProducts(shopId:$shopId, tagId:$tagId){
            products{
                id
                title
                mainImage
                price
                desc
                detailUrl
                type
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

@inject('store') @observer
export default class ProdTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: null,
        tagData:null, 
        visible:false,
        productID:null,
        productFieldsData:null,
        modalName:null,
        totalEntries:null,
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
                width: 100,
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
                dataIndex: 'type',
                title: '商品类型',
                dataType: 'varchar',
                width: 100,
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
                        <Popconfirm title="确定要执行此操作吗?" onConfirm={()=>{this.unShlfConfirm(parseInt(record.id))}} okText="确认" cancelText="取消">
                        <a href="#">下架</a>
                        </Popconfirm>
                    <Divider type="vertical" />
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
    this.queryTags();
  }

  queryTags = () =>{
    Request.GraphQlRequest(shopTags, {shopId: localStorage.getItem('shopID')}, `Bearer ${localStorage.getItem('accessToken')}`).then(
        (res) => {
            // console.log('111', res)
            this.setState({
                tagData: res.shopTags
            })
        }
    )
}
  queryProdData= (curPage) => {
    Request.GraphQlRequest(queryProducts, {page:curPage, pageSize: 8, shopId: localStorage.getItem('shopID'),isDisplay:true}, `Bearer ${localStorage.getItem('accessToken')}`).then(
        (res) => {
            console.log('111', res)
            res.shopProducts.entries.map(
                (entry) => {
                    entry.key = entry.id;
                    if(entry.type === 'youxuan'){
                        entry.type ="优选商品"
                    }
                    if(entry.type === 'link'){
                        entry.type ="自有商品"
                    }
                }
            )
            this.props.store.getProductData(res.shopProducts.entries);
            this.setState({
                data: res.shopProducts.entries,
                totalEntries:res.shopProducts.totalEntries
            });
        }
    )
  }

  onPageChange = (pageNumber) => {
    this.queryProdData(pageNumber);
  }

    handleOk = () => {
        if(this.props.store.TabOption === '1' && this.state.modalName ==='新增商品'){
            this.refs.form.validateFields((err, values) => {
                if (err) {
                    message.error(err);
                }else{
                    console.log('1112', values);
                    values.mainImage = this.props.store.mainImage;
                    values.price = parseInt(parseFloat(values.price)*100);
                    values.isDisplay = true;
                    Request.GraphQlRequest(addProduct, { baseinfo: values, shopId: localStorage.getItem('shopID'), type: 'LINK' }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                        (res)=>{
                            // console.log('res', res);
                            this.refs.form.resetFields();
                            res.createProduct.mainImage = this.props.store.mainImage;
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
        }else if(this.state.modalName ==='更新商品') {
            this.refs.form.validateFields((err, values) => {
                if (err) {
                    message.error(err);
                } else {
                    values.mainImage = this.state.productFieldsData.mainImage;
                    values.price = parseInt(parseFloat(values.price) * 100);
                    console.log('values', values);
                    Request.GraphQlRequest(UpdateProduct,
                        {
                            baseinfo: values,
                            shopId: localStorage.getItem('shopID'),
                            id: this.state.productID
                        }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                        (res) => {
                            console.log('res', res);
                            this.refs.form.resetFields();
                            this.props.store.resetUrlIDs();
                            res.updateProduct.key = res.updateProduct.id;
                            delete res.updateProduct.imagesUrls;
                            delete res.updateProduct.images;
                            this.queryProdData(1);
                            this.setState({
                                visible: false,
                                productFieldsData:null,
                                modalName:null
                            });
                            notification.success({
                                message: '更新成功',
                                duration: 3,
                            });
                        }
                    ).catch(()=>{message.error('更新失败！')})
                }
            })
        }
    }


    handleCancel = () => {
        this.refs.form.resetFields();
        this.setState({
            visible: false,
            productFieldsData:null,
            modalName:null
        });
        document.getElementById('ossfile').innerHTML = '';
    }

  callback = (key) => {
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

  onClickInsert = () => {
        this.setState({
            visible: true,
            modalName:"新增商品"
        });
    }

  //updateProduct
    updateProduct = ( ID ) => {
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
            productID:ID,
            modalName:"更新商品",
            productFieldsData:fieldData[0]
        });
    }

    handleChange = (key) => {
      console.log('key', key)
      if(key==='-1'){
        this.queryProdData(1);
      }else{
        Request.GraphQlRequest(tagProducts, {shopId: localStorage.getItem('shopID'), tagId:key}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                console.log('111', res)
                this.setState({
                    data: res.tagProducts.products
                })
            }
        )
      }
    }

    unShlfConfirm = (ID) => {
        let fieldData = this.state.data.filter(
            (entry) =>{
                if(parseInt(entry.id) === ID){
                    return entry
                }
            }
        );
        fieldData[0].isDisplay = false;
        delete fieldData[0].key;
        delete fieldData[0].id;
        delete fieldData[0].type;
        console.log('fieldData',fieldData)
        Request.GraphQlRequest(UpdateProduct,
            {
                baseinfo: fieldData[0],
                shopId: localStorage.getItem('shopID'),
                id: ID
            }, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                console.log('2223', res)
                  message.success('下架成功！');
                  this.queryProdData(1);
          }
      ).catch(()=>{message.error('下架失败！')})
    }
  render() {
    const rowSelection = {
        selectedRowKeys:this.props.store.selectedRowKeys,
        onChange: this.onSelectChange,
      };
      const Tags = this.state.tagData && this.state.tagData.map(
          (tag) => {
            return (
                <Option value={tag.id} key={tag.id}>{tag.name}</Option>
            )
          }
      ) 
    return (
        <div>
            <Affix offsetTop={8} target={() => document.getElementById('main-content-div')} style={{ marginBottom:"10px"}}>
                <Button type="primary" onClick={this.onClickInsert}>
                    <Icon type="plus-circle-o"/> 新增商品
                </Button>
                <Select defaultValue="-1" style={{marginLeft:'5px',width: 120 }} onChange={this.handleChange}>
                    <Option value="-1" key='-1'>所有分组</Option>
                    {Tags}
                </Select>
            </Affix>
            <Modal
            title={ this.state.modalName}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            >
                <SelfProdForm ref="form" productData={this.state.productFieldsData}/>
            </Modal>

            <Table rowSelection={rowSelection} dataSource = {this.state.data? this.state.data : null } columns={this.state.columns} pagination={false}/>
            {
            (this.state.data && JSON.stringify(this.state.data) !=='[]')
            &&
            <Pagination 
            defaultCurrent={1} 
            onChange={this.onPageChange}
            total={this.state.data? this.state.totalEntries : 1} 
            style={{ marginLeft: "80%", marginTop: "10px"}}/>
            }
        </div>
    )
  }
}
