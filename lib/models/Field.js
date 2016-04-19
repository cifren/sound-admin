"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _entries = require("babel-runtime/core-js/object/entries");

var _entries2 = _interopRequireDefault(_entries);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = function () {
  function Field(fieldName) {
    var widget = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
    (0, _classCallCheck3.default)(this, Field);

    this.fieldName = fieldName;
    this.widget = widget;
    this.options = options;
  }

  (0, _createClass3.default)(Field, [{
    key: "setOption",
    value: function setOption(key, item) {
      this._options = (0, _assign2.default)({}, this._options, (0, _defineProperty3.default)({}, key, item));
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this._options[name];
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      return this._options["label"];
    }
  }, {
    key: "fieldName",
    set: function set(fieldName) {
      this._fieldName = fieldName;
    },
    get: function get() {
      return this._fieldName;
    }
  }, {
    key: "options",
    get: function get() {
      return this._options;
    },
    set: function set() {
      var _this = this;

      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      if (!options["label"]) {
        options["label"] = this.fieldName;
      }

      (0, _entries2.default)(options).map(function (item) {
        _this.setOption(item[0], item[1]);
      });
    }
  }]);
  return Field;
}();

exports.default = Field;