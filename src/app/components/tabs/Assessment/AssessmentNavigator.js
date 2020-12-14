import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

class AssessmentNavigator extends Component {
  render() {
      const {match} = this.props
    return (
      <div className="nav nav-tabs">
        <NavLink
          name="vitals"
          className="nav-item nav-link"
          to="/employee/visits/assessment/vitals"
        >
          Vitals
        </NavLink>
        <NavLink
          name="pain"
          className="nav-item nav-link"
          to="/employee/visits/assessment/pain"
        >
          Pain
        </NavLink>
        <NavLink
          type="input"
          name="iv"
          className="nav-item nav-link"
          to="/employee/visits/assessment/iv"
        >
          IV
        </NavLink>
        <NavLink
          name="dailyCares"
          className="nav-item nav-link"
          to="/employee/visits/assessment/dailycares"
        >
          Daily Cares
        </NavLink>
        <li className="nav-item">
          <div className="nav-link disabled">Disabled</div>
        </li>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AssessmentNavigator));
