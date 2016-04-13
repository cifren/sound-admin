import React from "react";

export default class AutocompleteWidget extends React.Component {
  render(){
    const props = this.props;
    return (
      <input type="text"
          className="custom"
          value={props.value}
          required={props.required}
          onChange={(event) => props.onChange(event.target.value)} />  
    );
  }
}