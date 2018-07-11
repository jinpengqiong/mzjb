'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _goods = require('zan-choose-dialog/lib/dialogs/goods');

var _goods2 = _interopRequireDefault(_goods);

var _concat = require('lodash/concat');

var _concat2 = _interopRequireDefault(_concat);

var _DesignEditor2 = require('zent/lib/design/editor/DesignEditor');

var _GoodImage = require('./GoodImage');

var _GoodImage2 = _interopRequireDefault(_GoodImage);

var _EditorCard = require('../common/editor-card/EditorCard');

var _EditorCard2 = _interopRequireDefault(_EditorCard);

var _goodsStyleEditor = require('../common/goods-style-editor');

var _goodsStyleEditor2 = _interopRequireDefault(_goodsStyleEditor);

var _helper = require('./helper');

var Helper = _interopRequireWildcard(_helper);

var _utils = require('../common/utils');

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsEditor = (_temp2 = _class = function (_DesignEditor) {
  _inherits(GoodsEditor, _DesignEditor);

  function GoodsEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodsEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsEditor.__proto__ || Object.getPrototypeOf(GoodsEditor)).call.apply(_ref, [this].concat(args))), _this), _this.addGoodImage = function () {
      var globalConfig = _this.props.globalConfig;
      var goods = _this.props.value.goods;

      var self = _this;
      var addGoodsList = void 0;

      (0, _goods2['default'])({
        config: globalConfig,
        multiple: true,
        onChoose: function onChoose(list) {
          addGoodsList = (0, _concat2['default'])(goods, Helper.transferGoodsList(list));
          self.onCustomInputChange('goods')(addGoodsList);
        }
      });
    }, _this.handleChange = function (list) {
      _this.onCustomInputChange('goods')(list);
    }, _this.handleGoodsStyleChange = function (e) {
      var onChange = _this.props.onChange;
      var target = e.target;
      var name = target.name,
          checked = target.checked;

      onChange(_defineProperty({}, name, Utils.booleanToString(checked)));
      _this.setMetaProperty(name, 'dirty');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoodsEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          globalConfig = _props.globalConfig,
          onChange = _props.onChange;
      var goods = value.goods;


      return _react2['default'].createElement(
        'div',
        { className: 'rc-design-component-goods-editor' },
        _react2['default'].createElement(
          _DesignEditor2.ControlGroup,
          {
            className: 'choose-goods__control-group',
            label: '\u9009\u62E9\u5546\u54C1:',
            focusOnLabelClick: false
          },
          _react2['default'].createElement(
            _EditorCard2['default'],
            {
              className: 'rc-design-component-goods-editor-card',
              list: goods,
              canDelete: true,
              canAdd: true,
              isInline: true,
              onChange: this.handleChange,
              onAdd: this.addGoodImage
            },
            goods.map(function (item) {
              return _react2['default'].createElement(_GoodImage2['default'], {
                globalConfig: globalConfig,
                key: item.id,
                data: item
              });
            })
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
        goods: [],

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
        // show_wish_btn: '0',

        // 是否显示商品描述(0: 不显示, 1: 显示)
        show_sub_title: '0'
      };
    }
  }]);

  return GoodsEditor;
}(_DesignEditor2.DesignEditor), _class.designType = 'goods', _class.designDescription = '商品', _temp2);
exports['default'] = GoodsEditor;
module.exports = exports['default'];