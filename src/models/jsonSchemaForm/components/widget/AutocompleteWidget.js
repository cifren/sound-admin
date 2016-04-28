import React from "react";
import BaseAutocompleteWidget from "./BaseAutocompleteWidget";

export default class AutocompleteWidget extends BaseAutocompleteWidget {
  render(){
    return (
      <input 
        value={this.state.label}
        class='form-control dropdown-input'
        id={"autocomplete" + this.uniqId} 
        onChange={this.onChange.bind(this)}
        />
    );
  }
}