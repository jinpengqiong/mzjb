import { Form, Input, DatePicker, Button, Radio, Select, Modal } from 'antd';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
import { TwitterPicker } from 'react-color'
import { inject, observer } from 'mobx-react'
import VideoList from '../resources/videoList' 
import ProdTable from '../DBTable/tableComponent' 
const RadioGroup = Radio.Group;
import moment from 'moment';


@inject('store') @observer
class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          color: '',
          position: '',
          weight:'',
          visible: false,
          visible1: false,
          title:'',
          images:'',
          detailUrl:''
        };
      }

  // background select
  handleColorChange = (color, event) =>{
    this.props.store.getColor(color.hex);
    this.setState({
      color:color.hex
    })
  }   
  // position select
  onChange = (e) => {
    // console.log('radio checked', e.target.value);
    this.props.store.getPosition(e.target.value);
  }
  //priority select
  handleChange = (value) => {
    // console.log(`selected ${value}`);
    this.props.store.getWeight(value);
  }
  openModal = () => {
    this.setState({
      visible: true,
    });
  }
  openModal1 = () => {
    this.setState({
      visible1: true,
    });
  }
  handleOk1 = (e) => {
    this.setState({
      visible: false,
      visible1:false
    });
  }

  handleOk2 = (e) => {
    const key = this.props.store.selectedRowKeys[0];
    this.props.store.ProductData.map(
      (entry) =>{
        if(entry.id === key ){
          this.props.store.getStrucInfo(entry.title, entry.mainImage, entry.detailUrl)
        }
      }
    )
    this.setState({
      visible: false,
      visible1:false
    });
  }

  handleCancel = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
      visible1:false
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        md: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        md: { span: 16 },
      },
    };
    // console.log('state', this.state)
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="视频文件"
          help="请选择一个视频文件!"
        >
          {getFieldDecorator('mediaId', {
            rules: [{
              required: true, message: '请选择一个视频文件!',
            }],
          })(
            <div>
            <Button onClick={this.openModal}>{ this.props.store.checkedValues === "" ? "选择视频文件" : "已选好视频文件"}</Button>
            <Modal
              title="选择视频文件"
              width="60%"
              visible={this.state.visible}
              onOk={this.handleOk1}
              onCancel={this.handleCancel}
            >
              <VideoList />
            </Modal>  
            </div>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="推广商品"
          help="请选择一个商品!"
        >
          {getFieldDecorator('product', {
            rules: [{
              required: true, message: '请根据商品名称选择一个商品!',
            }],
          })(
            <div>
              <Button onClick={this.openModal1}>{this.props.store.selectedRowKeys ===null?"选择推广商品" : "已选好商品"}</Button>
              <Modal
                title="选择推广商品"
                width="80%"
                visible={this.state.visible1}
                onOk={this.handleOk2}
                onCancel={this.handleCancel}
              >
                <ProdTable shopID={this.props.store.shopID}/>
              </Modal>  
            </div>
            
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="广告位置"
        >
          {getFieldDecorator('position', {
            rules: [{
              required: true, message: '请选择广告播放位置!',
            }],
          })(
            <RadioGroup onChange={this.onChange} >
            <Radio value='side'>侧面</Radio>
            <Radio value='bottom'>底部</Radio>
          </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="广告优先级"
        >
          {getFieldDecorator('weight', {
            rules: [{
              required: true, message: '请选择显示优先级，1为优先级最高!',
            }],
          })(
            <Select onChange={this.handleChange} style={{ width:80}}>
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
              <Option value={4}>4</Option>
              <Option value={5}>5</Option>
              <Option value={6}>6</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="卡券颜色"
        >
          {getFieldDecorator('backgroundColor', {
            rules: [{
              required: true, message: '请选择卡券颜色!',
            }],
          })(
            <TwitterPicker 
            color={this.state.color}
            onChange={this.handleColorChange}
            />
          )}
        </FormItem>
      </Form>
    );
  }
}

const AdlistForm = Form.create()(RegistrationForm);
export default AdlistForm;