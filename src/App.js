import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./app/components/Login";
import Dashboard from "./app/containers/Dashboard";

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWithToken } from "./app/actions/auth";

export class App extends Component {

  componentDidMount() {
    return localStorage.my_app_token ? this.props.fetchWithToken(localStorage.my_app_token) : null;
  }

//   componentDidUpdate() {
//     return (localStorage.my_app_token === "undefined")
//       ? alert("nope")
//       : null
//   }

  render() {
    const { id } = this.props;
    return (
      <Router>
        <div className="App">
          {(localStorage.my_app_token) ? (
            <Redirect to={`/dashboard/${id}`} from="/" />
          ) : (
            <Redirect to="/login" from="*" />
          )}

          <Route path="/login" component={Login} />
          <Route path={`/dashboard/:id`} component={Dashboard} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id,
});

export default connect(mapStateToProps, { fetchWithToken })(App);
