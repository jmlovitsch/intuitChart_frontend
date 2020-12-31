import React, { Component } from "react";
import { connect } from "react-redux";
import ReportPages from "./employee/ReportPages";
import { withRouter, Switch } from "react-router-dom";
import Profile from "../components/forms/Profile";
import { fetchAllAdmissions } from "../actions/admission";
import ClaimAdmissions from "../components/ClaimAdmissions";
import BrainPage from "../components/BrainPage";

export class Employee extends Component {
  componentDidMount() {
    this.props.history.push(`/dashboard/${this.props.user.id}/admissions/brainpage`);
  }

  render() {
    return (
      <div>
        <Switch>
          <BrainPage
            exact
            path={`/dashboard/${this.props.user.id}/admissions/brainpage`}
          />
          <ClaimAdmissions
            exact
            path={`/dashboard/${this.props.user.id}/admissions`}
          />
          <ReportPages path={`/dashboard/${this.props.user.id}/admissions/:assignment_id`} />
          <Profile path={`/dashboard/${this.props.user.id}/profile`} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(
  mapStateToProps,
  fetchAllAdmissions
)(withRouter(Employee));
