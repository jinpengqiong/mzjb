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

var _dec,
    _class,
    _jsxFileName = '/Users/mac/Desktop/mzjb/muzhijubao_web/components/MyShops/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('_next@4.2.3@next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _antd = require('antd');

var _createShopForm = require('./createShopForm');

var _createShopForm2 = _interopRequireDefault(_createShopForm);

var _mobxReact = require('mobx-react');

var _graphql_request = require('../../utils/graphql_request');

var _graphql_request2 = _interopRequireDefault(_graphql_request);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var RadioGroup = _antd.Radio.Group;
var Meta = _antd.Card.Meta;

var FormItem = _antd.Form.Item;
var confirm = _antd.Modal.confirm;

var queryShops = '\n      query ($page:Int, $pageSize: Int) {\n        myShops(page:$page,pageSize:$pageSize){\n          totalEntries\n          totalPages\n          pageNumber\n          pageSize\n          entries{\n              desc\n              id\n              name\n              phone\n              mainImage\n              bizTimeEnd\n              bizTimeStart\n              facilities\n              categories{\n                name\n                id\n              }\n          }\n        }\n      }\n      ';

var addShop = '\n      mutation ($desc: String!, $name: String!, $bizTimeEnd: String, $bizTimeStart: String, $categoryId: ID, $facilities: String, $mainImage: String, $phone: String){\n        createShop(desc:$desc,name:$name, bizTimeEnd:$bizTimeEnd, bizTimeStart:$bizTimeStart, categoryId:$categoryId, facilities:$facilities, mainImage:$mainImage, phone: $phone ){\n          desc\n          id\n          name\n          phone\n          mainImage\n          bizTimeEnd\n          bizTimeStart\n          facilities\n        }\n      }\n      ';
var upDateShop = '\n      mutation ($id:Int!,$desc: String, $name: String, $bizTimeEnd: String, $bizTimeStart: String, $categoryId: ID, $facilities: String, $mainImage: String, $phone: String){\n        updateShop(id:$id, desc:$desc,name:$name, bizTimeEnd:$bizTimeEnd, bizTimeStart:$bizTimeStart, categoryId:$categoryId, facilities:$facilities, mainImage:$mainImage, phone: $phone ){\n          desc\n          id\n          name\n          phone\n          mainImage\n          bizTimeEnd\n          bizTimeStart\n          facilities\n        }\n      }\n      ';

var deleteShop = '\n      mutation ($id: Int!){\n        deleteShop(id: $id){\n          desc\n          id\n          name\n          owner\n        }\n      }\n      ';

var addStaff = '\n    mutation ($desc: String, $name: String, $role: StaffRole!, $shopId: Int!, $userId: Int!){\n    addStaff(\n            desc: $desc, name: $name, role: $role, shopId: $shopId, userId: $userId)\n            {\n              desc\n              id\n              name\n              role\n              userId: ID\n            }\n    }\n  ';

var bindableRooms = '\n  query($shopId: Int!) {\n    bindableRooms(shopId:$shopId){\n      bind{\n        desc\n        id\n        name\n        isBind\n      }\n      entries{\n        desc\n        id\n        name\n        isBind\n      }\n    }\n  }\n  ';
var bindRoom = '\n  mutation ($shopId: Int!, $room: Int!){\n    bindRoom(shopId:$shopId, room: $room){\n            room\n            id\n            name\n          }\n  }\n  ';

var MyShopList = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(MyShopList, _React$Component);

  function MyShopList(props) {
    (0, _classCallCheck3.default)(this, MyShopList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MyShopList.__proto__ || (0, _getPrototypeOf2.default)(MyShopList)).call(this, props));

    _this.addShops = function () {
      if (_this.state.data.length > 4) {
        _antd.message.info('最多创建5个店铺！');
        return;
      } else {
        _this.setState({
          modalVisible: true,
          modalName: "新增店铺",
          shopField: null
        });
      }
    };

    _this.handleOk = function () {
      if (_this.state.modalName === "新增店铺") {
        _this.refs.form.validateFields(function (err, values) {
          if (err) {
            _antd.message.error(err);
          } else {
            // console.log('aaa', values);
            _graphql_request2.default.GraphQlRequest(addShop, { desc: values.desc, name: values.name, bizTimeEnd: values.bizTimeEnd, bizTimeStart: values.bizTimeStart, categoryId: values.categoryId, facilities: values.facilities ? values.facilities.join(',') : undefined, mainImage: _this.props.store.mainImage, phone: values.phone }, 'Bearer ' + localStorage.getItem('accessToken')).then(function (res) {
              if (res.errors) {
                _antd.message.error('创建失败，请联系管理员。');
              } else {
                console.log('res', res);
                _this.props.store.getMainImage(null);
                _antd.message.success('店铺创建成功！');
                _this.getData();
                _this.setState({
                  modalVisible: false
                });
                _this.refs.form.resetFields();
                document.getElementById('ossfile').innerHTML = '';
              }
            });
          }
        });
      } else if (_this.state.modalName === "更新店铺") {
        _this.refs.form.validateFields(function (err, values) {
          if (err) {
            _antd.message.error(err);
          } else {
            console.log('aaa', values);
            _graphql_request2.default.GraphQlRequest(upDateShop, {
              id: _this.state.UpdateShopID,
              desc: values.desc, name: values.name,
              bizTimeEnd: values.bizTimeEnd,
              bizTimeStart: values.bizTimeStart,
              categoryId: values.categoryId,
              facilities: values.facilities ? values.facilities.join(',') : undefined,
              mainImage: _this.props.store.mainImage ? _this.props.store.mainImage : _this.state.shopField.mainImage,
              phone: values.phone
            }, 'Bearer ' + localStorage.getItem('accessToken')).then(function (res) {
              if (res.errors) {
                _antd.message.error('创建失败，请联系管理员。');
              } else {
                console.log('res', res);
                _this.props.store.getMainImage(null);
                _antd.message.success('店铺更新成功！');
                _this.getData();
                _this.setState({
                  modalVisible: false,
                  UpdateShopID: null,
                  shopField: null
                });
                _this.refs.form.resetFields();
                document.getElementById('ossfile').innerHTML = '';
              }
            });
          }
        });
      }
    };

    _this.showConfirm = function (ID) {
      var self = _this;
      confirm({
        title: '确定要删除此店铺吗?',
        onOk: function onOk() {
          _graphql_request2.default.GraphQlRequest(deleteShop, { id: ID }, 'Bearer ' + localStorage.getItem('accessToken')).then(function (res) {
            if (!res.errors) {
              // console.log('res', res);
              self.getData();
              _antd.message.success('删除店铺成功！');
            } else {
              _antd.message.error('删除店铺失败！');
            }
          });
        },
        onCancel: function onCancel() {}
      });
    };

    _this.hideModal = function () {
      _this.setState({
        modalVisible: false
      });
      _this.refs.form.resetFields();
      _this.props.store.getMainImage(null);
    };

    _this.error = function (msg) {
      _antd.message.error(msg);
    };

    _this.addStaff = function () {};

    _this.showModal = function (id) {
      var ID = parseFloat(id);
      _this.setState({
        modalVisible1: true,
        shopID: ID
      });
      _graphql_request2.default.GraphQlRequest(bindableRooms, { shopId: ID }, 'Bearer ' + localStorage.getItem('accessToken')).then(function (res) {
        _this.props.store.getBindData(res.bindableRooms);
      });
    };

    _this.handleOk1 = function (e) {
      var shopId = parseInt(_this.state.shopID);
      var room = parseInt(_this.state.RadioValue);
      _graphql_request2.default.GraphQlRequest(bindRoom, { shopId: shopId, room: room }, 'Bearer ' + localStorage.getItem('accessToken')).then(function (res) {
        // console.log('res', res);
        if (res.errors) {
          _antd.message.success("店铺暂无可绑定直播间，绑定失败！");
        } else {
          _antd.message.success("绑定成功！");
          _this.setState({
            modalVisible1: false,
            RadioValue: null
          });
        }
      });
    };

    _this.handleCancel = function (e) {
      console.log(e);
      _this.setState({
        modalVisible1: false
      });
    };

    _this.onRadioChange = function (e) {
      // console.log('radio checked', e.target.value);
      _this.setState({
        RadioValue: e.target.value
      });
    };

    _this.UpdateShopInfo = function (ID) {
      var fieldData = _this.state.data.filter(function (entry) {
        if (parseInt(entry.id) === ID) {
          return entry;
        }
      });
      // console.log('fieldData',fieldData)
      _this.setState({
        modalVisible: true,
        modalName: "更新店铺",
        shopField: fieldData[0],
        UpdateShopID: ID
      });
    };

    _this.state = {
      id: null,
      data: [],
      modalVisible: false,
      modalVisible1: false,
      RadioValue: null,
      shopID: null,
      modalName: null,
      shopField: null,
      UpdateShopID: null
    };
    return _this;
  }

  (0, _createClass3.default)(MyShopList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null) {
        _index2.default.push('/login');
      } else {
        this.getData();
      }
    }
  }, {
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var variables;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                variables = {
                  page: 1,
                  pageSize: 5
                };

                _graphql_request2.default.GraphQlRequest(queryShops, variables, 'Bearer ' + localStorage.getItem('accessToken')).then(function (res) {
                  console.log('res', res);
                  _this2.setState({
                    data: res.myShops.entries
                  });
                });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()

    //create shop submit

    //set room


    //update shop

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // console.log('state', this.state.data);
      var shopData = this.state.data && this.state.data.map(function (entry) {
        return _react2.default.createElement(_antd.Card, {
          key: entry.id,
          hoverable: true,
          type: 'inner',
          title: entry.name,
          extra: _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 362
            }
          }, _react2.default.createElement(_antd.Tooltip, { title: '\u8FDB\u5165\u5E97\u94FA', __source: {
              fileName: _jsxFileName,
              lineNumber: 363
            }
          }, _react2.default.createElement(_antd.Icon, { type: 'shop', onClick: function onClick() {
              _index2.default.push('/products?id=' + entry.id);_this3.props.store.getCurPagePath('店铺商品');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 363
            }
          })), _react2.default.createElement(_antd.Divider, { type: 'vertical', __source: {
              fileName: _jsxFileName,
              lineNumber: 364
            }
          }), _react2.default.createElement(_antd.Tooltip, { title: '\u7ED1\u5B9A\u76F4\u64AD\u95F4', __source: {
              fileName: _jsxFileName,
              lineNumber: 366
            }
          }, _react2.default.createElement(_antd.Icon, { type: 'team', onClick: function onClick() {
              _this3.showModal(entry.id);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 366
            }
          })), _react2.default.createElement(_antd.Divider, { type: 'vertical', __source: {
              fileName: _jsxFileName,
              lineNumber: 367
            }
          }), _react2.default.createElement(_antd.Tooltip, { title: '\u66F4\u65B0\u5E97\u94FA', __source: {
              fileName: _jsxFileName,
              lineNumber: 368
            }
          }, _react2.default.createElement(_antd.Icon, { type: 'edit', onClick: function onClick() {
              _this3.UpdateShopInfo(parseInt(entry.id));
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 368
            }
          })), _react2.default.createElement(_antd.Divider, { type: 'vertical', __source: {
              fileName: _jsxFileName,
              lineNumber: 369
            }
          }), _react2.default.createElement(_antd.Tooltip, { title: '\u5220\u9664\u5E97\u94FA', __source: {
              fileName: _jsxFileName,
              lineNumber: 370
            }
          }, _react2.default.createElement(_antd.Icon, { type: 'delete', onClick: function onClick() {
              _this3.showConfirm(parseInt(entry.id));
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 370
            }
          }))),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356
          }
        }, _react2.default.createElement(_antd.Row, { type: 'flex', justify: 'space-around', __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          }
        }, _react2.default.createElement(_antd.Col, { span: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 375
          }
        }, _react2.default.createElement('img', { alt: 'example',
          style: { width: '200px' },
          src: entry.mainImage ? entry.mainImage : 'http://image.mzliaoba.com/pic/mzgg/4758068401/20180323/111.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 376
          }
        })), _react2.default.createElement(_antd.Col, { span: 7, __source: {
            fileName: _jsxFileName,
            lineNumber: 380
          }
        }, _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 381
          }
        }, '\u5E97\u94FA\u540D\u79F0\uFF1A', entry.name), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 382
          }
        }, '\u7B80\u8981\u63CF\u8FF0\uFF1A', entry.desc), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 383
          }
        }, '\u5E97\u94FA\u8BBE\u65BD\uFF1A', entry.facilities)), _react2.default.createElement(_antd.Col, { span: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 385
          }
        }, _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 386
          }
        }, '\u5E97\u94FA\u7C7B\u578B\uFF1A', entry.categories && entry.categories[0] !== undefined ? entry.categories[0].name : null), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 387
          }
        }, '\u8425\u4E1A\u5F00\u59CB\u65F6\u95F4\uFF1A', entry.bizTimeStart), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 388
          }
        }, '\u8425\u4E1A\u7ED3\u675F\u65F6\u95F4\uFF1A', entry.bizTimeEnd))));
      });
      var RoomOptions = this.props.store.bindRoomData && this.props.store.bindRoomData.entries.map(function (room) {
        return _react2.default.createElement(_antd.Radio, { value: room.id, key: room.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 398
          }
        }, room.name);
      });
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }, this.props.store.userRole && this.props.store.userRole.indexOf('shop_biz') !== -1 && _react2.default.createElement(_antd.Affix, { offsetTop: 8, target: function target() {
          return document.getElementById('main-content-div');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, _react2.default.createElement(_antd.Button, { type: 'primary', onClick: this.addShops, __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'plus-circle-o', __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }), '\u65B0\u589E\u5E97\u94FA')), _react2.default.createElement(_antd.Modal, { title: this.state.modalName, visible: this.state.modalVisible, onOk: this.handleOk, onCancel: this.hideModal, maskClosable: false, width: 550, __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }, _react2.default.createElement(_createShopForm2.default, { ref: 'form', shopData: this.state.shopField ? this.state.shopField : null, __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      })), _react2.default.createElement(_antd.Modal, { title: '\u7ED1\u5B9A\u76F4\u64AD\u95F4', visible: this.state.modalVisible1, onOk: this.handleOk1, onCancel: this.handleCancel, maskClosable: false, width: 550, __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        }
      }, '\u53EF\u7ED1\u5B9A\u76F4\u64AD\u95F4\uFF1A', _react2.default.createElement(RadioGroup, { onChange: this.onRadioChange, value: this.state.RadioValue, __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      }, this.props.store.bindRoomData && this.props.store.bindRoomData.entries.length === 0 ? "暂无" : RoomOptions), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }, '\u5DF2\u7ED1\u5B9A\u76F4\u64AD\u95F4\uFF1A', this.props.store.bindRoomData && this.props.store.bindRoomData.bind ? this.props.store.bindRoomData.bind.name : "暂无")), _react2.default.createElement(_antd.Card, { title: '\u5E97\u94FA\u5217\u8868', style: { marginTop: "15px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, shopData.length === 0 ? '暂无创建店铺' : shopData));
    }
  }]);
  return MyShopList;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyShopList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlTaG9wcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSYWRpb0dyb3VwIiwiUmFkaW8iLCJHcm91cCIsIk1ldGEiLCJDYXJkIiwiRm9ybUl0ZW0iLCJGb3JtIiwiSXRlbSIsImNvbmZpcm0iLCJNb2RhbCIsInF1ZXJ5U2hvcHMiLCJhZGRTaG9wIiwidXBEYXRlU2hvcCIsImRlbGV0ZVNob3AiLCJhZGRTdGFmZiIsImJpbmRhYmxlUm9vbXMiLCJiaW5kUm9vbSIsIk15U2hvcExpc3QiLCJvYnNlcnZlciIsInByb3BzIiwiYWRkU2hvcHMiLCJzdGF0ZSIsImRhdGEiLCJsZW5ndGgiLCJtZXNzYWdlIiwiaW5mbyIsInNldFN0YXRlIiwibW9kYWxWaXNpYmxlIiwibW9kYWxOYW1lIiwic2hvcEZpZWxkIiwiaGFuZGxlT2siLCJyZWZzIiwiZm9ybSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwidmFsdWVzIiwiZXJyb3IiLCJSZXF1ZXN0IiwiR3JhcGhRbFJlcXVlc3QiLCJkZXNjIiwibmFtZSIsImJpelRpbWVFbmQiLCJiaXpUaW1lU3RhcnQiLCJjYXRlZ29yeUlkIiwiZmFjaWxpdGllcyIsImpvaW4iLCJ1bmRlZmluZWQiLCJtYWluSW1hZ2UiLCJzdG9yZSIsInBob25lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJyZXMiLCJlcnJvcnMiLCJjb25zb2xlIiwibG9nIiwiZ2V0TWFpbkltYWdlIiwic3VjY2VzcyIsImdldERhdGEiLCJyZXNldEZpZWxkcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJpZCIsIlVwZGF0ZVNob3BJRCIsInNob3dDb25maXJtIiwiSUQiLCJzZWxmIiwidGl0bGUiLCJvbk9rIiwib25DYW5jZWwiLCJoaWRlTW9kYWwiLCJtc2ciLCJzaG93TW9kYWwiLCJwYXJzZUZsb2F0IiwibW9kYWxWaXNpYmxlMSIsInNob3BJRCIsInNob3BJZCIsImdldEJpbmREYXRhIiwiaGFuZGxlT2sxIiwiZSIsInBhcnNlSW50Iiwicm9vbSIsIlJhZGlvVmFsdWUiLCJoYW5kbGVDYW5jZWwiLCJvblJhZGlvQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJVcGRhdGVTaG9wSW5mbyIsImZpZWxkRGF0YSIsImZpbHRlciIsImVudHJ5IiwiUm91dGVyIiwicHVzaCIsInZhcmlhYmxlcyIsInBhZ2UiLCJwYWdlU2l6ZSIsIm15U2hvcHMiLCJlbnRyaWVzIiwic2hvcERhdGEiLCJtYXAiLCJnZXRDdXJQYWdlUGF0aCIsIndpZHRoIiwiY2F0ZWdvcmllcyIsIlJvb21PcHRpb25zIiwiYmluZFJvb21EYXRhIiwidXNlclJvbGUiLCJpbmRleE9mIiwiYmluZCIsIm1hcmdpblRvcCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7OztBQUNBLElBQU0sYUFBYSxZQUFuQixBQUF5QjtJQUNqQixBLE9BQVMsTSxLLEFBQVQ7O0FBQ1IsSUFBTSxXQUFXLFdBQWpCLEFBQXNCO0FBQ3RCLElBQU0sVUFBVSxZQUFoQixBQUFzQjs7QUFFdEIsSUFBTSxhQUFOOztBQXlCQSxJQUFNLFVBQU47QUFjQSxJQUFNLGFBQU47O0FBZUEsSUFBTSxhQUFOOztBQVdFLElBQU0sV0FBTjs7QUFjQSxJQUFNLGdCQUFOO0FBa0JGLElBQU0sV0FBTjs7SUFXTSxBLHFCQURMLHVCLEFBQUEsQUFBTyw0QkFBVSxXO3NDQUVoQjs7c0JBQUEsQUFBWSxPQUFNO3dDQUFBOzs4SUFBQSxBQUNWOztVQURVLEFBcUNsQixXQUFXLFlBQU0sQUFDYjtVQUFHLE1BQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixTQUFuQixBQUEyQixHQUFFLEFBQ3pCO3NCQUFBLEFBQVEsS0FBUixBQUFhLEFBQ2I7QUFDSDtBQUhELGFBR00sQUFDRjtjQUFBLEFBQUs7d0JBQVMsQUFDSSxBQUNkO3FC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Q2lHLEFBRWpHLDhCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFZLG1EQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsZ0JBQWdCLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixhQUFuRCxBQUFnRSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixhQUFqQixBQUE4QixLQUFyRyxBQUEwRyxPQWxCekgsQUFhRSxBQUtFLEFBQTRILEFBRTlILHdCQUFDLG9CQUFELFFBQU0sT0FBTixBQUFZLDRCQUFPLE9BQU8sRUFBRSxXQUE1QixBQUEwQixBQUFZO29CQUF0QztzQkFBQSxBQUNJO0FBREo7a0JBQ0ksQUFBUyxXQUFULEFBQW1CLElBQW5CLEFBQXNCLFdBdEI5QixBQUNFLEFBb0JFLEFBQ3FDLEFBSTFDOzs7O0VBcFRzQixnQkFBTSxBO2tCQXVUaEIsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFjL0Rlc2t0b3AvbXpqYi9tdXpoaWp1YmFvX3dlYiJ9