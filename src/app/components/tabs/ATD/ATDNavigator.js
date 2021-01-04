import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

class ATDNavigator extends Component {
  render() {
    return (
      <div className="nav nav-tabs">
        <NavLink
          name="admitting"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/atd/admitting`}
        >
          Admitting
        </NavLink>
        <NavLink
          name="transfers"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/atd/transfers`}
        >
          Transfers
        </NavLink>
        <NavLink
          name="discharge"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/atd/discharge`}
        >
          Discharge
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

export default connect(mapStateToProps)(withRouter(ATDNavigator));
