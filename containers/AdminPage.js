import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CreatePage from "../modules/Admin/components/CreatePage";
import * as AdminActions from "../modules/Admin/actions/adminAction";
import { routerActions } from "react-router-redux";

export default class AdminPage extends React.Component  {
    mapStateToProps(state, adminConfigReducer){
      return ((state) => {
          return {
            adminConfig: state[adminConfigReducer].adminConfig.init(),
            pool: state.poolReducer.pool,
            adminObject: state.restPost
          }
        });
    }
    
    mapDispatchToProps(){
      return (dispatch) => {
        return {
          actions: bindActionCreators(Object.assign({}, AdminActions, routerActions), dispatch)
        }
      };
    }
    
    connect(){
      return connect(this.mapStateToProps, this.mapDispatchToProps)(this.pageSelection());
    }
    
    pageSelection(){
      console.log('state', this.state)
      return CreatePage;
    }
}