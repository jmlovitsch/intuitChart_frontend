import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  Button,
  Col,
  Row,
  OverlayTrigger,
  InputGroup,
  Tooltip,
} from "react-bootstrap";
import { fetchCreateAssessment } from "../../../actions/assessment";
import { CPOT } from "../../hooks/NewNote";

class Pain extends Component {
  state = {
    author: this.props.user.username,
    admission_id: this.props.admission.id,
    assume_pain: "",
    asleep: "",
    sscale_type: "",
    scale_value: "N/A",
    orientation: "",
    location: "",
    treatment: "",
    pasero_sedation: "",
  };

  //   handleChange = (event) => {
  //     console.log(event);
  //     if (event.target.checked) {
  //       const newState = {
  //         ...this.state,
  //         [event.target.name]: this.state[event.target.name].concat(
  //           event.target.value
  //         ),
  //       };
  //       this.setState({
  //         ...newState,
  //       });
  //     } else {
  //       const newState = {
  //         ...this.state,
  //         [event.target.name]: this.state[event.target.name].filter(
  //           (x) => x !== event.target.value
  //         ),
  //       };
  //       this.setState({
  //         ...newState,
  //       });
  //     }
  //   };

  handleChange = (event) => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    const token = localStorage.getItem("my_app_token");
    this.props.fetchCreateAssessment(token, "pains", { pain: this.state });
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

  generateOptions = (place, [...props]) => {
    return [...props, ""].map((site) => {
      return (
        <option
          inline
          //   type="checkbox"
          label={site}
          name={place}
          id={`inline-${site}-2`}
          value={site}
        />
      );
    });
  };

  generateValueOptions = () => {
    switch (this.state.sscale_type) {
      case "0-10":
        return this.generateOptions("scale_value", ["",
          "Mild",
          "Moderate",
          "Severe",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
        ]);
      case "CPOT":
        return (<CPOT />);
      case "Wong-Baker":
        return this.generateOptions("scale_value", ["",
            "0, No Hurt",
            "1",
            "2, Hurts Little Bit",
            "3",
            "4, Hurts, Little More",
            "5",
            "6, Hurts Even More",
            "7",
            "8, Hurts, Whole Lot",
            "9",
            "10, Hurts Worst",
          ]);
      case "Asleep":
        return this.generateOptions("scale_value", ["None"]);
      case "Assume Pain":
        return this.generateOptions("scale_value", ["N/A"]);
      default:
        return this.generateOptions("scale_value", ["N/A"]);
    }
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
                {/* {formLabel("Scoring Tool")} */}
                {/* {formLabel("Assume Pain")}
                <Form.Control
                  as="select"
                  value={this.state.assume_pain}
                  className="mb-3"
                  name="assume_pain"
                >
                  {this.generateOptions("assume_pain", ["yes", "no"])}
                </Form.Control>

                {formLabel("Asleep")}
                <Form.Control
                  as="select"
                  value={this.state.asleep}
                  className="mb-3"
                  name="asleep"
                >
                  {this.generateOptions("asleep", ["yes", "no"])}
                </Form.Control> */}

                {formLabel("Scale Type")}
                <Form.Control
                  as="select"
                  value={this.state.sscale_type}
                  className="mb-3"
                  name="sscale_type"
                >
                  {this.generateOptions("sscale_type", [
                    "0-10",
                    "CPOT",
                    "Wong-Baker",
                    "Asleep",
                    "Assume Pain",
                  ])}
                </Form.Control>

                {formLabel("Scale Value")}
                <Form.Control
                  as="select"
                  className="mb-3"
                  name="scale_value"
                  value={this.state.scale_value}
                >
                  {this.generateValueOptions()}
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                {formLabel("Orientation")}
                <Form.Control
                  as="select"
                  className="mb-3"
                  name="orientation"
                  value={this.state.orientation}
                >
                  {this.generateOptions("orientation", [
                    "Upper",
                    "Lower",
                    "Mid",
                    "Left",
                    "Right",
                    "Anterior",
                    "Posterior",
                  ])}
                </Form.Control>

                {formLabel("Location")}
                <Form.Control
                  as="select"
                  className="mb-3"
                  name="location"
                  value={this.state.location}
                >
                  {this.generateOptions("location", [
                    "locaiton1",
                    "locaiton3",
                    "locaiton1",
                  ])}
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                {formLabel("Treatment")}
                {formLabel("Type")}
                <Form.Control
                  as="select"
                  value={this.state.treatment}
                  className="mb-3"
                  name="treatment"
                >
                  {this.generateOptions("treatment", [
                    "Declines",
                    "Medication",
                    "Non-Pharm",
                  ])}
                </Form.Control>
                {formLabel("Pasero Sedation")}{" "}
                <Form.Control
                  as="select"
                  value={this.state.pasero_sedation}
                  className="mb-3"
                  name="pasero_sedation"
                >
                  {this.generateOptions("pasero_sedation", ["1", "2"])}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <hr />

          <Form.Group>
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
  admission: state.admissions.currentAdmission,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { fetchCreateAssessment })(Pain);
