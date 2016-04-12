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

var _CreatePage = require("./CreatePage");

var _CreatePage2 = _interopRequireDefault(_CreatePage);

var _EditPage = require("./EditPage");

var _EditPage2 = _interopRequireDefault(_EditPage);

var _ListPage = require("./ListPage");

var _ListPage2 = _interopRequireDefault(_ListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function (_React$Component) {
  (0, _inherits3.default)(Router, _React$Component);

  function Router() {
    (0, _classCallCheck3.default)(this, Router);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Router).apply(this, arguments));
  }

  (0, _createClass3.default)(Router, [{
    key: "render",
    value: function render() {
      switch (this.props.params.adminPageType) {
        case 'list':
          return _react2.default.createElement(_ListPage2.default, this.props);
        case 'create':
          return _react2.default.createElement(_CreatePage2.default, this.props);
        case 'edit':
          return _react2.default.createElement(_EditPage2.default, this.props);
        default:
          return _react2.default.createElement(_ListPage2.default, this.props);
      }
    }
  }]);
  return Router;
}(_react2.default.Component);

exports.default = Router;