import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";


class Vitals extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Group>
            <Form.Label>BP</Form.Label>
            <Form.Label>Diastolic</Form.Label>
            <Form.Label>Systolic</Form.Label>
            <Form.Label>Site</Form.Label>
            <Form.Label>Position</Form.Label>
            <Form.Label>Type</Form.Label>
                Manual, automatic, or doppler
            </Form.Group>

            <Form.Group>
            <Form.Label>HR</Form.Label>
            <Form.Label>HR</Form.Label>
            <Form.Label>Quality</Form.Label>
            regular or irregular
            </Form.Group>

            <Form.Group>
            <Form.Label>Temperature</Form.Label>
            <Form.Label>Temp</Form.Label>
            C or F
            <Form.Label>Local Site</Form.Label>
            mouth, etc...
            <Form.Label>Respiration Rate</Form.Label>
            

            <Form.Label>Position</Form.Label>
            <Form.Label>Type</Form.Label>
                Manual, automatic, or doppler
            </Form.Group>


            <Form.Label>Email address</Form.Label>
            <Form.Label>Email address</Form.Label>
v            <Form.Label>Email address</Form.Label>
<Form.Label>Email address</Form.Label>

          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Vitals);
