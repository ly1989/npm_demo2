"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Title =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title(props) {
    var _this;

    _classCallCheck(this, Title);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Title).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Title, [{
    key: "goToPage",
    value: function goToPage(item) {
      if (this.props.goToPage) {
        this.props.goToPage(item);
      }
    }
  }, {
    key: "getMenuContent",
    value: function getMenuContent(menuList) {
      var _this2 = this;

      var text = '';

      if (menuList && menuList.length > 0) {
        text = menuList.map(function (item, i) {
          var content = '';
          var length = menuList.length - 1;

          if (i != length) {
            if (item.isClick) {
              content = _react["default"].createElement("span", {
                key: i,
                style: {
                  cursor: 'pointer'
                },
                onClick: _this2.goToPage.bind(_this2, item),
                className: _index["default"].color
              }, item.title, " / ");
            } else {
              content = _react["default"].createElement("span", {
                key: i,
                className: _index["default"].color
              }, item.title, " / ");
            }
          }

          if (i == length) {
            content = _react["default"].createElement("span", {
              key: i,
              className: _index["default"].lastColor
            }, item.title);
          }

          return content;
        });
        return text;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var menuList = this.props.menuList;
      return _react["default"].createElement("div", {
        className: _index["default"].titleBox
      }, this.getMenuContent(menuList));
    }
  }]);

  return Title;
}(_react["default"].Component);

Title.defaultProps = {};
var _default = Title;
exports["default"] = _default;