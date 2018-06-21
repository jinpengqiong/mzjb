'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colorpicker = require('zent/lib/colorpicker');

var _colorpicker2 = _interopRequireDefault(_colorpicker);

var _input = require('zent/lib/input');

var _input2 = _interopRequireDefault(_input);

var _radio = require('zent/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _button = require('zent/lib/button');

var _button2 = _interopRequireDefault(_button);

var _DatePicker = require('zent/lib/datetimepicker/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

var _trim = require('lodash/trim');

var _trim2 = _interopRequireDefault(_trim);

var _each = require('lodash/each');

var _each2 = _interopRequireDefault(_each);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _ChooseMenu = require('zan-choose-dialog/lib/ChooseMenu');

var _ChooseMenu2 = _interopRequireDefault(_ChooseMenu);

var _DesignEditor2 = require('zent/lib/design/editor/DesignEditor');

var _textEditor = require('../common/text-editor');

var _textEditor2 = _interopRequireDefault(_textEditor);

var _url = require('../../utils/url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = _radio2['default'].Group;

var DEFAULT_COLOR = '#ffffff';

var checkValidate = function checkValidate(item) {
  return {
    title: {
      isShowError: !(0, _trim2['default'])(item.title),
      text: '导航名称不能为空'
    },
    type: {
      isShowError: !(0, _trim2['default'])(item.link_url),
      text: '导航链接不能为空'
    }
  };
};

var TitleEditor = (_temp = _class = function (_DesignEditor) {
  _inherits(TitleEditor, _DesignEditor);

  function TitleEditor(props) {
    _classCallCheck(this, TitleEditor);

    var _this = _possibleConstructorReturn(this, (TitleEditor.__proto__ || Object.getPrototypeOf(TitleEditor)).call(this, props));

    _this.onColorReset = function () {
      _this.onCustomInputChange('color')(DEFAULT_COLOR);
    };

    _this.onColorChange = function (color) {
      _this.onCustomInputChange('color')(color);
    };

    _this.onDatePickerChange = function (value) {
      _this.onCustomInputChange('wx_title_date')(value);
    };

    _this.onMenuChoose = function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this.setState({
        menuData: data
      });

      _this.onCustomInputChange('wx_link')({
        title: data.link_title,
        link_url: data.link_url
      });

      _this.onCustomInputChange('wx_link_url')(data.link_url);
    };

    _this.onNavChange = function (data) {
      _this.onCustomInputChange('sub_entry')(data);
    };

    _this.renderNormal = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          showError = _this$props.showError,
          validation = _this$props.validation,
          globalConfig = _this$props.globalConfig,
          linkMenuItems = _this$props.linkMenuItems;
      var subTitle = value.sub_title,
          showMethod = value.show_method,
          subEntry = value.sub_entry;


      return _react2['default'].createElement(
        'div',
        { className: 'rc-design-component-title-editor-normal' },
        _react2['default'].createElement(
          _DesignEditor2.ControlGroup,
          { label: '\u526F\u6807\u9898:' },
          _react2['default'].createElement(_input2['default'], {
            name: 'sub_title',
            value: subTitle,
            onChange: _this.onInputChange,
            onBlur: _this.onInputBlur
          })
        ),
        _react2['default'].createElement(
          _DesignEditor2.ControlGroup,
          { label: '\u526F\u6807\u9898:' },
          _react2['default'].createElement(
            RadioGroup,
            { value: showMethod, onChange: _this.onInputChange },
            _react2['default'].createElement(
              _radio2['default'],
              { name: 'show_method', value: '0' },
              '\u5C45\u5DE6\u663E\u793A'
            ),
            _react2['default'].createElement(
              _radio2['default'],
              { name: 'show_method', value: '1' },
              '\u5C45\u4E2D\u663E\u793A'
            ),
            _react2['default'].createElement(
              _radio2['default'],
              { name: 'show_method', value: '2' },
              '\u5C45\u53F3\u663E\u793A'
            )
          )
        ),
        _react2['default'].createElement(
          _DesignEditor2.ControlGroup,
          { focusOnLabelClick: false, label: '\u80CC\u666F\u8272:', required: true },
          _react2['default'].createElement(_colorpicker2['default'], {
            name: 'color',
            className: 'color-pick',
            color: value.color,
            onChange: _this.onColorChange
          }),
          _react2['default'].createElement(
            _button2['default'],
            { onClick: _this.onColorReset },
            '\u91CD\u7F6E'
          )
        ),
      );
    };

    _this.renderWx = function () {
      var _this$props2 = _this.props,
          value = _this$props2.value,
          showError = _this$props2.showError,
          validation = _this$props2.validation,
          globalConfig = _this$props2.globalConfig,
          linkMenuItems = _this$props2.linkMenuItems;
      var wxTitleDate = value.wx_title_date,
          wxTitleAuthor = value.wx_title_author,
          wxTitleLink = value.wx_title_link,
          wxTitleLinkType = value.wx_title_link_type;


      return _react2['default'].createElement(
        'div',
        { className: 'rc-design-component-title-editor-wx' },
        _react2['default'].createElement(
          _DesignEditor2.ControlGroup,
          { label: '\u65E5\u671F:' },
          _react2['default'].createElement(_DatePicker2['default'], {
            name: 'wx_title_date',
            value: wxTitleDate,
            onChange: _this.onDatePickerChange
          })
        ),
        _react2['default'].createElement(
          _DesignEditor2.ControlGroup,
          { label: '\u4F5C\u8005:' },
          _react2['default'].createElement(_input2['default'], {
            name: 'wx_title_author',
            value: wxTitleAuthor,
            onChange: _this.onInputChange,
            onBlur: _this.onInputBlur
          })
        ),
        _react2['default'].createElement(
          _DesignEditor2.ControlGroup,
          {
            label: '\u94FE\u63A5\u6807\u9898:',
            showError: showError || _this.getMetaProperty('wxTitleLink', 'touched'),
            error: validation.wxTitleLink
          },
          _react2['default'].createElement(_input2['default'], {
            name: 'wx_title_link',
            value: wxTitleLink,
            onChange: _this.onInputChange,
            onBlur: _this.onInputBlur
          })
        ),
        _react2['default'].createElement(
          _DesignEditor2.ControlGroup,
          {
            label: '\u94FE\u63A5\u5730\u5740:',
            className: 'rc-design-component-title-editor-wx-link'
          },
          _react2['default'].createElement(
            RadioGroup,
            { value: wxTitleLinkType, onChange: _this.onInputChange },
            _react2['default'].createElement(
              _radio2['default'],
              {
                name: 'wx_title_link_type',
                value: '0',
                className: 'radio-group-link'
              },
              '\u5F15\u5BFC\u5173\u6CE8',
              _react2['default'].createElement(
                'a',
                {
                  href: (0, _url2['default'])('/setting/weixin', 'www', globalConfig.url),
                  rel: 'noopener noreferrer',
                  target: '_blank',
                  className: 'set-fast-follow-link'
                },
                '\u8BBE\u7F6E\u5FEB\u901F\u5173\u6CE8\u94FE\u63A5'
              )
            ),
            _react2['default'].createElement(
              _radio2['default'],
              {
                name: 'wx_title_link_type',
                value: '1',
                className: 'radio-group-link'
              },
              '\u5176\u4ED6\u94FE\u63A5',
              _react2['default'].createElement(
                'div',
                { className: 'choose-menu-wrapper' },
                _react2['default'].createElement(_ChooseMenu2['default'], {
                  menuItems: linkMenuItems,
                  value: _this.state.menuData,
                  onChoose: _this.onMenuChoose,
                  config: globalConfig
                })
              )
            )
          )
        )
      );
    };

    _this.state = (0, _assign2['default'])({}, _this.state, {
      menuData: {}
    });
    return _this;
  }

  _createClass(TitleEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          showError = _props.showError,
          validation = _props.validation;
      var title = value.title,
          titleTemplate = value.title_template;


      return _react2['default'].createElement(
        'div',
        { className: 'rc-design-component-title-editor' },
        _react2['default'].createElement(
          _DesignEditor2.ControlGroup,
          {
            label: '\u6807\u9898\u540D:',
            showError: showError || this.getMetaProperty('title', 'touched'),
            error: validation.title,
            required: true
          },
          _react2['default'].createElement(_input2['default'], {
            name: 'title',
            value: title,
            onChange: this.onInputChange,
            onBlur: this.onInputBlur
          })
        ),
        _react2['default'].createElement(
          _DesignEditor2.ControlGroup,
          { label: '\u6807\u9898\u6A21\u7248:' },
          _react2['default'].createElement(
            RadioGroup,
            { value: titleTemplate, onChange: this.onInputChange },
            _react2['default'].createElement(
              _radio2['default'],
              { name: 'title_template', value: '0' },
              '\u4F20\u7EDF\u6837\u5F0F'
            ),
            _react2['default'].createElement(
              _radio2['default'],
              { name: 'title_template', value: '1' },
              '\u6A21\u4EFF\u5FAE\u4FE1\u56FE\u6587\u9875\u6837\u5F0F'
            )
          )
        ),
        +titleTemplate === 0 ? this.renderNormal() : this.renderWx()
      );
    }
  }], [{
    key: 'getInitialValue',
    value: function getInitialValue() {
      return {
        title: '',
        sub_title: '',
        title_template: '0',
        show_method: '0',
        color: DEFAULT_COLOR,
        sub_entry: [],
        // 标题模版
        // 0 => 传统样式
        // 1 => 模仿微信图文页样式
        wx_title_date: '',
        wx_title_author: '',
        wx_title_link: '',
        // 链接地址
        // 0 => 引导关注
        // 1 => 其他链接
        wx_title_link_type: '0',
        wx_link: {},
        wx_link_url: ''
      };
    }
  }, {
    key: 'validate',
    value: function validate(value) {
      return new Promise(function (resolve) {
        var errors = {};
        var title = value.title,
            subEntry = value.sub_entry,
            wxTitleLink = value.wx_title_link,
            titleTemplate = value.title_template;

        if (!title || !title.trim()) {
          errors.title = '标题不能为空';
        }

        var isInvalid = false;
        var subEntryErrors = [];

        (0, _each2['default'])(subEntry, function (item) {
          var error = checkValidate(item);
          if ((0, _get2['default'])(error, 'title.isShowError') || (0, _get2['default'])(error, 'type.isShowError')) {
            isInvalid = true;
          }
          subEntryErrors.push(error);
        });

        if (isInvalid) {
          errors.nav = subEntryErrors;
        }

        if (+titleTemplate === 1 && (!wxTitleLink || !wxTitleLink.trim())) {
          errors.wxTitleLink = '链接标题不能为空';
        }

        resolve(errors);
      });
    }
  }]);

  return TitleEditor;
}(_DesignEditor2.DesignEditor), _class.designType = 'title', _class.designDescription = '标题', _temp);
exports['default'] = TitleEditor;
module.exports = exports['default'];