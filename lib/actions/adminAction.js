"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPDATE_POOL_ERROR = exports.OBJECT_UPDATED = exports.POOL_RESET = exports.OBJECT_LOADED = exports.COLLECTION_LOADED = exports.CREATE_POOL = undefined;

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

exports.getPool = getPool;
exports.setCollection = setCollection;
exports.fetchCollection = fetchCollection;
exports.fetchObject = fetchObject;
exports.restReset = restReset;
exports.setObject = setObject;
exports.setObjectWithFormData = setObjectWithFormData;
exports.poolReset = poolReset;
exports.postObject = postObject;
exports.putObject = putObject;
exports.deleteObject = deleteObject;
exports.updatePoolError = updatePoolError;

var _rest = require("../rests/rest.js");

var _rest2 = _interopRequireDefault(_rest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CREATE_POOL = exports.CREATE_POOL = "CREATE_POOL";
var COLLECTION_LOADED = exports.COLLECTION_LOADED = "COLLECTION_LOADED";
var OBJECT_LOADED = exports.OBJECT_LOADED = "OBJECT_LOADED";
var POOL_RESET = exports.POOL_RESET = "POOL_RESET";
var OBJECT_UPDATED = exports.OBJECT_UPDATED = "OBJECT_UPDATED";
var UPDATE_POOL_ERROR = exports.UPDATE_POOL_ERROR = "UPDATE_POOL_ERROR";

function getPool(adminConfig, restData) {
  return {
    type: CREATE_POOL,
    adminConfig: adminConfig,
    restData: restData
  };
}

function setCollection(collection) {
  return {
    type: COLLECTION_LOADED,
    collection: collection
  };
}

function fetchCollection(url, restName) {
  return function (dispatch) {
    dispatch(_rest2.default.actions.restCollection({ url: url, name: restName }));
  };
}

function fetchObject(url, restName, id) {
  return function (dispatch) {
    dispatch(_rest2.default.actions.restGet({ url: url, name: restName, id: id }));
  };
}

function restReset(restName) {
  return function (dispatch) {
    if (!restName) {
      dispatch(_rest2.default.actions.restPost.reset());
      dispatch(_rest2.default.actions.restPut.reset());
      dispatch(_rest2.default.actions.restGet.reset());
    } else {
      dispatch(_rest2.default.actions[restName].reset());
    }
  };
}

function setObject(object) {
  return {
    type: OBJECT_LOADED,
    object: object
  };
}

function setObjectWithFormData(formData) {
  return {
    type: OBJECT_UPDATED,
    formData: formData
  };
}

function poolReset() {
  return {
    type: POOL_RESET
  };
}

function postObject(restUrl, restName, formName, object) {
  return function (dispatch) {
    dispatch(_rest2.default.actions.restPost({ url: restUrl, name: restName }, { body: (0, _stringify2.default)((0, _defineProperty3.default)({}, formName, object)) }));
  };
}

function putObject(restUrl, restName, formName, id, object) {
  return function (dispatch) {
    dispatch(_rest2.default.actions.restPut({ url: restUrl, name: restName, id: id }, { body: (0, _stringify2.default)((0, _defineProperty3.default)({}, formName, object)) }));
  };
}

function deleteObject(restUrl, restName, id) {
  return function (dispatch) {
    dispatch(_rest2.default.actions.restDelete({ url: restUrl, name: restName, id: id }));
  };
}

function updatePoolError(restPut) {
  return {
    type: UPDATE_POOL_ERROR,
    restPut: restPut
  };
}