'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radio = require('zent/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _goodsTag = require('zan-choose-dialog/lib/dialogs/goods-tag');

var _goodsTag2 = _interopRequireDefault(_goodsTag);

var _head = require('lodash/head');

var _head2 = _interopRequireDefault(_head);

var _has = require('lodash/has');

var _has2 = _interopRequireDefault(_has);

var _DesignEditor2 = require('zent/lib/design/editor/DesignEditor');

var _goodsStyleEditor = require('../common/goods-style-editor');

var _goodsStyleEditor2 = _interopRequireDefault(_goodsStyleEditor);

var _linkTag = require('../common/link-tag');

var _linkTag2 = _interopRequireDefault(_linkTag);

var _utils = require('../common/utils');

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = _radio2['default'].Group;

var GoodsListEditor = (_temp2 = _class = function (_DesignEditor) {
  _inherits(GoodsListEditor, _DesignEditor);

  function GoodsListEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodsListEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsListEditor.__proto__ || Object.getPrototypeOf(GoodsListEditor)).call.apply(_ref, [this].concat(args))), _this), _this.addGoodTag = function () {
      var globalConfig = _this.props.globalConfig;

      var self = _this;

      (0, _goodsTag2['default'])({
        config: globalConfig,
        onChoose: function onChoose(list) {
          var goods = (0, _head2['default'])(list) || {};
          if (!(0, _has2['default'])(goods, 'type')) {
            goods.type = 'tag';
          }
          self.onCustomInputChange('goods')(goods);
        }
      });
    }, _this.closeTagCallback = function (e) {
      e.preventDefault();
      _this.onCustomInputChange('goods')({});
    }, _this.handleGoodsStyleChange = function (e) {
      var onChange = _this.props.onChange;
      var target = e.target;
      var name = target.name,
          checked = target.checked;

      onChange(_defineProperty({}, name, Utils.booleanToString(checked)));
      _this.setMetaProperty(name, 'dirty');
    }, _this.handleGoodsNumberTypeChange = function (e) {
      var onChange = _this.props.onChange;
      var target = e.target;
      var value = target.value;

      var goodsNum = 6;

      switch (value) {
        case '0':
          goodsNum = 6;
          break;
        case '1':
          goodsNum = 12;
          break;
        case '2':
          goodsNum = 18;
          break;
        default:
      }

      onChange({
        goods_number_type: value,
        goods_number: goodsNum
      });
      _this.setMetaProperty('goods_number_type', 'dirty');
      _this.setMetaProperty('goods_number', 'dirty');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoodsListEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          globalConfig = _props.globalConfig,
          onChange = _props.onChange;
      var goods = value.goods,
          goodsNumberType = value.goods_number_type;


      return _react2['default'].createElement(
        'div',
        { className: 'rc-design-component-goods-list-editor' },
        _react2['default'].createElement(
          _DesignEditor2.ControlGroup,
          {
            label: '\u5546\u54C1\u6765\u6E90:',
            focusOnLabelClick: false,
            className: 'goods-source-group'
          },
          goods.title ? _react2['default'].createElement(
            'div',
            { className: 'rc-design-component-goods-list-editor__edit-tag' },
            _react2['default'].createElement(_linkTag2['default'], {
              url: goods.url,
              title: goods.title,
              type: '商品标签',
              onClose: this.closeTagCallback
            }),
            _react2['default'].createElement(
              'span',
              {
                className: 'rc-design-component-goods-list-editor__update-tag',
                onClick: this.addGoodTag
              },
              '\u4FEE\u6539'
            )
          ) : _react2['default'].createElement(
            'span',
            {
              className: 'rc-design-component-goods-list-editor__choose-tag',
              onClick: this.addGoodTag
            },
            '\u4ECE\u5546\u54C1\u5206\u7EC4\u4E2D\u9009\u62E9'
          )
        ),
        _react2['default'].createElement(
          'p',
          { className: 'help-desc' },
          '\u5DE6\u4FA7\u5B9E\u65F6\u9884\u89C8\u6682\u4E0D\u652F\u6301\u663E\u793A\u5176\u5305\u542B\u7684\u5546\u54C1\u6570\u636E'
        ),
        _react2['default'].createElement(
          _DesignEditor2.ControlGroup,
          { label: '\u663E\u793A\u4E2A\u6570:' },
          _react2['default'].createElement(
            RadioGroup,
            {
              value: goodsNumberType,
              onChange: this.handleGoodsNumberTypeChange
            },
            _react2['default'].createElement(
              _radio2['default'],
              { name: 'goods_number_type', value: '0' },
              '6'
            ),
            _react2['default'].createElement(
              _radio2['default'],
              { name: 'goods_number_type', value: '1' },
              '12'
            ),
            _react2['default'].createElement(
              _radio2['default'],
              { name: 'goods_number_type', value: '2' },
              '18'
            )
          )
        ),
        _react2['default'].createElement(_goodsStyleEditor2['default'], {
          globalConfig: globalConfig,
          value: value,
          onInputChange: this.onInputChange,
          onChange: this.handleGoodsStyleChange,
          onDirectChange: onChange
        })
      );
    }

    // 组件的类型


    // 组件的描述

  }], [{
    key: 'getInitialValue',


    // 添加组件时调用，用来获取新组件的初始值
    value: function getInitialValue() {
      return {
        // 商品来源
        goods: {},

        // 显示个数 (0: 6个, 1: 12个, 2: 18个)
        goods_number_type: '0',

        // 显示个数
        goods_number: 6,

        // 列表样式（0: 大图, 1: 小图, 2: 一大两小, 3: 详细列表)
        size: '1',

        // (0: 卡片式, 1: 瀑布流, 2: 极简样式, 3: 促销样式)
        size_type: '0',

        // 是否显示购买按钮（0: 不显示, 1: 显示）
        buy_btn: '1',

        // 购买按钮样式
        buy_btn_type: '1',

        // 是否显示商品名(0: 不显示, 1: 显示)
        title: '1',

        // 是否显示价格(0: 不显示, 1: 显示)
        price: '1',

        // 显示心愿单按钮(0: 不显示, 1: 显示)
        show_wish_btn: '0',

        // 是否显示商品描述(0: 不显示, 1: 显示)
        show_sub_title: '0'
      };
    }
  }]);

  return GoodsListEditor;
}(_DesignEditor2.DesignEditor), _class.designType = 'goods_list', _class.designDescription = _react2['default'].createElement(
  'span',
  null,
  '\u5546\u54C1',
  _react2['default'].createElement('br', null),
  '\u5217\u8868'
), _temp2);
exports['default'] = GoodsListEditor;
module.exports = exports['default'];