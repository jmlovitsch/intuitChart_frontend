import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container, Button, Form, Table } from "react-bootstrap";
import CreateUser from "../components/forms/CreateUser";
import EditUser from "../components/forms/EditUser";
import DeleteUser from "../components/forms/deleteUser";
import { SignOutIcon } from "@primer/octicons-react";
import { fetchAllEmployees, logoutUser } from "../actions/users";
import { fetchWithToken } from "../actions/auth";

class HospitalAdmin extends Component {
  state = {
    task: "",
  };

  admin = ["username", "password", "authorization"];

  employee = ["employee_id", "employee_type"];

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

  allCategories = this.emergencyCont.concat(
    this.healthInsInfo,
    this.personalInfo,
    this.billingInfo,
    this.employee
  );

  componentDidMount() {
    this.props.fetchAllEmployees(localStorage.my_app_token, this.props.id);
  }

  handleClick = (e) => {
    this.setState({
      task: e.target.name,
    });
  };

  handleBack = () => {
    this.setState({
      task: "",
    });
  };
  handleLogout = () => {
    localStorage.removeItem("my_app_token");
    this.props.logoutUser();
  };

  renderTask = () => {
    switch (this.state.task) {
      case "createUser":
        return (
          <CreateUser handleBack={this.handleBack} arrayKeys={this.admin} />
        );
      case "deleteUser":
        return <DeleteUser handleBack={this.handleBack} />;
      case "editUser":
        return (
          <EditUser
            handleBack={this.handleBack}
            arrayKeys={this.allCategories}
          />
        );
      default:
        return (
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Employee ID</th>
                  <th>Authorization</th>
                  <th>Medical Group</th>
                </tr>
              </thead>
              <tbody>{this.renderEmployees()}</tbody>
            </Table>
          </Container>
        );
    }
  };

  renderEmployees = () => {
    return this.props.employees.map((e) => {
      return (
        <tr>
          <td>{e.id}</td> <td>{e.username}</td> <td>{e.first_name}</td>{" "}
          <td>{e.last_name}</td> <td>{e.employee_id}</td>{" "}
          <td>{e.authorization}</td> <td>{e.medical_group}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <Container fluid>
        <Row className="mainRow">
          <Col className="columnRight">
            <Row>Welcome, Hospital Administrator</Row>
            <Row>
              <Button
                name="createUser"
                onClick={(e) => {
                  this.handleClick(e);
                }}
              >
                Create User
              </Button>
            </Row>
            <Row>
              <Button
                name="editUser"
                onClick={(e) => {
                  this.handleClick(e);
                }}
              >
                Edit User
              </Button>
            </Row>
            <Row>
              <Button
                name="deleteUser"
                onClick={(e) => {
                  this.handleClick(e);
                }}
              >
                Delete User
              </Button>
            </Row>
            <Row>
              <div onClick={() => this.handleLogout()}>
                <SignOutIcon type="button" size={35} />
              </div>
            </Row>
          </Col>
          <Col lg={10} className="centerColumn">
            {this.renderTask()}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id,
  medical_group: state.user.medical_group,
  employees: state.employee.employeeList,
});

export default connect(mapStateToProps, {
  logoutUser,
  fetchWithToken,
  fetchAllEmployees,
})(HospitalAdmin);
