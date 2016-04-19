"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require("babel-runtime/helpers/get");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _BaseAutocompleteWidget = require("./BaseAutocompleteWidget");

var _BaseAutocompleteWidget2 = _interopRequireDefault(_BaseAutocompleteWidget);

var _awesomplete = require("awesomplete");

var _awesomplete2 = _interopRequireDefault(_awesomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComboAutocompleteWidget = function (_BaseAutocompleteWidg) {
  (0, _inherits3.default)(ComboAutocompleteWidget, _BaseAutocompleteWidg);

  function ComboAutocompleteWidget() {
    (0, _classCallCheck3.default)(this, ComboAutocompleteWidget);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ComboAutocompleteWidget).apply(this, arguments));
  }

  (0, _createClass3.default)(ComboAutocompleteWidget, [{
    key: "initAwesomplete",
    value: function initAwesomplete() {
      var _this2 = this;

      var input = document.getElementById("autocomplete" + this.uniqId);
      var comboplete = new _awesomplete2.default(input, {
        minChars: this.getOption("minChar"),
        list: this.state.ajaxData,
        replace: this.onReplace(input),
        autoFirst: this.getOption("auto_first") ? true : false,
        filter: this.filter()
      });

      // on dropdown button
      this.dropdownOnClickFunction = function () {
        if (comboplete.ul.childNodes.length === 0) {
          comboplete.minChars = _this2.getOption("minChar");
          comboplete.evaluate();
        } else if (comboplete.ul.hasAttribute("hidden")) {
          comboplete.open();
        } else {
          comboplete.close();
        }
      };

      // on close event
      input.addEventListener("awesomplete-close", function (event) {
        // if not in selection, clear the input value, length test avoid open-closing
        if (!_this2.inArray(comboplete._list, input.value) && input.value.length >= _this2.getOption("minChar")) {
          input.value = null;
        }
      });
    }
  }, {
    key: "inArray",
    value: function inArray(array, value) {
      return array.filter(function (item) {
        return item.label === value;
      }).length > 0;
    }
  }, {
    key: "dropdownOnClick",
    value: function dropdownOnClick() {
      this.dropdownOnClickFunction();
    }
  }, {
    key: "getDefaultOptions",
    value: function getDefaultOptions() {
      return (0, _assign2.default)({}, (0, _get3.default)((0, _getPrototypeOf2.default)(ComboAutocompleteWidget.prototype), "getDefaultOptions", this).call(this), {
        "minChar": 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("render");
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "input-group" },
          _react2.default.createElement("input", {
            value: this.state.label,
            className: "form-control dropdown-input",
            id: "autocomplete" + this.uniqId,
            onChange: this.onChange.bind(this)
          }),
          _react2.default.createElement(
            "span",
            { className: "input-group-btn dropdown-btn" },
            _react2.default.createElement(
              "button",
              {
                onClick: this.dropdownOnClick.bind(this),
                id: "dropdown-btn2" + this.uniqId, className: "btn btn-default", type: "button" },
              _react2.default.createElement("span", { className: "caret" })
            )
          )
        )
      );
    }
  }]);
  return ComboAutocompleteWidget;
}(_BaseAutocompleteWidget2.default);

exports.default = ComboAutocompleteWidget;