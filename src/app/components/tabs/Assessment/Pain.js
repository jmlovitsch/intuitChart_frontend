import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";

class Pain extends Component {
  state = {
    employeeID: "",
    scoringTool: [],
    orientation: [],
    location: [],
    treatment: [],
    paseroSedation: [],
  };

  PainOrientationDropdown = () => {
    return (
      <Form.Group>
        {["checkbox"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Upper"
              name="orientation"
              value="Upper"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="Lower"
              name="orientation"
              value="Lower"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Mid"
              name="orientation"
              value="Mid"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Left"
              name="orientation"
              value="Left"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Right"
              name="orientation"
              value="Right"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Anterior"
              name="orientation"
              value="Anterior"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Posterior"
              name="orientation"
              value="Posterior"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
      </Form.Group>
    );
  };

  addPainOrientation = (event) => {
    this.setState({
      painOrientaton: !this.state.painOrientaton,
    });
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
    console.log(event.target);
  };

  render() {

    return (
      <div>
        <Form
          onChange={(event) => this.handleChange(event)}
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Scoring Tool
            </Form.Label>
            <Col sm={5}>
              <Form.Check
                type="checkbox"
                label="Assume Pain"
                name="scoringTool"
                id="Assume Pain"
                value="Assume Pain"
              />
              <Form.Check
                type="checkbox"
                label="Asleep"
                name="scoringTool"
                id="Asleep"
                value="Asleep"
              />

              <Form.Label>0-10 Scale</Form.Label>
              <Form.Control
                as="select"
                type="checkbox"
                label="0-10 Scale"
                name="scoringTool"
                id="0-10 Scale"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>ddd7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Form.Control>

              <Form.Check
                type="checkbox"
                label="CPOT (non:intupated)"
                name="scoringTool"
                id="CPOT (non:intupated)"
                value="CPOT (non:intupated)"
              />

              <Form.Check
                type="checkbox"
                label="Wong-Baker"
                name="scoringTool"
                id="Wong-Baker"
                value="Wong-Baker"
              />
              <Form.Check
                type="checkbox"
                label="Faces"
                name="scoringTool"
                id="Faces"
                value="Faces"
              />
            </Col>
            <Col sm={2}>result of checked item goes here</Col>
          </Form.Group>
          <hr />
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Orientation
            </Form.Label>
            <Col sm={10}>{this.PainOrientationDropdown()}</Col>
          </Form.Group>
          <hr />
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Location
            </Form.Label>
            <Col sm={3}></Col>
          </Form.Group>
          <hr />
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Treatment
            </Form.Label>
            <Col sm={5}>
              <Form.Check
                type="checkbox"
                label="Declines"
                name="treatment"
                id="Declines"
                value="Declines"
              />
              <Form.Check
                type="checkbox"
                label="Medication"
                name="treatment"
                id="Medication"
                value="Medication"
              />
              <Form.Check
                type="checkbox"
                label="Non-Pharm"
                name="treatment"
                id="Non-Pharm"
                value="Non-Pharm"
              />
            </Col>
          </Form.Group>
          <hr />
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Pasero Sedation
            </Form.Label>
            <Col sm={10}>dstuff here</Col>
          </Form.Group>
          <fieldset></fieldset>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pain);
