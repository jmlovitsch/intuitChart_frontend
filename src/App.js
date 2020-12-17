import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Redirect, withRouter } from "react-router-dom";
import Login from "./app/components/Login";
import Dashboard from "./app/containers/Dashboard";

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWithToken } from "./app/actions/auth";
import Switch from "react-bootstrap/esm/Switch";

export class App extends Component {
//   componentDidMount() {
//     const token = localStorage.getItem("my_app_token");
//     if (token === "undefined" || !token) {
//       console.log("no token in login");
//       return this.props.history.push("/login");
//     }
//     console.log("token in login");
//     this.props.fetchWithToken(token);
//   }

  // componentDidMount(){
  //     const token = localStorage.getItem('my_app_token')

  //     if (!token) {
  //       this.props.history.push('/login')
  //     } else {

  //         this.props.fetchWithToken(token)

  //     }
  //   }

  render() {
    return (
      <div className="App">
        <Switch>
          <Login exact path="/login" />
          <Dashboard path={`/dashboard/${this.props.id}`} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id,
});

export default connect(mapStateToProps, { fetchWithToken })(withRouter(App));
