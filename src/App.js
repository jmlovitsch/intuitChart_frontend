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
import Header from "./app/components/Header";

export class App extends Component {

    state = {
        username: ""
    }
  componentDidMount() {
    const token = localStorage.getItem("my_app_token");

    if (!token) {
      this.props.history.push("/login");
    } else {
      fetch("http://localhost:3001/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        //   localStorage.setItem("my_app_token", data.jwt);
          this.props.currentUser(data);
          this.props.history.push(`/dashboard/${data.user.id}`);

        });
    }
  }

  setUsername = (p) => {
    this.setState({
        username: p
    })
  }


  render() {
      console.log(this.state)
    return (
      <div fluid className="site-container">
        <div className="app-header">
          <Header renderAdd={this.renderAdd} setUsername={this.setUsername}/>
        </div>
          <Switch style={{padding: "0"}}  >
            <Route path={`/dashboard/${this.props.id}*`} component={Dashboard}  className="app-non-header"/>

            <Route exact path="/login" component={Login} newUsername={this.state.username} className="app-non-header"/>
          </Switch>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id,
});

export default connect(mapStateToProps, { currentUser, fetchAllDrugs })(
  withRouter(App)
);
