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

var _List = require("./List");

var _List2 = _interopRequireDefault(_List);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListPage = function (_React$Component) {
  (0, _inherits3.default)(ListPage, _React$Component);

  function ListPage(props) {
    (0, _classCallCheck3.default)(this, ListPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ListPage).call(this, props));

    _this.state = {
      pool: {}
    };
    return _this;
  }

  (0, _createClass3.default)(ListPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.actions.poolReset();
      var adminConfig = this.props.adminConfig;
      this.props.actions.getPool(adminConfig, this.props.collection);
      this.props.actions.fetchCollection(adminConfig.restUrl, adminConfig.restName);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _lodash.isEqual)(this.props.pool, nextProps.pool)) {
        this.setState({ pool: nextProps.pool });
      }

      if (!(0, _lodash.isEqual)(this.props.collection, nextProps.collection)) {
        this.props.actions.setCollection(nextProps.collection);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_List2.default, { pool: this.state.pool })
      );
    }
  }]);
  return ListPage;
}(_react2.default.Component);

exports.default = ListPage;