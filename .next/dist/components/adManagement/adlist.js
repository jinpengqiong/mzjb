'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _stringify = require('_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _uri = require('../../utils/uri');

var _uri2 = _interopRequireDefault(_uri);

var _graphqlRequest = require('graphql-request');

var _mobxReact = require('mobx-react');

var _antd = require('antd');

var _adlistForm = require('./adlistForm');

var _adlistForm2 = _interopRequireDefault(_adlistForm);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Meta = _antd.Card.Meta;

var queryADList = '\n    query ($page: Int, $pageSize: Int, $shopId: Int!) {\n        adMedias(page:$page, pageSize:$pageSize, shopId:$shopId){\n            pageNumber\n            totalEntries\n            totalPages\n            entries{\n                id\n                insertedAt\n                structDesc\n                media{\n                    id\n                    name\n                    url\n                    type\n                }\n            }\n        }\n    }\n';
var createAD = '\n    mutation (\n        $mediaId: ID!,\n        $shopId: ID!,\n        $structDesc: String!) {\n        createAdMedia(mediaId: $mediaId,\n            shopId: $shopId,\n            structDesc: $structDesc){\n            id\n            insertedAt\n            structDesc\n            media{\n                id \n                url\n                type\n            }\n        }\n    }\n';

var deleteADMedias = '\nmutation (\n    $id: Int!,\n    $shopId:Int!,\n    ) {\n        deleteADMedia(id: $id,\n            shopId: $shopId,\n            ){\n            id \n        }\n    }\n';

var ADList = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    (0, _inherits3.default)(ADList, _React$Component);

    function ADList(props) {
        (0, _classCallCheck3.default)(this, ADList);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ADList.__proto__ || (0, _getPrototypeOf2.default)(ADList)).call(this, props));

        _this.queryADListData = function (curPage) {
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            client.request(queryADList, { page: curPage, pageSize: 4, shopId: _this.props.store.shopID }).then(function (res) {
                console.log('res', res);
                _this.setState({
                    data: res.adMedias
                });
            });
        };

        _this.handleOk = function (e) {
            var structDesc = {
                "type": "image",
                "position": _this.props.store.position,
                "title": _this.props.store.title,
                "images": _this.props.store.images,
                "id": _this.props.store.selectedRowKeys[0],
                "weight": _this.props.store.weight,
                "createAt": (0, _moment2.default)().format('X'),
                "detailUrl": _this.props.store.detailUrl,
                "backgroundColor": _this.props.store.backgroundColor
            };
            ;
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            var mediaId = parseInt(_this.props.store.VideoID[0]);
            client.request(createAD, { mediaId: mediaId, shopId: _this.props.store.shopID, structDesc: (0, _stringify2.default)(structDesc) }).then(function (res) {
                console.log('res', res);
                _this.props.store.getselectedRowKeys('');
                _this.props.store.getStrucInfo('', '', '');
                _this.props.store.getWeight('');
                _this.props.store.getPosition('');
                _this.props.store.getColor('');
                _this.props.store.getVideoID('');
                _this.props.store.getVideoID('');
                _this.props.store.setChecked();
                _this.setState({
                    modalVisible: false
                });
                _antd.message.success('创建成功！');
                _this.queryADListData(1);
            });
        };

        _this.handleCancel = function (e) {
            console.log(e);
            _this.setState({
                modalVisible: false
            });
            _this.props.store.setChecked();
        };

        _this.handleClick = function () {
            _this.setState({
                modalVisible: true
            });
        };

        _this.onChange = function (pageNumber) {
            _this.queryADListData(pageNumber);
        };

        _this.handleChcekChange = function (checkedValues) {
            // console.log('checked = ', checkedValues);
            _this.props.store.getADMediaID(checkedValues);
        };

        _this.state = {
            data: null,
            modalVisible: false
        };
        return _this;
    }

    (0, _createClass3.default)(ADList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.queryADListData(1);
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
            client.request(deleteADMedias, { shopId: this.props.store.shopID, id: id }).then(function (res) {
                if (res.errors) {
                    _antd.message.success('删除失败！');
                } else {
                    console.log('res', res);
                    _antd.message.success('删除成功！');
                    _this2.queryADListData(1);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var voucherData = this.state.data && this.state.data.entries.map(function (entry) {
                if (typeof entry.structDesc === 'string') {
                    entry.structDesc = JSON.parse(entry.structDesc);
                }
                return _react2.default.createElement(_antd.Card, {
                    key: entry.id,
                    hoverable: true,
                    type: 'inner',
                    title: entry.structDesc.title,
                    style: { backgroundColor: entry.structDesc.backgroundColor },
                    extra: _react2.default.createElement('div', null, _react2.default.createElement(_antd.Checkbox, { onChange: function onChange() {
                            _this3.handleChange(entry.id);
                        }, value: entry.id }, '\u9009\u4E2D'), _react2.default.createElement(_antd.Popconfirm, { title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
                            _this3.confirm(entry.id);
                        }, onCancel: _this3.cancel, okText: '\u786E\u8BA4', cancelText: '\u53D6\u6D88' }, _react2.default.createElement('a', { href: '#' }, '\u5220\u9664'))) }, _react2.default.createElement(_antd.Row, { type: 'flex', justify: 'space-around' }, _react2.default.createElement(_antd.Col, { span: 8 }, _react2.default.createElement('video', { alt: 'example',
                    poster: 'http://imagemediatest.muzhiyun.cn/pic/user/8196398791/20180426/00205497.jpg',
                    controls: 'control',
                    style: { width: '240px', height: "240px" },
                    src: entry.media ? entry.media.url : "#" })), _react2.default.createElement(_antd.Col, { span: 12 }, _react2.default.createElement('p', null, '\u5E7F\u544AID\uFF1A', entry.id), _react2.default.createElement('p', null, '\u89C6\u9891ID\uFF1A', entry.media ? entry.media.id : null), _react2.default.createElement('p', null, '\u5546\u54C1\u540D\u79F0\uFF1A', entry.structDesc.title), _react2.default.createElement('p', null, _react2.default.createElement('a', { src: entry.structDesc.images }, '\u5546\u54C1\u94FE\u63A5')), _react2.default.createElement('p', null, '\u521B\u5EFA\u65F6\u95F4\uFF1A', (0, _moment2.default)(entry.insertedAt).format('YYYY-MM-DD HH:mm')))));
            });
            return _react2.default.createElement('div', null, _react2.default.createElement(_antd.Affix, { offsetTop: 8, target: function target() {
                    return document.getElementById('main-content-div');
                } }, _react2.default.createElement(_antd.Button, { type: 'primary', onClick: this.handleClick }, _react2.default.createElement(_antd.Icon, { type: 'plus-circle-createVoucherso' }), '\u65B0\u589E\u5E7F\u544A')), _react2.default.createElement(_antd.Modal, { title: '\u65B0\u589E\u5E7F\u544A', visible: this.state.modalVisible, onOk: this.handleOk, onCancel: this.handleCancel, maskClosable: false, width: 550 }, _react2.default.createElement(_adlistForm2.default, null)), _react2.default.createElement(_antd.Checkbox.Group, { style: { width: '100%' }, onChange: this.handleChcekChange }, _react2.default.createElement(_antd.Card, { title: '\u5E7F\u544A\u5217\u8868', style: { marginTop: 20 } }, this.state.data && this.state.data.entries.length === 0 ? '暂无广告' : voucherData)), this.state.data && this.state.data.totalEntries !== 0 && _react2.default.createElement(_antd.Pagination, {
                current: this.state.data.pageNumber,
                onChange: this.onChange,
                total: this.state.data ? this.state.data.totalEntries : 1,
                style: { marginLeft: "80%", marginTop: "10px" } }));
        }
    }]);
    return ADList;
}(_react2.default.Component)) || _class) || _class);
exports.default = ADList;