import React, { Component } from "react";
import { Col, Form, Button, Row } from "react-bootstrap";
import { connect } from "react-redux";
import DateTime from "../../hooks/DateTime";

class Diet extends Component {
  state = {
    eligible_room_service: "yes",
    accuchecks: "no",
    type: "",
    time_start: "",
    notify_rn: "no",
    primary_diet: "General",
    consistency: "Regular",
    one_to_one_feed: "no",
    liquid: "N/A",
    straw: "yes",
    comment: "",
    submitted_at: "",
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

  setSubmitTime = () => {
      this.setState({
          submitted_at: new Date()
      })
  }

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
                  defaultValue="yes"
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
                  defaultValue="no"
                  className="mb-3"
                  name="accuchecks"
                >
                  {this.generateOptions("accuchecks", ["yes", "no"])}
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
                  defaultValue={this.state.notify_rn}
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
                  defaultValue={this.state.primary_diet}
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
                  defaultValue={this.state.consistency}
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
                  defaultValue={this.state.one_to_one_feed}
                  className="mb-3"
                  name="one_to_one_feed"
                >
                  {this.generateOptions("one_to_one_feed", ["yes", "no"])}
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
                  defaultValue={this.state.liquid}
                  className="mb-3"
                  name="liquid"
                >
                  {this.generateOptions("liquid", [
                    "Thin-Liquid",
                    "Nectar-Thick",
                    "Honey-Thick",
                    "N/A",
                  ])}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={{ span: 4 }}>
              <Form.Group>
                <Form.Label>Straw</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={this.state.straw}
                  className="mb-3"
                  name="straw"
                >
                  {this.generateOptions("straw", ["yes, pinched", "no", "yes"])}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row>
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
                  name="comment"
                ></Form.Control>
              </Form.Group>
            </Col>
            </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Diet);
