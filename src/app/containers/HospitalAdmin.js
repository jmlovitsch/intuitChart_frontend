import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Container, Button, Form, Table } from "react-bootstrap";
import CreateUser from "../components/forms/CreateUser";
import EditUser from "../components/forms/EditUser";
import { SignOutIcon } from "@primer/octicons-react";
import { fetchAllEmployees, logoutUser } from "../actions/users";
import { fetchWithToken } from "../actions/auth";
import Example from "./Example";

class HospitalAdmin extends Component {
  state = {
    task: "",
    itemED: "",
  };

  componentDidMount() {
    const token = localStorage.getItem("my_app_token");
    if (token === "undefined") {
      localStorage.removeItem("my_app_token");
      return this.props.history.push("/");
    }
    if (!token) {
      localStorage.removeItem("my_app_token");
      return this.props.history.push("/");
    } else {
      return this.props.fetchAllEmployees(
        localStorage.my_app_token,
        this.props.id
      );
    }
  }

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

  handleClick = (e) => {
    this.setState({
      task: e.target.name,
      itemED: e.target.id,
    });
  };

  handleBack = () => {
    this.setState({
      task: "",
      itemED: "",
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
        return (
          <Example handleBack={this.handleBack} itemED={this.state.itemED} />
        );
      case "editUser":
        return (
          <EditUser
            itemED={this.state.itemED}
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
    return this.props.employees.map((u) => {
      return (
        <tr key={u.id}>
          <td>{u.id}</td>
          <td>{u.username}</td>
          <td>{u.first_name}</td>
          <td>{u.last_name}</td>
          <td>{u.employee_id}</td>
          <td>{u.authorization}</td>
          <td>{u.medical_group}</td>
          <td>
            <Button
              id={u.id}
              name="editUser"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              Update
            </Button>
          </td>
          <td>
            <Button
              id={u.id}
              name="deleteUser"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  render() {
    console.log(this.state.itemED);
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
