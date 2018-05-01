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

var _adlist = require('./adlist');

var _adlist2 = _interopRequireDefault(_adlist);

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

    _this.openModal = function () {
      _this.setState({
        visible: true
      });
    };

    _this.handleOk1 = function (e) {
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

  (0, _createClass3.default)(RegistrationForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.store.getVideoID('1');
    }
  }, {
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
        label: '\u5E7F\u544A\u5217\u8868',
        help: '\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u64AD\u653E\u5E7F\u544A!'
      }), getFieldDecorator('mediaId', {
        rules: [{
          required: true, message: '请选择一组播放广告!'
        }]
      })(_react2.default.createElement('div', null, _react2.default.createElement(_antd.Button, { onClick: this.openModal }, this.props.store.ADMediaID ? "已选好广告" : "选择广告"), _react2.default.createElement(_antd.Modal, {
        title: '\u9009\u62E9\u89C6\u9891\u6587\u4EF6',
        width: '80%',
        visible: this.state.visible,
        onOk: this.handleOk1,
        onCancel: this.handleCancel
      }, _react2.default.createElement(_adlist2.default, null))))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u64AD\u5355\u540D\u79F0'
      }), getFieldDecorator('name', {
        rules: [{
          required: true, message: '请输入播单名称!'
        }]
      })(_react2.default.createElement(_antd.Input, null))));
    }
  }]);
  return RegistrationForm;
}(_react2.default.Component)) || _class) || _class);

var AdPlaylistForm = _antd.Form.create()(RegistrationForm);
exports.default = AdPlaylistForm;