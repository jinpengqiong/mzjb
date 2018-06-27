'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radio = require('zent/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = require('zent/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DesignEditor = require('zent/lib/design/editor/DesignEditor');

var _utils = require('../utils');

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = _radio2['default'].Group;

var GoodsStyleEditor = function (_Component) {
  _inherits(GoodsStyleEditor, _Component);

  function GoodsStyleEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodsStyleEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsStyleEditor.__proto__ || Object.getPrototypeOf(GoodsStyleEditor)).call.apply(_ref, [this].concat(args))), _this), _this.onListStyleChange = function (e) {
      var _this$props = _this.props,
          value = _this$props.value,
          onDirectChange = _this$props.onDirectChange;
      var sizeType = value.size_type;


      var listStyle = e.target.value;

      var changeObj = {
        size: listStyle
      };

      if (sizeType === '1' || sizeType === '3') {
        changeObj.size_type = '0';
      }

      onDirectChange(changeObj);
    }, _this.onSizeTypeChange = function (e) {
      var _this$props2 = _this.props,
          value = _this$props2.value,
          onDirectChange = _this$props2.onDirectChange;
      var buyBtnType = value.buy_btn_type;


      var sizeType = e.target.value;

      var changeObj = {
        size_type: sizeType
      };

      if (buyBtnType === '3') {
        changeObj.buy_btn_type = '1';
      }

      onDirectChange(changeObj);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoodsStyleEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          onChange = _props.onChange,
          onInputChange = _props.onInputChange,
          globalConfig = _props.globalConfig;
      var size = value.size,
          sizeType = value.size_type,
          buy_btn = value.buy_btn,
          buyBtnType = value.buy_btn_type,
          show_wish_btn = value.show_wish_btn,
          title = value.title,
          show_sub_title = value.show_sub_title,
          price = value.price;
      var isWishOpen = globalConfig.isWishOpen;

      var showBuyBtn = Utils.numberToBoolean(buy_btn);
      var showTitle = Utils.numberToBoolean(title);
      var showWishBtn = Utils.numberToBoolean(show_wish_btn);
      var showSubTitle = Utils.numberToBoolean(show_sub_title);
      var showPrice = Utils.numberToBoolean(price);

      return _react2['default'].createElement(
        'div',
        { className: 'rc-design-component-goods-style-editor' },
        _react2['default'].createElement(
          _DesignEditor.ControlGroup,
          { label: '\u5217\u8868\u6837\u5F0F:' },
          _react2['default'].createElement(
            RadioGroup,
            { value: size, onChange: this.onListStyleChange },
            _react2['default'].createElement(
              _radio2['default'],
              { name: 'size', value: '0' },
              '\u5927\u56FE'
            ),
            _react2['default'].createElement(
              _radio2['default'],
              { name: 'size', value: '1' },
              '\u5C0F\u56FE'
            ),
            // _react2['default'].createElement(
            //   _radio2['default'],
            //   { name: 'size', value: '2' },
            //   '\u4E00\u5927\u4E24\u5C0F'
            // ),
            _react2['default'].createElement(
              _radio2['default'],
              { name: 'size', value: '3' },
              '\u8BE6\u7EC6\u5217\u8868'
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'controls-card' },
          _react2['default'].createElement(
            _DesignEditor.ControlGroup,
            { label: '\u663E\u793A\u98CE\u683C:' },
            _react2['default'].createElement(
              RadioGroup,
              { value: sizeType, onChange: this.onSizeTypeChange },
              _react2['default'].createElement(
                _radio2['default'],
                { name: 'size_type', value: '0' },
                '\u5361\u7247'
              ),
              size === '1' && _react2['default'].createElement(
                _radio2['default'],
                { name: 'size_type', value: '1' },
                '\u7011\u5E03\u6D41'
              ),
              _react2['default'].createElement(
                _radio2['default'],
                { name: 'size_type', value: '2' },
                '\u6781\u7B80'
              ),
              size === '1' && _react2['default'].createElement(
                _radio2['default'],
                { name: 'size_type', value: '3' },
                '\u4FC3\u9500'
              )
            )
          ),
          sizeType !== '3' && (sizeType !== '2' || size === '3') && _react2['default'].createElement(
            'div',
            { className: (0, _classnames2['default'])(showBuyBtn ? '' : 'controls-margin-bottom') },
            _react2['default'].createElement(
              _DesignEditor.ControlGroup,
              { label: '\u663E\u793A\u5185\u5BB9:' },
              _react2['default'].createElement(
                _checkbox2['default'],
                {
                  checked: showBuyBtn,
                  name: 'buy_btn',
                  onChange: onChange
                },
                '\u8D2D\u4E70\u6309\u94AE'
              )
            ),
            showBuyBtn && _react2['default'].createElement(
              _DesignEditor.ControlGroup,
              {
                showLabel: false,
                focusOnLabelClick: false,
                className: 'buy-btn-style'
              },
              _react2['default'].createElement(
                RadioGroup,
                { value: buyBtnType, onChange: onInputChange },
                _react2['default'].createElement(
                  _radio2['default'],
                  { name: 'buy_btn_type', value: '1' },
                  '\u6837\u5F0F1'
                ),
                _react2['default'].createElement(
                  _radio2['default'],
                  { name: 'buy_btn_type', value: '2' },
                  '\u6837\u5F0F2'
                ),
                !(size === '3' && sizeType === '2') && _react2['default'].createElement(
                  _radio2['default'],
                  { name: 'buy_btn_type', value: '3' },
                  '\u6837\u5F0F3'
                ),
                _react2['default'].createElement(
                  _radio2['default'],
                  { name: 'buy_btn_type', value: '4' },
                  '\u6837\u5F0F4'
                )
              )
            )
          ),
          // isWishOpen && _react2['default'].createElement(
          //   _DesignEditor.ControlGroup,
          //   {
          //     showLabel: false,
          //     focusOnLabelClick: false,
          //     className: 'controls-card-item-margin'
          //   },
          //   _react2['default'].createElement(
          //     _checkbox2['default'],
          //     {
          //       checked: showWishBtn,
          //       name: 'show_wish_btn',
          //       onChange: onChange
          //     },
          //     '\u52A0\u5165\u5FC3\u613F\u5355\u6309\u94AE'
          //   )
          // ),
          sizeType !== '3' && size !== '3' && _react2['default'].createElement(
            'div',
            null,
            !(size === '1' && sizeType === '2') && _react2['default'].createElement(
              _DesignEditor.ControlGroup,
              {
                showLabel: false,
                focusOnLabelClick: false,
                className: 'controls-card-item-margin'
              },
              _react2['default'].createElement(
                _checkbox2['default'],
                {
                  checked: showTitle,
                  name: 'title',
                  onChange: onChange
                },
                '\u5546\u54C1\u540D'
              )
            ),
            size === '0' && _react2['default'].createElement(
              _DesignEditor.ControlGroup,
              {
                showLabel: false,
                focusOnLabelClick: false,
                className: 'controls-card-item-margin'
              },
              _react2['default'].createElement(
                _checkbox2['default'],
                {
                  checked: showSubTitle,
                  name: 'show_sub_title',
                  onChange: onChange
                },
                '\u5546\u54C1\u7B80\u4ECB'
              )
            ),
            _react2['default'].createElement(
              _DesignEditor.ControlGroup,
              {
                showLabel: false,
                focusOnLabelClick: false,
                className: 'controls-card-item-margin'
              },
              _react2['default'].createElement(
                _checkbox2['default'],
                { checked: showPrice, name: 'price', onChange: onChange },
                '\u4EF7\u683C'
              )
            )
          )
        )
      );
    }
  }]);

  return GoodsStyleEditor;
}(_react.Component);

exports['default'] = GoodsStyleEditor;
module.exports = exports['default'];