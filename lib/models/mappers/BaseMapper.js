"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Field = require("../Field");

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseMapper = function () {
  function BaseMapper(properties) {
    (0, _classCallCheck3.default)(this, BaseMapper);

    this.list = [];
    this.properties = properties;
  }

  (0, _createClass3.default)(BaseMapper, [{
    key: "add",
    value: function add(name, type) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      if (!this.properties[name]) {
        throw 'Property \'' + name + "' does'nt exist";
      }

      var field = new _Field2.default(name, type, options);
      this.list.push(field);

      return this;
    }
  }]);
  return BaseMapper;
}();

exports.default = BaseMapper;