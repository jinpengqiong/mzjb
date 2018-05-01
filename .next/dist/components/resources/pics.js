'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _uri = require('../../utils/uri');

var _uri2 = _interopRequireDefault(_uri);

var _graphqlRequest = require('graphql-request');

var _mobxReact = require('mobx-react');

var _picList = require('./picList');

var _picList2 = _interopRequireDefault(_picList);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Meta = _antd.Card.Meta;

var FormItem = _antd.Form.Item;
var MyPICS = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    (0, _inherits3.default)(MyPICS, _React$Component);

    function MyPICS() {
        (0, _classCallCheck3.default)(this, MyPICS);
        return (0, _possibleConstructorReturn3.default)(this, (MyPICS.__proto__ || (0, _getPrototypeOf2.default)(MyPICS)).apply(this, arguments));
    }

    (0, _createClass3.default)(MyPICS, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null, _react2.default.createElement(_picList2.default, null));
        }
    }]);
    return MyPICS;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyPICS;