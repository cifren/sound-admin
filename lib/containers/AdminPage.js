"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

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

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _Router = require("../components/Router");

var _Router2 = _interopRequireDefault(_Router);

var _adminAction = require("../actions/adminAction");

var AdminActions = _interopRequireWildcard(_adminAction);

var _reactRouterRedux = require("react-router-redux");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminPage = function (_React$Component) {
  (0, _inherits3.default)(AdminPage, _React$Component);

  function AdminPage() {
    (0, _classCallCheck3.default)(this, AdminPage);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AdminPage).apply(this, arguments));
  }

  (0, _createClass3.default)(AdminPage, [{
    key: "defaultMapStateToProps",
    value: function defaultMapStateToProps(state, adminConfigReducer) {
      return function (state) {
        return {
          adminConfig: state[adminConfigReducer].adminConfig.init(),
          pool: state.poolReducer.pool,
          adminObject: state.restGet,
          collection: state.restCollection,
          restPost: state.restPost,
          restPut: state.restPut,
          restDelete: state.restDelete
        };
      };
    }
  }, {
    key: "defaultMapDispatchToProps",
    value: function defaultMapDispatchToProps() {
      return function (dispatch) {
        return {
          actions: (0, _redux.bindActionCreators)((0, _assign2.default)({}, AdminActions, _reactRouterRedux.routerActions), dispatch)
        };
      };
    }
  }, {
    key: "connect",
    value: function connect() {
      return (0, _reactRedux.connect)(this.mapStateToProps, this.mapDispatchToProps)(_Router2.default);
    }
  }, {
    key: "mapDispatchToProps",
    get: function get() {
      return this._mapDispatchToProps ? this._mapDispatchToProps : this.defaultMapDispatchToProps();
    },
    set: function set(mapDispatchToProps) {
      this._mapDispatchToProps = mapDispatchToProps;
    }
  }]);
  return AdminPage;
}(_react2.default.Component);

exports.default = AdminPage;