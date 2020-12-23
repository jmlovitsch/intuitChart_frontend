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

  componentDidMount() {
    this.setState({
      time_start: new Date(),
    });
  }

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
          <Row>
            <Col md={{ span: 3 }}>
              <Form.Group>
                <Form.Label>Room Service Eligible?</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                  name="eligible_room_service"
                >
                  {this.generateOptions("eligible_room_service", ["yes", "no"])}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={{ span: 3 }}>
              <Form.Group>
                <Form.Label>Accuchecks</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                  name="eligible_accuchecks"
                >
                  {this.generateOptions("eligible_accuchecks", ["yes", "no"])}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={{ span: 3 }}>
              <Form.Group>
                <Form.Label>Schedule Start</Form.Label>

                <DateTime
                  date={this.state.time_start}
                  handleDateChange={this.handleDateChange}
                />
              </Form.Group>
            </Col>

            <Col md={{ span: 3 }}>
              <Form.Group>
                <Form.Label>Notify RN?</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                  name="notify_rn"
                >
                  {this.generateOptions("notify_rn", ["yes", "no"])}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={{ span: 4 }}>
              <Form.Group>
                <Form.Label>Primary Diet</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                  name="primary_diet"
                >
                  {this.generateOptions("primary_diet", [
                    "Cardiac",
                    "General",
                    "NPO",
                  ])}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={{ span: 4 }}>
              <Form.Group>
                <Form.Label>Consistency</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                  name="consistency"
                >
                  {this.generateOptions("consistency", [
                    "Chopped",
                    "Ground",
                    "Full Liquid",
                    "Clear Liquid",
                    "Pureed",
                    "Regular",
                  ])}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={{ span: 4 }}>
              <Form.Group>
                <Form.Label>1:1 Feed</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                  name="1to1_feed"
                >
                  {this.generateOptions("1to1_feed", ["yes", "no"])}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={{ span: 4 }}>
              <Form.Group>
                <Form.Label>Liquid Diet</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                  name="type"
                >
                  {this.generateOptions("roomService", [
                    "Thin-Liquid",
                    "Nectar-Thick",
                    "Honey-Thick",
                  ])}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={{ span: 4 }}>
              <Form.Group>
                <Form.Label>Straw</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  className="mb-3"
                  name="straw"
                >
                  {this.generateOptions("straw", ["yes, pinched", "no", "yes"])}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row >
          <Col md={{ span: 1 }}>
              <Form.Group>
                <Form.Label>Comment</Form.Label>
              </Form.Group>
            </Col>

          <Col md={{ offset: 1, span: 7 }}>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  placeholder="Enter Any Notes..."
                  className="mb-3"
                  name="notes"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md={{ offset: 1, span: 2 }} className="justify-content-end">
                <br/>
                <Row>
          <Form.Group >
              <Button
                type="submit"
                className="rounded"
                style={{
                  backgroundColor: "transparent",
                  border: "solid",
                  color: "#1761a0",
                }}
              >
                Submit Diet
              </Button>

          </Form.Group>
          </Row>
          </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Diet);
