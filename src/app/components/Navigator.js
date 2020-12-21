import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Navigator extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="nav nav-tabs">
        <NavLink
          name="assessment"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/assessment`}
        >
          Assessment
        </NavLink>
        <NavLink
          name="mar"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/mar`}
        >
          MAR
        </NavLink>
        <NavLink
          name="orders"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/orders`}
        >
          Orders
        </NavLink>
        <NavLink
          name="ATD"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/atd`}
        >
          ATD
        </NavLink>
        <NavLink
          name="education"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/education`}
        >
          Education
        </NavLink>
        <NavLink
          name="shiftnotes"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/shiftnotes`}
        >
          ShiftNotes
        </NavLink>
        <NavLink
          name="shiftassessment"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/shiftassessment`}
        >
          ShiftAssessment
        </NavLink>

        <NavLink
          name="careplan"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/careplan`}
        >
          CarePlan
        </NavLink>

        <NavLink
          name="summary"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/summary`}
        >
          Summary
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
