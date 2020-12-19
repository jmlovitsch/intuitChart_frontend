import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Redirect, Route, withRouter } from "react-router-dom";
import Login from "./app/components/Login";
import Dashboard from "./app/containers/Dashboard";

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWithToken } from "./app/actions/auth";
import Switch from "react-bootstrap/esm/Switch";
import { Container } from "react-bootstrap";

export class App extends Component {

    // componentDidMount(){
    //     this.props.history.push('/login')
    // }

    componentDidUpdate(){
        if (localStorage.getItem("my_app_token") === "undefined") {
            localStorage.removeItem("my_app_token")
        }
    }

  render() {
      const token = localStorage.my_app_token
    return (
      <Container fluid className="App" >
        {(token) ? (
          <Redirect to={`/dashboard/${this.props.id}`} component={Dashboard} />
        ) : (
          <Redirect to="/login" from="*" />
        )}
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

export default connect(mapStateToProps, { fetchWithToken })(withRouter(App));
