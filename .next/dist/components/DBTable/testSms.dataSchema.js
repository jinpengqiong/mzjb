'use strict';

var _jsxFileName = 'C:\\Users\\Administrator\\Desktop\\mzjb\\components\\DBTable\\testSms.dataSchema.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = [{
  key: 'id',
  title: 'ID',
  dataType: 'int',
  width: 80,
  primary: true
}, {
  key: 'title',
  title: '商品名称',
  dataType: 'varchar',
  showType: 'title',
  width: 150
}, {
  key: 'mainImage',
  title: '商品类型',
  dataType: 'varchar',
  showType: 'image',
  max: 1,
  width: 200,
  render: function render(text) {
    return _react2.default.createElement('img', { src: text, style: { width: 100 }, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    });
  }
}, {
  key: 'price',
  title: '价格',
  dataType: 'varchar',
  width: 80,
  validator: [{ type: 'string', pattern: /^\d+(\.\d{1,2})?$/, message: '只能是数字哦。' }],
  render: function render(text) {
    return '\xA5' + (parseFloat(text) / 100).toFixed(2);
  }
}, {
  // 文件上传和图片上传其实是很类似的
  key: 'desc',
  title: '简要描述',
  dataType: 'varchar',
  showType: 'desc',
  width: 200,
  render: function render(text) {
    return '' + text;
  }
}, {
  key: 'detailUrl',
  title: '链接',
  dataType: 'varchar',
  validator: [{ type: 'url', message: '请输入正确的链接格式' }],
  width: 200,
  render: function render(text) {
    return _react2.default.createElement('a', { href: text, __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }, text);
  }
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXERCVGFibGVcXHRlc3RTbXMuZGF0YVNjaGVtYS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwia2V5IiwidGl0bGUiLCJkYXRhVHlwZSIsIndpZHRoIiwicHJpbWFyeSIsInNob3dUeXBlIiwibWF4IiwicmVuZGVyIiwidGV4dCIsInZhbGlkYXRvciIsInR5cGUiLCJwYXR0ZXJuIiwibWVzc2FnZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7O0FBRUEsT0FBQSxBQUFPO09BQ0wsQUFDTyxBQUNMO1NBRkYsQUFFUyxBQUNQO1lBSEYsQUFHWSxBQUNWO1NBSkYsQUFJUyxBQUNQO1dBTmEsQUFDZixBQUtXO0FBTFgsQUFDRSxDQUZhO09BUWYsQUFDTyxBQUNMO1NBRkYsQUFFUyxBQUNQO1lBSEYsQUFHWSxBQUNWO1lBSkYsQUFJWSxBQUNWO1NBYmEsQUFRZixBQUtTO0FBTFQsQUFDRTtPQU1GLEFBQ08sQUFDTDtTQUZGLEFBRVMsQUFDUDtZQUhGLEFBR1ksQUFDVjtZQUpGLEFBSVksQUFDVjtPQUxGLEFBS08sQUFDTDtTQU5GLEFBTVMsQUFDUDtVQUFRLHNCQUFBO2tEQUFhLEtBQUwsQUFBVSxNQUFNLE9BQU8sRUFBRSxPQUF6QixBQUF1QixBQUFTO2tCQUFoQztvQkFBUixBQUFRO0FBQUE7S0FBQTtBQXRCSCxBQWVmO0FBQUEsQUFDRTtPQVFGLEFBQ08sQUFDTDtTQUZGLEFBRVMsQUFDUDtZQUhGLEFBR1ksQUFDVjtTQUpGLEFBSVMsQUFDUDthQUFXLENBQUMsRUFBQyxNQUFELEFBQU8sVUFBVSxTQUFqQixBQUEwQixxQkFBcUIsU0FMN0QsQUFLYSxBQUFDLEFBQXdELEFBQ3BFO1VBQVEsc0JBQUE7b0JBQVksQ0FBRSxXQUFELEFBQUMsQUFBVyxRQUFiLEFBQXNCLEtBQXRCLEFBQTJCLFFBQXZDLEFBQVksQUFBbUM7QUE5QjFDLEFBd0JmO0FBQUEsQUFDRTtBQVNBO09BRkYsQUFFTyxBQUNMO1NBSEYsQUFHUyxBQUNQO1lBSkYsQUFJWSxBQUNWO1lBTEYsQUFLWSxBQUNWO1NBTkYsQUFNUyxBQUNQO1VBQVEsc0JBQUE7Z0JBQUEsQUFBVztBQXZDTixBQWdDZjtBQUFBLEFBQ0U7T0FRRixBQUNPLEFBQ0w7U0FGRixBQUVTLEFBQ1A7WUFIRixBQUdZLEFBQ1Y7YUFBVyxDQUFDLEVBQUUsTUFBRixBQUFRLE9BQU8sU0FKN0IsQUFJYSxBQUFDLEFBQXdCLEFBQ3BDO1NBTEYsQUFLUyxBQUNQO1VBQVEsc0JBQUE7MkJBQVEsY0FBQSxPQUFHLE1BQUgsQUFBUztrQkFBVDtvQkFBQSxBQUFnQjtBQUFoQjtLQUFBLEVBQVIsQUFBUTtBQS9DcEIsQUFBaUIsQUF5Q2Y7QUFBQSxBQUNFIiwiZmlsZSI6InRlc3RTbXMuZGF0YVNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0Rlc2t0b3AvbXpqYiJ9