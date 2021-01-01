import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import  Consult  from "../Orders/Consult";
import  Diet  from "../Orders/Diet";
import  Imaging  from "../Orders/Imaging";
import  Labs  from "../Orders/Labs";
import Medications from "../Orders/Medications";
import  Nursing  from "../Orders/Nursing";
import  OrdersNavigator  from "../Orders/OrdersNavigator";

class Orders extends Component {
    render() {
        const {id} = this.props
        return (
            <Card className="child login-card">
            <Card.Header>
              <OrdersNavigator />
            </Card.Header>
            <Card.Body>
              <Switch>
                <Medications
              path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders/vitals*`}
              />
                <Labs
                  exact
                  path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders/labs*`}
                  />
                <Nursing
                  exact
                  path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders/nursing*`}
                  />
                <Consult
                  exact
                  path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders/consult*`}
                  />
                <Imaging
                  exact
                  path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders/imaging*`}
                  />
                <Diet
                  exact
                  path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders/diet*`}
                  />
              </Switch>
            </Card.Body>
          </Card>
              )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    admissions: state.admissions.array,
    currentAdmission: state.admissions.currentAdmission,
    currentPatient: state.patients.currentPatient,
  })

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
