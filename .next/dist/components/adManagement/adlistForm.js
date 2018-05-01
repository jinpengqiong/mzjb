'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _antd = require('antd');

var _reactColor = require('react-color');

var _mobxReact = require('mobx-react');

var _videoList = require('../resources/videoList');

var _videoList2 = _interopRequireDefault(_videoList);

var _tableComponent = require('../DBTable/tableComponent');

var _tableComponent2 = _interopRequireDefault(_tableComponent);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FormItem = _antd.Form.Item;
var RangePicker = _antd.DatePicker.RangePicker;

var RadioGroup = _antd.Radio.Group;
var RegistrationForm = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(RegistrationForm, _React$Component);

  function RegistrationForm(props) {
    (0, _classCallCheck3.default)(this, RegistrationForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RegistrationForm.__proto__ || (0, _getPrototypeOf2.default)(RegistrationForm)).call(this, props));

    _this.handleColorChange = function (color, event) {
      _this.props.store.getColor(color.hex);
      _this.setState({
        color: color.hex
      });
    };

    _this.onChange = function (e) {
      console.log('radio checked', e.target.value);
      _this.props.store.getPosition(e.target.value);
    };

    _this.handleChange = function (value) {
      console.log('selected ' + value);
      _this.props.store.getWeight(value);
    };

    _this.openModal = function () {
      _this.setState({
        visible: true
      });
    };

    _this.openModal1 = function () {
      _this.setState({
        visible1: true
      });
    };

    _this.handleOk1 = function (e) {
      _this.setState({
        visible: false,
        visible1: false
      });
    };

    _this.handleOk2 = function (e) {
      var key = _this.props.store.selectedRowKeys[0];
      _this.props.store.ProductData.map(function (entry) {
        if (entry.id === key) {
          _this.props.store.getStrucInfo(entry.title, entry.mainImage, entry.detailUrl);
        }
      });
      _this.setState({
        visible: false,
        visible1: false
      });
    };

    _this.handleCancel = function (e) {
      console.log(e);
      _this.setState({
        visible: false,
        visible1: false
      });
    };

    _this.state = {
      color: '',
      position: '',
      weight: '',
      visible: false,
      visible1: false,
      title: '',
      images: '',
      detailUrl: ''
    };
    return _this;
  }

  // background select

  // position select

  //priority select


  (0, _createClass3.default)(RegistrationForm, [{
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          md: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          md: { span: 16 }
        }
      };
      console.log('state', this.state);
      return _react2.default.createElement(_antd.Form, null, _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u89C6\u9891\u6587\u4EF6',
        help: '\u8BF7\u9009\u62E9\u4E00\u4E2A\u89C6\u9891\u6587\u4EF6!'
      }), getFieldDecorator('mediaId', {
        rules: [{
          required: true, message: '请选择一个视频文件!'
        }]
      })(_react2.default.createElement('div', null, _react2.default.createElement(_antd.Button, { onClick: this.openModal }, this.props.store.VideoID == "" ? "选择视频文件" : "已选好视频文件"), _react2.default.createElement(_antd.Modal, {
        title: '\u9009\u62E9\u89C6\u9891\u6587\u4EF6',
        width: '60%',
        visible: this.state.visible,
        onOk: this.handleOk1,
        onCancel: this.handleCancel
      }, _react2.default.createElement(_videoList2.default, null))))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u63A8\u5E7F\u5546\u54C1',
        help: '\u8BF7\u9009\u62E9\u4E00\u4E2A\u5546\u54C1!'
      }), getFieldDecorator('product', {
        rules: [{
          required: true, message: '请根据商品名称选择一个商品!'
        }]
      })(_react2.default.createElement('div', null, _react2.default.createElement(_antd.Button, { onClick: this.openModal1 }, this.props.store.selectedRowKeys === "" ? "选择推广商品" : "已选好商品"), _react2.default.createElement(_antd.Modal, {
        title: '\u9009\u62E9\u63A8\u5E7F\u5546\u54C1',
        width: '80%',
        visible: this.state.visible1,
        onOk: this.handleOk2,
        onCancel: this.handleCancel
      }, _react2.default.createElement(_tableComponent2.default, { shopID: this.props.store.shopID }))))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5E7F\u544A\u4F4D\u7F6E'
      }), getFieldDecorator('position', {
        rules: [{
          required: true, message: '请选择广告播放位置!'
        }]
      })(_react2.default.createElement(RadioGroup, { onChange: this.onChange }, _react2.default.createElement(_antd.Radio, { value: 'side' }, '\u4FA7\u9762'), _react2.default.createElement(_antd.Radio, { value: 'bottom' }, '\u5E95\u90E8')))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5E7F\u544A\u4F18\u5148\u7EA7'
      }), getFieldDecorator('weight', {
        rules: [{
          required: true, message: '请选择显示优先级，1为优先级最高!'
        }]
      })(_react2.default.createElement(_antd.Select, { onChange: this.handleChange, style: { width: 80 } }, _react2.default.createElement(Option, { value: 1 }, '1'), _react2.default.createElement(Option, { value: 2 }, '2'), _react2.default.createElement(Option, { value: 3 }, '3'), _react2.default.createElement(Option, { value: 4 }, '4'), _react2.default.createElement(Option, { value: 5 }, '5'), _react2.default.createElement(Option, { value: 6 }, '6')))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5361\u5238\u989C\u8272'
      }), getFieldDecorator('backgroundColor', {
        rules: [{
          required: true, message: '请选择卡券颜色!'
        }]
      })(_react2.default.createElement(_reactColor.TwitterPicker, {
        color: this.state.color,
        onChange: this.handleColorChange
      }))));
    }
  }]);
  return RegistrationForm;
}(_react2.default.Component)) || _class) || _class);

var AdlistForm = _antd.Form.create()(RegistrationForm);
exports.default = AdlistForm;