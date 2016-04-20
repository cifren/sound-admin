"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = exports.ShowPage = exports.ListPage = exports.CreatePage = exports.EditPage = undefined;

var _EditPage2 = require("./EditPage");

var _EditPage3 = _interopRequireDefault(_EditPage2);

var _CreatePage2 = require("./CreatePage");

var _CreatePage3 = _interopRequireDefault(_CreatePage2);

var _ListPage2 = require("./ListPage");

var _ListPage3 = _interopRequireDefault(_ListPage2);

var _ShowPage2 = require("./ShowPage");

var _ShowPage3 = _interopRequireDefault(_ShowPage2);

var _Loading2 = require("./Loading");

var _Loading3 = _interopRequireDefault(_Loading2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EditPage = _EditPage3.default;
exports.CreatePage = _CreatePage3.default;
exports.ListPage = _ListPage3.default;
exports.ShowPage = _ShowPage3.default;
exports.Loading = _Loading3.default;


var components = {
  "EditPage": _EditPage3.default,
  "CreatePage": _CreatePage3.default,
  "ListPage": _ListPage3.default,
  "ShowPage": _ShowPage3.default,
  "Loading": _Loading3.default
};

exports.default = components;