'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _FormMapper = require('./mappers/FormMapper');

var _FormMapper2 = _interopRequireDefault(_FormMapper);

var _ListMapper = require('./mappers/ListMapper');

var _ListMapper2 = _interopRequireDefault(_ListMapper);

var _ShowMapper = require('./mappers/ShowMapper');

var _ShowMapper2 = _interopRequireDefault(_ShowMapper);

var _RouteCollection = require('./routes/RouteCollection');

var _RouteCollection2 = _interopRequireDefault(_RouteCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminConfig = function () {
  function AdminConfig() {
    (0, _classCallCheck3.default)(this, AdminConfig);
  }

  (0, _createClass3.default)(AdminConfig, [{
    key: 'init',
    value: function init() {
      this.checkName();
      var properties = this.constructor.properties;
      this.formMapper = new _FormMapper2.default(properties);
      this.listMapper = new _ListMapper2.default(properties);
      this.showMapper = new _ShowMapper2.default(properties);
      this.routeCollection = new _RouteCollection2.default();

      this.configureFormFields(this.formMapper);
      this.configureListFields(this.listMapper);
      this.configureShowFields(this.showMapper);
      this.configureRoutes(this.routeCollection);

      return this;
    }
  }, {
    key: 'configureFormFields',


    // form page, include create page and edit page
    value: function configureFormFields(formMapper) {}

    // filter on the list page

  }, {
    key: 'configureDatagridFilters',
    value: function configureDatagridFilters(datagridMapper) {}

    // list page

  }, {
    key: 'configureListFields',
    value: function configureListFields(listMapper) {}

    // show page

  }, {
    key: 'configureShowFields',
    value: function configureShowFields(showMapper) {}
  }, {
    key: 'configureRoutes',
    value: function configureRoutes(routeCollection) {}
  }, {
    key: 'checkName',
    value: function checkName() {
      if (!this._adminName) {
        throw 'The value \'adminName\' is missing';
      }
    }
  }, {
    key: 'title',
    set: function set(title) {
      this._title = title;
    },
    get: function get() {
      if (this._title) {
        return this._title;
      } else {
        return this.adminName;
      }
    }
  }, {
    key: 'adminName',
    set: function set(adminName) {
      this._adminName = adminName;
    },
    get: function get() {
      return this._adminName;
    }
  }, {
    key: 'restName',
    set: function set(restName) {
      this._restName = restName;
    },
    get: function get() {
      if (this._restName) {
        return this._restName;
      }

      return this.adminName;
    }
  }, {
    key: 'formName',
    set: function set(formName) {
      this._formName = formName;
    },
    get: function get() {
      return this._formName ? this._formName : this.restName;
    }
  }]);
  return AdminConfig;
}();

exports.default = AdminConfig;