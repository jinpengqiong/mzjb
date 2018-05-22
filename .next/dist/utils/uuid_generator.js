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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3V1aWRfZ2VuZXJhdG9yLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1dWlkIiwibGVuIiwicmFkaXgiLCJjaGFycyIsInNwbGl0IiwiaSIsImxlbmd0aCIsIk1hdGgiLCJyYW5kb20iLCJyIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFBLEFBQU87QUFFTDtBQUZlLHNCQUFBLEFBRVYsS0FGVSxBQUVMLE9BQU8sQUFDZjtRQUFJLFFBQVEsaUVBQUEsQUFBaUUsTUFBN0UsQUFBWSxBQUF1RSxBQUNuRjtRQUFJLE9BQUosQUFBVztRQUFYLEFBQWUsQUFDZjtZQUFRLFNBQVMsTUFBakIsQUFBdUIsQUFFdkI7O1FBQUEsQUFBSSxLQUFLLEFBQ1A7QUFDQTtXQUFLLElBQUwsQUFBUyxHQUFHLElBQVosQUFBZ0IsS0FBaEIsQUFBcUIsS0FBSzthQUFBLEFBQUssS0FBSyxNQUFNLElBQUksS0FBQSxBQUFLLFdBQW5ELEFBQTBCLEFBQVUsQUFBd0I7QUFDN0Q7QUFIRCxXQUdPLEFBQ0w7QUFDQTtVQUFBLEFBQUksQUFFSjs7QUFDQTtXQUFBLEFBQUssS0FBSyxLQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssTUFBckMsQUFBMkMsQUFDM0M7V0FBQSxBQUFLLE1BQUwsQUFBVyxBQUVYOztBQUNBO0FBQ0E7V0FBSyxJQUFMLEFBQVMsR0FBRyxJQUFaLEFBQWdCLElBQWhCLEFBQW9CLEtBQUssQUFDdkI7WUFBSSxDQUFDLEtBQUwsQUFBSyxBQUFLLElBQUksQUFDWjtjQUFJLElBQUksS0FBQSxBQUFLLFdBQWIsQUFBc0IsQUFDdEI7ZUFBQSxBQUFLLEtBQUssTUFBTyxLQUFELEFBQU0sS0FBTyxJQUFELEFBQUssTUFBakIsQUFBd0IsTUFBeEMsQUFBVSxBQUFvQyxBQUMvQztBQUNGO0FBQ0Y7QUFDRDtXQUFPLEtBQUEsQUFBSyxLQUFaLEFBQU8sQUFBVSxBQUNsQjtBQTVCSCxBQUFpQjtBQUFBLEFBQ2YiLCJmaWxlIjoidXVpZF9nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hYy9EZXNrdG9wL216amIvbXV6aGlqdWJhb193ZWIifQ==