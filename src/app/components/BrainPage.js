import React, { Component, useState } from "react";
import { Card, Col, Table, Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LogoLarge from "/Users/johnlovitsch/Desktop/mod5 project/IntuitChart/intuit_chart_frontend/src/LogoLarge.png";
import { setCurrentPatient } from "../actions/patients";
import { setCurrentAdmission } from "../actions/admission";
import { HistoryChart } from "./hooks/History";

class BrainPage extends Component {
  state = {
    reminderTime: "",
    show: false,
    content: "",
    title: "",
  };

  componentDidMount() {
    this.setState({
      reminderTime: new Date(),
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleShowState = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  renderPatientChart = (assignment, admission) => {
    let currentAdmission = this.props.admissions.find(
      (ad) => ad.patient.id === admission.patient.id
    );
    this.props.setCurrentAdmission(currentAdmission);
    this.props.setCurrentPatient(currentAdmission.patient);
    this.props.history.push(
      `/dashboard/${this.props.user.id}/admissions/${assignment.admission.id}`
    );
  };

  ///////////////////////////////////////////////////
  render() {
    console.log("ASSIGNMENTS", this.props.assignments);
    console.log("ADMISSIONS", this.props.admissions);
    const MyVerticallyCenteredModal = (props) => {
      const handleSubmit = (event) => {
        console.log(event);
        debugger;
        this.setState({
          title: event.target[0].value,
          content: event.target[1].value,
        });
      };
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Admission ID:
            </Modal.Title>
          </Modal.Header>
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Patient Name:
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Title:</Form.Label>
                <Form.Control name="title" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Content:</Form.Label>
                <Form.Control name="content" as="textarea" />
              </Form.Group>
              <Button type="submit">Make Note</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Back</Button>
          </Modal.Footer>
        </Modal>
      );
    };
    return (
      <div>
        <Col
          md={{
            offset: "2",
            span: "8",
          }}
          style={{
            padding: "10% 0",
            //   border: "3px solid green",
            //   textAlign: "center",
          }}
          className="align-items-center"
        >
          {this.props.assignments.length === 0 ? (
            <Card.Img src={LogoLarge} />
          ) : (
            <Card
              style={
                {
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // height: "initial",
                  // margin: "auto"
                }
              }
              className="card-shadow"
            >
              <Card.Header>
                <strong>Brain Page</strong>
              </Card.Header>
              <hr className="align-self-center" style={{ width: "50%" }} />
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
                  </tr>
                </thead>
                <tbody>
                  {/* {this.renderAssignmentAdmissionInformation( )} */}
                  {this.props.assignments.map((assignment) => {
                    const historyInfo = this.props.admissions.find(
                      (admission) => {
                        return admission.id === assignment.admission.id;
                      }
                    );

                    return (
                      <tr key={assignment.id}>
                        <td>
                          <Button
                            id={assignment.id}
                            name="viewReportPages"
                            onClick={() =>
                              this.renderPatientChart(assignment, historyInfo)
                            }
                            style={{
                              backgroundColor: "transparent",
                              border: "solid",
                              color: "#1761a0",
                            }}
                          >
                            Go
                          </Button>
                        </td>

                        <td>
                          {assignment.patient.first_name}{" "}
                          {assignment.patient.last_name}
                        </td>
                        <td>{assignment.admission.current_room}</td>
                        <td>{assignment.admission.code_status}</td>

                        <td>{assignment.admission.admitting_diagnosis}</td>
                        <td>{assignment.admission.admission_date}</td>
                        <td>
                          <Button
                            onClick={this.handleShowState}
                            style={{
                              backgroundColor: "transparent",
                              border: "solid",
                              color: "#1761a0",
                            }}
                          >
                            Note
                          </Button>
                          <MyVerticallyCenteredModal
                            show={this.state.show}
                            title={this.state.title}
                            content={this.state.content}
                            handleChange={(e) => this.handleChange(e)}
                            assignment={this.state.assignment}
                            reminderTime={this.state.reminderTime}
                            handleDateChange={this.handleDateChange}
                            onHide={this.handleShowState}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
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
  admissions: state.admissions.array,
  currentAdmission: state.admissions.currentAdmission,
  currentPatient: state.patients.currentPatient,
});

export default connect(mapStateToProps, {
  setCurrentPatient,
  setCurrentAdmission,
})(withRouter(BrainPage));
