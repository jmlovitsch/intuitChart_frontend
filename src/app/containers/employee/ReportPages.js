import React, { Component } from "react";
import { connect } from "react-redux";
import Navigator from "../../components/Navigator";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Switch, withRouter } from "react-router-dom";
import Summary from "../../components/tabs/MainTabs/Summary";
import Assessment from "../../components/tabs/MainTabs/Assessment";
import ATD from "../../components/tabs/MainTabs/ATD";
import CarePlan from "../../components/tabs/MainTabs/CarePlan";
import Education from "../../components/tabs/MainTabs/Education";
import MAR from "../../components/tabs/MainTabs/MAR";
import Orders from "../../components/tabs/MainTabs/Orders";
import ShiftAssessment from "../../components/tabs/MainTabs/ShiftAssessment";
import ShiftNotes from "../../components/tabs/MainTabs/ShiftNotes";
import { setCurrentAdmission } from "../../actions/admission";
import { setCurrentPatient } from "../../actions/patients";
import LoadingCard from "../../components/hooks/LoadingCard";

class ReportPages extends Component {

    componentDidMount(){
        this.props.setCurrentAdmission(this.props.location.state.admission)
        this.props.setCurrentPatient(this.props.location.state.patient)
    }


  render() {
      console.log(this.props.location.state)
    return (<>
        { (this.props.currentAdmission && this.props.currentPatient) ?
        <Row>
          <Col md={2}>1</Col>
          <Col>
            <Card>
              <Card.Header>
                <Navigator info={this.props.location.state}/>
              </Card.Header>
              <Card.Body style={{ padding: "5px" }}>
                <Switch>
                  <Assessment exact path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/assessment`} />
                  <Summary path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/summary`} />
                  <CarePlan path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/careplan`} />
                  <ATD path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/atd`} />
                  <Education path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/education`} />
                  <MAR path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/mar`} />
                  <Orders path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/orders`} />
                  <ShiftAssessment path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/shiftassessment`} />
                  <ShiftNotes path={`/dashboard/${this.props.user.id}/admissions/${this.props.currentAdmission.id}/shiftnotes`} />
                </Switch>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        :
        <LoadingCard />}</>
    );
  }
}

const mapStateToProps = (state) => ({
    user: state.user,
  admissions: state.admissions.array,
  currentAdmission: state.admissions.currentAdmission,
  currentPatient: state.patients.currentPatient
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  {setCurrentPatient, setCurrentAdmission}
)(withRouter(ReportPages));
