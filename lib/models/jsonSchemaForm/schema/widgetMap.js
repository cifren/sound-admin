"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widgetMap = undefined;

var _AutocompleteWidget = require("../components/widget/AutocompleteWidget");

var _AutocompleteWidget2 = _interopRequireDefault(_AutocompleteWidget);

var _ComboAutocompleteWidget = require("../components/widget/ComboAutocompleteWidget");

var _ComboAutocompleteWidget2 = _interopRequireDefault(_ComboAutocompleteWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var widgetMap = exports.widgetMap = {
  boolean: {
    radio: "radio",
    select: "select",
    hidden: "hidden",
    checkbox: "default"
  },
  string: {
    password: "password",
    radio: "radio",
    select: "select",
    textarea: "textarea",
    hidden: "hidden",
    text: "default",
    autocomplete: _AutocompleteWidget2.default,
    comboautocomplete: _ComboAutocompleteWidget2.default
  },
  number: {
    updown: "upDown",
    range: "range",
    hidden: "hidden",
    text: "default"
  },
  integer: {
    updown: "upDown",
    range: "range",
    hidden: "hidden",
    autocomplete: _AutocompleteWidget2.default,
    comboautocomplete: _ComboAutocompleteWidget2.default,
    text: "default"
  }
};