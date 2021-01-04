import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import Admitting from "../ATD/Admitting";
import ATDNavigator from "../ATD/ATDNavigator";
import Discharge from "../ATD/Discharge";
import Transfers from "../ATD/Transfers";

const ATD = (props) => {
  return (
    <Card style={{ height: "100%", overflow: "scroll" }}>
      <Card.Header>
       <ATDNavigator />
      </Card.Header>
      <Card.Body>
        <Switch>
          <Admitting
            path={`/dashboard/${props.user.id}/admissions/${props.currentAdmission.id}/atd/admitting`}
          />
          <Transfers
            exact
            path={`/dashboard/${props.user.id}/admissions/${props.currentAdmission.id}/atd/transfers`}
          />
          <Discharge
            exact
            path={`/dashboard/${props.user.id}/admissions/${props.currentAdmission.id}/atd/discharge`}
          />
        </Switch>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  admissions: state.admissions.array,
  currentAdmission: state.admissions.currentAdmission,
  currentPatient: state.patients.currentPatient,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ATD);
