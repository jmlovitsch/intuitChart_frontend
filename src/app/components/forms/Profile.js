import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  billingInfo,
  emergencyCont,
  healthInsInfo,
  personalInfo,
} from "../../categories/UserCategories";

export class Profile extends Component {
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
    switch: [],
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  printInfo = (array) => {
    return array.map((a) => {
      return (
        <Form.Group>
          <Form.Label>{a}</Form.Label>
          <Form.Control />
        </Form.Group>
      );
    });
  };

  handleClick = (props) => {
    this.setState({
      switch: props,
    });

  };


  render() {
    return (<>
        <Row lg={2} style={{ margin: "0", padding: "0"}}>

        <Button onClick={() => this.handleClick(billingInfo)}>
          Billing Information
        </Button>
        <Button onClick={() => this.handleClick(emergencyCont)}>
          Emergency Information
        </Button>

        <Button onClick={() => this.handleClick(healthInsInfo)}>
          Health Insurance Information
        </Button>

        <Button onClick={() => this.handleClick(personalInfo)}>
          Personal Information
        </Button>



        <Button onClick={() => this.handleClick([])}>
         Back
        </Button>
        <Button onClick={() => this.props.history.goBack()}>
         Exit Profile
        </Button>
        </Row>

        <Form onChange={this.handleChange}>
          {this.printInfo(this.state.switch)}
        </Form>

</>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));
