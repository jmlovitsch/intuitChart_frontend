import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container, Button, Table } from "react-bootstrap";
import CreateUser from "../components/forms/CreateUser";
import EditUser from "../components/forms/EditUser";
import { SignOutIcon } from "@primer/octicons-react";
import { logoutUser } from "../actions/users";
import { fetchAllUsers } from "../actions/users";

class Admin extends Component {
  state = {
    task: "",
  };

  componentDidMount() {
    this.props.fetchAllUsers();
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

  //   handleClick = (e) => {
  //     this.setState({
  //       task: e.target.name,
  //     });
  //   };

  handleClick = (e) => {
    this.setState({
      task: e.target.name,
      itemED: e.target.id,
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
        return null;
      case "editUser":
        return (
          <EditUser
            handleBack={this.handleBack}
            arrayKeys={this.allCategories}
          />
        );

      default:
        return (
          <Container className="child" >
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
    return this.props.users.map((u) => {
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
    console.log(this.props);
    return (
      <Container fluid className="parent">
        <Row className="mainRow">
          <Col className="columnRight">
            <Row>Welcome, Admin.</Row>
            <Button
              as={Row}
              name="createUser"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              Create User
            </Button>
            {/* <Button
              name="editUser"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              Edit User
            </Button>
            <Button
              name="deleteUser"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              Delete User
            </Button> */}
            <Row>
              <div
                onClick={() => this.handleLogout()}
                style={{ position: "absolute", bottom: "110px", left: "20px" }}
              >
                <SignOutIcon type="button" size={35} />
              </div>
            </Row>
          </Col>
          <Col lg={10} >

            {this.renderTask()}

          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.employee.employeeList,
});

export default connect(mapStateToProps, { logoutUser, fetchAllUsers })(Admin);
