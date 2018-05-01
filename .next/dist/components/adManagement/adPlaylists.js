'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

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

var _uri = require('../../utils/uri');

var _uri2 = _interopRequireDefault(_uri);

var _graphqlRequest = require('graphql-request');

var _mobxReact = require('mobx-react');

var _adPlaylistForm = require('./adPlaylistForm');

var _adPlaylistForm2 = _interopRequireDefault(_adPlaylistForm);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var RadioGroup = _antd.Radio.Group;

var queryADPlayList = '\n    query ($page: Int, $pageSize: Int, $shopId: Int!) {\n        adPlaylists(page:$page, pageSize:$pageSize, shopId:$shopId){\n            pageNumber\n            totalEntries\n            totalPages\n            entries{\n                id\n                name\n                insertedAt\n                adMedias{\n                    id\n                    insertedAt\n                    mediaId\n                    media{\n                        id\n                        url\n                    }\n                }\n            }\n        }\n    }\n';

var createAdPlaylist = '\n    mutation (\n        $adMedias: [ID]!,\n        $shopId: ID!,\n        $name: String!) {\n            createAdPlaylist(\n            adMedias: $adMedias,\n            shopId: $shopId,\n            name: $name){\n            id\n            insertedAt\n            updatedAt\n            name\n            adMedias{\n                id \n                mediaId\n                structDesc\n                media{\n                    id\n                    name\n                }\n            }\n        }\n    }\n';

var setPlaylist = '\n    mutation (\n        $shopId: Int!,\n        $playlist:Int!,\n        ) {\n            setPlaylist(shopId: $shopId,\n                playlist: $playlist,\n                ){\n                id  \n                name\n            }\n        }\n    ';

var deleteAdPlaylist = '\n        mutation (\n            $id: Int!,\n            $shopId:Int!,\n            ) {\n                deleteAdPlaylist(id: $id,\n                    shopId: $shopId,\n                    ){\n                    id \n                }\n            }\n        ';

var ADPlayList = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    (0, _inherits3.default)(ADPlayList, _React$Component);

    function ADPlayList(props) {
        (0, _classCallCheck3.default)(this, ADPlayList);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ADPlayList.__proto__ || (0, _getPrototypeOf2.default)(ADPlayList)).call(this, props));

        _this.handleOk = function (e) {
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            _this.refs.form.validateFields(function (err, values) {
                if (err) {
                    _antd.message.error(err);
                } else {
                    client.request(createAdPlaylist, { adMedias: _this.props.store.ADMediaID, shopId: _this.props.store.shopID, name: values.name }).then(function (res) {
                        console.log('createAdPlaylist', res);
                        _this.setState({
                            modalVisible: false
                        });
                        _antd.message.success('创建成功！');
                        _this.props.store.getADMediaID('');
                        _this.queryADPlayListData(1);
                        _this.refs.form.resetFields();
                    });
                }
            });
        };

        _this.confirm = function (id) {
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            client.request(deleteAdPlaylist, { shopId: _this.props.store.shopID, id: id }).then(function (res) {
                if (res.errors) {
                    _antd.message.success('删除失败！');
                } else {
                    console.log('res', res);
                    _antd.message.success('删除成功！');
                    _this.queryADPlayListData(1);
                    _this.props.store.getADMediaID('');
                }
            });
        };

        _this.handleCancel = function (e) {
            console.log(e);
            _this.setState({
                modalVisible: false
            });
        };

        _this.handleClick = function () {
            _this.setState({
                modalVisible: true
            });
        };

        _this.handleSetChange = function (e) {
            console.log('radio checked', e.target.value);
            _this.setState({
                value: e.target.value
            });
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            var playlist = parseInt(e.target.value);
            client.request(setPlaylist, { shopId: _this.props.store.shopID, playlist: playlist }).then(function (res) {
                if (!res.errors) {
                    _antd.message.success('设置成功！');
                }
            });
        };

        _this.state = {
            data: null,
            modalVisible: false,
            value: ''
        };
        return _this;
    }

    (0, _createClass3.default)(ADPlayList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.queryADPlayListData(1);
        }
    }, {
        key: 'queryADPlayListData',
        value: function queryADPlayListData(curPage) {
            var _this2 = this;

            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            client.request(queryADPlayList, { page: curPage, pageSize: 4, shopId: this.props.store.shopID }).then(function (res) {
                console.log('res', res);
                _this2.setState({
                    data: res.adPlaylists
                });
            });
        }
    }, {
        key: 'onChange',
        value: function onChange(pageNumber) {
            this.queryADPlayListData(pageNumber);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var voucherData = this.state.data && this.state.data.entries.map(function (entry) {
                return _react2.default.createElement(_antd.Card, {
                    key: entry.id,
                    hoverable: true,
                    type: 'inner',
                    title: entry.name,
                    extra: _react2.default.createElement('div', null, _react2.default.createElement(_antd.Radio, { value: entry.id }, '\u8BBE\u7F6E\u4E3A\u5F53\u524D\u64AD\u5355'), _react2.default.createElement(_antd.Popconfirm, { title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
                            _this3.confirm(entry.id);
                        }, onCancel: _this3.cancel, okText: 'Yes', cancelText: 'No' }, _react2.default.createElement('a', { href: '#' }, '\u5220\u9664'))) }, _react2.default.createElement(_antd.Row, { type: 'flex', justify: 'space-around' }, _react2.default.createElement(_antd.Col, { span: 12 }, _react2.default.createElement('p', null, '\u64AD\u5355ID\uFF1A', entry.id), _react2.default.createElement('p', null, '\u64AD\u5355\u540D\u79F0\uFF1A', entry.name), _react2.default.createElement('p', null, '\u521B\u5EFA\u65F6\u95F4\uFF1A', (0, _moment2.default)(entry.insertedAt).format('YYYY-MM-DD HH:mm')))));
            });
            return _react2.default.createElement('div', null, _react2.default.createElement(_antd.Affix, { offsetTop: 8, target: function target() {
                    return document.getElementById('main-content-div');
                } }, _react2.default.createElement(_antd.Button, { type: 'primary', onClick: this.handleClick }, _react2.default.createElement(_antd.Icon, { type: 'plus-circle-createVoucherso' }), '\u65B0\u589E\u64AD\u5355')), _react2.default.createElement(_antd.Modal, { title: '\u65B0\u589E\u64AD\u5355', visible: this.state.modalVisible, onOk: this.handleOk, onCancel: this.handleCancel, maskClosable: false, width: 550 }, _react2.default.createElement(_adPlaylistForm2.default, { ref: 'form' })), _react2.default.createElement(RadioGroup, { onChange: this.handleSetChange, value: this.state.value, style: { width: '100%' } }, _react2.default.createElement(_antd.Card, { title: '\u64AD\u5355\u5217\u8868', style: { marginTop: 20 } }, this.state.data && this.state.data.entries.length === 0 ? '暂无播单' : voucherData)), this.state.data && this.state.data.totalEntries !== 0 && _react2.default.createElement(_antd.Pagination, {
                defaultCurrent: 1,
                current: this.state.data.pageNumber,
                onChange: this.onChange,
                total: this.state.data ? this.state.data.totalEntries : 1,
                style: { marginLeft: "80%", marginTop: "10px" } }));
        }
    }]);
    return ADPlayList;
}(_react2.default.Component)) || _class) || _class);
exports.default = ADPlayList;