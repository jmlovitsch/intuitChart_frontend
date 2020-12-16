import Employee from "./Employee";
import Patient from "./Patient";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchWithToken } from "../actions/auth";

class Dashboard extends Component {

    // componentDidMount(){
    //     return ((localStorage.my_app_token !== "undefined") ?
    //     this.props.fetchWithToken(localStorage.my_app_token)

    //     : this.props.history.push('/login'))
    //  }

    //  componentDidUpdate(){
    //     return localStorage.my_app_token ?
    //     this.props.fetchWithToken(localStorage.my_app_token)

    //     : this.props.history.push('/login')
    //  }


  render() {
    return (
      <div className="App">
        {this.props.patient ? <Patient /> : <Employee />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    patient: state.user.patient
  };
};

export default connect(mapStateToProps, {fetchWithToken})(withRouter(Dashboard));
