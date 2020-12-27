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
    const { id } = this.props;
    return (
      <Card>
        <Card.Header>
          <AssessmentNavigator />
        </Card.Header>
        <Card.Body style={{ backgroundColor: "#1761a0", overflow: "scroll" }}>
          <Switch>
            <Vitals
              path={`/dashboard/${id}/visits/visit_id/assessment/vitals`}
            />
            <Pain
              exact
              path={`/dashboard/${id}/visits/visit_id/assessment/pain`}
            />
            <IV exact path={`/dashboard/${id}/visits/visit_id/assessment/iv`} />
            <DailyCares
              exact
              path={`/dashboard/${id}/visits/visit_id/assessment/dailycares`}
            />
            <IO
              exact
              path={`/dashboard/${id}/visits/visit_id/assessment/io`}
            />
          </Switch>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
