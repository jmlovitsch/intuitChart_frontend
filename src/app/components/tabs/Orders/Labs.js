
import React, { Component } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

class Labs extends Component {
    render() {
        return (
            <div >
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
                  <Row style={{ border: "solid", borderWidth: "1px", marginLeft: "10px", justifyItems: "auto" }}>
                  </Row>

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
                <Col sm={10} style={{ alignItems: "center" }}></Col>
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
            )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Labs)
