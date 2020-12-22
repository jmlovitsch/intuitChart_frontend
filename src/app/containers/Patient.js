import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container, Button } from "react-bootstrap";
import { SignOutIcon } from "@primer/octicons-react";
import { logoutUser } from "../actions/users";
import EditUser from "../components/forms/EditUser";
import { withRouter } from "react-router-dom";

class Patient extends Component {

  state = {
    edit: "",
  };

  billingInfo = [
    "billing_address",
    "billing_address_2",
    "billing_city",
    "billing_state",
    "billing_zip",
  ];
  personalInfo = [
    "first_name",
    "last_name",
    "street_address",
    "street_address_2",
    "city",
    "state",
    "zip",
    "home_phone",
    "cell_phone",
    "email",
  ];

  healthInsInfo = [
    "health_insurance_provider",
    "health_insurance_policy_number",
    "health_insurance_id",
  ];

  emergencyCont = [
    "emergency_contact_name",
    "emergency_contact_relationship",
    "emergency_contact_phone",
  ];

  handleLogout = () => {
    localStorage.removeItem("my_app_token");
    this.props.logoutUser();
  };

  editType = () => {
    switch (this.state.edit) {
      case "billing":
        return <EditUser arrayKeys={this.billingInfo} />;
      case "personal":
        return <EditUser arrayKeys={this.personalInfo} />;

      case "health":
        return <EditUser arrayKeys={this.healthInsInfo} />;

      case "emergency":
        return <EditUser arrayKeys={this.emergencyCont} />;
      default:
        return null;
    }
  };

  handleClick = (event) => {
    this.setState({
      edit: event.target.name,
    });
  };

  render() {
    return (
      <Container fluid>
        <Row className="mainRow">
          <Col className="columnRight">
            Patient Info:
            <div>Username: {this.props.username}</div>
            <div>
              {this.props.first_name} {this.props.last_name}
            </div>
            <div>{this.props.last_name}</div>
            <div
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              <button as={Row} className="mb-2" variant="dark" name="personal">
                Edit Personal Information
              </button>
              <button as={Row} className="mb-2" variant="dark" name="health">
                Health Insurance
              </button>
              <button as={Row} className="mb-2" variant="dark" name="emergency">
                Emergency Contact
              </button>
              <button as={Row} className="mb-2" variant="dark" name="billing">
                Edit Billing Address
              </button>
            </div>
            <Row>
              <div onClick={() => this.handleLogout()}>
                <SignOutIcon type="button" size={35} />
              </div>
            </Row>
          </Col>
          <Col lg={10} className="centerColumn">
            Print
            {this.editType()}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user,
});

export default connect(mapStateToProps, { logoutUser })(
  withRouter(Patient)
);
