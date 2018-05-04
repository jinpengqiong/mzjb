"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require("_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("_babel-runtime@6.26.0@babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("_babel-runtime@6.26.0@babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = "/Users/mac/Desktop/mzjb/muzhijubao_web/pages/_document.js?entry";


var _document = require("_next@4.2.3@next/dist/server/document.js");

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);
    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement("meta", { charSet: "utf-8", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement("meta", { name: "version", content: "1.0.0", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement("script", { src: "http://image.mzliaoba.com/lib/plupload.full.min.new.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "\u62C7\u6307\u805A\u5B9D")), _react2.default.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, this.props.customValue, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      return {
        html: html, head: head, errorHtml: errorHtml, chunks: chunks
      };
    }
  }]);
  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJNeURvY3VtZW50IiwicHJvcHMiLCJjdXN0b21WYWx1ZSIsInJlbmRlclBhZ2UiLCJodG1sIiwiaGVhZCIsImVycm9ySHRtbCIsImNodW5rcyIsIkRvY3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SSxBQUNxQjs7Ozs7Ozs7Ozs2QkFTVixBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0csd0JBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGlEQUNRLFNBQU4sQUFBYztvQkFBZDtzQkFERixBQUNFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsV0FBVSxTQUFyQixBQUE2QjtvQkFBN0I7c0JBRkYsQUFFRSxBQUNBO0FBREE7b0RBQ1EsS0FBUixBQUFZO29CQUFaO3NCQUhGLEFBR0UsQUFDRTtBQURGOzBCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxOLEFBQ0UsQUFJSSxBQUVKLDhDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQURSLEFBQ2MsQUFDWiwyQ0FBQyxVQUFEOztvQkFBQTtzQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBLHdDQUNDLFVBQUQ7O29CQUFBO3NCQVhOLEFBQ0UsQUFPRSxBQUdFLEFBSVA7QUFKTztBQUFBOzs7OzBDQXBCK0I7VUFBZCxBQUFjLGtCQUFkLEFBQWM7O3dCQUFBLEFBR2pDO1VBSGlDLEFBRW5DLG1CQUZtQyxBQUVuQztVQUZtQyxBQUU3QixtQkFGNkIsQUFFN0I7VUFGNkIsQUFFdkIsd0JBRnVCLEFBRXZCO1VBRnVCLEFBRVoscUJBRlksQUFFWixBQUV6Qjs7O2NBQU8sTUFDQyxNQURELE1BQ08sV0FEUCxXQUNrQixRQUR6QixBQUFPLEFBR1I7QUFIUSxBQUNMOzs7O0VBTmtDLFc7O2tCQUFuQixBIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFjL0Rlc2t0b3AvbXpqYi9tdXpoaWp1YmFvX3dlYiJ9