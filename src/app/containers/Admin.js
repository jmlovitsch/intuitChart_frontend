import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container, Button, Table, Card } from "react-bootstrap";
import CreateUser from "../components/forms/CreateUser";
import EditUser from "../components/forms/EditUser";
import { SignOutIcon } from "@primer/octicons-react";
import { logoutUser } from "../actions/users";
import { fetchAllUsers } from "../actions/users";
import Logo from "../../Logo.png";
class Admin extends Component {
  state = {
    task: "",
    itemED: "",
  };

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  sortArray = (type) => {
    switch (type) {
      case "alphabetical":
        return; //sort array alph;
      case "":
        return null;
      default:
        return null;
    }
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
        return null;
      case "editUser":
        return (
          <EditUser
            handleBack={this.handleBack}
            arrayKeys={this.allCategories}
            itemED={this.state.itemED}
          />
        );

      default:
        return (
          <>
            <Card className="scroll-page">
              <Container className="scroll-page-title">
                All Users Sort Container
                <br />
                <Button onClick={() => this.sortArray("alphabetical")}>
                  Alphabetical
                </Button>
              </Container>
            </Card>

            <Card className="all-empl-page">
              <Table striped bordered hover >
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
            </Card>
          </>
        );
    }
  };

  renderEmployees = () => {
     const usersArray = this.props.users
    return usersArray.map((u) => {
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
              }}style={{backgroundColor: "transparent", border: "none", color: "#1761a0"}}
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
              }}style={{backgroundColor: "transparent", border: "none", color: "#1761a0"}}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <Row xs={2} md={4} lg={12}>
        <Col className="main" lg={2}>
          <Card className="small-btns mb-3">
            <Card.Img
              variant="top"
              src={Logo}
              className="mb-2"
              // style={{ padding: "1em" }}
            />
          </Card>
          <Card className="small-btns mb-3">
            <Container>Welcome, Admin.</Container>
            <Button
              name="createUser"
              onClick={(e) => {
                this.handleClick(e);
              }}
              className="m-3"
              style={{backgroundColor: "transparent", border: "none", color: "#1761a0"}}
            >
              Create User
            </Button>
          </Card>
          <Card className="small-btns mb-3">
            <Container>Messaging App Here</Container>
          </Card>
          <Card className="small-btns mb-3" style={{ padding: "3px" }}>
            <Container>
              {" "}
              <Row onClick={this.handleLogout}>
                <SignOutIcon type="button" size={35} />{" "}
                <Card.Text>Log Out</Card.Text>
              </Row>
            </Container>
          </Card>
        </Col>
        <Col
          className="main"
          lg={10}
          style={{ outline: "solid", outlineColor: "whitesmoke" }}
        >
          {this.renderTask()}{" "}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.employee.employeeList,
});

export default connect(mapStateToProps, { logoutUser, fetchAllUsers })(Admin);
