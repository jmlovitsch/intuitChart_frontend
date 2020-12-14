import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Navigator extends Component {

  render() {

    return (
      <div className="nav nav-tabs" style={{ }} >

        <NavLink
          name="assessment"
          className="nav-item nav-link"
          to="/employee/visits/assessment"
        >
          Assessment
        </NavLink>
        <NavLink
          name="mar"
          className="nav-item nav-link"
          to="/employee/visits/mar"
        >
          MAR
        </NavLink>
        <NavLink
          name="orders"
          className="nav-item nav-link"
          to="/employee/visits/orders"
        >
          Orders
        </NavLink>
        <NavLink
          name="A.T.D."
          className="nav-item nav-link"
          to="/employee/visits/atd"
        >
          A.T.D.
        </NavLink>
        <NavLink
          name="education"
          className="nav-item nav-link"
          to="/employee/visits/education"
        >
          Education
        </NavLink>
        <NavLink
          name="shiftnotes"
          className="nav-item nav-link"
          to="/employee/visits/shiftnotes"
        >
          ShiftNotes
        </NavLink>
        <NavLink
          name="shiftassessment"
          className="nav-item nav-link"
          to="/employee/visits/shiftassessment"
        >
          ShiftAssessment
        </NavLink>

        <NavLink
          name="careplan"
          className="nav-item nav-link"
          to="/employee/visits/careplan"
        >
          CarePlan
        </NavLink>

        <NavLink
          name="summary"
          className="nav-item nav-link"
          to="/employee/visits/summary"
        >
          Summary
        </NavLink>

        {/* <li className="nav-item">
          <div className="nav-link disabled">Disabled</div>
        </li> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
