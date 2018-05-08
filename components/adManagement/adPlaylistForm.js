import { Form, Input, DatePicker, Button, Radio, Select, Modal } from 'antd';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
import { TwitterPicker } from 'react-color'
import { inject, observer } from 'mobx-react'
import ADList from './adlist' 
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
  componentDidMount(){
    this.props.store.getVideoID('1');
  }

  openModal = () => {
    this.setState({
      visible: true,
    });
  }
  
  handleOk1 = (e) => {
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
          label="广告列表"
          help="选择一个或多个播放广告!"
        >
          {getFieldDecorator('mediaId', {
            rules: [{
              required: true, message: '请选择一组播放广告!',
            }],
          })(
            <div>
            <Button onClick={this.openModal}>{this.props.store.checkedValues1==""? "选择广告" : "已选好广告"}</Button>
            <Modal
              title="选择视频文件"
              width="80%"
              visible={this.state.visible}
              onOk={this.handleOk1}
              onCancel={this.handleCancel}
            >
              <ADList />
            </Modal>  
            </div>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="播单名称"
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: '请输入播单名称!',
            }],
          })(
            <Input/>
          )}
        </FormItem>
      </Form>
    );
  }
}

const AdPlaylistForm = Form.create()(RegistrationForm);
export default AdPlaylistForm;