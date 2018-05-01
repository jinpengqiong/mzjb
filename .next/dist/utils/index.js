"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 一些辅助用的工具方法
// 很多都是gross hack, 属于历史遗留问题

// antd从2.x开始引入了moment: http://momentjs.com/docs/
// 这是个好东西, 处理日期方便多了, 简直就是javascript界的joda-time
// 这些prototype的hack基本用不到了
// 不过它format时的pattern和常见的不太一样, 比如要大写的YYYY才代表年份

/** 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
 * 可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * eg:
 * (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
    "H+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  var week = {
    "0": "/u65e5",
    "1": "/u4e00",
    "2": "/u4e8c",
    "3": "/u4e09",
    "4": "/u56db",
    "5": "/u4e94",
    "6": "/u516d"
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468" : "") + week[this.getDay() + ""]);
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return fmt;
};

/**
 * 在当前日期的基础上再增加几天
 *
 * @param num 要增加的天数
 */
Date.prototype.plusDays = function (num) {
  var tmp = new Date();
  tmp.setDate(this.getDate() + num);
  return tmp;
};

// 为了克服js的一些坑...
var Utils = {
  isString: function isString(s) {
    return typeof s === 'string' || s instanceof String;
  },

  // 获取url中的所有参数
  getAllQueryParams: function getAllQueryParams() {
    var str = window.location.href;
    if (!str) {
      return {};
    }

    var num = str.indexOf('?');
    str = str.substr(num + 1); //取得所有参数

    var res = {};
    var name = void 0;
    var value = void 0;

    var arr = str.split('&'); //各个参数放到数组里
    for (var i = 0; i < arr.length; i++) {
      num = arr[i].indexOf('=');
      if (num > 0) {
        name = arr[i].substring(0, num).trim();
        value = arr[i].substr(num + 1).trim();
        res[name] = value;
      }
    }

    return res;
  }
};

exports.default = Utils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJEYXRlIiwicHJvdG90eXBlIiwiZm9ybWF0IiwiZm10IiwibyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJnZXRNaWxsaXNlY29uZHMiLCJ3ZWVrIiwidGVzdCIsInJlcGxhY2UiLCJSZWdFeHAiLCIkMSIsImdldEZ1bGxZZWFyIiwic3Vic3RyIiwibGVuZ3RoIiwiZ2V0RGF5IiwiayIsInBsdXNEYXlzIiwibnVtIiwidG1wIiwic2V0RGF0ZSIsIlV0aWxzIiwiaXNTdHJpbmciLCJzIiwiU3RyaW5nIiwiZ2V0QWxsUXVlcnlQYXJhbXMiLCJzdHIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJpbmRleE9mIiwicmVzIiwibmFtZSIsInZhbHVlIiwiYXJyIiwic3BsaXQiLCJpIiwic3Vic3RyaW5nIiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQSxLQUFBLEFBQUssVUFBTCxBQUFlLFNBQVMsVUFBQSxBQUFVLEtBQUssQUFDckM7TUFBSTtVQUNJLEtBQUEsQUFBSyxhQURMLEFBQ2tCLEdBQUcsQUFDM0I7VUFBTSxLQUZBLEFBRUEsQUFBSyxXQUFXLEFBQ3RCO1VBQU0sS0FBQSxBQUFLLGFBQUwsQUFBa0IsTUFBbEIsQUFBd0IsSUFBeEIsQUFBNEIsS0FBSyxLQUFBLEFBQUssYUFIdEMsQUFHbUQsSUFBSSxBQUM3RDtVQUFNLEtBSkEsQUFJQSxBQUFLLFlBQVksQUFDdkI7VUFBTSxLQUxBLEFBS0EsQUFBSyxjQUFjLEFBQ3pCO1VBQU0sS0FOQSxBQU1BLEFBQUssY0FBYyxBQUN6QjtVQUFNLEtBQUEsQUFBSyxNQUFNLENBQUMsS0FBQSxBQUFLLGFBQU4sQUFBbUIsS0FQOUIsQUFPQSxBQUFtQyxJQUFJLEFBQzdDO1NBQUssS0FS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