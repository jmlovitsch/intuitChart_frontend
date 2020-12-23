import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, withRouter } from "react-router-dom";
import Login from "./app/components/Login";
import Dashboard from "./app/containers/Dashboard";

import React, { Component } from "react";
import { connect } from "react-redux";
import { currentUser } from "./app/actions/auth";
import Switch from "react-bootstrap/esm/Switch";
import { Container } from "react-bootstrap";
import { fetchAllDrugs } from "./app/actions/drugs";

export class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem("my_app_token");
    if (!token) {
      this.props.history.push("/login");
    } else {
      fetch("http://localhost:3001/current_user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          this.props.currentUser(data);
        });
        this.props.history.push(`/dashboard/${this.props.id}`);
    }
  }



  render() {
    return (
      <Container fluid className="App">
        <Switch>
          <Route path={`/dashboard/${this.props.id}`} component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id,
});

export default connect(mapStateToProps, { currentUser, fetchAllDrugs })(withRouter(App));
