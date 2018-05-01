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

var _resourcesUpload = require('../FileUploader/resourcesUpload');

var _resourcesUpload2 = _interopRequireDefault(_resourcesUpload);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Meta = _antd.Card.Meta;

var queryShopMedia = '\nquery ($page: Int, $pageSize: Int, $shopId: ID!, $type: MediaType) {\n    shopMedias(page:$page, pageSize:$pageSize, shopId:$shopId, type:$type){\n    totalEntries\n    totalPages\n    pageNumber\n    pageSize\n    entries{\n      id\n      name\n      url\n      type\n    }\n  }\n}\n';

var deleteMedia = '\n    mutation ($id:Int!, $shopId: Int!) {\n        deleteMedia(id:$id, shopId:$shopId){\n            id\n            url\n    }\n}\n';

var PicList = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    (0, _inherits3.default)(PicList, _React$Component);

    function PicList(props) {
        (0, _classCallCheck3.default)(this, PicList);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PicList.__proto__ || (0, _getPrototypeOf2.default)(PicList)).call(this, props));

        _this.getData = function (page) {
            var variables = {
                page: page,
                pageSize: 10,
                shopId: _this.props.store.shopID,
                type: 'PIC'
            };
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            client.request(queryShopMedia, variables).then(function (res) {
                console.log('res', res);
                _this.setState({
                    data: res.shopMedias
                });
            });
        };

        _this.onChange = function (pageNumber) {
            _this.getData(pageNumber);
        };

        _this.state = {
            data: null
        };
        return _this;
    }

    (0, _createClass3.default)(PicList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getData(1);
        }
    }, {
        key: 'confirm',
        value: function confirm(id) {
            var _this2 = this;

            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            client.request(deleteMedia, { id: id, shopId: this.props.store.shopID }).then(function (res) {
                if (!res.errors) {
                    _antd.message.success('删除成功！');
                    _this2.getData(1);
                }
            });
        }
    }, {
        key: 'cancel',
        value: function cancel(e) {
            console.log(e);
            _antd.message.error('Click on No');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var PicData = this.state.data && this.state.data.entries.map(function (entry) {
                return _react2.default.createElement(_antd.Card, {
                    key: entry.id,
                    hoverable: true,
                    style: { width: 200, margin: 15 },
                    cover: _react2.default.createElement('img', { alt: 'example', style: { width: 200, height: 200, textAlign: "center" }, src: entry.url }),
                    extra: _react2.default.createElement(_antd.Popconfirm, {
                        title: '\u786E\u8BA4\u8981\u5220\u9664\u5417?',
                        onConfirm: function onConfirm() {
                            _this3.confirm(parseInt(entry.id));
                        },
                        onCancel: _this3.cancel,
                        okText: '\u786E\u8BA4',
                        cancelText: '\u53D6\u6D88' }, _react2.default.createElement('a', { href: '#' }, '\u5220\u9664')) });
            });
            return _react2.default.createElement('div', null, _react2.default.createElement(_resourcesUpload2.default, { refreshData: function refreshData() {
                    _this3.getData(1);
                } }), _react2.default.createElement('div', { style: { marginTop: 40, display: 'flex', justifyContent: 'flex-start', alignContent: 'space-between', flexWrap: 'wrap' } }, PicData), this.state.data && this.state.data.totalEntries !== 0 && _react2.default.createElement(_antd.Pagination, {
                defaultCurrent: 1,
                current: this.state.data.pageNumber,
                onChange: this.onChange,
                total: this.state.data ? this.state.data.totalEntries : 1,
                style: { marginLeft: "80%", marginTop: "10px" } }));
        }
    }]);
    return PicList;
}(_react2.default.Component)) || _class) || _class);
exports.default = PicList;