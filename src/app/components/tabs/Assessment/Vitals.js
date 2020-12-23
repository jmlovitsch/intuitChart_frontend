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
import { render } from "@testing-library/react";

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

  myFunction = () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
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
        <Form>
          <Row>

              <Col>
              <Form.Group>
                {formLabel("Blood Pressure")}
                {formLabel("Systolic")}
                <InputGroup>
                  <Form.Control type="number" placeholder="Diastolic" />
                  <InputGroup.Append>
                    <InputGroup.Text className="mb-3">mm/Hg</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {formLabel("Diastolic")}
                <InputGroup>
                  <Form.Control type="number" placeholder="Systolic" />
                  <InputGroup.Append>
                    <InputGroup.Text className="mb-3">mm/Hg</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {formLabel("Site")}
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                >
                  {this.generateOptions("bpSite", [
                    "Upper Right Arm",
                    "Lower Right Arm",
                    "Upper Left Arm",
                    "Lower Left Arm",
                  ])}
                </Form.Control>
                {formLabel("Position")}
                <Form.Control
                  type="text"
                  placeholder="Position"
                  className="mb-3"
                />
                {formLabel("Type")}{" "}
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                >
                  {this.generateOptions("type", [
                    "Manual",
                    "Automatic",
                    "Doppler",
                  ])}
                </Form.Control>
                </Form.Group>
              </Col>


              <Col>
              <Form.Group>
                {formLabel("Heart Rate")}
                {formLabel("HR")}
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                >
                  {this.generateOptions("hr", ["Monitor", "Manual"])}
                </Form.Control>
                {formLabel("HR")}{" "}
                <InputGroup>
                  <Form.Control type="number" placeholder="HR" />
                  <InputGroup.Append>
                    <InputGroup.Text className="mb-3">bpm</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {formLabel("Quality")}{" "}
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                >
                  {this.generateOptions("quality", ["Regular", "Irregular"])}
                </Form.Control>
                </Form.Group>
              </Col>


            <Col>
              <Form.Group>
                {formLabel("Temperature")} {formLabel("Local Site")}{" "}
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                >
                  {this.generateOptions("localSite", ["Under Arm", "Mouth"])}
                </Form.Control>
                {formLabel("Temp")}{" "}
                <Form.Control
                  type="number"
                  placeholder="C/F"
                  className="mb-3"
                />
                {formLabel("Respiration Rate")} {formLabel("HR")}{" "}
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                >
                  {this.generateOptions("quality", [
                    "Regular",
                    "Labored",
                    "Shallow",
                    "Irregular",
                  ])}
                </Form.Control>
                {formLabel("RR/min")}{" "}
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="number"
                    className="mb-3"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text className="mb-3">RR/min</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {formLabel("Quality")}{" "}
                <Form.Control as="select" defaultValue="Choose...">
                  {this.generateOptions("quality", ["regular", "irregular"])}
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
            <Form.Group>
              {formLabel("Oxygen")}

                {formLabel("Saturation")}{" "}
                <InputGroup>
                  <Form.Control type="number" placeholder="O2" />
                  <InputGroup.Append>
                    <InputGroup.Text>sat%</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>



                {formLabel("Source")}
                <Form.Control as="select" defaultValue="Choose...">
                  {this.generateOptions("source", [
                    "None (Room Air)",
                    "Nasal Canula",
                    "Nasal Canula: Hi Flow",
                  ])}



                {formLabel("Site")}
                <Form.Control as="select" defaultValue="Choose...">
                  {this.generateOptions("site", ["????", "????"])}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Vitals);
