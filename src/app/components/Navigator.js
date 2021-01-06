import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Navigator extends Component {


  render() {
    return (
      <div className="nav nav-tabs">
        <NavLink
          name="assessment"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/assessment`}
        >
          Assessment
        </NavLink>
        <NavLink
          name="mar"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/mar`}
        >
          MAR
        </NavLink>
        <NavLink
          name="orders"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders`}
        >
          Orders
        </NavLink>
        <NavLink
          name="ATD"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/atd`}
        >
          ATD
        </NavLink>
        <NavLink
          name="education"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/education`}
        >
          Education
        </NavLink>
        <NavLink
          name="shiftnotes"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/shiftnotes`}
        >
          ShiftNotes
        </NavLink>
        <NavLink
          name="shiftassessment"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/shiftassessment`}
        >
          ShiftAssessment
        </NavLink>

        <NavLink
          name="careplan"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/careplan`}
        >
          CarePlan
        </NavLink>

        <NavLink
          name="summary"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/summary`}
        >
          Summary
        </NavLink>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
