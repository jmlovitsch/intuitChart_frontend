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
} from "react-bootstrap";
import LogoNE from "../../LogoNE.png";
import Words2 from "../../Words2.png";
import { openAddPatient } from "../actions/patients";

class Header extends Component {
    constructor(){
        super()
    }



  handleLogout = () => {
    localStorage.removeItem("my_app_token");
    this.props.history.push("/login");
    this.props.logoutUser();
  };
  handleLogout = () => {
    localStorage.removeItem("my_app_token");
    this.props.history.push("/login");
    this.props.logoutUser();
  };
  handleCloseWorkday = (event) => {
    event.preventDefault();
  };

  renderAdd = () => {
      this.props.renderAdd()
  }
  renderwithToken = () => {
    const token = localStorage.getItem("my_app_token");
    if (token) {
      return (
        <>
          <Navbar.Text className="justify-content-start">
            Signed in as: <a href="">{this.props.user.username}</a>
          </Navbar.Text>

          <NavDropdown
            title={`Signed in as: ${this.props.user.username}`}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item>Profile</NavDropdown.Item>
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

          <NavDropdown title="Patients" id="basic-nav-dropdown">
          {/* {this.props.user.assignments.map(a => {
                  return <NavDropdown.Item onClick={this.props.history.push('/')}>{a}</NavDropdown.Item>
              })} */}
            <NavDropdown.Item onClick={()=>this.props.openAddPatient()}>Add Patient</NavDropdown.Item>
          </NavDropdown>
        </>
      );
    }
  };

  render() {
    return (
      <Navbar
        fixed="top"
        className="header justify-content-between align-content-bottom "
        style={{ padding: "10px", backgroundColor: "whitesmoke" }}
      >
        <Row style={{ margin: "0" }} className="justify-content-start">
          {this.renderwithToken()}
        </Row>

        <Navbar.Brand
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
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser, openAddPatient })(withRouter(Header));
