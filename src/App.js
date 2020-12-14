import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import EmployeeDashboard  from "./app/containers/EmployeeDashboard";
import Login from "./app/components/Login";
import AdminDashboard from "./app/containers/AdminDashboard";

const App = () => {
  return (
    <Router>
      <div  className="App">
        <Route path="/login" component={Login} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/employee" component={EmployeeDashboard} />
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
