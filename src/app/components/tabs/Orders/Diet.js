import React, { Component } from "react";
import { Col, Form, Button, Row } from "react-bootstrap";
import { connect } from "react-redux";
import DateTime from "../../hooks/DateTime";

class Diet extends Component {
  state = {
    eligible_room_service: "yes",
    eligible_accuchecks: "yes",
    type: "Notify RN",
    time_start: "",
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

  handleDateChange = (event) => {
    this.setState({
      time_start: event,
    });
  };

  const;

  render() {
    return (
      <div>
        <Form
          onChange={(event) => this.handleChange(event)}
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group>
              <Form.Label>Room Service Eligible?</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                className="mb-3"
                name="eligible_room_service"
              >
                {this.generateOptions("roomService", ["yes", "no"])}
              </Form.Control>
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Label>Accuchecks Eligible?</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                className="mb-3"
                name="eligible_accuchecks"
              >
                {this.generateOptions("roomService", ["yes", "no"])}
              </Form.Control>
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                className="mb-3"
                name="type"
              >
                {this.generateOptions("roomService", [
                  "Notify RN",
                  "Chopped",
                  "Ground",
                  "Regular",
                  "Thin-Liquid",
                  "Nectar-Thick",
                  "Full Liquid",
                  "Clear Liquid",
                  "Cardiac",
                  "No Straw",
                  "1:1 Feed",
                  "NPO",
                ])}
              </Form.Control>
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Label>Schedule Start</Form.Label>
              <br />
              <DateTime
                date={this.state.time_start}
                handleDateChange={this.handleDateChange}
              />
            </Form.Group>
            <hr />
            <Form.Group>
              <Row className="justify-content-end">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#1761a0",
                  }}
                >
                  Submit Diet
                </Button>
              </Row>
            </Form.Group>
          </Col>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Diet);
