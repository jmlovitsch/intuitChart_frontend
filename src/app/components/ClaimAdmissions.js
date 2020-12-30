import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  Table,
  Card,
} from "react-bootstrap";
import { connect } from "react-redux";
import { createAssignment } from "../actions/admission";
import { handleBackfromAddPatient } from "../actions/patients";

class ClaimAdmissions extends Component {
  state = {
    user_id: this.props.user.id,
  };

  handleClick = (event) => {
    const token = localStorage.getItem("my_app_token");
    const id = parseInt(event.target.id, 10);
    const bodyObj = {
      user_id: this.props.user.id,
      admission_id: id,
    };
    this.props.createAssignment(token, bodyObj);
  };

  renderAdmissionsforClaiming = () => {
    return this.props.admissions.map((u) => {
      return (
        <tr key={u.id}>
          <td>
            <Button
              id={u.id}
              name="claimPatient"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              +
            </Button>
          </td>
          <td>{u.id}</td>
          <td>{u.patient.username}</td>
          <td>{u.patient.first_name}</td>
          <td>{u.patient.last_name}</td>
          <td>{u.current_room}</td>
        </tr>
      );
    });
  };
  render() {
    console.log("ASSIGNMENTS", this.props.assignments);
    console.log("STATE", this.state);
    return (
      <div>
          <Button onClick={() => this.props.handleBackfromAddPatient()}>Back</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Add Patient</th>
              <th>Admission ID</th>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody>{this.renderAdmissionsforClaiming()}</tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  admissions: state.admissions,
  user: state.user,
  assignments: state.assignments,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { createAssignment, handleBackfromAddPatient })(ClaimAdmissions);
