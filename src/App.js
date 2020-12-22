import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, withRouter } from "react-router-dom";
import Login from "./app/components/Login";
import Dashboard from "./app/containers/Dashboard";

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWithToken } from "./app/actions/auth";
import Switch from "react-bootstrap/esm/Switch";
import { Container } from "react-bootstrap";

export class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem("my_app_token");
    if (!token) {
        localStorage.removeItem("my_app_token")
      this.props.history.push("/login");
    } else {
      this.props.fetchWithToken(token);
      this.props.history.push(`/dashboard/${this.props.id}`);
    }
  }

//   componentDidUpdate(prevProps) {
//     // Typical usage (don't forget to compare props):
//     if (this.props.id === prevProps.id) {
//       this.props.history.push('/login');
//     }
//   }

  render() {
      console.log(this.props.id)
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
  id: state.user.id
});

export default connect(mapStateToProps, { fetchWithToken })(withRouter(App));
