import React, { Component } from "react";
import { connect } from "react-redux";
import ReportPages from "./employee/ReportPages";
import { withRouter, Switch } from "react-router-dom";
import Profile from "../components/forms/Profile";
import { fetchAllAdmissions } from "../actions/admission";
import ClaimAdmissions from "../components/ClaimAdmissions";

export class Employee extends Component {

    componentDidMount(){
        this.props.history.push(`/dashboard/${this.props.id}/visits`)
    }

  render() {
    return (
      <div>
        <Switch>
          <ClaimAdmissions
            exact
            path={`/dashboard/${this.props.id}/admissions`}
          />
          <ReportPages
            path={`/dashboard/${this.props.id}/admissions/*`}
          />
          <Profile path={`/dashboard/${this.props.id}/profile`} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    id: state.user.id,
  };
};

export default connect(
  mapStateToProps,
  fetchAllAdmissions
)(withRouter(Employee));
