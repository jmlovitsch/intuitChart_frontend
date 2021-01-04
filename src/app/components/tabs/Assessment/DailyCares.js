import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Tooltip,
    InputGroup,
    Form,
    Button,
    Col,
    Row,
    Card,
    Overlay,
    OverlayTrigger,
  } from "react-bootstrap";

  import DateTime from "../../hooks/DateTime";
  import { fetchCreateAssessment } from "../../../actions/assessment";
import PatientCarePlan from "../../forms/PatientCarePlan";



  class DailyCares extends Component {

    state = {
        author: this.props.user.id,
        date_initiated: "",
        nursing_diagnosis: "",
        goals_outcomes: "",
        interventions: "",
        evaluation: "",
        admission_id: this.props.currentAdmission.id,
        notes: ""
    }



    handleChange = (event) => {
        console.log(event.target.name);
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

      handleDateChange = (event) => {
        this.setState({
            dressing_change_due: event,
        });
      };


      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        const token = localStorage.getItem("my_app_token")
        this.props.fetchCreateAssessment(token, "dailycares", {dailycare: this.state})
      };

      generateOptions = (place, [...props]) => {
        return [...props, ""].map((site) => {
          return (
            <option
              inline
              type="checkbox"
              label={site}
              name={place}
              id={`inline-${site}-2`}
              value={site}
            />
          );
        });
      };
      formLabel = (props) => {
        return (
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={this.renderTooltip(props)}
          >
            <Form.Label as={Row} value={props} />
          </OverlayTrigger>
        );
      };

      render() {
        const renderTooltip = (props) => (
          <Tooltip id="button-tooltip" {...props}>
            {props}
          </Tooltip>
        );

        const formLabel = (props) => {
          return (
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip(props)}
            >
              <Form.Label as={Row} className="justify-content-center">
                {props}
              </Form.Label>
            </OverlayTrigger>
          );
        };
console.log(this.state.notes)
        return (
          <div>
              {this.props.patientCareplan ? <PatientCarePlan /> : null}
              <hr/>
            <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <Form.Group>
                    {formLabel("Nurse Notes")}
                    <br/>
                    <Form.Control as="textarea"
                    value={this.props.notes}
                    name="notes"
                    onChange={this.handleChange}>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Form.Group>
              <Row className="justify-content-end">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "transparent",
                    border: "solid",
                    color: "#1761a0",
                  }}
                >
                  Submit Assessment
                </Button>
              </Row>
            </Form.Group>
            </Form>
          </div>
        );
      }
    }

    const mapStateToProps = (state) => ({
        user: state.user,
        admissions: state.admissions.array,
        currentAdmission: state.admissions.currentAdmission,
        currentPatient: state.patients.currentPatient,
        careplans: state.careplans.array,
        patientCareplan: state.careplans.patientCareplan

        });

const mapDispatchToProps = {};

export default connect(mapStateToProps, {fetchCreateAssessment})(DailyCares);
