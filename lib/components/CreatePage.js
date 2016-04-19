"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreatePage = function (_React$Component) {
  (0, _inherits3.default)(CreatePage, _React$Component);

  function CreatePage(props) {
    (0, _classCallCheck3.default)(this, CreatePage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CreatePage).call(this, props));

    _this.state = {
      pool: {}
    };
    return _this;
  }

  (0, _createClass3.default)(CreatePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var adminConfig = this.props.adminConfig;
      this.props.actions.getPool(adminConfig, this.props.restPost);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _lodash.isEqual)(this.props.pool, nextProps.pool)) {
        this.setState({ pool: nextProps.pool });
      }

      if (!(0, _lodash.isEqual)(this.props.restPost, nextProps.restPost)) {
        if (nextProps.restPost.data.id) {
          this.props.actions.push((0, _reactRouter.formatPattern)("/" + this.props.pool.urlPrefix + "/edit/:id", { id: nextProps.restPost.data.id }));
        }
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(data) {
      this.props.actions.setObjectWithFormData(data.formData);
      this.props.actions.postObject(this.props.pool.restUrl, this.props.pool.restName, this.props.pool.formName, this.props.pool.formRequestTransformer(data.formData, "create"));
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
        _react2.default.createElement(_Form2.default, { actions: this.props.actions, pool: this.state.pool, onSubmit: this.onSubmit.bind(this) })
      );
    }
  }]);
  return CreatePage;
}(_react2.default.Component);

exports.default = CreatePage;