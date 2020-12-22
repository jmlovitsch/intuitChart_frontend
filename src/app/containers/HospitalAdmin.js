import React, { Component, useState } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  Table,
  Card,
} from "react-bootstrap";
import CreateUser from "../components/forms/CreateUser";
import EditUser from "../components/forms/EditUser";
import { SignOutIcon } from "@primer/octicons-react";
import { fetchAllEmployees, logoutUser } from "../actions/users";
import { admin, allCategories } from "../categories/UserCategories";
import DeletePopUp from "../components/hooks/DeletePopUp";

class HospitalAdmin extends Component {
  state = {
    task: "",
    itemED: "",
  };

  componentDidMount() {
        this.props.fetchAllEmployees(
        localStorage.my_app_token,
        this.props.id
      );
  }

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
          <CreateUser handleBack={this.handleBack} arrayKeys={admin} />
        );
      case "deleteUser":
        return (
          <DeletePopUp handleBack={this.handleBack} itemED={this.state.itemED} />
        );
      case "editUser":
        return (
          <EditUser
            itemED={this.state.itemED}
            handleBack={this.handleBack}
            arrayKeys={allCategories}
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
              <div onClick={() => this.handleLogout()} style={{ position: "absolute", bottom: "20px", left: "-20px" }}>
                <SignOutIcon type="button" size={35} />
              </div>
            </Row>
          </Col>{" "}
          <Col lg={10} className="centerColumn">
            <Card>{this.renderTask()}</Card>
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
  fetchAllEmployees,
})(HospitalAdmin);
