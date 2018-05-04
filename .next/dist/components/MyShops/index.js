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

var queryShops = '\n      query ($page:Int, $pageSize: Int) {\n        myShops(page:$page,pageSize:$pageSize){\n          totalEntries\n          totalPages\n          pageNumber\n          pageSize\n          entries{\n            desc\n            id\n            name\n            owner\n            mainImage\n          }\n        }\n      }\n      ';

var addShop = '\n      mutation ($desc: String!, $name: String!, $bizTimeEnd: String, $bizTimeStart: String, $categoryId: ID, $facilities: String, $mainImage: String, $phone: String){\n        createShop(desc:$desc,name:$name, bizTimeEnd:$bizTimeEnd, bizTimeStart:$bizTimeStart, categoryId:$categoryId, facilities:$facilities, mainImage:$mainImage, phone: $phone ){\n          desc\n          id\n          name\n          phone\n          mainImage\n          bizTimeEnd\n          bizTimeStart\n          facilities\n        }\n      }\n      ';

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
      _this.setState({
        modalVisible: true
      });
    };

    _this.handleOk = function () {
      _this.refs.form.validateFields(function (err, values) {
        if (err) {
          _antd.message.error(err);
        } else {
          console.log('aaa', values);
          _graphql_request2.default.GraphQlRequest(addShop, { desc: values.desc, name: values.name, bizTimeEnd: values.bizTimeEnd, bizTimeStart: values.bizTimeStart, categoryId: values.categoryId, facilities: values.facilities ? values.facilities.join(',') : undefined, mainImage: values.mainImage, phone: values.phone }, 'Bearer ' + localStorage.getItem('accessToken')).then(function (res) {
            console.log('res', res);
            _this.props.store.getMainImage(null);
          });
        }
      });
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
      console.log('radio checked', e.target.value);
      _this.setState({
        RadioValue: e.target.value
      });
    };

    _this.state = {
      id: null,
      data: [],
      modalVisible: false,
      modalVisible1: false,
      RadioValue: null,
      shopID: null
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

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // console.log('state', this.state.data);
      var shopData = this.state.data && this.state.data.map(function (entry) {
        return _react2.default.createElement(_antd.Col, { span: 4, key: entry.id, style: { height: 150 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          }
        }, _react2.default.createElement(_antd.Card, {
          cover: _react2.default.createElement('img', { alt: 'example', src: entry.mainImage ? entry.mainImage : 'http://image.mzliaoba.com/pic/mzgg/4758068401/20180323/111.png', __source: {
              fileName: _jsxFileName,
              lineNumber: 251
            }
          }),
          actions: [_react2.default.createElement(_antd.Tooltip, { title: '\u8FDB\u5165\u5E97\u94FA', __source: {
              fileName: _jsxFileName,
              lineNumber: 253
            }
          }, _react2.default.createElement(_antd.Icon, { type: 'shop', onClick: function onClick() {
              _index2.default.push('/products?id=' + entry.id);_this3.props.store.getCurPagePath('店铺商品');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 253
            }
          })),
          // <Tooltip title="新增店员"><Icon type="user-add" onClick={ this.addStaff}/></Tooltip >,
          _react2.default.createElement(_antd.Tooltip, { title: '\u7ED1\u5B9A\u76F4\u64AD\u95F4', __source: {
              fileName: _jsxFileName,
              lineNumber: 255
            }
          }, _react2.default.createElement(_antd.Icon, { type: 'team', onClick: function onClick() {
              _this3.showModal(entry.id);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 255
            }
          })),
          // <Tooltip title="更新店铺"><Icon type="edit" onClick={() =>{this.updateShopInfo(parseInt(entry.id))}}/></Tooltip >,
          _react2.default.createElement(_antd.Tooltip, { title: '\u5220\u9664\u5E97\u94FA', __source: {
              fileName: _jsxFileName,
              lineNumber: 257
            }
          }, _react2.default.createElement(_antd.Icon, { type: 'delete', onClick: function onClick() {
              _this3.showConfirm(parseInt(entry.id));
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 257
            }
          }))],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          }
        }, _react2.default.createElement(Meta, { title: entry.name, description: entry.desc, __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          }
        })));
      });
      var RoomOptions = this.props.store.bindRoomData && this.props.store.bindRoomData.entries.map(function (room) {
        return _react2.default.createElement(_antd.Radio, { value: room.id, key: room.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          }
        }, room.name);
      });
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, this.props.store.userRole && this.props.store.userRole.indexOf('shop_biz') !== -1 && _react2.default.createElement(_antd.Affix, { offsetTop: 8, target: function target() {
          return document.getElementById('main-content-div');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, _react2.default.createElement(_antd.Button, { type: 'primary', onClick: this.addShops, __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'plus-circle-o', __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }), '\u65B0\u589E\u5E97\u94FA')), _react2.default.createElement(_antd.Modal, { title: '\u65B0\u589E\u5E97\u94FA', visible: this.state.modalVisible, onOk: this.handleOk, onCancel: this.hideModal, maskClosable: false, width: 550, __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, _react2.default.createElement(_createShopForm2.default, { ref: 'form', __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      })), _react2.default.createElement(_antd.Modal, { title: '\u7ED1\u5B9A\u76F4\u64AD\u95F4', visible: this.state.modalVisible1, onOk: this.handleOk1, onCancel: this.handleCancel, maskClosable: false, width: 550, __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, '\u53EF\u7ED1\u5B9A\u76F4\u64AD\u95F4\uFF1A', _react2.default.createElement(RadioGroup, { onChange: this.onRadioChange, value: this.state.RadioValue, __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, this.props.store.bindRoomData && this.props.store.bindRoomData.entries.length === 0 ? "暂无" : RoomOptions), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, '\u5DF2\u7ED1\u5B9A\u76F4\u64AD\u95F4\uFF1A', this.props.store.bindRoomData && this.props.store.bindRoomData.bind ? this.props.store.bindRoomData.bind.name : "暂无")), _react2.default.createElement(_antd.Row, { style: { marginTop: 40 }, type: 'flex', justify: 'space-around', __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }, shopData.length === 0 ? '暂无创建店铺' : shopData));
    }
  }]);
  return MyShopList;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyShopList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlTaG9wcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSYWRpb0dyb3VwIiwiUmFkaW8iLCJHcm91cCIsIk1ldGEiLCJDYXJkIiwiRm9ybUl0ZW0iLCJGb3JtIiwiSXRlbSIsImNvbmZpcm0iLCJNb2RhbCIsInF1ZXJ5U2hvcHMiLCJhZGRTaG9wIiwiZGVsZXRlU2hvcCIsImFkZFN0YWZmIiwiYmluZGFibGVSb29tcyIsImJpbmRSb29tIiwiTXlTaG9wTGlzdCIsIm9ic2VydmVyIiwicHJvcHMiLCJhZGRTaG9wcyIsInNldFN0YXRlIiwibW9kYWxWaXNpYmxlIiwiaGFuZGxlT2siLCJyZWZzIiwiZm9ybSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwidmFsdWVzIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIlJlcXVlc3QiLCJHcmFwaFFsUmVxdWVzdCIsImRlc2MiLCJuYW1lIiwiYml6VGltZUVuZCIsImJpelRpbWVTdGFydCIsImNhdGVnb3J5SWQiLCJmYWNpbGl0aWVzIiwiam9pbiIsInVuZGVmaW5lZCIsIm1haW5JbWFnZSIsInBob25lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJyZXMiLCJzdG9yZSIsImdldE1haW5JbWFnZSIsInNob3dDb25maXJtIiwiSUQiLCJzZWxmIiwidGl0bGUiLCJvbk9rIiwiaWQiLCJlcnJvcnMiLCJnZXREYXRhIiwic3VjY2VzcyIsIm9uQ2FuY2VsIiwiaGlkZU1vZGFsIiwicmVzZXRGaWVsZHMiLCJtc2ciLCJzaG93TW9kYWwiLCJwYXJzZUZsb2F0IiwibW9kYWxWaXNpYmxlMSIsInNob3BJRCIsInNob3BJZCIsImdldEJpbmREYXRhIiwiaGFuZGxlT2sxIiwiZSIsInBhcnNlSW50Iiwic3RhdGUiLCJyb29tIiwiUmFkaW9WYWx1ZSIsImhhbmRsZUNhbmNlbCIsIm9uUmFkaW9DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRhdGEiLCJSb3V0ZXIiLCJwdXNoIiwidmFyaWFibGVzIiwicGFnZSIsInBhZ2VTaXplIiwibXlTaG9wcyIsImVudHJpZXMiLCJzaG9wRGF0YSIsIm1hcCIsImVudHJ5IiwiaGVpZ2h0IiwiZ2V0Q3VyUGFnZVBhdGgiLCJSb29tT3B0aW9ucyIsImJpbmRSb29tRGF0YSIsInVzZXJSb2xlIiwiaW5kZXhPZiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsZW5ndGgiLCJiaW5kIiwibWFyZ2luVG9wIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTSxhQUFhLFlBQW5CLEFBQXlCO0ksQUFDakIsT0FBUyxNLEssQUFBVDs7QUFDUixJQUFNLFdBQVcsV0FBakIsQUFBc0I7QUFDdEIsSUFBTSxVQUFVLFlBQWhCLEFBQXNCOztBQUV0QixJQUFNLGFBQU47O0FBa0JBLElBQU0sVUFBTjs7QUFlQSxJQUFNLGFBQU47O0FBV0UsSUFBTSxXQUFOOztBQWNBLElBQU0sZ0JBQU47QUFrQkYsSUFBTSxXQUFOOztJLEFBV00scUJBREwsdUJBQUEsQUFBTyxBLDRCQUFVLFc7c0NBRWhCOztzQkFBQSxBQUFZLE9BQU07d0NBQUE7OzhJQUFBLEFBQ1Y7O1VBRFUsQUFpQ2xCLFdBQVcsWUFBTSxBQUNmO1lBQUEsQUFBSztzQkFBTCxBQUFjLEFBQ0UsQUFFakI7QUFIZSxBQUNaO0FBbkNjOztVQUFBLEFBeUNoQixXQUFXLFlBQU0sQUFDZjtZQUFBLEFBQUssS0FBTCxBQUFVLEtBQVYsQUFBZSxlQUNYLFVBQUEsQUFBQyxLQUFELEFBQU0sUUFBVyxBQUNqQjtZQUFBLEFBQUksS0FBSyxBQUNMO3dCQUFBLEFBQVEsTUFBUixBQUFjLEFBQ2pCO0FBRkQsZUFFSyxBQUNIO2tCQUFBLEFBQVEsSUFBUixBQUFZLE9BQVosQUFBbUIsQUFDakI7b0NBQUEsQUFBUSxlQUFSLEFBQ0ksU0FDQSxF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QU8sU0FBUyxLQUFBLEFBQUssTUFBbEMsQUFBd0MsY0FBYyxNQUFNLEtBQTVELEFBQWlFLFVBQVUsVUFBVSxLQUFyRixBQUEwRixXQUFXLGNBQXJHLEFBQW1ILE9BQU8sT0FBMUgsQUFBaUk7b0JBQWpJO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRyxpQkFBRCxXQUFnQixLQUFoQixBQUFvQjtvQkFBcEI7c0JBWEosQUFVRSxBQUNFLEFBRUY7QUFGRTsyQkFFRCxvQkFBRCxTQUFPLE9BQVAsQUFBYSxrQ0FBUSxTQUFTLEtBQUEsQUFBSyxNQUFuQyxBQUF5QyxlQUFlLE1BQU0sS0FBOUQsQUFBbUUsV0FBVyxVQUFVLEtBQXhGLEFBQTZGLGNBQWMsY0FBM0csQUFBeUgsT0FBTyxPQUFoSSxBQUF1STtvQkFBdkk7c0JBQUE7QUFBQTtTQUVFLDhEQUFDLGNBQUQsY0FBWSxVQUFVLEtBQXRCLEFBQTJCLGVBQWUsT0FBTyxLQUFBLEFBQUssTUFBdEQsQUFBNEQ7b0JBQTVEO3NCQUFBLEFBQ0k7QUFESjtjQUNJLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsZ0JBQWdCLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixhQUFqQixBQUE4QixRQUE5QixBQUFzQyxXQUF4RSxBQUFtRixJQUFuRixBQUF3RixPQUg3RixBQUVFLEFBQ2lHLEFBRWpHLDhCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFZLG1EQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsZ0JBQWdCLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixhQUFuRCxBQUFnRSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixhQUFqQixBQUE4QixLQUFyRyxBQUEwRyxPQWxCekgsQUFhRSxBQUtFLEFBQTRILEFBRTlILHdCQUFDLG9CQUFELE9BQUssT0FBTyxFQUFFLFdBQWQsQUFBWSxBQUFhLE1BQU0sTUFBL0IsQUFBb0MsUUFBTyxTQUEzQyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDSTtBQURKO2tCQUNJLEFBQVMsV0FBVCxBQUFtQixJQUFuQixBQUFzQixXQXRCOUIsQUFDRSxBQW9CRSxBQUNxQyxBQUkxQzs7OztFQXhNc0IsZ0JBQU0sQTtrQkEyTWhCLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hYy9EZXNrdG9wL216amIvbXV6aGlqdWJhb193ZWIifQ==