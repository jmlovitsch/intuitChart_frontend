import React, { Component } from "react";
import { connect } from "react-redux";
import Navigator from "../../components/Navigator";
import { Container } from "react-bootstrap";
import { Switch, withRouter } from "react-router-dom";
import Summary from "../../components/tabs/MainTabs/Summary";
import Assessment from "../../components/tabs/MainTabs/Assessment";
import BrainPage from "../../components/BrainPage";

class CenterColumn extends Component {
  constructor() {
    super();
  }

  renderOptions = () => {
    if (!this.props.patient) {
      return <BrainPage />;
    }
    if (this.props.patient) {
      return (<>
        <Navigator />
        <div className="patientInfoParent">
          <Switch>
            <Assessment path="/employee/visits/assessment*" />
            <Summary path="/employee/visits/summary" />
          </Switch>
        </div>
      </>)
    }
  };

  render() {
    //add more switch routes for the chart
    return <Container >{this.renderOptions()}</Container>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CenterColumn));
