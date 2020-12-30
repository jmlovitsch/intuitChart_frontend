import React, { Component, render } from "react";
import { connect } from "react-redux";
import { SignOutIcon, KeyIcon } from "@primer/octicons-react";
import { withRouter } from "react-router-dom";
import { logoutUser } from "/Users/johnlovitsch/Desktop/mod5 project/IntuitChart/intuit_chart_frontend/src/app/actions/users.js";
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
import LogoNE from "../../LogoNE.png";
import Words2 from "../../Words2.png";
import { openAddPatient } from "../actions/patients";

class Header extends Component {
  constructor() {
    super();
  }

//   handleLogout = () => {
//     localStorage.removeItem("my_app_token");
//     this.props.history.push("/login");
//     this.props.logoutUser();
//   };
  handleLogout = () => {
    localStorage.removeItem("my_app_token");
    this.props.history.push("/login");
    this.props.logoutUser();
  };
  handleCloseWorkday = (event) => {
    event.preventDefault();
  };

  renderAdd = () => {
    this.props.renderAdd();
  };

  handleClick=()=>{
    console.log("Clicked")
    this.props.history.push(`/dashboard/${this.props.user.id}/profile`)
  }
  renderwithToken = () => {
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
                <NavDropdown.Item name="profile" onClick={this.handleClick}>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={this.handleLogout}>
                  Lock
                  <KeyIcon />
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={this.handleCloseWorkday}>
                  Close Workday
                  <SignOutIcon />
                </NavDropdown.Item>
              </NavDropdown>
            </Row>
          </Navbar.Text>

        </>
      );
    }
  };
  renderPatientChart = () => {
    
  }
  renderPatientsToDropdown = () => {
      return this.props.user.admissions.map(admission =>{
        return <NavDropdown.Item onClick={this.renderPatientChart}>{admission.patient.first_name}{" "}{admission.patient.last_name}</NavDropdown.Item>
      })
  }

  render() {
    console.log(this.props.user.admissions[0].patient.first_name)
    return (
      <Navbar
        fixed="top"
        className="header justify-content-between align-content-center "
        style={{ padding: "10px", backgroundColor: "whitesmoke" }}
      >
        <Row style={{ margin: "0" }} className="justify-content-start">
          {this.renderwithToken()}
        </Row>

        <Row style={{ margin: "0" }} className="justify-content-end" >
<div >
          <NavDropdown title="Patients" id="basic-nav-dropdown" >
              {this.renderPatientsToDropdown()}
            <NavDropdown.Item onClick={() => this.props.openAddPatient()}>
              Add Patient
            </NavDropdown.Item>
          </NavDropdown>
          </div>
          <div>
          <Navbar.Brand
            className="logo"
            href="/"
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
              src={LogoNE}
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
});

export default connect(mapStateToProps, { logoutUser, openAddPatient })(
  withRouter(Header)
);
