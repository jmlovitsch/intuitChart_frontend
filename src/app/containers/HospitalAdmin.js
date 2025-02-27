import React, { Component } from "react";
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
import CreateEmployee from "../components/forms/CreateEmployee";
import EditUser from "../components/forms/EditUser";
import { fetchAllEmployees, logoutUser } from "../actions/users";
import { admin, allCategories } from "../categories/UserCategories";
import DeletePopUp from "../components/hooks/DeletePopUp";
import CreateAdmission from "../components/forms/CreateAdmission";

class HospitalAdmin extends Component {
  state = {
    task: "",
    itemED: "",
  };

  componentDidMount() {
    this.props.fetchAllEmployees(localStorage.my_app_token, this.props.id);
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
          <CreateEmployee handleBack={this.handleBack} arrayKeys={admin} />
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
            itemED={this.state.itemED}
            handleBack={this.handleBack}
            arrayKeys={allCategories}
          />
        );
      case "createAdmission":
        return <CreateAdmission handleBack={this.handleBack} />;
      default:
        return (
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
              className="m-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#1761a0",
              }}
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
              className="m-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#1761a0",
              }}
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
      <>
        <div className="parent">
          <Row style={{ margin: "1rem" }}>
            <>
              <Col md="2">
                <Card
                  className="card-shadow"
                  style={{ height: "90vh", overflow: "scroll" }}
                >
                  <Card.Header>
                    <strong>Welcome, Hospital Administrator</strong>
                  </Card.Header>
                  <Card.Body>
                    <Button
                      className="m-3"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#1761a0",
                      }}
                      name="createUser"
                      onClick={(e) => {
                        this.handleClick(e);
                      }}
                    >
                      Create Employee
                    </Button>
                    <Button
                      className="m-3"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#1761a0",
                      }}
                      name="createAdmission"
                      onClick={(e) => {
                        this.handleClick(e);
                      }}
                    >
                      Create Admission
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="card-shadow" style={{ height: "90vh" }}>
                  <Card.Body style={{ padding: "5px" }}>
                    <Card style={{ height: "100%", overflow: "scroll" }}>
                      {this.renderTask()}
                    </Card>
                  </Card.Body>
                </Card>
              </Col>
            </>
          </Row>
        </div>
      </>
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
