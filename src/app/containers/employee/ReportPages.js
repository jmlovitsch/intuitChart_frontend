import React, { Component } from "react";
import { connect } from "react-redux";
import Navigator from "../../components/Navigator";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Switch, withRouter } from "react-router-dom";
import Summary from "../../components/tabs/MainTabs/Summary";
import Assessment from "../../components/tabs/MainTabs/Assessment";
import BrainPage from "../../components/BrainPage";
import ATD from "../../components/tabs/MainTabs/ATD";
import CarePlan from "../../components/tabs/MainTabs/CarePlan";
import Education from "../../components/tabs/MainTabs/Education";
import MAR from "../../components/tabs/MainTabs/MAR";
import Orders from "../../components/tabs/MainTabs/Orders";
import ShiftAssessment from "../../components/tabs/MainTabs/ShiftAssessment";
import ShiftNotes from "../../components/tabs/MainTabs/ShiftNotes";
import  ClaimAdmissions  from "../../components/ClaimAdmissions";

class ReportPages extends Component {


  renderOptions = () => {
    if (this.props.addPatient) {
      return <ClaimAdmissions />;
    } else {
      if (!this.props.patient) {
        return <BrainPage />;
      }
      if (this.props.patient) {
        return (
          <Row>
            <Col md={2}>1</Col>
            <Col>
              <Card>
                <Card.Header>
                  <Navigator />
                </Card.Header>
                <Card.Body style={{ padding: "5px" }}>
                  <Switch>
                    <Assessment path="*/visits/:visit_id/assessment" />
                    <Summary path="*/visits/:visit_id/summary" />
                    <CarePlan path="*/visits/:visit_id/careplan" />
                    <ATD path="*/visits/:visit_id/atd" />
                    <Education path="*/visits/:visit_id/education" />
                    <MAR path="*/visits/:visit_id/mar" />
                    <Orders path="*/visits/:visit_id/orders" />
                    <ShiftAssessment path="*/visits/:visit_id/shiftassessment" />
                    <ShiftNotes path="*/visits/:visit_id/shiftnotes" />
                  </Switch>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      }
    }
  };

  render() {
    return <>{this.renderOptions()}</>;
  }
}

const mapStateToProps = (state) => ({
  addPatient: state.patients.addPatient,
  admissions: state.admissions,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ReportPages));
