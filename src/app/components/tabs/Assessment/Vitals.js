import React, { Component } from "react";
import { connect } from "react-redux";
import { InputGroup, Form, Button, Col, Row } from "react-bootstrap";

class Vitals extends Component {
  generateOptions = (place, [...props]) => {
    return [...props].map((site) => {
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
    return (
      <div>
        <Form>
          <Form.Row>
            <Form.Group>
              <Col>
                <Form.Label as={Row}>Blood Pressure </Form.Label>

                <Form.Label>Diastolic</Form.Label>
                <InputGroup>
                  <Form.Control type="number" placeholder="Diastolic" />
                  <InputGroup.Append>
                    <InputGroup.Text>mm/Hg</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>

                <Form.Label>Systolic</Form.Label>
                <InputGroup>
                  <Form.Control type="number" placeholder="Systolic" />
                  <InputGroup.Append>
                    <InputGroup.Text>mm/Hg</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>

                <Form.Label>Site</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  {this.generateOptions("bpSite", [
                    "Upper Right Arm",
                    "Lower Right Arm",
                    "Upper Left Arm",
                    "Lower Left Arm",
                  ])}
                </Form.Control>

                <Form.Label>Position</Form.Label>
                <Form.Control type="text" placeholder="Position" />
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  {this.generateOptions("type", [
                    "Manual",
                    "Automatic",
                    "Doppler",
                  ])}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group>
              <Col>
                <Form.Label as={Row}>Heart Rate</Form.Label>

                <Form.Label>HR</Form.Label>

                <Form.Control as="select" defaultValue="Choose...">
                  {this.generateOptions("hr", ["Monitor", "Manual"])}
                </Form.Control>

                <Form.Label>HR</Form.Label>
                <InputGroup>
                  <Form.Control type="number" placeholder="HR" />
                  <InputGroup.Append>
                    <InputGroup.Text>bpm</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <Form.Label>Quality</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  {this.generateOptions("quality", ["Regular", "Irregular"])}
                </Form.Control>
              </Col>
            </Form.Group>

            <Col>
              <Form.Group>
                <Form.Label as={Row}>Temperature</Form.Label>

                <Form.Label>Local Site</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  {this.generateOptions("localSite", ["Under Arm", "Mouth"])}
                </Form.Control>
                <Form.Label>Temp</Form.Label>
                <Form.Control type="number" placeholder="C/F" />
                <Form.Label as={Row}>Respiration Rate</Form.Label>

                <Form.Label>HR</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  {this.generateOptions("quality", [
                    "Regular",
                    "Labored",
                    "Shallow",
                    "Irregular",
                  ])}
                </Form.Control>
                <Form.Label>RR/min</Form.Label>
                <InputGroup>
                  <Form.Control type="number" placeholder="number" />
                  <InputGroup.Append>
                    <InputGroup.Text>RR/min</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <Form.Label>Quality</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  {this.generateOptions("quality", ["regular", "irregular"])}
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <hr />

          <Form.Label>Oxygen</Form.Label>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Saturation</Form.Label>
                <InputGroup>
                  <Form.Control type="number" placeholder="O2" />
                  <InputGroup.Append>
                    <InputGroup.Text>sat%</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Source</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  {this.generateOptions("source", [
                    "None (Room Air)",
                    "Nasal Canula",
                    "Nasal Canula: Hi Flow",
                  ])}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Site</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  {this.generateOptions("site", ["????", "????"])}
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Vitals);
