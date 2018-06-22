'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require('react-dnd');

var _HTML5Backend = require('react-dnd-html5-backend');

var _icon = require('zent/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITEM = 'editorCardItem';

var EditorCardItem = (_temp2 = _class = function (_ref) {
  _inherits(EditorCardItem, _ref);

  function EditorCardItem() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, EditorCardItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = EditorCardItem.__proto__ || Object.getPrototypeOf(EditorCardItem)).call.apply(_ref2, [this].concat(args))), _this), _this.handleDeleteItem = function () {
      var _this$props = _this.props,
          index = _this$props.index,
          onDelete = _this$props.onDelete;

      onDelete(index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditorCardItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isDragging = _props.isDragging,
          connectDragSource = _props.connectDragSource,
          connectDropTarget = _props.connectDropTarget,
          isInline = _props.isInline,
          canDelete = _props.canDelete;


      var cls = isInline ? 'rc-design-editor-card-item__inline' : 'rc-design-editor-card-item';

      var style = {
        opacity: isDragging ? 0 : 1
      };

      var node = _react2['default'].createElement(
        'div',
        { className: cls, style: style },
        children,
        canDelete && _react2['default'].createElement(_icon2['default'], {
          className: 'rc-design-editor-card-item-delete',
          type: 'close-circle',
          onClick: this.handleDeleteItem
        })
      );

      return connectDragSource(connectDropTarget(node));
    }
  }]);

  return EditorCardItem;
}(_react.PureComponent || _react.Component), _class.propTypes = {
  // 子组件
  children: _propTypes2['default'].node.isRequired,
  // 组件所在位置的下标
  index: _propTypes2['default'].number.isRequired,
  // 是否可拖拽
  isDragable: _propTypes2['default'].bool.isRequired,
  // 是否可删除
  canDelete: _propTypes2['default'].bool.isRequired,
  // 是否为行内样式
  isInline: _propTypes2['default'].bool,
  // 删除组件的回调函数
  onDelete: _propTypes2['default'].func.isRequired,
  // 拖拽时移动组件的回调函数
  onMove: _propTypes2['default'].func.isRequired
}, _temp2);


var dndSource = {
  canDrag: function canDrag(props) {
    return props.isDragable;
  },
  beginDrag: function beginDrag(props) {
    return {
      index: props.index
    };
  }
};

// ⚠️ 不要抄这些代码，你肯定会抄出问题来的
// ⚠️ 不要抄这些代码，你肯定会抄出问题来的。
// ⚠️ 不要抄这些代码，你肯定会抄出问题来的。
var dndTarget = {
  // ⚠️ 不要抄这些代码，你肯定会抄出问题来的
  // ⚠️ 不要抄这些代码，你肯定会抄出问题来的。
  // ⚠️ 不要抄这些代码，你肯定会抄出问题来的。
  hover: function hover(props, monitor, component) {
    var dragIndex = monitor.getItem().index;
    var hoverIndex = props.index;
    var isInline = props.isInline;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    var hoverBoundingRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();

    // Get vertical middle
    var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    var hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

    // Determine mouse position
    var clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    var hoverClientY = clientOffset.y - hoverBoundingRect.top;
    var hoverClientX = clientOffset.x - hoverBoundingRect.left;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (isInline) {
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY && hoverClientX < hoverMiddleY) {
        return;
      }
    } else if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (isInline) {
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY && hoverClientX > hoverMiddleX) {
        return;
      }
    } else if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.onMove(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

/* eslint-disable new-cap, no-use-before-define */
exports['default'] = (0, _reactDnd.DropTarget)(ITEM, dndTarget, function (connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
})((0, _reactDnd.DragSource)(ITEM, dndSource, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
})(EditorCardItem));
/* eslint-enable new-cap, no-use-before-define */

module.exports = _reactDnd.DragDropContext(_HTML5Backend)(exports['default']);