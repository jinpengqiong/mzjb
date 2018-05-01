'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('_babel-runtime@6.26.0@babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _videoupload = require('../FileUploader/videoupload');

var _videoupload2 = _interopRequireDefault(_videoupload);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Meta = _antd.Card.Meta;

var queryShopMedia = '\nquery ($page: Int, $pageSize: Int, $shopId: ID!, $type: MediaType) {\n    shopMedias(page:$page, pageSize:$pageSize, shopId:$shopId, type:$type){\n    totalEntries\n    totalPages\n    pageNumber\n    pageSize\n    entries{\n      id\n      name\n      url\n      type\n    }\n  }\n}\n';

var deleteMedia = '\n    mutation ($id:Int!, $shopId: Int!) {\n        deleteMedia(id:$id, shopId:$shopId){\n            id\n            url\n    }\n}\n';

var VideoList = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    (0, _inherits3.default)(VideoList, _React$Component);

    function VideoList(props) {
        (0, _classCallCheck3.default)(this, VideoList);

        var _this = (0, _possibleConstructorReturn3.default)(this, (VideoList.__proto__ || (0, _getPrototypeOf2.default)(VideoList)).call(this, props));

        _this.onChange = function (pageNumber) {
            _this.getData(pageNumber);
        };

        _this.handleChcekChange = function (checkedValues) {
            console.log('checked = ', checkedValues);
            _this.props.store.getVideoID(checkedValues);
        };

        _this.state = {
            data: null
        };
        return _this;
    }

    (0, _createClass3.default)(VideoList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getData(1);
        }
    }, {
        key: 'getData',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(page) {
                var variables, client, res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                variables = {
                                    page: page,
                                    pageSize: 10,
                                    shopId: this.props.store.shopID,
                                    type: 'VIDEO'
                                };
                                client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                                    headers: {
                                        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                                    }
                                });
                                _context.next = 4;
                                return client.request(queryShopMedia, variables);

                            case 4:
                                res = _context.sent;

                                // console.log('res',res)
                                this.setState({
                                    data: res.shopMedias
                                });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getData(_x) {
                return _ref.apply(this, arguments);
            }

            return getData;
        }()
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
        value: function cancel() {
            // message.error('取消删除！');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var VideoData = this.state.data && this.state.data.entries.map(function (entry) {
                return _react2.default.createElement(_antd.Card, {
                    key: entry.id,
                    hoverable: true,
                    style: { width: 240, margin: 15 },
                    cover: _react2.default.createElement('video', { alt: 'example', src: entry.url, controls: 'control' }),
                    extra: _react2.default.createElement('div', null, _react2.default.createElement(_antd.Checkbox, {
                        onChange: function onChange() {
                            _this3.handleChcekChange(entry.id);
                        },
                        checked: _this3.props.store.isChecked,
                        value: entry.id }, '\u9009\u4E2D'), _react2.default.createElement(_antd.Popconfirm, {
                        title: '\u786E\u8BA4\u8981\u5220\u9664\u5417?',
                        onConfirm: function onConfirm() {
                            _this3.confirm(parseInt(entry.id));
                        },
                        onCancel: _this3.cancel,
                        okText: 'Yes',
                        cancelText: 'No' }, _react2.default.createElement('a', { href: '#' }, '\u5220\u9664'))) });
            });

            return _react2.default.createElement('div', null, _react2.default.createElement(_videoupload2.default, { refreshData: function refreshData() {
                    _this3.getData(1);
                } }), _react2.default.createElement(_antd.Checkbox.Group, { onChange: this.handleChcekChange, style: { display: "inline" } }, _react2.default.createElement('div', {
                style: { marginTop: 40, display: 'flex', justifyContent: 'flex-start', alignContent: 'space-between', flexWrap: 'wrap' } }, VideoData)), _react2.default.createElement(_antd.Pagination, {
                defaultCurrent: 1,
                onChange: this.onChange,
                current: this.state.data ? this.state.data.pageNumber : 1,
                total: this.state.data ? this.state.data.totalEntries : 1,
                style: { marginLeft: "80%", marginTop: "10px" } }));
        }
    }]);
    return VideoList;
}(_react2.default.Component)) || _class) || _class);
exports.default = VideoList;