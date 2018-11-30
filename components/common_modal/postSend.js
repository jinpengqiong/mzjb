import { Modal, Radio, Select, Input, Alert, message } from 'antd';
import Request from '../../utils/graphql_request';
const Option = Select.Option;
const RadioGroup = Radio.Group;
import { inject, observer } from 'mobx-react'

const expressList = `
    query{
      expressList{
        id
        name
      }
    }
  `

const confirmSendProduct = `
    mutation ($isNoExpress: Int!,$outSid: String,$outStype: String,$tid: String!) {
        confirmSendProduct(isNoExpress:$isNoExpress,outSid:$outSid,outStype:$outStype,tid:$tid){
           status
        }
    }`;


@inject('store') @observer
export default class PostSendModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      radioValue:1,
      expressData:null,
      selectedValue:'',
      InputValue:''
    }
  }

  queryExpressList = () => {
    Request.GraphQlRequest(expressList,
        {},
        `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
          // console.log('expressList', res)
          this.setState({
            expressData:res.expressList
          })
        }
    ).catch( err => Request.token_auth(err) )
  }

  handlePostSend = tid => {
    // console.log('tid', tid)
    if(this.state.radioValue === 2){
      Request.GraphQlRequest(confirmSendProduct,
          {
            isNoExpress:1,
            tid
          },
          `Bearer ${localStorage.getItem('accessToken')}`).then(
          res => {
            // console.log('222', res)
            if(res.confirmSendProduct.status === 'ok'){
              message.success('发货成功！')
              this.setState({
                InputValue:'',
                selectedValue:'',
                radioValue:1
              })
              this.props.store.setModalDisplay('post', false)
              this.props.querySupplierOrder()
            }
          }
      ).catch( err => Request.token_auth(err) )
    }else if(this.state.radioValue === 1 && this.state.InputValue && this.state.selectedValue){
      Request.GraphQlRequest(confirmSendProduct,
          {
            isNoExpress:0,
            tid,
            outSid:this.state.InputValue,
            outStype:this.state.selectedValue.toString()
          },
          `Bearer ${localStorage.getItem('accessToken')}`).then(
          res => {
            // console.log('222', res)
            if(res.confirmSendProduct.status === 'ok'){
              message.success('发货成功！')
            }
            this.setState({
              InputValue:'',
              selectedValue:'',
              radioValue:1
            })
            this.props.store.setModalDisplay('post', false)
            this.props.querySupplierOrder()
          }
      ).catch( err => Request.token_auth(err) )
    }else {
      message.error('请选择物流或输入单号再提交')
    }
  }

  onRadioChange = e => {
    this.setState({
      radioValue: e.target.value
    })
  }

  handleInputChange = (e, type) => {
    if(type === 'postId'){
      this.setState({
        InputValue:e.target.value
      })
    }
  }

  handleSelectChange = value => {
    this.setState({
      selectedValue:value
    })
  }

  handlePostCancel = () => {
    this.props.store.setModalDisplay('post', false)
  }

  componentDidMount(){
    this.queryExpressList()
  }


  render() {
    const { postData, store } = this.props
    const renderExpress = this.state.expressData && this.state.expressData.map(
        item => {
          return <Option value={item.id} key={item.id}>{item.name}</Option>
        }
    )
    const detailInfo = postData && JSON.parse(postData.detail).full_order_info
    return (
        <div>
          {
            postData
              &&
            <Modal
                title="订单发货"
                visible={ store.postModalVisible }
                onOk={ () => { this.handlePostSend(postData.tid) }
                }
                onCancel={ this.handlePostCancel }
                destroyOnClose={true}
                maskClosable={false}>
              <p>
                <strong>收获地址：</strong>
                {
                  detailInfo.address_info.delivery_province +
                  detailInfo.address_info.delivery_city +
                  detailInfo.address_info.delivery_district +
                  detailInfo.address_info.delivery_address + '，' +
                  detailInfo.address_info.receiver_name + '，' +
                  detailInfo.address_info.receiver_tel
                }</p>
              <br/>
              <div>
                <strong>发货方式：</strong>
                <RadioGroup onChange={this.onRadioChange} value={this.state.radioValue}>
                  <Radio value={1} key={1}>物流发货</Radio>
                  <Radio value={2} key={2}>无需发货</Radio>
                </RadioGroup>
              </div>
              <br/>
              {
                this.state.radioValue === 1
                &&
                <div>
                  <div>
                    <strong>物流公司：</strong>
                    <Select style={{ width: 120 }} onChange={this.handleSelectChange} value={this.state.selectedValue}>
                      { renderExpress }
                    </Select>
                    <strong style={{ marginLeft: '1em' }}>快递单号：</strong>
                    <Input onChange={ e => { this.handleInputChange(e, 'postId')}} value={this.state.InputValue} style={{ width: 180 }}/>
                  </div>
                  <br/>
                  <Alert message="请仔细填写物流公司及快递单号，确认后将不可修改" type="info" />
                </div>
              }
            </Modal>
          }
        </div>
    );
  }
}