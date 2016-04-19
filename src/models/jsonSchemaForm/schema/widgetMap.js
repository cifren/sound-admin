import AutocompleteWidget from "../components/widget/AutocompleteWidget";
import ComboAutocompleteWidget from "../components/widget/ComboAutocompleteWidget";

export const widgetMap = {
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
    autocomplete: AutocompleteWidget,
    comboautocomplete: ComboAutocompleteWidget
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
    autocomplete: AutocompleteWidget,
    comboautocomplete: ComboAutocompleteWidget,
    text: "default"
  }
};