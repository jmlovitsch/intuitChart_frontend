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

class IV extends Component {
  state = {
    admission_id: this.props.admission.id,
    author: this.props.user.username,
    iv_type: "",
    dresssing_status: "",
    site_status: "",
    line_status: "",
    dressing_change_due: "",
    cap: "",
  };
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
    this.props.fetchCreateAssessment(token, "ivs", {iv: this.state})
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
                {formLabel("Blood Pressure")}
                {formLabel("IV Type")}
                <Form.Control
                  as="select"
                  value={this.state.iv_type}
                  className="mb-3"
                  name="iv_type"
                >
                  {this.generateOptions("iv_type", [
                    "Bolus",
                    "Infusion",
                    "Secondary",
                    "Lower Left Arm",
                  ])}
                </Form.Control>

                {formLabel("Dressing Status")}
                <Form.Control
                  as="select"
                  value={this.state.dresssing_status}
                  className="mb-3"
                  name="dresssing_status"
                >
                  {this.generateOptions("dresssing_status", [
                    "Clean",
                    "Dry",
                    "Intact",
                    "Drainage",
                  ])}
                </Form.Control>

                {formLabel("Site Status")}
                <Form.Control
                  as="select"
                  value={this.state.site_status}
                  className="mb-3"
                  name="site_status"
                >
                  {this.generateOptions("site_status", [
                    "c|d|i",
                    "red",
                    "painful",
                    "fragile",
                  ])}
                </Form.Control>

                {formLabel("Line Status")}
                <Form.Control
                  as="select"
                  value={this.state.line_status}
                  className="mb-3"
                  name="line_status"
                >
                  {this.generateOptions("line_status", [
                    "Flushed",
                    "Saline locked",
                    "Infusing",
                    "Infiltrated",
                    "Occluded",
                  ])}
                </Form.Control>

                {formLabel("Dressing Change Due")}
                <Form.Group>
                <Form.Label>Schedule Start</Form.Label>

                <DateTime
                  date={this.state.dressing_change_due}
                  handleDateChange={this.handleDateChange}
                />
              </Form.Group>

                {formLabel("Cap on")}
                <Form.Control
                  as="select"
                  value={this.state.cap}
                  className="mb-3"
                  name="cap"
                >
                  {this.generateOptions("cap", ["yes", "no"])}
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
    admission: state.admissions.currentAdmission
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, {fetchCreateAssessment})(IV);
