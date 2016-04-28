import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Router from "../components/Router";
import * as AdminActions from "../actions/adminAction";
import { routerActions } from "react-router-redux";

export default class AdminPage {
  
  constructor(){
    this.mapDispatchToProps = (dispatch) => {return this.defaultMapDispatchToProps(dispatch)};
  }
  
  defaultMapStateToProps(state, adminConfigReducer){
    return {
      adminConfig: state[adminConfigReducer].adminConfig.init(),
      pool: state.poolReducer.pool,
      adminObject: state.restGet,
      collection: state.restCollection,
      restPost: state.restPost,
      restPut: state.restPut,
      restDelete: state.restDelete
    };
  }
    
  defaultMapDispatchToProps(dispatch){
    return {
      actions: bindActionCreators(Object.assign({}, AdminActions, routerActions), dispatch)
    };
  }
  
  connect(){
    return connect(this.mapStateToProps, this.mapDispatchToProps)(Router);
  }
}