"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

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

var _Loading = require("../components/Loading");

var _Loading2 = _interopRequireDefault(_Loading);

var _reactRouter = require("react-router");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_React$Component) {
  (0, _inherits3.default)(List, _React$Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(List).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: "render",
    value: function render() {
      var pool = this.props.pool;

      if ((0, _getOwnPropertyNames2.default)(pool).length === 0 || pool.restData == undefined || pool.restData && (0, _getOwnPropertyNames2.default)(pool.restData).length === 0) {
        return false;
      }

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-lg-12" },
            _react2.default.createElement(
              "h1",
              { className: "page-header" },
              pool.title,
              "  ",
              _react2.default.createElement(_Loading2.default, { active: pool.restData.loading })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-lg-12" },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "/" + pool.urlPrefix + "/create", className: "btn btn-success" },
              _react2.default.createElement("i", { className: "fa fa-plus-square" }),
              " Create"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row " },
          _react2.default.createElement(
            "div",
            { className: "col-lg-6" },
            _react2.default.createElement(Table, { pool: pool })
          )
        )
      );
    }
  }]);
  return List;
}(_react2.default.Component);

exports.default = List;

var Table = function (_React$Component2) {
  (0, _inherits3.default)(Table, _React$Component2);

  function Table() {
    (0, _classCallCheck3.default)(this, Table);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Table).apply(this, arguments));
  }

  (0, _createClass3.default)(Table, [{
    key: "render",
    value: function render() {
      var pool = this.props.pool;

      if ((0, _keys2.default)(pool).length === 0) {
        return false;
      }

      return _react2.default.createElement(
        "table",
        { className: "table table-striped" },
        _react2.default.createElement(
          "thead",
          null,
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement("th", null),
            pool.getFields('list').map(function (field, key) {
              return _react2.default.createElement(
                "th",
                { key: key },
                field.getOption('label')
              );
            }.bind(this))
          )
        ),
        _react2.default.createElement(Row, { pool: pool })
      );
    }
  }]);
  return Table;
}(_react2.default.Component);

var Row = function (_React$Component3) {
  (0, _inherits3.default)(Row, _React$Component3);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Row).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      var pool = this.props.pool;

      if (!pool.restData) {
        return false;
      } else if (!(0, _lodash.isArray)(pool.restData.data)) {
        return false;
      }

      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var pool = this.props.pool;

      return _react2.default.createElement(
        "tbody",
        null,
        !(0, _lodash.isArray)(pool.restData.data) ? '' : pool.restData.data.map(function (item, key) {
          return _react2.default.createElement(
            "tr",
            { key: key },
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement("i", { className: "fa fa-th-large" })
            ),
            pool.getFields('list').map(function (column) {
              return _react2.default.createElement(Cell, { key: key + column.fieldName, pool: pool, item: item, column: column });
            }.bind(this))
          );
        }.bind(this))
      );
    }
  }]);
  return Row;
}(_react2.default.Component);

var Cell = function (_React$Component4) {
  (0, _inherits3.default)(Cell, _React$Component4);

  function Cell() {
    (0, _classCallCheck3.default)(this, Cell);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Cell).apply(this, arguments));
  }

  (0, _createClass3.default)(Cell, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      var column = this.props.column;
      var identifier = this.props.column.options.identifier;
      var pool = this.props.pool;
      var label = item[column.fieldName];

      return _react2.default.createElement(
        "td",
        null,
        function () {
          if (identifier) {
            return _react2.default.createElement(
              _reactRouter.Link,
              { to: "/" + pool.urlPrefix + "/edit/" + label },
              label
            );
          } else {
            return _react2.default.createElement(
              "div",
              null,
              label
            );
          }
        }()
      );
    }
  }]);
  return Cell;
}(_react2.default.Component);