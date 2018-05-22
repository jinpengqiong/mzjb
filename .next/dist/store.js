'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;

exports.initStore = initStore;

var _mobx = require('mobx');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  (0, _defineProperty2.default)(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var store = null;

var Store = (_class =
//autpreply add subTitle tag

//product tab will shown
function Store(isServer) {
  (0, _classCallCheck3.default)(this, Store);

  _initDefineProp(this, 'shopID', _descriptor, this);

  _initDefineProp(this, 'userRole', _descriptor2, this);

  _initDefineProp(this, 'curPagePath', _descriptor3, this);

  _initDefineProp(this, 'ProductData', _descriptor4, this);

  _initDefineProp(this, 'TabOption', _descriptor5, this);

  _initDefineProp(this, 'bindRoomData', _descriptor6, this);

  _initDefineProp(this, 'mainImage', _descriptor7, this);

  _initDefineProp(this, 'isShown', _descriptor8, this);

  _initDefineProp(this, 'activeKey', _descriptor9, this);

  _initDefineProp(this, 'ProdDetailData', _descriptor10, this);

  _initDefineProp(this, 'subTitleArr', _descriptor11, this);

  _initDefineProp(this, 'replyBody', _descriptor12, this);

  _initDefineProp(this, 'getShopID', _descriptor13, this);

  _initDefineProp(this, 'getRoleInfo', _descriptor14, this);

  _initDefineProp(this, 'getCurPagePath', _descriptor15, this);

  _initDefineProp(this, 'getProductData', _descriptor16, this);

  _initDefineProp(this, 'getTabOption', _descriptor17, this);

  _initDefineProp(this, 'getADMediaID', _descriptor18, this);

  _initDefineProp(this, 'getBindData', _descriptor19, this);

  _initDefineProp(this, 'getMainImage', _descriptor20, this);

  _initDefineProp(this, 'changeShown', _descriptor21, this);

  _initDefineProp(this, 'changeKey', _descriptor22, this);

  _initDefineProp(this, 'getProdDetailData', _descriptor23, this);

  _initDefineProp(this, 'changeIsExisted', _descriptor24, this);

  _initDefineProp(this, 'addSUbtitle', _descriptor25, this);

  _initDefineProp(this, 'addReplyBody', _descriptor26, this);

  _initDefineProp(this, 'deleteReplyBody', _descriptor27, this);
}
// replyBody saved here

//Youxuan Product detail data

// wethear show the product detail
, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'shopID', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'userRole', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'curPagePath', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'ProductData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'TabOption', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "1";
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'bindRoomData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'mainImage', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'isShown', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'activeKey', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '1';
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'ProdDetailData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'subTitleArr', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'replyBody', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'getShopID', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function (ID) {
      _this.shopID = ID;
    };
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'getRoleInfo', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (info) {
      _this2.userRole = info;
    };
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'getCurPagePath', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (path) {
      _this3.curPagePath = path;
    };
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'getProductData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (data) {
      _this4.ProductData = data;
    };
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, 'getTabOption', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function (option) {
      _this5.TabOption = option;
    };
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, 'getADMediaID', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function (data) {
      _this6.ADMediaID = data;
    };
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, 'getBindData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function (data) {
      _this7.bindRoomData = data;
    };
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, 'getMainImage', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this8 = this;

    return function (data) {
      _this8.mainImage = data;
    };
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, 'changeShown', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this9 = this;

    return function () {
      _this9.isShown = true;
    };
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, 'changeKey', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this10 = this;

    return function (keyID) {
      _this10.activeKey = keyID;
    };
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, 'getProdDetailData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this11 = this;

    return function (data) {
      _this11.ProdDetailData = data;
    };
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, 'changeIsExisted', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this12 = this;

    return function () {
      _this12.ProdDetailData.alreadyExist = true;
    };
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, 'addSUbtitle', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this13 = this;

    return function (data) {
      _this13.subTitleArr.push(data);
    };
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, 'addReplyBody', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this14 = this;

    return function (data) {
      _this14.replyBody.push(data);
    };
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, 'deleteReplyBody', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this15 = this;

    return function (index) {
      _this15.replyBody.splice(index, 1);
    };
  }
})), _class);
function initStore(isServer) {
  if (isServer) {
    return new Store(isServer);
  } else {
    if (store === null) {
      store = new Store(isServer);
    }
    return store;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImluaXRTdG9yZSIsInN0b3JlIiwiU3RvcmUiLCJpc1NlcnZlciIsIm9ic2VydmFibGUiLCJhY3Rpb24iLCJJRCIsInNob3BJRCIsImluZm8iLCJ1c2VyUm9sZSIsInBhdGgiLCJjdXJQYWdlUGF0aCIsImRhdGEiLCJQcm9kdWN0RGF0YSIsIm9wdGlvbiIsIlRhYk9wdGlvbiIsIkFETWVkaWFJRCIsImJpbmRSb29tRGF0YSIsIm1haW5JbWFnZSIsImlzU2hvd24iLCJrZXlJRCIsImFjdGl2ZUtleSIsIlByb2REZXRhaWxEYXRhIiwiYWxyZWFkeUV4aXN0Iiwic3ViVGl0bGVBcnIiLCJwdXNoIiwicmVwbHlCb2R5IiwiaW5kZXgiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7UUF5RmdCLEEsWUFBQSxBOztBQXpGaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFFBQVEsQUFBWjs7SUFFTSxBO0FBY0o7O0FBSkE7QUFVQSxlQUFhLEFBQWIsVUFBdUI7c0NBQUE7OytDQUFBOztrREFBQTs7cURBQUE7O3FEQUFBOzttREFBQTs7c0RBQUE7O21EQUFBOztpREFBQTs7bURBQUE7O3lEQUFBOztzREFBQTs7b0RBQUE7O29EQUFBOztzREFBQTs7eURBQUE7O3lEQUFBOzt1REFBQTs7dURBQUE7O3NEQUFBOzt1REFBQTs7c0RBQUE7O29EQUFBOzs0REFBQTs7MERBQUE7O3NEQUFBOzt1REFBQTs7MERBQ3RCOztBQUxEOztBQUpBOztBQUpBO3dFQVBDLE07OztXQUFvQixBOzs0RUFDcEIsTTs7O1dBQXNCLEE7OytFQUN0QixNOzs7V0FBeUIsQTs7K0VBQ3pCLE07OztXQUF5QixBOzs2RUFDekIsTTs7O1dBQXVCLEE7O2dGQUN2QixNOzs7V0FBMEIsQTs7NkVBQzFCLE07OztXQUF1QixBOzsyRUFFdkIsTTs7O1dBQXFCLEE7OzZFQUVyQixNOzs7V0FBdUIsQTs7bUZBRXZCLE07OztXQUE0QixBOztnRkFFNUIsTTs7O1dBQXlCLEE7OzhFQUV6QixNOzs7V0FBdUIsQTs7OEVBTXZCLE07Ozs7O1dBQW1CLFVBQUMsQUFBRCxJQUFRLEFBQzFCO1lBQUssQUFBTCxTQUFjLEFBQWQsQUFDRDtBOztnRkFFQSxNOzs7OztXQUFxQixVQUFDLEFBQUQsTUFBVSxBQUM5QjthQUFLLEFBQUwsV0FBZ0IsQUFBaEIsQUFDRDtBOzttRkFFQSxNOzs7OztXQUF3QixVQUFDLEFBQUQsTUFBVSxBQUNqQzthQUFLLEFBQUwsY0FBbUIsQUFBbkIsQUFDRDtBOzttRkFFQSxNOzs7OztXQUF3QixVQUFDLEFBQUQsTUFBVSxBQUNqQzthQUFLLEFBQUwsY0FBbUIsQUFBbkIsQUFDRDtBOztpRkFFQSxNOzs7OztXQUFzQixVQUFDLEFBQUQsUUFBWSxBQUNqQzthQUFLLEFBQUwsWUFBaUIsQUFBakIsQUFDRDtBOztpRkFFQSxNOzs7OztXQUFzQixVQUFDLEFBQUQsTUFBVSxBQUMvQjthQUFLLEFBQUwsWUFBaUIsQUFBakIsQUFDRDtBOztnRkFFQSxNOzs7OztXQUFxQixVQUFDLEFBQUQsTUFBVSxBQUM5QjthQUFLLEFBQUwsZUFBb0IsQUFBcEIsQUFDRDtBOztpRkFFQSxNOzs7OztXQUFzQixVQUFDLEFBQUQsTUFBVSxBQUM3QjthQUFLLEFBQUwsWUFBaUIsQUFBakIsQUFDSDtBOztnRkFFQSxNOzs7OztXQUFxQixZQUFNLEFBQzFCO2FBQUssQUFBTCxVQUFlLEFBQWYsQUFDRDtBOzs4RUFFQSxNOzs7OztXQUFtQixVQUFDLEFBQUQsT0FBVyxBQUM3QjtjQUFLLEFBQUwsWUFBaUIsQUFBakIsQUFDRDtBOztzRkFFQSxNOzs7OztXQUEyQixVQUFDLEFBQUQsTUFBVSxBQUNsQztjQUFLLEFBQUwsaUJBQXNCLEFBQXRCLEFBQ0g7QTs7b0ZBRUEsTTs7Ozs7V0FBeUIsWUFBTSxBQUM1QjtjQUFLLEFBQUwsZUFBb0IsQUFBcEIsZUFBbUMsQUFBbkMsQUFDSDtBOztnRkFFQSxNOzs7OztXQUFxQixVQUFDLEFBQUQsTUFBVSxBQUM1QjtjQUFLLEFBQUwsWUFBaUIsQUFBakIsS0FBc0IsQUFBdEIsQUFDSDtBOztpRkFFQSxNOzs7OztXQUFzQixVQUFDLEFBQUQsTUFBVSxBQUMvQjtjQUFLLEFBQUwsVUFBZSxBQUFmLEtBQW9CLEFBQXBCLEFBQ0Q7QTs7b0ZBRUEsTTs7Ozs7V0FBeUIsVUFBQyxBQUFELE9BQVcsQUFDbkM7Y0FBSyxBQUFMLFVBQWUsQUFBZixPQUFzQixBQUF0QixPQUE0QixBQUE1QixBQUNEO0E7OztBQUlJLFNBQVMsQUFBVCxVQUFvQixBQUFwQixVQUE4QixBQUNuQztNQUFJLEFBQUosVUFBYyxBQUNaO1dBQU8sSUFBSSxBQUFKLE1BQVUsQUFBVixBQUFQLEFBQ0Q7QUFGRCxTQUVPLEFBQ0w7UUFBSSxVQUFVLEFBQWQsTUFBb0IsQUFDbEI7Y0FBUSxJQUFJLEFBQUosTUFBVSxBQUFWLEFBQVIsQUFDRDtBQUNEO1dBQU8sQUFBUCxBQUNEO0FBQ0YiLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL216In0=