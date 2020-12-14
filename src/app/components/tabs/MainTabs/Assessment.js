import React, { Component } from "react";
import { connect } from "react-redux";
import AssessmentNavigator from "../Assessment/AssessmentNavigator";
import { Container } from "react-bootstrap";
import Vitals from "../Assessment/Vitals";
import DailyCares from "../Assessment/DailyCares";
import IV from "../Assessment/IV";
import Pain from "../Assessment/Pain";
import { Switch } from "react-router-dom";

class Assessment extends Component {

  render() {
    return (
      <Container>
        <AssessmentNavigator  />
        <div className="patientInfoChild">
          <Switch >
            <Vitals path="*/vitals" />
            <Pain exact path="*/pain" />
            <IV exact path="*/iv" />
            <DailyCares exact path="*/dailycares" />
          </Switch>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
