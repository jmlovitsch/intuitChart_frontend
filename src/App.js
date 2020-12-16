import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./app/components/Login";
import { Dashboard } from "./app/containers/Dashboard";

const App = () => {

  return (
    <Router>
      <div  className="App">
          {localStorage.my_app_token ? <Redirect to='/dashboard' from='/' /> :
          <Redirect to='/login' from='/' /> }
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
};

export default connect(null)(App);
