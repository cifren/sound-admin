"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function (_React$Component) {
  (0, _inherits3.default)(Loading, _React$Component);

  function Loading() {
    (0, _classCallCheck3.default)(this, Loading);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Loading).apply(this, arguments));
  }

  (0, _createClass3.default)(Loading, [{
    key: "getClassCss",
    value: function getClassCss() {
      return "fa fa-refresh fa-spin";
    }
  }, {
    key: "render",
    value: function render() {
      var cssClass = null;

      if (this.props.active) {
        cssClass = this.getClassCss();
      }

      return _react2.default.createElement("i", { className: cssClass });
    }
  }]);
  return Loading;
}(_react2.default.Component);

exports.default = Loading;