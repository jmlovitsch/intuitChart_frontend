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
    const { id } = this.props;
    return (
      <>
        <AssessmentNavigator />
        <div className="child">
          <Switch>
            <Vitals path={`/dashboard/${id}/visits/visit_id/assessment/vitals`} />
            <Pain exact path={`/dashboard/${id}/visits/visit_id/assessment/pain`} />
            <IV exact path={`/dashboard/${id}/visits/visit_id/assessment/iv`} />
            <DailyCares
              exact
              path={`/dashboard/${id}/visits/visit_id/assessment/dailycares`}
            />
          </Switch>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
