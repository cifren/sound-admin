"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

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

var _lodash = require("lodash");

var _awesomplete = require("awesomplete");

var _awesomplete2 = _interopRequireDefault(_awesomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseAutocompleteWidget = function (_React$Component) {
  (0, _inherits3.default)(BaseAutocompleteWidget, _React$Component);

  function BaseAutocompleteWidget(props) {
    (0, _classCallCheck3.default)(this, BaseAutocompleteWidget);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BaseAutocompleteWidget).call(this, props));

    _this.uniqId = (0, _lodash.uniqueId)("AcW");
    _this.state = {
      label: _this.props.defaultValue,
      ajaxData: _this.valuesHandler(_this.props.schema.autocomplete.values)
    };
    return _this;
  }

  // adapt the object data to awesomplete data schema


  (0, _createClass3.default)(BaseAutocompleteWidget, [{
    key: "valuesHandler",
    value: function valuesHandler(values) {
      if ((0, _lodash.isObject)(values) && !(0, _lodash.isArray)(values)) {
        var newValues = [];
        (0, _keys2.default)(values).map(function (key) {
          newValues.push({ "label": values[key], "value": parseInt(key) });
        });
        values = newValues;
      }
      return values;
    }

    // handle the ajax response, transform the array for awesomplete

  }, {
    key: "ajaxHandler",
    value: function ajaxHandler(values, valueFieldname, labelFieldname) {
      if ((0, _lodash.isArray)(values)) {
        var newValues;

        (function () {
          newValues = [];

          var value = valueFieldname;
          var label = labelFieldname;
          values.map(function (item) {
            newValues.push({ "label": item[label], "value": item[value] });
          });
          values = newValues;
        })();
      }
      return values;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _lodash.isUndefined)(nextProps.value) && this.props.value != nextProps.value) {
        // select the label for render
        this.setState({ label: this.getLabelFromValue(nextProps.value) });
        // update the parent form data
        this.props.onChange(nextProps.value);
      }
    }

    // from the ajaxData, get the label with the value

  }, {
    key: "getLabelFromValue",
    value: function getLabelFromValue(value) {
      if (!this.state.ajaxData) {
        return null;
      }
      var item = this.state.ajaxData.filter(function (item) {
        return item.value == value;
      }).shift();
      // if nothing is found, return null
      return item ? item.label : null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // send value to the parent form and adapt depending on data type
      this.props.onChange(this.onChangeHandler(this.props.value));
      if (this.props.schema.autocomplete.values) {
        //init the autocomplete
        this.initAwesomplete();
      } else {
        //the data and init autocomplete via CallBack
        this.initDataFetch(function (data) {
          _this2.setState({ ajaxData: _this2.getOption("remote_ajaxHandler")(data, _this2.getOption("remote_value"), _this2.getOption("remote_label")) });
          //init the autocomplete
          _this2.initAwesomplete();
          _this2.setState({ label: _this2.getLabelFromValue(_this2.props.value) });
        });
      }
    }

    // anytime the awesomplete replace, the state and parent form data change

  }, {
    key: "onReplace",
    value: function onReplace(input) {
      var _this3 = this;

      return function (item) {
        _this3.props.onChange(_this3.onChangeHandler(item.value));
        _this3.setState({ label: item.label });
      }.bind(this);
    }

    // Adapt the data depending on the schema type

  }, {
    key: "onChangeHandler",
    value: function onChangeHandler(value) {
      // needs to adapt data for form validation
      if ((0, _lodash.isUndefined)(value) || (0, _lodash.isNull)(value) || isNaN(value)) {
        switch (this.props.schema.type) {
          case "integer":
            return value = 0;
          default:
            return value;
        }
      }
      return value;
    }

    // Init awesomplete

  }, {
    key: "initAwesomplete",
    value: function initAwesomplete() {
      var input = document.getElementById("autocomplete" + this.uniqId);
      new _awesomplete2.default(input, {
        minChars: this.getOption("minChar"),
        list: this.state.ajaxData,
        replace: this.onReplace(input),
        autoFirst: this.getOption("auto_first") ? true : false,
        filter: this.filter()
      });
    }

    // anytime the input change, the data popup is updated here
    // return a function

  }, {
    key: "filter",
    value: function filter() {
      return _awesomplete2.default.FILTER_CONTAINS;
    }

    // get option with name

  }, {
    key: "getOption",
    value: function getOption(optionName) {
      return this.options[optionName];
    }

    // get all options

  }, {
    key: "getDefaultOptions",


    // get default options based on props
    value: function getDefaultOptions() {
      var acOptions = this.props.schema.autocomplete;
      var props = this.props;
      return {
        // when popup open, first item is selected
        "auto_first": acOptions["auto_first"] ? acOptions["only_values"] : false,
        // values to display in th popup
        "values": acOptions["values"] ? acOptions["values"] : null,
        // if true, data is needed to validate the form
        "required": props["required"] ? acOptions["required"] : false,
        // minimum character before popup open
        "minChar": acOptions["minChar"] ? acOptions["minChar"] : 2,
        // url : remote url where to access data
        "remote_url": acOptions["remote_url"] ? acOptions["remote_url"] : null,
        // value: from the fetched data, the value will be send to the server
        "remote_value": acOptions["remote_value"] ? acOptions["remote_value"] : null,
        // label: from the fetched data, the data you want to display in popup
        "remote_label": acOptions["remote_label"] ? acOptions["remote_label"] : null,
        // ajaxHandler: on reception of the remote, convert the Json into
        // [{"label": label, "value": value}, {...}] acceptable by awesomplete
        "remote_ajaxHandler": acOptions["remote_ajaxHandler"] ? acOptions["remote_ajaxHandler"] : this.ajaxHandler
      };
    }

    // fetch the data and callback a function on success

  }, {
    key: "initDataFetch",
    value: function initDataFetch(cb) {
      fetch(this.getOption("remote_url"))
      // parse
      .then(function (res) {
        return res.json();
      })
      // cb
      .then(cb)
      // throw if issue
      .catch(function (ex) {
        console.log("parsing failed", ex);
      });
    }

    // on input change function

  }, {
    key: "onChange",
    value: function onChange(event) {
      this.setState({
        label: event.target.value
      });
    }
  }, {
    key: "options",
    get: function get() {
      if (!this._options) {
        this._options = this.getDefaultOptions();
      }
      return this._options;
    }
  }]);
  return BaseAutocompleteWidget;
}(_react2.default.Component);

exports.default = BaseAutocompleteWidget;