import Employee from "./Employee";
import Patient from "./Patient";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { fetchWithToken } from "../actions/auth";
import Admin from "./Admin";
import HospitalAdmin from "./HospitalAdmin";
import Login from "../components/Login";
import { fetchAllAdmissions } from "../actions/admission";

class Dashboard extends Component {

  Switching = () => {
    switch (this.props.authorization) {
      case "admin":
        return <Admin />;
      case "hospital":
        return <HospitalAdmin />;
      case "employee":
        return <Employee />;
      case "patient":
        return <Patient />;
      default:
        return <Login />;
    }
  };

  render() {

    return <>
    {this.Switching()}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    authorization: state.user.authorization,
  };
};

export default connect(mapStateToProps, {fetchAllAdmissions})(
  withRouter(Dashboard)
);
