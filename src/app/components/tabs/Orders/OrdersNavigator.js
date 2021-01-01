import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class OrdersNavigator extends Component {
  render() {
      const {id} = this.props
    return (
      <div className="nav nav-tabs">
        <NavLink
          name="medications"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders/medications`}
        >
          Medications
        </NavLink>
        <NavLink
          name="labs"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders/labs`}
        >
          Labs
        </NavLink>
        <NavLink
          name="nursing"
          className="nav-item nav-link"
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders/nursing`}
        >
          Nursing
        </NavLink>
        <NavLink
          name="consult"
          className="nav-item nav-link "
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders/consult`}
        >
          Consult
        </NavLink>
        <NavLink
          name="imaging"
          className="nav-item nav-link "
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders/imaging`}
        >
          Imaging
        </NavLink>
        <NavLink
          name="diet"
          className="nav-item nav-link "
          to={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders/diet`}
        >
          Diet
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

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersNavigator);
