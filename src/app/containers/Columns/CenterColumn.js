import React, { Component } from "react";
import { connect } from "react-redux";
import Navigator from "../../components/Navigator";
import { Container } from "react-bootstrap";
import { Switch, withRouter } from "react-router-dom";
import Summary from "../../components/tabs/MainTabs/Summary";
import Assessment from "../../components/tabs/MainTabs/Assessment";
import BrainPage from "../../components/BrainPage";
import ATD from "../../components/tabs/MainTabs/ATD";
import CarePlan from "../../components/tabs/MainTabs/CarePlan";
import Education from "../../components/tabs/MainTabs/Education";
import MAR from "../../components/tabs/MainTabs/MAR";
import Orders from "../../components/tabs/MainTabs/Orders";
import ShiftAssessment from "../../components/tabs/MainTabs/ShiftAssessment";
import ShiftNotes from "../../components/tabs/MainTabs/ShiftNotes";

class CenterColumn extends Component {


  renderOptions = () => {
    if (!this.props.patient) {
      return <BrainPage />;
    }
    if (this.props.patient) {
      return (
        <>
          <Navigator />
          <div className="parent">
            <Switch>
              <Assessment path="/employee/visits/assessment*" />
              <Summary path="/employee/visits/summary" />
              <CarePlan path="/employee/visits/careplan" />
              <ATD path="/employee/visits/atd" />
              <Education path="/employee/visits/education" />
              <MAR path="/employee/visits/mar" />
              <Orders path="/employee/visits/orders" />
              <ShiftAssessment path="/employee/visits/shiftassessment" />
              <ShiftNotes path="/employee/visits/shiftnotes" />
            </Switch>
          </div>
        </>
      );
    }
  };

  render() {
    //add more switch routes for the chart
    return <Container>{this.renderOptions()}</Container>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CenterColumn));
