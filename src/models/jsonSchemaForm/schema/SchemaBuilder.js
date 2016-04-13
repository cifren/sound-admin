import {widgetMap} from "./widgetMap";
import {isFunction} from "lodash";

export default class SchemaBuilder {
  
  getJsonSchema(formMapper, properties){
    this._attachPropertiesToFields(formMapper, properties);
    return {schema: this.getSchema(formMapper), uiSchema: this.getUiSchema(formMapper)};
  }
  
  getSchema(formMapper, properties){
    return {
      type: 'object',
      required: this._getRequiredFields(formMapper),
      properties : this._getSelectedProperties(formMapper)
    }
  }
  
  getUiSchema(formMapper){
    var uiSchema = {};
    formMapper.list.map((field) => {
      const widget = this._getUiWidget(field);
      uiSchema[field.fieldName] = {
        "ui:widget": widget,
        "ui:help": field.options.help
      };
    });
    
    return uiSchema;
  }
  
  // filter widget by the module and by the known ones
  _getUiWidget(field){
    const widget = field.widget;
    const type = field.property.type;
    
    // keep as it is when is function
    if(isFunction(widget)){
      return widget;
    } 
    const mappedWidget = widgetMap[type][widget];
    switch (mappedWidget) {
      // in the case no widget are found
      case null:
        return widget;
      // default cases, no widget  
      case 'default':
        return null;
      // get the widget from the mapping
      default:
        return mappedWidget;
    }
  }
  
  // merge fields with properties from config
  _attachPropertiesToFields(formMapper, properties){
    formMapper.list.map((field) => {
      field.property = properties[field.fieldName]
    });
  }
  
  // get the option required and apply it on the properties
  _getRequiredFields(formMapper){
    var requiredFields = [];
    formMapper.list.map((field) => {
      if(field.getOption('required')){
        requiredFields.push(field.fieldName);
      }
    });
    
    return requiredFields;
  }
  
  // get only properties from selected fields in the mapper
  _getSelectedProperties(mapper, properties){
    var selection = {};
    
    mapper.list.map((field) => { 
      selection[field.fieldName] = field.property;
    });
    
    return selection;
  }
}