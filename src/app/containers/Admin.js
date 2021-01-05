import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container, Button, Table, Card } from "react-bootstrap";
import CreateUser from "../components/forms/CreateUser";
import EditUser from "../components/forms/EditUser";
import { logoutUser } from "../actions/users";
import { fetchAllUsers } from "../actions/users";
import { allCategories } from "../categories/UserCategories";
import DeletePopUp from "../components/hooks/DeletePopUp";
import { clearEmployeeMessages } from "../actions/employees";

class Admin extends Component {
  state = {
    task: "",
    itemED: "",
  };

  componentDidMount() {
    if (this.props.employees.length === 0) {
      this.props.fetchAllUsers();
    }
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
    this.props.clearEmployeeMessages();
  };

  handleLogout = () => {
    localStorage.removeItem("my_app_token");
    this.props.logoutUser();
  };

  renderTask = () => {
    switch (this.state.task) {
      case "createUser":
        return (
          <div>
            <CreateUser
              handleBack={this.handleBack}
              arrayKeys={allCategories}
            />
          </div>
        );
      case "deleteUser":
        return (
          <DeletePopUp
            handleBack={this.handleBack}
            itemED={this.state.itemED}
          />
        );
      case "editUser":
        return (
          <EditUser
            handleBack={this.handleBack}
            arrayKeys={allCategories}
            itemED={this.state.itemED}
          />
        );

      default:
        return (
          <>
            {/* <Card className="scroll-page">
              <Container className="scroll-page-title">
                All Users Sort Container
                <br />
                <Button onClick={() => this.sortArray("alphabetical")}>
                  Alphabetical
                </Button>
              </Container>
            </Card> */}

            <Card style={{height: "100%", overflow: "scroll"}}>
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
            </Card>
          </>
        );
    }
  };

  renderEmployees = () => {
    const employeesArray = this.props.employees;
    return employeesArray.map((u) => {
      return (
        <tr key={u.id} >
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
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#1761a0",
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
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#1761a0",
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
      <div className="parent">
        <Row style={{ margin: "1rem" }}>
          <>
            <Col md="2">
              <Card
                className="card-shadow"
                style={{ height: "90vh", overflow: "scroll" }}
              >
                <Card.Header>
                  <strong>Welcome, Admin.</strong>
                </Card.Header>
                <Card.Body>
                  <Button
                    name="createUser"
                    onClick={(e) => {
                      this.handleClick(e);
                    }}
                    className="m-3"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#1761a0",
                    }}
                  >
                    Create User
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-shadow" style={{ height: "90vh" }}>

                <Card.Body style={{padding: "5px", height: "100%", overflow: "scroll"}}>
                  {this.renderTask()}
                </Card.Body>
              </Card>
            </Col>
          </>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,

    employees: state.employee.employeeList,
  };
};
export default connect(mapStateToProps, {
  logoutUser,
  clearEmployeeMessages,
  fetchAllUsers,
})(Admin);
