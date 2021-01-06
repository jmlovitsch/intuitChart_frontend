import React, { Component } from "react";
import { connect } from "react-redux";
import Navigator from "../../components/Navigator";
import { Card, Col, Container, Row, ListGroup } from "react-bootstrap";
import { Switch, withRouter } from "react-router-dom";
import Summary from "../../components/tabs/MainTabs/Summary";
import Assessment from "../../components/tabs/MainTabs/Assessment";
import ATD from "../../components/tabs/MainTabs/ATD";
import CarePlan from "../../components/tabs/MainTabs/CarePlan";
import Education from "../../components/tabs/MainTabs/Education";
import MAR from "../../components/tabs/MainTabs/MAR";
import Orders from "../../components/tabs/MainTabs/Orders";
import ShiftAssessment from "../../components/tabs/MainTabs/ShiftAssessment";
import ShiftNotes from "../../components/tabs/MainTabs/ShiftNotes";
import { setCurrentAdmission } from "../../actions/admission";
import { setCurrentPatient } from "../../actions/patients";
import LoadingCard from "../../components/hooks/LoadingCard";

class ReportPages extends Component {
  //   componentDidMount() {
  //     this.props.setCurrentAdmission(this.props.location.state.admission);
  //     this.props.setCurrentPatient(this.props.location.state.patient);
  //   }

  //   componentDidUpdate(){
  //     this.props.setCurrentAdmission(this.props.location.state.admission);
  //     this.props.setCurrentPatient(this.props.location.state.patient);
  //   }

  render() {
    return (
      <Row style={{ margin: "1rem" }}>
        {this.props.currentAdmission && this.props.currentPatient ? (
          <>
            <Col md="2">
              <Card
                className="card-shadow"
                style={{ height: "90vh", overflow: "scroll" }}
              >
                <Card.Header>
                  <strong>Patient Information</strong>
                </Card.Header>
                <Card.Body>
                  <strong>Name:</strong> <br />
                  {this.props.currentPatient.first_name}{" "}
                  {this.props.currentPatient.last_name}
                  <hr />
                  <strong>Room:</strong>{" "}
                  {this.props.currentAdmission.current_room}
                  <hr />
                  <strong>Admission:</strong>
                  <br />
                  {this.props.currentAdmission.admission_date}
                  <hr />
                  <strong>Diagnosis:</strong>{" "}
                  {this.props.currentAdmission.admitting_diagnosis}
                  <hr />
                  <strong>Address:</strong> <br />
                  {this.props.currentPatient.street_address}{" "}
                  {this.props.currentPatient.street_address_2}
                  <br />
                  {this.props.currentPatient.city}
                  <br />
                  {this.props.currentPatient.state}
                  <br />
                  {this.props.currentPatient.zip}
                  <hr />
                  <strong>Contact:</strong>
                  <br />
                  {this.props.currentPatient.cell_phone}
                  <br />
                  {this.props.currentPatient.home_phone}
                  <br />
                  {this.props.currentPatient.email}
                  <hr />
                  <strong>Emergency Contact:</strong>
                  <br />
                  {this.props.currentPatient.emergency_contact_name}
                  <br />
                  {this.props.currentPatient.emergency_contact_phone}
                  <br />
                  {this.props.currentPatient.emergency_contact_relationship}
                  <br />
                  {this.props.currentPatient.zip}
                  <hr />
                  <strong>Share Info PPL:</strong>
                  {this.props.currentAdmission.who_authorized_share}
                  <hr />
                  <strong>Insurance:</strong> <br />
                  {this.props.currentPatient.health_insurance_provider}
                  <br />
                  id: {this.props.currentPatient.health_insurance_id}
                  <br />#{" "}
                  {this.props.currentPatient.health_insurance_policy_number}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-shadow" style={{ height: "90vh" }}>
                <Card.Header>
                  <Navigator info={this.props.location.state} />
                </Card.Header>
                <Card.Body style={{ padding: "5px" }}>
                  <Switch>
                    <Assessment
                      exact
                      path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/assessment*`}
                    />
                    <Summary
                      path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/summary*`}
                    />
                    <CarePlan
                      path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/careplan*`}
                    />
                    <ATD
                      path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/atd*`}
                    />
                    <Education
                      path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/education*`}
                    />
                    <MAR
                      path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/mar*`}
                    />
                    <Orders
                      path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders*`}
                    />
                    <ShiftAssessment
                      path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/shiftassessment*`}
                    />
                    <ShiftNotes
                      path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/shiftnotes*`}
                    />
                  </Switch>
                </Card.Body>
              </Card>
            </Col>
          </>
        ) : (
          <LoadingCard style={{position: "fixed"}} />
        )}
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  admissions: state.admissions.array,
  currentAdmission: state.admissions.currentAdmission,
  currentPatient: state.patients.currentPatient,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, {
  setCurrentPatient,
  setCurrentAdmission,
})(withRouter(ReportPages));
