'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pool = function () {
  function Pool(adminConfig, restData) {
    (0, _classCallCheck3.default)(this, Pool);

    this._adminConfig = adminConfig;
    this._restData = restData;
  }

  (0, _createClass3.default)(Pool, [{
    key: 'getFields',
    value: function getFields() {
      var type = arguments.length <= 0 || arguments[0] === undefined ? 'list' : arguments[0];

      var mapperType = '';
      switch (type) {
        case 'list':
          mapperType = 'listMapper';
          break;

        default:
          throw 'Type "' + type + '" not found';
      }

      return this._adminConfig[mapperType].list;
    }
  }, {
    key: 'getRequiredFields',
    value: function getRequiredFields() {
      var requiredFields = [];
      this._adminConfig.formMapper.list.map(function (field) {
        if (field.getOption('required')) {
          requiredFields.push(field.fieldName);
        }
      });

      return requiredFields;
    }
  }, {
    key: 'getSelectedProperties',
    value: function getSelectedProperties(mapper) {
      var _this = this;

      var selection = {};

      mapper.list.map(function (field) {
        selection[field.fieldName] = _this._adminConfig.constructor.properties[field.fieldName];
      });

      return selection;
    }
  }, {
    key: 'title',
    get: function get() {
      return this._adminConfig.title;
    }
  }, {
    key: 'restData',
    get: function get() {
      return this._restData;
    },
    set: function set(restData) {
      this._loading = restData.loading;
      //on loading true, data must stay with current state
      var data = restData.loading ? this._restData.data : restData.data;

      this._restData = (0, _extends3.default)({}, restData, { data: data });
    }
  }, {
    key: 'loading',
    get: function get() {
      return this._loading;
    }
  }, {
    key: 'restError',
    get: function get() {
      return this._restError;
    },
    set: function set(restResponse) {
      this._loading = restResponse.loading;
      this._restError = restResponse.data;
    }
  }, {
    key: 'urlPrefix',
    get: function get() {
      return this._adminConfig.urlPrefix ? this._adminConfig.urlPrefix : this._adminConfig.adminName;
    }
  }, {
    key: 'schema',
    get: function get() {
      return {
        type: 'object',
        required: this.getRequiredFields(),
        properties: this.getSelectedProperties(this._adminConfig.formMapper)
      };
    }
  }, {
    key: 'uiSchema',
    get: function get() {
      return {};
    }
  }, {
    key: 'restName',
    get: function get() {
      return this._adminConfig.restName;
    }
  }, {
    key: 'restUrl',
    get: function get() {
      return this._adminConfig.restUrl;
    }
  }, {
    key: 'formName',
    get: function get() {
      return this._adminConfig.formName;
    }
  }]);
  return Pool;
}();

exports.default = Pool;