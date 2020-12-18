import React, { Component } from "react";
import { connect } from "react-redux";
import AssessmentNavigator from "../Assessment/AssessmentNavigator";
import Vitals from "../Assessment/Vitals";
import DailyCares from "../Assessment/DailyCares";
import IV from "../Assessment/IV";
import Pain from "../Assessment/Pain";
import { Switch } from "react-router-dom";
import { Card } from "react-bootstrap";

class Assessment extends Component {
  render() {
    const { id } = this.props;
    return (
      <>
        <Card className="child login-card" >
          <Card.Header>
            <AssessmentNavigator  />
          </Card.Header>
          <Card.Body >

            <Switch>
              <Vitals
                path={`/dashboard/${id}/visits/visit_id/assessment/vitals`}
              />
              <Pain
                exact
                path={`/dashboard/${id}/visits/visit_id/assessment/pain`}
              />
              <IV
                exact
                path={`/dashboard/${id}/visits/visit_id/assessment/iv`}
              />
              <DailyCares
                exact
                path={`/dashboard/${id}/visits/visit_id/assessment/dailycares`}
              />
            </Switch>
          </Card.Body>
        </Card>


      </>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
