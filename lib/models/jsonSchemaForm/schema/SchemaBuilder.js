"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _widgetMap = require("./widgetMap");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SchemaBuilder = function () {
  function SchemaBuilder() {
    (0, _classCallCheck3.default)(this, SchemaBuilder);
  }

  (0, _createClass3.default)(SchemaBuilder, [{
    key: "getJsonSchema",
    value: function getJsonSchema(formMapper, properties) {
      this._attachPropertiesToFields(formMapper, properties);
      return { schema: this.getSchema(formMapper), uiSchema: this.getUiSchema(formMapper) };
    }
  }, {
    key: "getSchema",
    value: function getSchema(formMapper, properties) {
      return {
        type: "object",
        required: this._getRequiredFields(formMapper),
        properties: this._getSelectedProperties(formMapper)
      };
    }
  }, {
    key: "getUiSchema",
    value: function getUiSchema(formMapper) {
      var _this = this;

      var uiSchema = {};
      formMapper.list.map(function (field) {
        var widget = _this._getUiWidget(field);
        uiSchema[field.fieldName] = {
          "ui:widget": widget,
          "ui:help": field.options.help
        };
      });

      return uiSchema;
    }

    // filter widget by the module and by the known ones

  }, {
    key: "_getUiWidget",
    value: function _getUiWidget(field) {
      var widget = field.widget;
      var type = field.property.type;

      // keep as it is when is function
      if ((0, _lodash.isFunction)(widget)) {
        return widget;
      }
      var mappedWidget = _widgetMap.widgetMap[type][widget];
      switch (mappedWidget) {
        // in the case no widget are found
        case null:
          return widget;
        // default cases, no widget 
        case "default":
          return null;
        // get the widget from the mapping
        default:
          return mappedWidget;
      }
    }

    // merge fields with properties from config

  }, {
    key: "_attachPropertiesToFields",
    value: function _attachPropertiesToFields(formMapper, properties) {
      formMapper.list.map(function (field) {
        field.property = properties[field.fieldName];
      });
    }

    // get the option required and apply it on the properties

  }, {
    key: "_getRequiredFields",
    value: function _getRequiredFields(formMapper) {
      var requiredFields = [];
      formMapper.list.map(function (field) {
        if (field.getOption("required")) {
          requiredFields.push(field.fieldName);
        }
      });

      return requiredFields;
    }

    // get only properties from selected fields in the mapper

  }, {
    key: "_getSelectedProperties",
    value: function _getSelectedProperties(mapper, properties) {
      var selection = {};

      mapper.list.map(function (field) {
        selection[field.fieldName] = field.property;
      });

      return selection;
    }
  }]);
  return SchemaBuilder;
}();

exports.default = SchemaBuilder;