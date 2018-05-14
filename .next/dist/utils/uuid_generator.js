'use strict';

module.exports = {
  // UUID 自动生成器
  uuid: function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [],
        i;
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (i = 0; i < len; i++) {
        uuid[i] = chars[0 | Math.random() * radix];
      }
    } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
        }
      }
    }
    return uuid.join('');
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzXFx1dWlkX2dlbmVyYXRvci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXVpZCIsImxlbiIsInJhZGl4IiwiY2hhcnMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJNYXRoIiwicmFuZG9tIiwiciIsImpvaW4iXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBQSxBQUFPO0FBRUw7QUFGZSxzQkFBQSxBQUVWLEtBRlUsQUFFTCxPQUFPLEFBQ2Y7UUFBSSxRQUFRLGlFQUFBLEFBQWlFLE1BQTdFLEFBQVksQUFBdUUsQUFDbkY7UUFBSSxPQUFKLEFBQVc7UUFBWCxBQUFlLEFBQ2Y7WUFBUSxTQUFTLE1BQWpCLEFBQXVCLEFBRXZCOztRQUFBLEFBQUksS0FBSyxBQUNQO0FBQ0E7V0FBSyxJQUFMLEFBQVMsR0FBRyxJQUFaLEFBQWdCLEtBQWhCLEFBQXFCLEtBQUs7YUFBQSxBQUFLLEtBQUssTUFBTSxJQUFJLEtBQUEsQUFBSyxXQUFuRCxBQUEwQixBQUFVLEFBQXdCO0FBQzdEO0FBSEQsV0FHTyxBQUNMO0FBQ0E7VUFBQSxBQUFJLEFBRUo7O0FBQ0E7V0FBQSxBQUFLLEtBQUssS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLE1BQXJDLEFBQTJDLEFBQzNDO1dBQUEsQUFBSyxNQUFMLEFBQVcsQUFFWDs7QUFDQTtBQUNBO1dBQUssSUFBTCxBQUFTLEdBQUcsSUFBWixBQUFnQixJQUFoQixBQUFvQixLQUFLLEFBQ3ZCO1lBQUksQ0FBQyxLQUFMLEFBQUssQUFBSyxJQUFJLEFBQ1o7Y0FBSSxJQUFJLEtBQUEsQUFBSyxXQUFiLEFBQXNCLEFBQ3RCO2VBQUEsQUFBSyxLQUFLLE1BQU8sS0FBRCxBQUFNLEtBQU8sSUFBRCxBQUFLLE1BQWpCLEFBQXdCLE1BQXhDLEFBQVUsQUFBb0MsQUFDL0M7QUFDRjtBQUNGO0FBQ0Q7V0FBTyxLQUFBLEFBQUssS0FBWixBQUFPLEFBQVUsQUFDbEI7QUE1QkgsQUFBaUI7QUFBQSxBQUNmIiwiZmlsZSI6InV1aWRfZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9tdXpoaWp1YmFvX3dlYiJ9