import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Form, Row, Button } from "react-bootstrap";
import { fetchCreateOrder } from "../../../actions/orders";

class Nursing extends Component {
  state = {
    frequency: "",
    duration: "",
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
    const token = localStorage.getItem("my_app_token");
    this.props.fetchCreateOrder(token, "nursings", { nursing: this.state });
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
              <Form.Label>Frequency</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                className="mb-3"
                name="frequency"
              >
                {this.generateOptions("frequency", [
                  "Shift",
                  "Daily",
                  "2x/shift",
                  "As Tolerated",
                  "Per Unit Routine (i.e. vitals)",
                  "Once",
                  "ACHS (i.e. accuchecks)",
                  "with Meals",
                  "3x/day",
                  "Continuous",
                ])}
              </Form.Control>
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Label>Duration</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                className="mb-3"
                name="duration"
              >
                {this.generateOptions("roomService", [
                  "until Discontinued",
                  "Once",
                  "#Hours",
                  "#Days",
                  "until Condition Met (i.e. CIWA < 6 for 24 hours",
                ])}
              </Form.Control>
            </Form.Group>

              <Form.Group>
                <Form.Label>Comment</Form.Label>
              </Form.Group>



              <Form.Group>
                <Form.Control
                  as="textarea"
                  placeholder="Enter Any Notes..."
                  className="mb-3"
                  name="comment"
                ></Form.Control>
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

const mapStateToProps = (state) => ({
    user: state.user,
    admission: state.admissions.currentAdmission

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, {fetchCreateOrder})(Nursing);
