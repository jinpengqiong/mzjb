'use strict';

var _style = require('_styled-jsx@2.2.1@styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _dec,
    _class,
    _jsxFileName = '/Users/mac/Desktop/mzjb/muzhijubao_web/components/FileUploader/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _mobxReact = require('mobx-react');

var _uuid_generator = require('../../utils/uuid_generator.js');

var _uuid_generator2 = _interopRequireDefault(_uuid_generator);

var _uri = require('../../utils/uri');

var _uri2 = _interopRequireDefault(_uri);

var _graphqlRequest = require('graphql-request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var RadioGroup = _antd.Radio.Group;

var createMediaID = '\n  mutation ($shopId: Int!, $type: MediaType!, $url: String!) {\n    createMedia(shopId:$shopId, type:$type, url: $url){\n      id\n    }\n  }\n';

var createMediaAndUploadYouzan = '\n  mutation ($shopId: Int!, $type: MediaType!, $url: String!, $name: String) {\n    createMediaAndUploadYouzan(shopId:$shopId, type:$type, url: $url, name: $name){\n      imageId\n      id\n    }\n  }\n';

var FileUploader = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(FileUploader, _React$Component);

  function FileUploader(props) {
    (0, _classCallCheck3.default)(this, FileUploader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FileUploader.__proto__ || (0, _getPrototypeOf2.default)(FileUploader)).call(this, props));

    _this.state = {
      fileList: [],
      uploading: false,
      fileUrls: [],
      upload_confirming: false,
      data: {},
      value: 1
    };
    return _this;
  }

  (0, _createClass3.default)(FileUploader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getOSSPolicy();
      this.getUploaded();
    }
  }, {
    key: 'getOSSPolicy',
    value: function getOSSPolicy() {
      var _this2 = this;

      var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });

      var queryossPolicy = '\n      query ($label: String, $type: String!){\n        ossPolicy(label: $label, type: $type){\n            dir\n            accessid\n            policy\n            signature\n            host\n            filename\n            }\n        }\n      ';
      client.request(queryossPolicy, { label: "user", type: "pic" }).then(function (res) {
        console.log('oss', res);
        _this2.setState({
          data: res.ossPolicy
        });
      });
    }
  }, {
    key: 'get_suffix',
    value: function get_suffix(filename) {
      var pos = filename.lastIndexOf('.');
      var suffix = '';
      if (pos !== -1) {
        suffix = filename.substring(pos);
      }
      return suffix;
    }
  }, {
    key: 'set_upload_param',
    value: function set_upload_param(up, filename, ret) {
      var new_multipart_params = {
        'key': this.state.data.dir + '/' + _uuid_generator2.default.uuid(8, 10) + this.get_suffix(filename),
        'policy': this.state.data.policy,
        'OSSAccessKeyId': this.state.data.accessid,
        'success_action_status': '200', //让服务端返回200,不然，默认会返回204
        'signature': this.state.data.signature
      };

      up.setOption({
        'url': this.state.data.host,
        'multipart_params': new_multipart_params
      });

      up.start();
    }
  }, {
    key: 'getUploaded',
    value: function getUploaded() {
      var self = this;
      var uploader = new plupload.Uploader({
        runtimes: 'html5,flash,silverlight,html4',
        browse_button: 'selectfiles',
        container: document.getElementById('container'),
        flash_swf_url: '../../utils/Moxie.swf',
        silverlight_xap_url: '../../utils/Moxie.xap',
        filters: {
          max_file_size: '5mb',
          mime_types: [{ title: "Image files", extensions: "jpg,gif,png,bmp" }]
        },
        init: {
          PostInit: function PostInit() {
            document.getElementById('ossfile').innerHTML = '';
            document.getElementById('postfiles').onclick = function () {
              self.set_upload_param(uploader, '', false);
              return false;
            };
          },

          FilesAdded: function FilesAdded(up, files) {
            plupload.each(files, function (file) {
              document.getElementById('ossfile').innerHTML += '<div id=' + file.id + '>\n                ' + file.name + ' ' + plupload.formatSize(file.size) + '\n                <b></b>\n            </div>';
            });
          },

          BeforeUpload: function BeforeUpload(up, file) {
            self.set_upload_param(up, file.name, true);
          },

          UploadProgress: function UploadProgress(up, file) {
            var d = document.getElementById(file.id);
            d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + '% \u5B8C\u6210\u4E0A\u4F20</span>';
          },

          FileUploaded: function FileUploaded(up, file, info) {
            if (info.status == 200) {
              var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                  Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
              });
              var shopId = parseInt(self.props.store.shopID);
              var url = self.state.data.host + '/' + file._options.multipart_params.key;
              client.request(createMediaID, { shopId: shopId, type: 'PIC', url: url }).then(function (res) {
                var ID = res.createMedia.id;
                self.props.store.getUrlIDs(parseInt(ID));
                _antd.message.success('上传成功');
              });
            }
          },
          Error: function Error(up, err) {
            _antd.message.error('出错了！' + err.response);
          }
        }
      });
      uploader.init();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-908210476',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, _react2.default.createElement('div', { id: 'ossfile', className: 'jsx-908210476',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }), _react2.default.createElement('br', {
        className: 'jsx-908210476',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }), _react2.default.createElement('div', { id: 'container', className: 'jsx-908210476',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, _react2.default.createElement('a', { id: 'selectfiles', href: 'javascript:void(0);', style: { marginRight: "10px" }, className: 'jsx-908210476' + ' ' + 'btn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, '\u9009\u62E9\u6587\u4EF6'), _react2.default.createElement('a', { id: 'postfiles', href: 'javascript:void(0);', className: 'jsx-908210476' + ' ' + 'btn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, '\u5F00\u59CB\u4E0A\u4F20')), _react2.default.createElement('style', { jsx: 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, '\n          \t.btn{\n            color: #fff;\n            background-color: #1890FF;\n            border-color: #2e6da4; \n            display: inline-block;\n            padding: 6px 12px;\n            margin-bottom: 0;\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 1.42857143;\n            text-align: center;\n            white-space: nowrap;\n            text-decoration: none;\n            vertical-align: middle;\n            -ms-touch-action: manipulation;\n            touch-action: manipulation;\n            cursor: pointer;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            background-image: none;\n            border: 1px solid transparent;\n            border-radius: 4px;\n            }\n            a.btn:hover{\n                background-color: #40A9FF;\n            }\n          '));
    }
  }]);
  return FileUploader;
}(_react2.default.Component)) || _class) || _class);
exports.default = FileUploader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmlsZVVwbG9hZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJhZGlvR3JvdXAiLCJSYWRpbyIsIkdyb3VwIiwiY3JlYXRlTWVkaWFJRCIsImNyZWF0ZU1lZGlhQW5kVXBsb2FkWW91emFuIiwiRmlsZVVwbG9hZGVyIiwib2JzZXJ2ZXIiLCJwcm9wcyIsInN0YXRlIiwiZmlsZUxpc3QiLCJ1cGxvYWRpbmciLCJmaWxlVXJscyIsInVwbG9hZF9jb25maXJtaW5nIiwiZGF0YSIsInZhbHVlIiwiZ2V0T1NTUG9saWN5IiwiZ2V0VXBsb2FkZWQiLCJjbGllbnQiLCJHcmFwaFFMQ2xpZW50IiwidXJpIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicXVlcnlvc3NQb2xpY3kiLCJyZXF1ZXN0IiwibGFiZWwiLCJ0eXBlIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJzZXRTdGF0ZSIsIm9zc1BvbGljeSIsImZpbGVuYW1lIiwicG9zIiwibGFzdEluZGV4T2YiLCJzdWZmaXgiLCJzdWJzdHJpbmciLCJ1cCIsInJldCIsIm5ld19tdWx0aXBhcnRfcGFyYW1zIiwiZGlyIiwiVVVJREdlbiIsInV1aWQiLCJnZXRfc3VmZml4IiwicG9saWN5IiwiYWNjZXNzaWQiLCJzaWduYXR1cmUiLCJzZXRPcHRpb24iLCJob3N0Iiwic3RhcnQiLCJzZWxmIiwidXBsb2FkZXIiLCJwbHVwbG9hZCIsIlVwbG9hZGVyIiwicnVudGltZXMiLCJicm93c2VfYnV0dG9uIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZsYXNoX3N3Zl91cmwiLCJzaWx2ZXJsaWdodF94YXBfdXJsIiwiZmlsdGVycyIsIm1heF9maWxlX3NpemUiLCJtaW1lX3R5cGVzIiwidGl0bGUiLCJleHRlbnNpb25zIiwiaW5pdCIsIlBvc3RJbml0IiwiaW5uZXJIVE1MIiwib25jbGljayIsInNldF91cGxvYWRfcGFyYW0iLCJGaWxlc0FkZGVkIiwiZmlsZXMiLCJlYWNoIiwiZmlsZSIsImlkIiwibmFtZSIsImZvcm1hdFNpemUiLCJzaXplIiwiQmVmb3JlVXBsb2FkIiwiVXBsb2FkUHJvZ3Jlc3MiLCJkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwZXJjZW50IiwiRmlsZVVwbG9hZGVkIiwiaW5mbyIsInN0YXR1cyIsInNob3BJZCIsInBhcnNlSW50Iiwic3RvcmUiLCJzaG9wSUQiLCJ1cmwiLCJfb3B0aW9ucyIsIm11bHRpcGFydF9wYXJhbXMiLCJrZXkiLCJJRCIsImNyZWF0ZU1lZGlhIiwiZ2V0VXJsSURzIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJFcnJvciIsImVyciIsImVycm9yIiwicmVzcG9uc2UiLCJtYXJnaW5SaWdodCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBTkEsSUFBTSxhQUFhLFlBQW5CLEFBQXlCOztBQU96QixJQUFNLGdCQUFOOztBQVFBLElBQU0sNkJBQU47O0lBV00sQSx1QkFETCx1QixBQUFBLEFBQU8sNEJBQVUsVzt3Q0FFaEI7O3dCQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0pBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7Z0JBQVEsQUFDRCxBQUNWO2lCQUZXLEFBRUEsQUFDWDtnQkFIVyxBQUdELEFBQ1Y7eUJBSlcsQUFJUSxBQUNuQjtZQUxXLEFBS0wsQUFDTjthQVJlLEFBRWpCLEFBQWEsQUFNSjtBQU5JLEFBQ1g7V0FPSDs7Ozs7d0NBQ21CLEFBQ2xCO1dBQUEsQUFBSyxBQUNMO1dBQUEsQUFBSyxBQUNOOzs7O21DQUVjO21CQUNiOztVQUFNLGFBQWEsZ0JBQUosY0FBa0IsTUFBbEI7O3FDQUVjLGFBQUEsQUFBYSxRQUYxQyxBQUFlLEFBQXVCLEFBQzNCLEFBQ2tCLEFBQXFCLEFBSWxEO0FBTFcsQUFDUDtBQUZrQyxBQUNwQyxPQURhOztVQU1ULGlCQUFOLEFBWUU7YUFBQSxBQUFPLFFBQVAsQUFBZSxnQkFBZ0IsRUFBQyxPQUFELEFBQU8sUUFBUSxNQUE5QyxBQUErQixBQUFvQixTQUFuRCxBQUEyRCxLQUN6RCxlQUFPLEFBQ0w7Z0JBQUEsQUFBUSxJQUFSLEFBQVksT0FBWixBQUFtQixBQUNuQjtlQUFBLEFBQUs7Z0JBQ0ssSUFEVixBQUFjLEFBQ0EsQUFFZjtBQUhlLEFBQ1Y7QUFKUixBQVFIOzs7OytCLEFBRVUsVUFBVSxBQUNuQjtVQUFNLE1BQU0sU0FBQSxBQUFTLFlBQXJCLEFBQVksQUFBcUIsQUFDakM7VUFBSSxTQUFKLEFBQWEsQUFDYjtVQUFJLFFBQVEsQ0FBWixBQUFhLEdBQUcsQUFDZDtpQkFBUyxTQUFBLEFBQVMsVUFBbEIsQUFBUyxBQUFtQixBQUM3QjtBQUNEO2FBQUEsQUFBTyxBQUNSOzs7O3FDQUVnQixBLElBQUksQSxVLEFBQVUsS0FBSSxBQUNqQztVQUFJO2VBQ1EsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLE1BQWhCLEFBQXNCLE1BQU0seUJBQUEsQUFBUSxLQUFSLEFBQWEsR0FBekMsQUFBNEIsQUFBZSxNQUFNLEtBQUEsQUFBSyxXQUR2QyxBQUNrQyxBQUFnQixBQUN6RTtrQkFBVSxLQUFBLEFBQUssTUFBTCxBQUFXLEtBRkUsQUFFRyxBQUMxQjswQkFBa0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUhOLEFBR1csQUFDbEM7aUNBSnVCLEFBSUcsT0FBTyxBQUNqQztxQkFBYSxLQUFBLEFBQUssTUFBTCxBQUFXLEtBTDVCLEFBQTJCLEFBS00sQUFHakM7QUFSMkIsQUFDdkI7O1NBT0osQUFBRztlQUNRLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FEVCxBQUNjLEFBQ3ZCOzRCQUZKLEFBQWEsQUFFVyxBQUd4QjtBQUxhLEFBQ1Q7O1NBSUosQUFBRyxBQUNKOzs7O2tDQUVhLEFBQ1o7VUFBSSxPQUFKLEFBQVcsQUFDWDtVQUFJLGVBQWUsU0FBSixBQUFhO2tCQUFTLEFBQ3pCLEFBQ1Y7dUJBRm1DLEFBRXBCLEFBQ2Y7bUJBQVcsU0FBQSxBQUFTLGVBSGUsQUFHeEIsQUFBd0IsQUFDbkM7dUJBSm1DLEFBSXBCLEFBQ2Y7NkJBTG1DLEFBS2QsQUFDckI7O3lCQUFVLEFBQ1EsQUFDaEI7c0JBQVksQ0FDVixFQUFDLE9BQUQsQUFBUyxlQUFlLFlBVE8sQUFNekIsQUFFSSxBQUNWLEFBQXFDLEFBR3pDO0FBTlUsQUFDUjs7b0JBTVUsb0JBQVcsQUFDbkI7cUJBQUEsQUFBUyxlQUFULEFBQXdCLFdBQXhCLEFBQW1DLFlBQW5DLEFBQStDLEFBQy9DO3FCQUFBLEFBQVMsZUFBVCxBQUF3QixhQUF4QixBQUFxQyxVQUFVLFlBQVcsQUFDeEQ7bUJBQUEsQUFBSyxpQkFBTCxBQUFzQixVQUF0QixBQUFnQyxJQUFoQyxBQUFvQyxBQUNoQztxQkFBQSxBQUFPLEFBQ1o7QUFIRCxBQUlEO0FBUEcsQUFTSjs7c0JBQVksb0JBQUEsQUFBUyxJQUFULEFBQWEsT0FBTyxBQUM5QjtxQkFBQSxBQUFTLEtBQVQsQUFBYyxPQUFPLFVBQUEsQUFBUyxNQUFNLEFBQ2xDO3VCQUFBLEFBQVMsZUFBVCxBQUF3QixXQUF4QixBQUFtQywwQkFDeEIsS0FEWCxBQUNnQiw2QkFDVixLQUZOLEFBRVcsYUFBUSxTQUFBLEFBQVMsV0FBVyxLQUZ2QyxBQUVtQixBQUF5QixRQUc3QztBQU5ELEFBT0Q7QUFqQkcsQUFtQko7O3dCQUFjLHNCQUFBLEFBQVMsSUFBVCxBQUFhLE1BQU0sQUFDekI7aUJBQUEsQUFBSyxpQkFBTCxBQUFzQixJQUFJLEtBQTFCLEFBQStCLE1BQS9CLEFBQXFDLEFBQ3hDO0FBckJELEFBdUJKOzswQkFBZ0Isd0JBQUEsQUFBUyxJQUFULEFBQWEsTUFBTSxBQUNqQztnQkFBSSxJQUFJLFNBQUEsQUFBUyxlQUFlLEtBQWhDLEFBQVEsQUFBNkIsQUFDckM7Y0FBQSxBQUFFLHFCQUFGLEFBQXVCLEtBQXZCLEFBQTRCLEdBQTVCLEFBQStCLHVCQUN0QixLQURULEFBQ2MsVUFDZjtBQTNCRyxBQTZCSjs7d0JBQWMsc0JBQUEsQUFBUyxJQUFULEFBQWEsTUFBYixBQUFtQixNQUFNLEFBQ3JDO2dCQUFJLEtBQUEsQUFBSyxVQUFULEFBQW1CLEtBQUksQUFDbkI7a0JBQU0sYUFBYSxnQkFBSixjQUFrQixNQUFsQjs7NkNBRWMsYUFBQSxBQUFhLFFBRjFDLEFBQWUsQUFBdUIsQUFDM0IsQUFDa0IsQUFBcUIsQUFHbEQ7QUFKVyxBQUNQO0FBRmtDLEFBQ3BDLGVBRGE7a0JBS1QsU0FBUyxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBbkMsQUFBZSxBQUEwQixBQUN6QztrQkFBTSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixPQUFoQixBQUF1QixNQUFNLEtBQUEsQUFBSyxTQUFMLEFBQWMsaUJBQXZELEFBQXdFLEFBQ3RFO3FCQUFBLEFBQU8sUUFBUCxBQUFlLGVBQWMsRUFBRSxRQUFGLFFBQVUsTUFBVixBQUFlLE9BQU8sS0FBbkQsQUFBNkIsT0FBN0IsQUFBeUQsS0FDekQsVUFBQSxBQUFDLEtBQVEsQUFDUDtvQkFBTSxLQUFLLElBQUEsQUFBSSxZQUFmLEFBQTJCLEFBQzNCO3FCQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsVUFBVSxTQUEzQixBQUEyQixBQUFTLEFBQ3BDOzhCQUFBLEFBQVEsUUFBUixBQUFnQixBQUNqQjtBQUxELEFBT0w7QUFDRjtBQTlDRyxBQStDSjtpQkFBTyxlQUFBLEFBQVMsSUFBVCxBQUFhLEtBQUssQUFDdkI7MEJBQUEsQUFBUSxNQUFNLFNBQU8sSUFBckIsQUFBeUIsQUFDMUI7QUE3REwsQUFBZSxBQUFzQixBQVk3QixBQW9EUjtBQXBEUSxBQUNKO0FBYmlDLEFBQ25DLE9BRGE7ZUFnRWYsQUFBUyxBQUNWOzs7OzZCQUdRLEFBQ1A7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSx5Q0FDTyxJQUFMLEFBQVEsc0JBQVI7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBOzttQkFDQTs7b0JBQUE7c0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBLFNBQUssSUFBTCxBQUFRLHdCQUFSOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLElBQUgsQUFBTSxlQUFjLE1BQXBCLEFBQXlCLHVCQUFzQyxPQUFPLEVBQUUsYUFBeEUsQUFBc0UsQUFBZSw2Q0FBckYsQUFBeUQ7O29CQUF6RDtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLDZDQUFBLGNBQUEsT0FBRyxJQUFILEFBQU0sYUFBWSxNQUFsQixBQUF1QiwwREFBdkIsQUFBdUQ7O29CQUF2RDtzQkFBQTtBQUFBO1NBTEosQUFHRSxBQUVFLEFBRUYsOENBQUEsY0FBQSxXQUFPLEtBQVAsQUFBVztvQkFBWDtzQkFBQTtBQUFBO1NBUkosQUFDRSxBQU9FLEFBZ0NLOzs7O0VBdkxjLGdCQUFNLEE7a0JBMExsQixBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvRGVza3RvcC9tempiL211emhpanViYW9fd2ViIn0=