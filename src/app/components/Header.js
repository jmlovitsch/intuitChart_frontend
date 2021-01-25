import React, { Component, render } from "react";
import { connect } from "react-redux";
import { SignOutIcon, KeyIcon } from "@primer/octicons-react";
import { NavLink, withRouter } from "react-router-dom";
import {logoutUser} from "../actions/users.js"
import {
  Card,
  Col,
  Container,
  Navbar,
  NavDropdown,
  Row,
  Button,
  Tooltip,
  OverlayTrigger,
  Nav,
  NavbarBrand,
} from "react-bootstrap";
import { openAddPatient, setCurrentPatient } from "../actions/patients";
import { setCurrentAdmission } from "../actions/admission";
import { fetchRemoveAssignment } from "../actions/assignments";
import { SelfCreateUser } from "./hooks/SelfCreateUser";
import { createUserSuccess } from "../actions/auth";
import { Login } from "./Login";
import Head from '../images/Head.png'
import Words2 from '../images/Words2.png'
class Header extends Component {
  state = {
    logout: false,
  };

  handleLogout = (promise) => {
    this.setState({
      logout: false,
    });
    localStorage.removeItem("my_app_token");
    this.props.history.push("/login");
    this.props.logoutUser();
  };

  ////////

  renderAdd = () => {
    this.props.renderAdd();
  };

  handleClick = () => {
    this.props.history.push(`/dashboard/${this.props.user.id}/profile`);
  };

  handleSubmit = (props) => {
    let newPatient = {
      username: props.username,
      password: props.password,
      authorization: "patient",
    };
    this.props.createUserSuccess(newPatient);
  };

  renderwithToken = (handleCloseWorkday) => {
    const token = localStorage.getItem("my_app_token");
    if (token) {
      return (
        <>
          <Navbar.Text className="justify-content-start">
            <Row style={{ margin: "0" }}>
              {" "}
              <Navbar.Text>Signed in as:</Navbar.Text>{" "}
              <NavDropdown
                title={this.props.user.username}
                // title={`Signed in as: ${this.props.user.username}`}
                id="basic-nav-dropdown"
              >
                {this.props.user.authorization === "employee" ? (
                  <NavDropdown.Item name="profile" onClick={this.handleClick}>
                    Profile
                  </NavDropdown.Item>
                ) : null}
                <NavDropdown.Item onClick={this.handleLogout}>
                  Lock
                  <KeyIcon />
                </NavDropdown.Item>
                {this.props.user.authorization === "employee" ? (
                  <>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => handleCloseWorkday()}>
                      Close Workday
                      <SignOutIcon />
                    </NavDropdown.Item>{" "}
                  </>
                ) : null}
              </NavDropdown>
            </Row>
          </Navbar.Text>
        </>
      );
    } else {
      return (
        <>
          <SelfCreateUser
            handleSubmit={this.handleSubmit}
            createUserSuccess={this.props.createUserSuccess}
          />
        </>
      );
    }
  };

  //   renderPatientChart = (assignment, admission) => {
  //       let currentAdmission = this.props.admissions.find(ad => ad.patient.id === admission.patient.id)
  //     this.props.setCurrentAdmission(currentAdmission);
  //     this.props.setCurrentPatient(currentAdmission.patient);
  //     this.props.history.push(
  //       `/dashboard/${this.props.user.id}/admissions/${assignment.admission.id}`
  //     );
  //   };

  renderPatientChart = (assignment, admission) => {
    this.props.setCurrentAdmission(admission);
    this.props.setCurrentPatient(admission.patient);
    this.props.history.push(
      `/dashboard/${this.props.user.id}/admissions/${assignment.admission.id}`
    );
  };

  removeAssignmentfromEmployee = (e, assignment, admission) => {
    e.preventDefault();
    const token = localStorage.getItem("my_app_token");
    this.props.fetchRemoveAssignment(token, assignment, admission);
  };
  renderPatientsToDropdown = () => {
    return this.props.assignments.map((assignment) => {
      const admission = this.props.admissions.find((admission) => {
        return admission.id === assignment.admission.id;
      });
      return (
        <NavDropdown.Item style={{ width: "300px" }}>
          <Row className="justify-content-between">
            <Button
              style={{ padding: ".5", margin: "0" }}
              style={{
                backgroundColor: "transparent",
                border: "solid",
                color: "#1761a0",
              }}
              onClick={() => this.renderPatientChart(assignment, admission)}
            >
              {assignment.patient.first_name} {assignment.patient.last_name}
            </Button>
            <Button
              md="1"
              style={{
                backgroundColor: "#238a91",
                border: "none",
              }}
            >
              {" "}
              <img
                type="button"
                onClick={(e) =>
                  this.removeAssignmentfromEmployee(
                    e,
                    assignment,
                    assignment.admission
                  )
                }
                src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Trash_font_awesome.svg"
                style={{ width: "auto", height: "25px" }}
                alt="trash"
              />
            </Button>
          </Row>
        </NavDropdown.Item>
      );
    });
  };

  clickedLogo = () => {
    if (this.props.user.authorization === "employee") {
      this.props.history.push(
        `/dashboard/${this.props.user.id}/admissions/brainpage`
      );
    } else if (this.props.user.authorization === "admin") {
      return null;
    }
  };

  setting = () => {
    this.setState({
      logout: true,
    });
  };

  render() {
    console.log(this.props);

    const id = this.props.user.id;
    const pushing = () =>
      this.props.history.push(`/dashboard/${id}/admissions/brainpage`);

    const assignments = this.props.assignments;
    const token = localStorage.getItem("my_app_token");
    const fetchRemoveAssignment = this.props.fetchRemoveAssignment;
    const setState = () => this.setting();
    let num = 1000;

    async function fetchIt(assignment) {
      num = num + 500;
      setTimeout(() => {
        fetchRemoveAssignment(token, assignment);
      }, num);
    }

    async function clearTheCache() {
      pushing();
      assignments.forEach((assignment) => {
        return fetchIt(assignment).then(console.log("it waited"));
      });
    }

    async function handleCloseWorkday() {
      await clearTheCache().then(setState());
    }

    return (
      <Navbar
        fixed="top"
        className="header justify-content-between align-content-center "
      >
        {this.state.logout && this.props.assignments.length === 0
          ? this.handleLogout()
          : null}{" "}
        <Row style={{ margin: "0" }} className="justify-content-start">
          {this.props.user.authorization === "patient" ? (
            <div>Signed in as: {this.props.user.username}</div>
          ) : (
            this.renderwithToken(handleCloseWorkday)
          )}
        </Row>
        <Row style={{ margin: "0" }} className="justify-content-end">
          {this.props.user.authorization === "employee" ? (
            this.props.user.id ? (
              <NavDropdown
                style={{ paddingTop: ".75rem", paddingRight: "1rem" }}
                title="Patients"
                id="basic-nav-dropdown"
              >
                {this.props.assignments.length > 0
                  ? this.renderPatientsToDropdown()
                  : null}
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() =>
                    // this.props.openAddPatient()
                    this.props.history.push(
                      `/dashboard/${this.props.user.id}/admissions`
                    )
                  }
                >
                  Add Patient
                </NavDropdown.Item>
              </NavDropdown>
            ) : null
          ) : null}

          <div>
            <Navbar.Brand
              className="logo"
              onClick={this.clickedLogo}
              style={{ color: "#238a917c", marginRight: "0px" }}
            >
              <img
                alt=""
                src={Words2}
                width="200"
                height="auto"
                style={{ margin: "-15px" }}
              />

              <img
                alt=""
                src={Head}
                width="auto"
                height="65"
                style={{ margin: "0px" }}
              />
            </Navbar.Brand>
          </div>
        </Row>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  admissions: state.admissions.array,
  assignments: state.assignments.assignmentsArray,
});

export default connect(mapStateToProps, {
  logoutUser,
  openAddPatient,
  fetchRemoveAssignment,
  setCurrentAdmission,
  setCurrentPatient,
  createUserSuccess,
})(withRouter(Header));
