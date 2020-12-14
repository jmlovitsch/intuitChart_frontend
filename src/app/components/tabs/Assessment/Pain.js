import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";

class Pain extends Component {
  state = {
    painOrientaton: false,
  };

  PainOrientationDropdown = () => {
    return (
      <Form.Control as="select" defaultValue="Choose...">
        <option>Upper</option>
        <option>Lower</option>
        <option>Mid</option>
        <option>Left</option>
        <option>Right</option>
        <option>Anterior</option>
        <option>Posterior</option>
        <option>Lower</option>
        <option>Lower</option>
        <option>Lower</option>
        <option>Lower</option>
        <option>Lower</option>
        <option>Lower</option>
        <option>Lower</option>
        <option>Lower</option>
        <option>Lower</option>
        <option>Lower</option>
      </Form.Control>
    );
  };

  addPainOrientation = (event) => {
    this.setState({
      painOrientaton: !this.state.painOrientaton,
    });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Scoring Tool
            </Form.Label>
            <Col sm={5}>
              <Form.Check
                type="radio"
                label="Assume Pain"
                name="Assume Pain"
                id="Assume Pain"
              />
              <Form.Check
                type="radio"
                label="Asleep"
                name="Asleep"
                id="Asleep"
              />
              <Form.Check
                type="radio"
                label="0-10 Scale"
                name="0-10 Scale"
                id="0-10 Scale"
              />
              <Form.Check
                type="radio"
                label="CPOT (non:intupated)"
                name="CPOT (non:intupated)"
                id="CPOT (non:intupated)"
              />

              <Form.Check
                type="radio"
                label="Wong-Baker"
                name="Wong-Baker"
                id="Wong-Baker"
              />
              <Form.Check type="radio" label="Faces" name="Faces" id="Faces" />
            </Col>
            <Col sm={2}>result of checked item goes here</Col>
          </Form.Group>
        <hr />
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Pain Orientation
            </Form.Label>
            <Col sm={3}>
              {this.PainOrientationDropdown()}
              <Form.Check
                type="checkbox"
                label="Add Another?"
                name="Add Another"
                id="Add Another"
                onClick={(event) => this.addPainOrientation(event)}
              />
            </Col>
            <Col sm={3}>
              {this.state.painOrientaton
                ? this.PainOrientationDropdown()
                : null}
            </Col>

            <Col sm={2}>result of checked item goes here</Col>
          </Form.Group>
          <hr />
          <Form.Group as={Row} controlId="  ">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>
          <hr />
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <fieldset></fieldset>
          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

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
