import { Table, Select, Popconfirm, Pagination, message, Affix, Button, Icon, Modal, notification, Divider, Radio, Tabs } from 'antd';
import Request from '../../utils/graphql_request';
import { inject, observer } from 'mobx-react';
import SelfProdForm from './selfProdForm';
import YouzanProdForm from './youzanProdForm'
import isEmpty from 'lodash/isEmpty';
const Option = Select.Option;
const RadioGroup = Radio.Group;
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
            itemId
          }
        }
      }
    `;

const tagProducts = `
    query ($shopId:ID!, $tagId:ID!, $isDisplay:Boolean!) {
        tagProducts(shopId:$shopId, tagId:$tagId, isDisplay:$isDisplay){
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
    $id:ID!,$baseinfo:ProductBaseinfo!, $shopId: Int!, $youzan:ProductYouzanArgs, $type: ProductType!
    ) {
    updateProduct(
        id:$id,
        baseinfo:$baseinfo,
        shopId: $shopId,
        youzan:$youzan,
        type:$type
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

const setDisplayProduct = `
mutation (
    $id:ID!, $isDisplay: Boolean!, $shopId: Int!
    ) {
    setDisplayProduct(
        id:$id,
        isDisplay:$isDisplay,
        shopId: $shopId,
    ){
        id
        title
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

const changeProductTag = `
      mutation ($id:ID!,$shopId:ID!, $tagId:ID!){
        changeProductTag(id:$id, shopId:$shopId, tagId:$tagId){
          status
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
export default class InStock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            visible:false,
            productID:null,
            modalName:null,
            totalEntries:null,
            curPage:'1',
            groupModalVisible:false,
            radioValue:null,
            columns : [
                {
                    dataIndex: 'id',
                    title: 'ID',
                    dataType: 'int',
                    width: 60,
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
                    title: '单价',
                    dataType: 'varchar',
                    width: 100,
                    validator: [{type: 'string', pattern: /^\d+(\.\d{1,2})?$/, message: '只能是数字哦。',required:true}],
                    render: text => `¥${((parseFloat(text)) / 100).toFixed(2)}`,
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
                    render: text => <a href={text} target="_blank">{text.length<75? text : text.slice(0, 75)+'...'}</a>,
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 240,
                    render: (text, record) => (
                        <span>
                        <Popconfirm title="确定要执行此操作吗?" onConfirm={()=>{this.unShlfConfirm(parseInt(record.id))}} >
                        <a href="#">上架</a>
                        </Popconfirm>
                    <Divider type="vertical" />
                        <a href="#" onClick={ ()=>{this.changeProductTag(parseInt(record.id))}}>加入分组</a>
                    <Divider type="vertical" />
                        <a href="#" onClick={ ()=>{this.updateProduct(parseInt(record.id), record.type)}}>更新</a>
                    <Divider type="vertical" />
                    <Popconfirm title="确定要删除该商品吗?" onConfirm={()=>{ this.confirm(parseInt(record.id))}}>
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
                res.shopProducts.entries.map(
                    (entry) => {
                        entry.key = entry.id;
                        if(entry.type === 'youxuan'){
                            entry.type ="优选商品"
                        }
                        if(entry.type === 'link'){
                            entry.type ="外链商品"
                        }
                        if(entry.type === 'youzan'){
                            entry.type ="自有商品"
                        }
                    }
                )
                this.props.store.getProductData(res.shopProducts.entries);
                this.setState({
                    data: res.shopProducts.entries,
                    totalEntries:res.shopProducts.totalEntries,
                    curPage:res.shopProducts.pageNumber
                });
            }
        ).catch( err => console.log(err))
    }

    onPageChange = (pageNumber) => {
        this.queryProdData(pageNumber);
    }

    handleOk = () => {
      const priceRegEx = /^\d+(\.\d{1,2})?$/
      const linkRegEx = /^(https?|http):\/\/.+$/
        if(this.props.store.TabOption === '1' && this.state.modalName ==='新增商品'){
            this.refs.form1.validateFields((err, values) => {
                if (err) {
                    message.error(err);
                    return
                }else{
                    if(!this.props.store.mainImage){
                        message.error('请先上传图片，再提交！')
                        return
                    }
                    if(!priceRegEx.exec(values.price)){
                      message.error('请输入正确的价格！')
                      return
                    }
                    if(!linkRegEx.exec(values.detailUrl)){
                      message.error('请输入正确的链接！')
                      return
                    }
                    values.mainImage = this.props.store.mainImage;
                    values.price = parseInt(parseFloat(values.price)*100);
                    values.isDisplay = false;
                    Request.GraphQlRequest(addProduct, { baseinfo: values, shopId: localStorage.getItem('shopID'), type: 'LINK' }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                        res => {
                            res.createProduct.mainImage = this.props.store.mainImage;
                            res.createProduct.key = res.createProduct.id;
                            this.queryProdData(1);
                            this.setState({
                                visible: false
                            });
                            // document.getElementById('ossfile').innerHTML = '';
                            this.props.store.getMainImage('')
                            this.props.store.getRichTextContent(null)
                            notification.success({
                                message: '新增成功',
                                duration: 3,
                            });
                        }
                    ).catch(()=>{message.error('新增失败！')})
                }
            })
        }else if(this.props.store.TabOption === '2' && this.state.modalName ==='新增商品'){
            this.refs.form1.validateFields((err, values) => {
              if (err) {
                message.error(err);
                  return
              }else{
                console.log('1112', values);
                if(!this.props.store.mainImage){
                  message.error('请先上传图片，再提交！')
                  return
                }
                if(!priceRegEx.exec(values.price)){
                  message.error('请输入正确的价格！')
                  return
                }
                // console.log('values', values);
                values.mainImage = this.props.store.mainImage;
                values.price = parseInt(parseFloat(values.price)*100);
                values.isDisplay = false;
                if(this.props.store.richTextContent){
                    values.desc = this.props.store.richTextContent;
                }
                Request.GraphQlRequest(addProduct,
                    { baseinfo: values, shopId: localStorage.getItem('shopID'), type: 'YOUZAN' ,youzan: { imageIds: this.props.store.imageId, quantity:1000}}, `Bearer ${localStorage.getItem('accessToken')}`).then(
                    (res)=>{
                        // console.log('res', res);
                        // this.refs.form1.resetFields();
                        res.createProduct.mainImage = this.props.store.mainImage;
                        res.createProduct.key = res.createProduct.id;
                        this.queryProdData(1);
                        // document.getElementById('ossfile3').innerHTML = '';
                        this.setState({
                            visible: false
                        });
                        this.props.store.getMainImage('')
                        this.props.store.getimageId('')
                        this.props.store.getRichTextContent(null)
                        this.props.store.getTabOption('1')
                        notification.success({
                            message: '新增成功',
                            duration: 3,
                        });
                    }
                ).catch(()=>{message.error('新增失败！')})
              }
            })
        }else if(this.state.modalName ==='更新商品') {
            this.refs.form1.validateFields((err, values) => {
                if (err) {
                    message.error(err);
                } else {
                    values.mainImage = this.props.store.mainImage? this.props.store.mainImage : this.props.store.productFieldsData.mainImage;
                    values.price = parseInt(parseFloat(values.price) * 100);
                    if(this.props.store.richTextContent){
                        values.desc = this.props.store.richTextContent;
                    }
                    if(this.props.store.prodType === 'YOUZAN'){
                        if(!priceRegEx.exec(values.price)){
                          message.error('请输入正确的价格！')
                          return
                        }
                        Request.GraphQlRequest(UpdateProduct,
                            {
                                baseinfo: values,
                                shopId: localStorage.getItem('shopID'),
                                id: this.state.productID,
                                type:this.props.store.prodType,
                                youzan:{
                                    itemId: this.props.store.productFieldsData.itemId? parseInt(this.props.store.productFieldsData.itemId):null,
                                    imageIds:this.props.store.imageId === ''? undefined: this.props.store.imageId
                                }
                            }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                            (res) => {
                                res.updateProduct.key = res.updateProduct.id;
                                delete res.updateProduct.imagesUrls;
                                delete res.updateProduct.images;
                                this.queryProdData(1);
                                this.setState({
                                    visible: false,
                                    modalName:null
                                });
                                this.props.store.getProductFieldsData(null);
                                this.props.store.getimageId('');
                                this.props.store.getMainImage('')
                                this.props.store.getProdType(null)
                                notification.success({
                                    message: '更新成功',
                                    duration: 3,
                                });
                            }
                        ).catch(()=>{
                          message.error('更新失败！');
                          this.props.store.getProductFieldsData(null)
                        })
                    }else{
                        if(!priceRegEx.exec(values.price)){
                          message.error('请输入正确的价格！')
                          return
                        }
                        if(!linkRegEx.exec(values.detailUrl)){
                          message.error('请输入正确的链接！')
                          return
                        }
                        Request.GraphQlRequest(UpdateProduct,
                            {
                                baseinfo: values,
                                shopId: localStorage.getItem('shopID'),
                                id: this.state.productID,
                                type:this.props.store.prodType,
                            }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                            (res) => {
                                res.updateProduct.key = res.updateProduct.id;
                                delete res.updateProduct.imagesUrls;
                                delete res.updateProduct.images;
                                this.queryProdData(1);
                                this.setState({
                                    visible: false,
                                    modalName:null
                                });
                                this.props.store.getProductFieldsData(null);
                                this.props.store.getimageId('');
                                this.props.store.getMainImage('')
                                notification.success({
                                    message: '更新成功',
                                    duration: 3,
                                });
                            }
                        ).catch(()=>{
                          message.error('更新失败！')
                          this.props.store.getProductFieldsData(null)
                        })
                    }

                }
            })
        }
    }


    handleCancel = () => {
        this.setState({
            visible: false,
            modalName:null
        });
        this.props.store.getProdType(null)
        this.props.store.getProductFieldsData(null)
        this.props.store.getTabOption('1')
        this.props.store.getRichTextContent(null)
        this.props.store.getMainImage('')
    }

    callback = (key) => {
        this.props.store.getTabOption(key)
    }

    //删除
    confirm(id) {
        // console.log('id', id)
        Request.GraphQlRequest(deleteProduct,
            { shopId: localStorage.getItem('shopID'), id}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) =>{
                message.success('删除成功！');
                this.queryProdData(1);
            }
        ).catch(()=>{message.error('删除失败！')})
    }


    onClickInsert = () => {
        this.setState({
            visible: true,
            modalName:"新增商品"
        });
    }

    //updateProduct
    updateProduct = ( ID, type ) => {
        const fieldData = this.state.data.filter(
            entry =>{
                if(parseInt(entry.id) === ID){
                    return entry
                }
            }
        );
        if(type ==='自有商品'){
            this.props.store.getProdType('YOUZAN')
        }else if(type ==='优选商品'){
            this.props.store.getProdType('YOUXUAN')
        }else if(type ==='外链商品'){
            this.props.store.getProdType('LINK')
        }
        this.props.store.getProductFieldsData(fieldData[0])
        // console.log('fieldData',fieldData)
        this.setState({
            visible: true,
            productID:ID,
            modalName:"更新商品",
        });

    }

    handleChange = (key) => {
      // console.log('key', key)
      if(key==='-1'){
        this.queryProdData(1);
      }else{
        Request.GraphQlRequest(tagProducts, {shopId: localStorage.getItem('shopID'), tagId:key, isDisplay:false}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            res => {
                // console.log('111', res)
                res.tagProducts.products.map(
                    (prod) => {
                        prod.key = prod.id;
                        if(prod.type === 'youxuan'){
                            prod.type ="优选商品"
                        }
                        if(prod.type === 'link'){
                            prod.type ="外链商品"
                        }
                        if(prod.type === 'youzan'){
                            prod.type ="自有商品"
                        }
                    }
                )
                this.setState({
                    data: res.tagProducts.products,
                })
            }
        ).catch(err => console.error(err))
      }
    }

    unShlfConfirm = (ID) => {
        Request.GraphQlRequest(setDisplayProduct,
            {
                isDisplay: true,
                shopId: localStorage.getItem('shopID'),
                id: ID
            }, `Bearer ${localStorage.getItem('accessToken')}`).then(
            res => {
                // console.log('2223', res)
                message.success('上架成功！');
                this.queryProdData(1);
            }
        ).catch(()=>{message.error('上架失败！')})
    }


    //add to group
    changeProductTag = (ID) => {
        // console.log('ID',ID)
        this.setState({
            productID:ID,
            groupModalVisible:true
        })
    }

    //select Radio to group
    onRadioChange = (e) => {
        // console.log('radio checked', e.target.value);
        this.setState({
            radioValue: e.target.value,
        });
    }
    handleRadioCancel = () => {
        this.setState({
            radioValue: null,
            groupModalVisible:false
        });
    }

    handleGroupModalOk = () => {
        if(this.state.radioValue){
            Request.GraphQlRequest(changeProductTag, {id:this.state.productID, shopId: localStorage.getItem('shopID'), tagId:this.state.radioValue}, `Bearer ${localStorage.getItem('accessToken')}`).then(
                (res) => {
                    // console.log('OK', res)
                    this.setState({
                        radioValue: null,
                        groupModalVisible:false,
                        productID:''
                    });
                    message.success('添加成功！')
                    this.queryProdData(1);
                }
            ).catch(err => console.error(err))
        }
    }

    render() {
        const Tags = this.props.shopTags && this.props.shopTags.map(
            (tag) => {
                return (
                    <Option value={tag.id} key={tag.id}>{tag.name}</Option>
                )
            }
        )
        const TagRadios = this.props.shopTags && this.props.shopTags.map(
            (tag) => {
                return (
                    <Radio value={tag.id} key={tag.id}>{tag.name}</Radio>
                )
            }
        )
        return (
            <div>
                <Affix offsetTop={8} target={() => document.getElementById('main-content-div')} style={{ marginBottom:"20px", textAlign:"right" }}>
                    <Button type="primary" onClick={this.onClickInsert} >
                        <Icon type="plus-circle-o"/>新增商品
                    </Button>
                    <Select defaultValue="-1" style={{marginLeft:'5px', width: 120 }} onChange={this.handleChange}>
                        <Option value="-1" key='-1'>所有分组</Option>
                        {Tags}
                    </Select>
                </Affix>
                <Modal
                    title={ this.state.modalName}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    destroyOnClose={true}
                    width = "1000px"
                >
                    {
                        this.state.modalName ==="新增商品"?
                            <Tabs defaultActiveKey="1" onChange={this.callback}>
                                <TabPane tab="外链商品" key="1">
                                    <SelfProdForm ref="form1"/>
                                </TabPane>
                                <TabPane tab="自有商品" key="2">
                                    <YouzanProdForm ref="form1"/>
                                </TabPane>
                            </Tabs>
                            :
                            this.state.modalName ==="更新商品" && this.props.store.prodType !=='YOUZAN' ?
                                <SelfProdForm ref="form1" productData={this.props.store.productFieldsData} updateState={this.state.modalName}/>
                                :
                                <YouzanProdForm ref="form1" productData={this.props.store.productFieldsData} updateState={this.state.modalName}/>
                    }
                </Modal>
                <Modal
                    title='加入分组'
                    visible={this.state.groupModalVisible}
                    onOk={this.handleGroupModalOk}
                    onCancel={this.handleRadioCancel}
                    destroyOnClose={true}
                >
                    <RadioGroup onChange={this.onRadioChange} value={this.state.radioValue}>
                        {TagRadios}
                    </RadioGroup>
                </Modal>
                <Table
                    dataSource = {this.state.data? this.state.data : null }
                    columns={this.state.columns}
                    pagination={false}
                />
                {
                    (!isEmpty(this.state.data))
                    &&
                    <Pagination
                        defaultCurrent={1}
                        current={this.state.curPage}
                        pageSize={8}
                        onChange={this.onPageChange}
                        total={this.state.data? this.state.totalEntries : 1}
                        style={{ float:"right", marginTop: "10px"}}/>
                }
            </div>
        )
    }
}
