import React, { Component } from "react";
import { connect } from "react-redux";
import AssessmentNavigator from "../Assessment/AssessmentNavigator";
import Vitals from "../Assessment/Vitals";
import DailyCares from "../Assessment/DailyCares";
import IV from "../Assessment/IV";
import Pain from "../Assessment/Pain";
import { Switch } from "react-router-dom";
import { Card } from "react-bootstrap";
import IO from "../Assessment/IO";

class Assessment extends Component {
  render() {
    return (
      <Card style={{height: "100%", overflow: "scroll"}}>
        <Card.Header>
          <AssessmentNavigator />
        </Card.Header>
        <Card.Body >
          <Switch >
            <Vitals
              path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/assessment/vitals`}
            />
            <Pain
              exact
              path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/assessment/pain`}
            />
            <IV exact path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/assessment/iv`} />
            <DailyCares
              exact
              path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/assessment/dailycares`}
            />
            <IO
              exact
              path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/assessment/io`}
            />
          </Switch>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
    user: state.user,
  admissions: state.admissions.array,
  currentAdmission: state.admissions.currentAdmission,
  currentPatient: state.patients.currentPatient
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
