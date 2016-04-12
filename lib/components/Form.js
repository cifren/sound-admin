"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionList = undefined;

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

var _reactJsonschemaForm = require("react-jsonschema-form");

var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function (_React$Component) {
  (0, _inherits3.default)(Form, _React$Component);

  function Form() {
    (0, _classCallCheck3.default)(this, Form);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Form).apply(this, arguments));
  }

  (0, _createClass3.default)(Form, [{
    key: "onSubmit",
    value: function onSubmit(data) {
      this.props.onSubmit(data);
    }
  }, {
    key: "onDelete",
    value: function onDelete() {
      if (this.props.onDelete) {
        this.props.onDelete();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var pool = this.props.pool;

      if (!pool.restData) {
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
              "Data Edit ",
              _react2.default.createElement(_Loading2.default, { active: pool.loading })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-lg-12" },
            _react2.default.createElement(ActionList, { pool: pool, onDelete: this.onDelete.bind(this) })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-lg-12" },
            _react2.default.createElement(Errors, { error: pool.restError })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-lg-12" },
            _react2.default.createElement(_reactJsonschemaForm2.default, {
              formData: !(0, _lodash.isEmpty)(pool.restData.data) ? pool.restData.data : null,
              schema: pool.schema,
              uiSchema: pool.uiSchema,
              onSubmit: this.onSubmit.bind(this) })
          )
        )
      );
    }
  }]);
  return Form;
}(_react2.default.Component);

exports.default = Form;

var ActionList = exports.ActionList = function (_React$Component2) {
  (0, _inherits3.default)(ActionList, _React$Component2);

  function ActionList() {
    (0, _classCallCheck3.default)(this, ActionList);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ActionList).apply(this, arguments));
  }

  (0, _createClass3.default)(ActionList, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var pool = this.props.pool;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: "/" + pool.urlPrefix + "/list", className: "btn btn-default" },
          "« Back"
        ),
        function () {
          if (pool.restData.data.id) {
            return _react2.default.createElement(
              "a",
              { className: "btn btn-danger", onClick: _this3.props.onDelete },
              _react2.default.createElement(
                "i",
                { className: "fa fa-times" },
                " Delete"
              )
            );
          }
        }()
      );
    }
  }]);
  return ActionList;
}(_react2.default.Component);

var Errors = function (_React$Component3) {
  (0, _inherits3.default)(Errors, _React$Component3);

  function Errors() {
    (0, _classCallCheck3.default)(this, Errors);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Errors).apply(this, arguments));
  }

  (0, _createClass3.default)(Errors, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      if ((0, _lodash.isEmpty)(this.props.error)) {
        return false;
      }
      var formError = this.props.error.errors;

      return _react2.default.createElement(
        "div",
        { className: "alert alert-danger" },
        _react2.default.createElement(
          "span",
          null,
          "code: ",
          this.props.error.code
        ),
        _react2.default.createElement(
          "ul",
          null,
          function () {
            if (formError) {
              return _react2.default.createElement(ErrorDetails, { formError: formError });
            } else {
              return _react2.default.createElement(
                "span",
                null,
                _this5.props.error.message
              );
            }
          }()
        )
      );
    }
  }]);
  return Errors;
}(_react2.default.Component);

var ErrorDetails = function (_React$Component4) {
  (0, _inherits3.default)(ErrorDetails, _React$Component4);

  function ErrorDetails() {
    (0, _classCallCheck3.default)(this, ErrorDetails);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ErrorDetails).apply(this, arguments));
  }

  (0, _createClass3.default)(ErrorDetails, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "ul",
        null,
        this.props.formError.errors.map(function (item, key) {
          return _react2.default.createElement(
            "li",
            { key: key },
            item
          );
        })
      );
    }
  }]);
  return ErrorDetails;
}(_react2.default.Component);