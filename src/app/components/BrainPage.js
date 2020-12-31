import React, { Component } from "react";
import { Card, Col, Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LogoLarge from "/Users/johnlovitsch/Desktop/mod5 project/IntuitChart/intuit_chart_frontend/src/LogoLarge.png";

class BrainPage extends Component {

  renderAssignmentAdmissionInformation = () => {
    return this.props.assignments.map((assignment) => {
      return (
        <tr key={assignment.id}>
          <td>
            <Button
              id={assignment.id}
              name="viewReportPages"
              onClick={() =>
                this.props.history.push(
                  `/dashboard/${this.props.user.id}/admissions/${assignment.admission.id}`,
                  assignment
                )
              }
            >
              Go
            </Button>
          </td>

          <td>
            {assignment.patient.first_name} {assignment.patient.last_name}
          </td>
          <td>{assignment.admission.current_room}</td>
          <td>{assignment.admission.code_status}</td>

          <td>{assignment.admission.admitting_diagnosis}</td>
          <td>{assignment.admission.admission_date}</td>
          <td>
            <Button id={assignment.id} name="createNote">
              Note
            </Button>
          </td>
          <td>
            <Button id={assignment.id} name="patientHistory">
              History
            </Button>
          </td>
        </tr>
      );
    });
  };

  render() {
    console.log(this.props.assignments);
    return (
      <div>
        <Col fluid md={{ span: 6, offset: 3 }}>
          {this.props.assignments.length === 0 ? (
            <Card.Img
              //   variant="top"

              src={LogoLarge}
              //   className="mb-2"
            />
          ) : (
            <Card>
              <Card.Text>Brain Page</Card.Text>
              <div>Your Patients</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Report</th>
            <th>Name</th>
            <th>Room</th>
            <th>Code</th>
            <th>Admit. Diag.</th>
            <th>Admit. Date</th>
            <th>Set a Reminder</th>
            <th>View History</th>
          </tr>
        </thead>
        <tbody>{this.renderAssignmentAdmissionInformation()}</tbody>
      </Table>
            </Card>
          )}
        </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  assignments: state.assignments.assignmentsArray,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BrainPage));
