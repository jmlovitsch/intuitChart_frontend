import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";

class PatientCarePlan extends Component {
  printAllCarePlans = () => {
    return this.props.currentAdmission.care_plans.map((careplan, index) => {
      return (
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                style={{
                  background: "none",
                  color: "#1760a0",
                  borderColor: "#1760a0",
                }}
                eventKey={index}
              >
                {careplan.diagnosis_category}
                {" | "}
                {careplan.nursing_diagnosis}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>
                <Card.Header>
                  <strong>Diagnosis Category:</strong>{" "}
                  {careplan.diagnosis_category}
                </Card.Header>
                <Card.Header>
                  <strong>Nursing Diagnosis:</strong>{" "}
                  {careplan.nursing_diagnosis}
                </Card.Header>
                <Card.Header>
                  <strong>Goals/Desired Outcomes</strong>
                </Card.Header>
                <Card.Body>
                  <ul>{this.printOcs(careplan)}</ul>
                </Card.Body>
                <Card.Header>
                  <strong>Interventions/Actions</strong>
                </Card.Header>
                <Card.Body>
                  <ul>{this.printAcs(careplan)}</ul>
                </Card.Body>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
    });
  };

  printOcs = (careplan) => {
    if (careplan.ocs) {
      return careplan.ocs.split("-/-").map((a) => {
        return <li>{a}</li>;
      });
    }
  };
  printAcs = (careplan) => {
    if (careplan.acs) {
      return careplan.acs.split("-/-").map((a) => {
        return <li>{a}</li>;
      });
    }
  };
  render() {
    return <div>{this.printAllCarePlans()}</div>;
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
