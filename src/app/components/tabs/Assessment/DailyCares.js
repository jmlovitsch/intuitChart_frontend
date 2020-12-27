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



  class DailyCares extends Component {

    state = {
        author: this.props.user.username,
        date_initiated: "",
        nursing_diagnosis: "",
        goals_outcomes: "",
        interventions: "",
        evaluation: "",
        admission_id: ""
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
        console.log(this.state);
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

        return (
          <div>
            <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <Form.Group>
                    {formLabel("Daily Cares")}
                    {formLabel("nursing_diagnosis")}
                    <Form.Control
                      as="select"
                      value={this.state.nursing_diagnosis}
                      className="mb-3"
                      name="nursing_diagnosis"
                    >
                      {this.generateOptions("nursing_diagnosis", [
                        "Bolus",
                        "Infusion",
                        "Secondary",
                        "Lower Left Arm",
                      ])}
                    </Form.Control>

                    {formLabel("goals_outcomes")}
                    <Form.Control
                      as="select"
                      value={this.state.goals_outcomes}
                      className="mb-3"
                      name="goals_outcomes"
                    >
                      {this.generateOptions("goals_outcomes", [
                        "Clean",
                        "Dry",
                        "Intact",
                        "Drainage",
                      ])}
                    </Form.Control>

                    {formLabel("interventions")}
                    <Form.Control
                      as="select"
                      value={this.state.interventions}
                      className="mb-3"
                      name="interventions"
                    >
                      {this.generateOptions("interventions", [
                        "c|d|i",
                        "red",
                        "painful",
                        "fragile",
                      ])}
                    </Form.Control>

                    {formLabel("evaluation")}
                    <Form.Control
                      as="select"
                      value={this.state.evaluation}
                      className="mb-3"
                      name="evaluation"
                    >
                      {this.generateOptions("evaluation", [
                        "Flushed",
                        "Saline locked",
                        "Infusing",
                        "Infiltrated",
                        "Occluded",
                      ])}
                    </Form.Control>

                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Form.Group as={Row}>
                <Col>
                  <Button type="submit">Submit</Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        );
      }
    }

    const mapStateToProps = (state) => ({
      user: state.user,
    });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DailyCares);
