'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractPageSizeFromHtml = extractPageSizeFromHtml;
exports.extractCurrentPageFromHtml = extractCurrentPageFromHtml;

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function extractPageSizeFromHtml(html) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;

  if (!(0, _isString2['default'])(html)) {
    return defaultValue;
  }

  var m = html.match(/每页\s*(\d+)\s*条/);
  if (!m) {
    return defaultValue;
  }

  return parseInt(m[1], 10);
}

function extractCurrentPageFromHtml(html) {
  // var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  //
  // if (!(0, _isString2['default'])(html)) {
  //   return defaultValue;
  // }
  //
  // var m = html.match(/class="num\s+active">(\d+)/);
  // if (!m) {
  //   return defaultValue;
  // }

  return parseInt(html, 10);
}