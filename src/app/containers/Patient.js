import React, { Component } from "react";
import { connect } from "react-redux";
import { SignOutIcon } from "@primer/octicons-react";
import { logoutUser, updateUserInformation } from "../actions/users";
import EditUser from "../components/forms/EditUser";
import { withRouter } from "react-router-dom";
import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
  Card,
  Container,
  ListGroup,
} from "react-bootstrap";
import {
  billingInfo,
  emergencyCont,
  healthInsInfo,
  personalInfo,
  securityInfo,
} from "/Users/johnlovitsch/Desktop/mod5 project/IntuitChart/intuit_chart_frontend/src/app/categories/UserCategories.js";
import LogoLarge from "/Users/johnlovitsch/Desktop/mod5 project/IntuitChart/intuit_chart_frontend/src/LogoLarge.png";
import Words from "/Users/johnlovitsch/Desktop/mod5 project/IntuitChart/intuit_chart_frontend/src/Words.png";
import  Records  from "../components/forms/Records";
import { setRecords } from "../actions/patients";

class Patient extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    employee_id: "",
    employee_type: "",
    emergency_contact_name: "",
    emergency_contact_relationship: "",
    emergency_contact_phone: "",
    health_insurance_provider: "",
    health_insurance_policy_number: "",
    health_insurance_id: "",
    street_address: "",
    street_address_2: "",
    city: "",
    state: "",
    zip: "",
    home_phone: "",
    cell_phone: "",
    email: "",
    billing_address: "",
    billing_address_2: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
    switch: [],
  };

  hidden = () => {
    return <>hidden</>;
  };

  componentDidMount() {
      const token = localStorage.getItem("my_app_token")
    fetch(`http://localhost:3001/users/${this.props.user.id}/records`, {
        method: "GET",
        headers: {
            Authoization: `Bearer ${token}`,
          "Content-type": "application/json",
          Accept: "application/json",
        }
      })
        .then((response) => {
          return response.json();
        })
        .then((records) => this.props.setRecords(records));

    Object.keys(this.state).map((s) => {
      console.log(this.props.user[s]);
      this.setState({
        [s]: this.props.user[s],
      });
    });
    this.setState({ switch: [], password: "" });
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  printInfo = (array) => {
    return array.map((a) => {
      const uppercased = a.replace(a[0], a[0].toUpperCase());
      const spaces = uppercased.replaceAll("_", " ");

      return (
        <Form.Group style={{ padding: "10px" }}>
          <Form.Label>{spaces}</Form.Label>
          <Form.Control name={a} value={this.state[a]} />
        </Form.Group>
      );
    });
  };
  handleClick = (props) => {
    if (props === "records") {
    }
    this.setState({
      switch: props,
    });
  };

  handleLogout = () => {
    localStorage.removeItem("my_app_token");
    this.props.logoutUser();
  };

  render() {
      console.log(this.props)
    return (
      <>
        <div className="parent">
          <Row style={{ margin: "1rem" }}>
            <Col md="2">
              <Card
                className="card-shadow"
                style={{ height: "90vh", overflow: "scroll" }}
              >
                <Card.Header>
                  <strong>{this.props.user.username}'s Dashboard</strong>
                </Card.Header>
                <Card.Body>
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#1761a0",
                    }}
                    md-2
                    name="records"
                    onClick={() => this.handleClick(["records"])}
                  >
                    Medical Records
                  </Button>
                  <hr />

                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#1761a0",
                    }}
                    md-2
                    name="switch"
                    onClick={() => this.handleClick(billingInfo)}
                  >
                    Billing Information
                  </Button>
                  <hr />
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#1761a0",
                    }}
                    name="switch"
                    onClick={() => this.handleClick(emergencyCont)}
                  >
                    Emergency Information
                  </Button>
                  <hr />
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#1761a0",
                    }}
                    name="switch"
                    onClick={() => this.handleClick(healthInsInfo)}
                  >
                    Health Insurance Information
                  </Button>
                  <hr />
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#1761a0",
                    }}
                    name="switch"
                    onClick={() => this.handleClick(personalInfo)}
                  >
                    Personal Information
                  </Button>
                  <hr />
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#1761a0",
                    }}
                    name="switch"
                    onClick={() => this.handleClick(securityInfo)}
                  >
                    Change Password
                  </Button>
                  {this.state.switch.length === 0 ? null : (
                    <>
                      <hr />
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "#1761a0",
                        }}
                        name="switch"
                        onClick={() => this.handleClick([])}
                      >
                        Back
                      </Button>
                    </>
                  )}

                  <div style={{ position: "absolute", bottom: "1rem" }}>
                    <hr />
                    <Button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#1761a0",
                      }}
                      onClick={() => this.handleLogout()}
                    >
                      Exit Profile
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-shadow" style={{ height: "90vh" }}>
                <Card.Body style={{ padding: "5px" }}>
                  {this.state.switch.length <= 1 ? (
                    this.state.switch.length === 1 ? (
                      <Records admissions={this.props.myAdmissions.records}/>
                    ) : (
                      <Card.Img src={LogoLarge} />
                    )
                  ) : (
                    <Card
                      style={{
                        width: "100%",
                        height: "100%",
                        overflow: "scroll",
                      }}
                    >
                      <Form
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                      >
                        <Row md={3} style={{ margin: "0", padding: "1rem" }}>
                          {this.printInfo(this.state.switch)}
                        </Row>

                        {this.state.switch.length !== 0 ? (
                          <>
                            <Col md={{ offset: "4", span: "4" }}>
                              <InputGroup
                                mb={4}
                                style={{ margin: "0", padding: "1rem" }}
                              >
                                <FormControl
                                  name="password"
                                  type="password"
                                  placeholder="to update, enter password"
                                  value={this.state.password}
                                />

                                <InputGroup.Append>
                                  <Button
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "none",
                                      color: "#1761a0",
                                    }}
                                    type="submit"
                                  >
                                    Submit
                                  </Button>
                                </InputGroup.Append>
                              </InputGroup>
                              <Button
                          style={{
                            backgroundColor: "transparent",
                            border: "solid",
                            color: "#1761a0",
                          }}
                          name="switch"
                          onClick={() => this.handleClick([])}
                        >
                          Back
                        </Button>

                            </Col>
                          </>
                        ) : null}

                      </Form>{" "}
                    </Card>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* <Container fluid>
          <Row className="mainRow">
            <Col className="columnRight">
              <div
                onClick={(e) => {
                  this.handleClick(e);
                }}
              >
                <button
                  as={Row}
                  className="mb-2"
                  variant="dark"
                  name="personal"
                >
                  Edit Personal Information
                </button>
                <button as={Row} className="mb-2" variant="dark" name="health">
                  Health Insurance
                </button>
                <button
                  as={Row}
                  className="mb-2"
                  variant="dark"
                  name="emergency"
                >
                  Emergency Contact
                </button>
                <button as={Row} className="mb-2" variant="dark" name="billing">
                  Edit Billing Address
                </button>
              </div>
              <Row>
                <div>
                  <SignOutIcon type="button" size={35} />
                </div>
              </Row>
            </Col>
            <Col lg={10} className="centerColumn">
              Print
              {this.editType()}
            </Col>
          </Row>
        </Container> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  myAdmissions: state.admissions.array,
});

export default connect(mapStateToProps, { logoutUser, setRecords })(withRouter(Patient));
