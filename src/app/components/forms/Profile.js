import React, { Component } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateUserInformation } from "../../actions/users";
import {
  billingInfo,
  emergencyCont,
  healthInsInfo,
  personalInfo,
  securityInfo,
} from "../../categories/UserCategories";
import LogoLarge from "/Users/johnlovitsch/Desktop/mod5 project/IntuitChart/intuit_chart_frontend/src/LogoLarge.png";

class Profile extends Component {
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

  componentDidMount() {
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
    this.setState({
      switch: props,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // if(this.state.new_password && (this.state.new_password === this.state.confirm_password)){
    //     this.setState({
    //         password: this.state.new_password
    //     })
    // }
    const token = localStorage.getItem("my_app_token");
    delete this.state.switch;
    delete this.state.new_password;
    delete this.state.confirm_password;

    const bodyObj = this.state;
    const userID = this.props.user.id;
    this.props.updateUserInformation(userID, bodyObj, token);
    this.setState({
      password: "",
    });
    this.handleClick([]);
  };

  render() {
    return (
      <div className="parent">
        <Row style={{ margin: "1rem" }}>
          <Col md="2">
            <Card
              className="card-shadow"
              style={{ height: "90vh", overflow: "scroll" }}
            >
              <Card.Header>
                <strong>Profile Page</strong>
              </Card.Header>
              <Card.Body>
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
                <div style={{position: "absolute", bottom: "1rem"}}>
                <hr />
                <Button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#1761a0",
                  }}
                  onClick={() =>
                    this.props.history.push(
                      `/dashboard/${this.props.user.id}/admissions/brainpage`
                    )
                  }
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
                {this.state.switch.length === 0 ? (
                  <Card.Img
                    //   variant="top"
                    src={LogoLarge}
                    //   className="mb-2"
                  />
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
                          <Col md={{ offset: "4", span: "3" }}>
                            <InputGroup
                              mb={3}
                              style={{ margin: "0", padding: "1rem" }}
                            >
                              <FormControl
                                name="password"
                                type="password"
                                placeholder="to update, please enter password and then press submit"
                                value={this.state.password}
                              />
                              <InputGroup.Append>
                                <Button type="submit">Submit</Button>
                              </InputGroup.Append>
                            </InputGroup>
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
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { updateUserInformation })(
  withRouter(Profile)
);
