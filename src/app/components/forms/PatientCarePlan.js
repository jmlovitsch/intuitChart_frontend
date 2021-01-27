import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";

class PatientCarePlan extends Component {
  printAllCarePlans = () => {
    return this.props.currentAdmission.care_plans.map((careplan, index) => {
      return (
        <Accordion>
            <Card>
          <Accordion.Toggle as={Button}  eventKey={index}>
          <Card.Header>{careplan.diagnosis_category}
            {" | "}
            {careplan.nursing_diagnosis}</Card.Header>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={index}>
              <Card>
            <Card.Header>
              <strong>Diagnosis Category:</strong> {careplan.diagnosis_category}
            </Card.Header>
            <Card.Header>
              <strong>Nursing Diagnosis:</strong> {careplan.nursing_diagnosis}
            </Card.Header>
            <Card.Header>
              <strong>Goals/Desired Outcomes</strong>
            </Card.Header>
            <ul>{this.printOcs(careplan)}</ul>
            <Card.Header>
              <strong>Interventions/Actions</strong>
            </Card.Header>
            <ul>{this.printAcs(careplan)}</ul>
            </Card>
          </Accordion.Collapse>
          </Card>
        </Accordion>
      );
    });
  };

  printOcs = (careplan) => {
    if (careplan.ocs) {
      return careplan.ocs.split("-/-").map((a) => {
        return (
          <Card.Body>
            <li>{a}</li>
          </Card.Body>
        );
      });
    }
  };
  printAcs = (careplan) => {
    if (careplan.acs) {
      return careplan.acs.split("-/-").map((a) => {
        return (
          <Card.Body>
            <li>{a}</li>
          </Card.Body>
        );
      });
    }
  };
  render() {
    return (
      <div>
        {this.printAllCarePlans()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  admissions: state.admissions.array,
  currentAdmission: state.admissions.currentAdmission,
  currentPatient: state.patients.currentPatient,
  careplans: state.careplans.array,
  patientCareplan: state.careplans.patientCareplan,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PatientCarePlan);
