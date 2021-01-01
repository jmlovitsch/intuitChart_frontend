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
import { withRouter } from "react-router-dom";
import { createAssignment } from "../actions/assignments";
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
        console.log(u)
        const chris = this.props.assignments.map(assignment => {
            return assignment.admission.id})
            console.log( )
      return (
        <tr key={u.id}>
          <td>
              {chris.includes(u.id) ?
            <Button disabled
              id={u.id}
              name="claimPatient"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >

              +
            </Button>
            :
                        <Button
                        id={u.id}
                        name="claimPatient"
                        onClick={(e) => {
                          this.handleClick(e);
                        }}
                      >
                        +
                      </Button>

                                         }
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
      console.log(this.props)
    return (
      <div>
          <Button onClick={() =>
            // this.props.handleBackfromAddPatient()
            this.props.history.goBack()}>Back</Button>
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
  admissions: state.admissions.array,
  user: state.user,
  assignments: state.assignments.assignmentsArray,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { createAssignment, handleBackfromAddPatient })(withRouter(ClaimAdmissions));
