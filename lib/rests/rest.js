"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OPTIONS = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

require("isomorphic-fetch");

var _reduxApi = require("redux-api");

var _reduxApi2 = _interopRequireDefault(_reduxApi);

var _fetch = require("redux-api/lib/adapters/fetch");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OPTIONS = exports.OPTIONS = {
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
};
exports.default = (0, _reduxApi2.default)({
  restCollection: {
    url: ":url/:name.json",
    transformer: _reduxApi.transformers.array,
    options: OPTIONS
  },
  restGet: {
    url: ":url/:name/:id.json",
    transformer: _reduxApi.transformers.object,
    options: OPTIONS
  },
  restPut: {
    url: ":url/:name/:id.json",
    transformer: _reduxApi.transformers.object,
    options: (0, _extends3.default)({}, OPTIONS, { method: "put" })
  },
  restDelete: {
    url: ":url/:name/:id.json",
    transformer: _reduxApi.transformers.object,
    options: (0, _extends3.default)({}, OPTIONS, { method: "delete" })
  },
  restPost: {
    url: ":url/:name.json",
    transformer: _reduxApi.transformers.object,
    options: (0, _extends3.default)({}, OPTIONS, { method: "post" })
  }
}).use("fetch", (0, _fetch2.default)(fetch)); // it's necessary to point using REST backend