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
import { FormFunctions } from "../../hooks/FormFunctions";
import { fetchCreateAssessment } from "../../../actions/assessment";

class IO extends Component {
  state = {
    admission_id: this.props.admission.id,
    author: this.props.user.username,
    po: "",
    percent_meal: "",
    iv: "",
    urine: "",
    urine_occurance: "",
    urine_color: "",
    uring_appearance: "",
    urine_odor: "",
    stool_occurance: "",
    stool_incontinence: "",
    stool_color: "",
    stool_amount: "",
    stool_appearance: "",
    drainage_method: "",
    internal: "",
    external: "",
    urine_catheter: "",
    male_genetalia: "",
    female_genetalia: "",
  };

  values = {
    po: [],
    percent_meal: [],
    iv: [],
    urine: [],
    urine_occurance: [],
    urine_color: ["", "Yellow", "Straw", "Amber", "Red", "Brown", "Cola"],
    uring_appearance: ["", "Hazy", "Cloudy", "Clear", "Clots"],
    urine_odor: ["", "No Odor", "Malodorour", "Fruity"],
    stool_occurance: [],
    stool_incontinence: ["", "Yes", "No"],
    stool_color: [],
    stool_amount: ["", "Large", "Medium", "Small", "Smear"],
    stool_appearance: ["", "Loose", "Soft", "Formed", "Hard"],
    drainage_method: [],
    internal: [],
    external: [],
    urine_catheter: [],
    male_genetalia: ["", "Yes", "No"],
    female_genetalia: ["", "Yes", "No"],
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
    this.props.fetchCreateAssessment(token, "intakeoutputs", {intakeoutput: this.state})
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

    const generateForm = () => {
      return Object.keys(this.values).map((k, index) => {
        const uppercased = k.replace(k[0], k[0].toUpperCase());
        const spaces = uppercased.replaceAll("_", " ");

        return (
          <Form.Group style={{padding: "10px"}}>
            {formLabel(spaces)}
            <Form.Control
              as="select"
              value={this.state.k}
              className="mb-3"
              name={spaces}
            >
              {this.generateOptions(spaces, this.values[k])}
            </Form.Control>
          </Form.Group>
        );
      });
    };

    return (
      <div>
        <Form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
             <Row  lg={5} noGutters>
            {generateForm()}
            </Row>
            <hr/>
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
    admission: state.admissions.currentAdmission
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, {fetchCreateAssessment})(IO);
