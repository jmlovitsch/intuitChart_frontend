import React, { Component } from "react";
import { connect } from "react-redux";
import ReportPages from "./employee/ReportPages";
import { withRouter, Switch } from "react-router-dom";
import  Profile  from "../components/forms/Profile";

export class Employee extends Component {
  state = {
    patient: "",
  };

  handleClick = () => {
    this.setState({
      patient: "",
    });
  };

  componentDidMount() {
    this.props.history.push(`/dashboard/${this.props.id}/visits`);
  }

  render() {
    return (
      <div>
        <Switch>
          <ReportPages
            patient={this.state.patient}
            addPatient={this.props.addPatient}
            path={`/dashboard/${this.props.id}/visits*`}
          />
          <Profile path={`/dashboard/${this.props.id}/profile`} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    id: state.user.id,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps)(withRouter(Employee));
