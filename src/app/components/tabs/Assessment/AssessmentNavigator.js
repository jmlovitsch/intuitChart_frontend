import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

class AssessmentNavigator extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="nav nav-tabs">
        <NavLink
          name="vitals"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/assessment/vitals`}
        >
          Vitals
        </NavLink>
        <NavLink
          name="pain"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/assessment/pain`}
        >
          Pain
        </NavLink>
        <NavLink
          type="input"
          name="iv"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/assessment/iv`}
        >
          IV
        </NavLink>
        <NavLink
          name="dailyCares"
          className="nav-item nav-link "
          to={`/dashboard/${id}/visits/visit_id/assessment/dailycares`}
        >
          Daily Cares
        </NavLink>
        <NavLink
          name="io"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/assessment/io`}
        >
          I/O
        </NavLink>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id,
});

export default connect(mapStateToProps)(withRouter(AssessmentNavigator));
