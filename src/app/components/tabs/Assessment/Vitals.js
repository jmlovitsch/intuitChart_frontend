import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Col, Row } from "react-bootstrap";

class Vitals extends Component {
    render() {
        return (
            <div>
        <Form onChange={(event) => this.handleChange(event)}>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              BP
            </Form.Label>
            <Col sm={5}>
              <Form.Check
                type="radio"
                label="Assume Pain"
                name="scoringTool"
                id="Assume Pain"
                value="Assume Pain"
              />
              <Form.Check
                type="radio"
                label="Asleep"
                name="scoringTool"
                id="Asleep"
                value="Asleep"
              />
              <Form.Check
                type="radio"
                label="0-10 Scale"
                name="scoringTool"
                id="0-10 Scale"
                id="0-10 Scale"
              />
              <Form.Check
                type="radio"
                label="CPOT (non:intupated)"
                name="scoringTool"
                id="CPOT (non:intupated)"
                value="CPOT (non:intupated)"
              />

              <Form.Check
                type="radio"
                label="Wong-Baker"
                name="scoringTool"
                id="Wong-Baker"
                value="Wong-Baker"
              />
              <Form.Check
                type="radio"
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
            <Col sm={3}>

              <Form.Check
                type="checkbox"
                label="Add Another"
                name="Add Another"
                id="Add Another"
              />
            </Col>
            <Col sm={2}>result of checked item goes here</Col>
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
                type="radio"
                label="Declines"
                name="Declines"
                id="Declines"
              />
              <Form.Check
                type="radio"
                label="Medication"
                name="Medication"
                id="Medication"
              />
              <Form.Check
                type="radio"
                label="Non-Pharm"
                name="Non-Pharm"
                id="Non-Pharm"
              />
            </Col>
          </Form.Group>
          <hr />
          <Form.Group as={Row} >
            <Form.Label column sm={2}>
              Pasero Sedation
            </Form.Label>
            <Col sm={10}>
              dstuff here
            </Col>
          </Form.Group>
          <fieldset></fieldset>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Vitals)
