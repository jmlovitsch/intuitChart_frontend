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

class ClaimAdmissions extends Component {

    state={
        claimedPatients: []
    }

    handleClick =(event)=>{
        const newClaimedPatients = this.state.claimedPatients.concat(event.target.id)
        this.setState({
            claimedPatients: newClaimedPatients
        })
    }




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
    console.log(this.props.admissions);
    console.log("STATE", this.state)
    return (
      <div>
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
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ClaimAdmissions);
