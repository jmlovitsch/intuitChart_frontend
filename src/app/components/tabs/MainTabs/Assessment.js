import React, { Component } from "react";
import { connect } from "react-redux";
import AssessmentNavigator from "../Assessment/AssessmentNavigator";
import Vitals from "../Assessment/Vitals";
import DailyCares from "../Assessment/DailyCares";
import IV from "../Assessment/IV";
import Pain from "../Assessment/Pain";
import { Switch } from "react-router-dom";

class Assessment extends Component {
  render() {
    return (
      <>
        <AssessmentNavigator />
        <div className="child">
          <Switch>
            <Vitals path="*/vitals" />
            <Pain exact path="*/pain" />
            <IV exact path="*/iv" />
            <DailyCares exact path="*/dailycares" />
          </Switch>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
