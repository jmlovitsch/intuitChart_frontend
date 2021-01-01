import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

class AssessmentNavigator extends Component {
  render() {
    return (
      <div className="nav nav-tabs">
        <NavLink
          name="vitals"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/assessment/vitals`}
        >
          Vitals
        </NavLink>
        <NavLink
          name="pain"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/assessment/pain`}
        >
          Pain
        </NavLink>
        <NavLink
          type="input"
          name="iv"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/assessment/iv`}
        >
          IV
        </NavLink>
        <NavLink
          name="dailyCares"
          className="nav-item nav-link "
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/assessment/dailyCares`}
        >
          Daily Cares
        </NavLink>
        <NavLink
          name="io"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/assessment/io`}
        >
          I/O
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  admissions: state.admissions.array,
  currentAdmission: state.admissions.currentAdmission,
  currentPatient: state.patients.currentPatient,
});

export default connect(mapStateToProps)(withRouter(AssessmentNavigator));
