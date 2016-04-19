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

var _BaseAutocompleteWidget = require("./BaseAutocompleteWidget");

var _BaseAutocompleteWidget2 = _interopRequireDefault(_BaseAutocompleteWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AutocompleteWidget = function (_BaseAutocompleteWidg) {
  (0, _inherits3.default)(AutocompleteWidget, _BaseAutocompleteWidg);

  function AutocompleteWidget() {
    (0, _classCallCheck3.default)(this, AutocompleteWidget);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AutocompleteWidget).apply(this, arguments));
  }

  (0, _createClass3.default)(AutocompleteWidget, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("input", {
        value: this.state.label,
        className: "form-control dropdown-input",
        id: "autocomplete" + this.uniqId,
        onChange: this.onChange.bind(this)
      });
    }
  }]);
  return AutocompleteWidget;
}(_BaseAutocompleteWidget2.default);

exports.default = AutocompleteWidget;