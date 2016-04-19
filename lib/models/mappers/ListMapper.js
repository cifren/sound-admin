"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _BaseMapper2 = require("./BaseMapper");

var _BaseMapper3 = _interopRequireDefault(_BaseMapper2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListMapper = function (_BaseMapper) {
  (0, _inherits3.default)(ListMapper, _BaseMapper);

  function ListMapper(properties) {
    (0, _classCallCheck3.default)(this, ListMapper);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ListMapper).call(this, properties));
  }

  (0, _createClass3.default)(ListMapper, [{
    key: "addIdentifier",
    value: function addIdentifier(name, options) {
      options = (0, _extends3.default)({}, options, { identifier: true });
      (0, _get3.default)((0, _getPrototypeOf2.default)(ListMapper.prototype), "add", this).call(this, name, null, options);
      return this;
    }
  }, {
    key: "add",
    value: function add(name, options) {
      (0, _get3.default)((0, _getPrototypeOf2.default)(ListMapper.prototype), "add", this).call(this, name, null, options);
      return this;
    }
  }]);
  return ListMapper;
}(_BaseMapper3.default);

exports.default = ListMapper;