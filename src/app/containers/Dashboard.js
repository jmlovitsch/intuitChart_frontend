import React, { Component } from "react";
import { connect } from "react-redux";
import  EmployeeDashboard  from "./EmployeeDashboard";
import { currentUser } from "../actions/users";
import PatientDashboard from "./PatientDashboard";
import { withRouter, Route, Redirect } from "react-router-dom";

export const Dashboard = ({ id, patient }) => {
  return (
    <div className="App">

    <Redirect to={`/dashboard/${id}`} />
        <Route path={`/dashboard/${id}`} component={patient ? PatientDashboard : EmployeeDashboard} />


    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: 3,
    patient: false
  };
};

export default connect(mapStateToProps, { currentUser })(withRouter(Dashboard));
