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

class Pain extends Component {
  state = {
    author: this.props.user.username,
    admission_id: "",
    assume_pain: "",
    asleep: "",
    scale_type: "",
    scale_value: "",
    orientation: "",
    location: "",
    treatment: "",
    pasero_sedation: "",
  };

  handleChange = (event) => {
    console.log(event);
    if (event.target.checked) {
      const newState = {
        ...this.state,
        [event.target.name]: this.state[event.target.name].concat(
          event.target.value
        ),
      };
      this.setState({
        ...newState,
      });
    } else {
      const newState = {
        ...this.state,
        [event.target.name]: this.state[event.target.name].filter(
          (x) => x !== event.target.value
        ),
      };
      this.setState({
        ...newState,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
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

  handleChange = (event) => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
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
                {formLabel("Scoring Tool")}
                {formLabel("Assume Pain")}
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
                </Form.Control>

                {formLabel("Scale Type")}
                <Form.Control
                  as="select"
                  value={this.state.scale_type}
                  className="mb-3"
                  name="scale_type"
                >
                  {this.generateOptions("scale_type", [
                    "0-10",
                    "CPOT",
                    "Wong-Baker",
                    "Faces",
                  ])}
                </Form.Control>

                {formLabel("Scale Value")}
                <Form.Control
                  as="select"
                  className="mb-3"
                  name="scale_value"
                  value={this.state.scale_value}
                >
                  {this.generateOptions("scale_value", [
                    "0",
                    "1",
                    "2",
                    "3",
                    "CPOT",
                    "Wong-Baker",
                    "Faces",
                  ])}
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
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pain);
