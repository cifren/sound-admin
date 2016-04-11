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

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Form = require("./Form");

var _Form2 = _interopRequireDefault(_Form);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditPage = function (_React$Component) {
  (0, _inherits3.default)(EditPage, _React$Component);

  function EditPage(props) {
    (0, _classCallCheck3.default)(this, EditPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(EditPage).call(this, props));

    _this.state = {
      pool: {}
    };
    return _this;
  }

  (0, _createClass3.default)(EditPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.actions.poolReset();
      var adminConfig = this.props.adminConfig;
      this.props.actions.getPool(adminConfig, this.props.adminObject);
      this.props.actions.fetchObject(adminConfig.restUrl, adminConfig.restName, this.props.params.id);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _lodash.isEqual)(this.props.pool, nextProps.pool)) {
        this.setState({ pool: nextProps.pool });
      }

      if (!(0, _lodash.isEqual)(this.props.adminObject, nextProps.adminObject)) {
        this.props.actions.setObject(nextProps.adminObject);
      }
      if (!(0, _lodash.isEqual)(this.props.restPut, nextProps.restPut)) {
        this.props.actions.updatePoolError(nextProps.restPut);
      }
      if (!(0, _lodash.isEqual)(this.props.restDelete, nextProps.restDelete)) {
        if (!nextProps.restDelete.data.error && !nextProps.restDelete.loading) {
          this.props.actions.push("/" + this.props.pool.urlPrefix + "/list");
        } else {
          var restDelete = nextProps.restDelete;
          restDelete = (0, _extends3.default)({}, restDelete, { data: restDelete.data.error });
          this.props.actions.updatePoolError(restDelete);
        }
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(data) {
      this.props.actions.setObjectWithFormData(data.formData);
      this.props.actions.restReset('restPut');
      this.props.actions.putObject(this.props.pool.restUrl, this.props.pool.restName, this.props.pool.formName, this.props.params.id, data.formData);
    }
  }, {
    key: "onDelete",
    value: function onDelete() {
      this.props.actions.restReset('restDelete');
      this.props.actions.deleteObject(this.props.pool.restUrl, this.props.pool.restName, this.props.params.id);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.actions.restReset();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Form2.default, {
          actions: this.props.actions,
          pool: this.state.pool,
          onSubmit: this.onSubmit.bind(this),
          onDelete: this.onDelete.bind(this)
        })
      );
    }
  }]);
  return EditPage;
}(_react2.default.Component);

exports.default = EditPage;