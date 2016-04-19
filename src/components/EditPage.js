import React from "react";
import Form from "./Form";
import {isEqual, isFunction} from "lodash";

export default class EditPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pool: {}
    };
  }
  
  componentDidMount() {
    this.props.actions.poolReset();
    const adminConfig = this.props.adminConfig;
    this.props.actions.getPool(adminConfig, this.props.adminObject);
    this.props.actions.fetchObject(adminConfig.restUrl, adminConfig.restName, this.props.params.id);
  }
  
  componentWillReceiveProps(nextProps){
    // update the state pool
    if(!isEqual(this.props.pool, nextProps.pool)){
      this.setState({pool: nextProps.pool});
    }
    
    // receive new PUT response
    if(!isEqual(this.props.restPut, nextProps.restPut)){
      this.props.actions.updatePoolError(nextProps.restPut);
    }
    
    // receive new DELETE response
    if(!isEqual(this.props.restDelete, nextProps.restDelete)){
      // in case no error, push to the list
      if(!nextProps.restDelete.data.error && !nextProps.restDelete.loading){
        this.props.actions.push(`/${this.props.pool.urlPrefix}/list`);
      } else { // on error, feed the pool
        var restDelete = nextProps.restDelete;
        restDelete = {...restDelete, data: restDelete.data.error};
        this.props.actions.updatePoolError(restDelete);
      }
    }
    // check if change and if no error
    if(!isEqual(this.props.adminObject, nextProps.adminObject)){
      // check on error
      if(!nextProps.adminObject.data.errors){
        // check if pool is init
        var adminObject = isFunction(this.props.pool.receiveRequestTransformer)?
          this.props.pool.receiveRequestTransformer(nextProps.adminObject, "edit"):
          nextProps.adminObject;
        this.props.actions.setObject(adminObject);
      } else {
        this.props.actions.updatePoolError(nextProps.adminObject);
      }
    }
  }
  
  onSubmit(data) {
    this.props.actions.setObjectWithFormData(data.formData);
    this.props.actions.restReset("restPut");
    this.props.actions.putObject(
      this.props.pool.restUrl,
      this.props.pool.restName,
      this.props.pool.formName,
      this.props.params.id,
      this.props.pool.formRequestTransformer(data.formData, "edit")
      );
  }
  
  onDelete() {
    this.props.actions.restReset("restDelete");
    this.props.actions.deleteObject(
      this.props.pool.restUrl,
      this.props.pool.restName,
      this.props.params.id
      );
  }
  
  componentWillUnmount (){
    this.props.actions.restReset();
  }
  
  render() {
    return (
      <div>
        <Form 
          actions={this.props.actions} 
          pool={this.state.pool}
          onSubmit={this.onSubmit.bind(this)} 
          onDelete={this.onDelete.bind(this)}
          ></Form>
      </div>
    );
  }

}