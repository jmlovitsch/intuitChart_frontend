import React, { Component } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";

class Imaging extends Component {
  state = {
    time: "",
    frequency: "",
    contrast: "",
  };

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

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Form
          onChange={(event) => this.handleChange(event)}
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                className="mb-3"
                name="time"
              >
                {this.generateOptions("roomService", [
                  "Stat",
                  "Timed",
                  "Routine",
                ])}
              </Form.Control>
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Label>Frequency</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                className="mb-3"
                name="frequency"
              >
                {this.generateOptions("roomService", ["yes", "no"])}
              </Form.Control>
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Label>Contrast</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                className="mb-3"
                name="contrast"
              >
                {this.generateOptions("roomService", [
                  "with Contrast",
                  "without Contrast",
                  "with and without Contrast",
                ])}
              </Form.Control>
            </Form.Group>
            </Col>
            <hr />
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
                  Submit Order
                </Button>
              </Row>
            </Form.Group>

        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Imaging);
