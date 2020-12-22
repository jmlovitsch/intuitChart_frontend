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
          to={`/dashboard/${id}/visits/visit_id/orders/medications`}
        >
          Medications
        </NavLink>
        <NavLink
          name="labs"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/orders/labs`}
        >
          Labs
        </NavLink>
        <NavLink
          name="nursing"
          className="nav-item nav-link"
          to={`/dashboard/${id}/visits/visit_id/orders/nursing`}
        >
          Nursing
        </NavLink>
        <NavLink
          name="consult"
          className="nav-item nav-link "
          to={`/dashboard/${id}/visits/visit_id/orders/consult`}
        >
          Consult
        </NavLink>
        <NavLink
          name="imaging"
          className="nav-item nav-link "
          to={`/dashboard/${id}/visits/visit_id/orders/imaging`}
        >
          Imaging
        </NavLink>
        <NavLink
          name="diet"
          className="nav-item nav-link "
          to={`/dashboard/${id}/visits/visit_id/orders/diet`}
        >
          Diet
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    id: state.user.id
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersNavigator);
