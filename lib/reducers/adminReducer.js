"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

exports.pool = pool;

var _adminAction = require("../actions/adminAction");

var _Pool = require("../models/Pool");

var _Pool2 = _interopRequireDefault(_Pool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_DATA = { pool: {} };
function pool() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_DATA : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _adminAction.CREATE_POOL:
      return (0, _assign2.default)({}, state, { pool: new _Pool2.default(action.adminConfig, action.restData) });
    case _adminAction.POOL_RESET:
      return (0, _assign2.default)({}, state, { pool: {} });
    case _adminAction.COLLECTION_LOADED:
      return (0, _assign2.default)({}, state, { pool: (0, _assign2.default)(state.pool, { restData: action.collection }) });
    case _adminAction.OBJECT_LOADED:
      return (0, _assign2.default)({}, state, { pool: (0, _assign2.default)(state.pool, { restData: action.object }) });
    case _adminAction.OBJECT_UPDATED:
      var pool = state.pool;
      var restData = pool.restData;
      restData = (0, _assign2.default)({}, restData, { data: (0, _extends3.default)({}, action.formData) });
      pool.restData = restData;
      return (0, _assign2.default)({}, state, { pool: pool });
    case _adminAction.UPDATE_POOL_ERROR:
      var poolUpdate = state.pool;
      poolUpdate.restError = action.restPut;
      return (0, _assign2.default)({}, state, { pool: poolUpdate });
    default:
      return state;
  }
}