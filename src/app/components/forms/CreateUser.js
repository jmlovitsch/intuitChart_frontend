import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { createUserSuccess } from "../../actions/auth";

class CreateUser extends Component {
  state = {
    authorization: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    employee_id: "",
    employee_type: "",
    emergency_contact_name: "",
    emergency_contact_relationship: "",
    emergency_contact_phone: "",
    health_insurance_provider: "",
    health_insurance_policy_number: "",
    health_insurance_id: "",
    street_address: "",
    street_address_2: "",
    city: "",
    state: "",
    zip: "",
    home_phone: "",
    cell_phone: "",
    email: "",
    billing_address: "",
    billing_address_2: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
  };

  values = {
    authorization: ["", "admin", "hospital_admin", "employee", "patient"],
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    employee_id: "",
    employee_type: ["", "dr", "pn", "pa", "rn", "tech"],
    emergency_contact_name: "",
    emergency_contact_relationship: "",
    emergency_contact_phone: "",
    health_insurance_provider: "",
    health_insurance_policy_number: "",
    health_insurance_id: "",
    street_address: "",
    street_address_2: "",
    city: "",
    state: "",
    zip: "",
    home_phone: "",
    cell_phone: "",
    email: "",
    billing_address: "",
    billing_address_2: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
  };

  componentDidMount() {
    return this.props.arrayKeys.map((key) => {
      return this.setState({
        [key]: this.props.key,
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
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

  printForms = (keys) => {
    return keys.map((k) => {
      const uppercased = k.replace(k[0], k[0].toUpperCase());
      const spaces = uppercased.replaceAll("_", " ");
      if (Array.isArray(this.values[k])) {
        return (
          <Form.Group style={{ padding: "10px" }} controlId={k}>
            <Form.Label>{spaces}</Form.Label>
            <Form.Control
              as="select"
              name={k}
              value={this.state.k}
              className="mb-3"
            >
              {this.generateOptions(k, this.values[k])}
            </Form.Control>
          </Form.Group>
        );
      } else {
        return (
          <Form.Group style={{ padding: "10px" }} controlId={k}>
            <Form.Label>{spaces}</Form.Label>
            <Form.Control
              type="text"
              name={k}
              className="mb-3"
              value={this.state[k]}
            />
          </Form.Group>
        );
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createUserSuccess(this.state);
  };

  render() {
    return (
      <>
        <Form
          onChange={(e) => this.handleChange(e)}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <Row lg={4} noGutters>
            {this.printForms(Object.keys(this.state))}
          </Row>
          <hr />
          <Row className="justify-content-between" style={{ padding: "1rem" }}>
            <Button
              className="m-3"
              style={{
                backgroundColor: "transparent",
                border: "solid",
                color: "#1761a0",
              }}
              onClick={this.props.handleBack}
            >
              Back
            </Button>

            <Button
              className="m-3"
              style={{
                backgroundColor: "transparent",
                border: "solid",
                color: "#1761a0",
              }}
              type="submit"
            >
              Create
            </Button>
          </Row>
        </Form>

        <Container>
          {this.props.createdUser ? (
            <>
              <Row>{this.props.createdUser.username}</Row>
              <Row>{this.state.password}</Row>
              <Row>{this.props.createdUser.authorization}</Row>
            </>
          ) : null}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  createdUser: state.user.createdUser,
});

export default connect(mapStateToProps, { createUserSuccess })(CreateUser);
