import React, { Component } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateUserInformation } from "../../actions/users";
import {
  billingInfo,
  emergencyCont,
  healthInsInfo,
  personalInfo,
} from "../../categories/UserCategories";

class Profile extends Component {
  state = {
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

  componentDidMount() {
    Object.keys(this.state).map((s) => {
      console.log(this.props.user[s]);
      this.setState({
        [s]: this.props.user[s],
      });
    });
    this.setState({ switch: [], password:"" });
  }
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
          <Form.Control name={a} value={this.state[a]} />
        </Form.Group>
      );
    });
  };

  handleClick = (props) => {
    this.setState({
      switch: props,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("my_app_token");
    delete this.state.switch;
    const bodyObj = this.state;
    const userID = this.props.user.id;
    this.props.updateUserInformation(userID, bodyObj, token);
    this.setState({
        password: ""
    })
    this.handleClick([])
  };

  render() {
    return (
      <>
        <Row lg={2} style={{ margin: "0", padding: "0" }}>
          <Button name="switch" onClick={() => this.handleClick(billingInfo)}>
            Billing Information
          </Button>
          <Button name="switch" onClick={() => this.handleClick(emergencyCont)}>
            Emergency Information
          </Button>

          <Button name="switch" onClick={() => this.handleClick(healthInsInfo)}>
            Health Insurance Information
          </Button>

          <Button name="switch" onClick={() => this.handleClick(personalInfo)}>
            Personal Information
          </Button>

          <Button name="switch" onClick={() => this.handleClick([])}>
            Back
          </Button>
          <Button onClick={() => this.props.history.goBack()}>
            Exit Profile
          </Button>
        </Row>

        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          {this.printInfo(this.state.switch)}
          {this.state.switch.length !== 0 ? (
            <InputGroup className="mb-3">
              <FormControl name="password" type="password" placeholder="please enter password and then press submit" value={this.state.password} aria-describedby="basic-addon1" />
              <InputGroup.Append>
                <Button  type="submit" >Submit</Button>
              </InputGroup.Append>
            </InputGroup>
          ) : null}
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { updateUserInformation })(
  withRouter(Profile)
);
