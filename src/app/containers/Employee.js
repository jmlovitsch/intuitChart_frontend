import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import PersonalColumn from "./employee/PersonalColumn";
import CenterColumn from "./employee/CenterColumn";
import { Messenger } from "../components/Messenger";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";

export class Employee extends Component {
  state = {
    patient: 1,
  };

  handleClick = () => {
    this.setState({
      patient: "",
    });
  };

  render() {
    return (
      <div>
        <CenterColumn
          patient={this.state.patient}
          addPatient={this.props.addPatient}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps)(withRouter(Employee));
