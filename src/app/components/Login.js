import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

class Login extends Component {
  state = {
    username: "",
    password: "",
    employee: false,
  };

  handleChange = (event) => {
    if (event.target.checked) {
      this.setState({
        [event.target.name]: event.target.checked,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      if (this.state.employee === true) {
          return console.log("empl")
        //send fetch to employee url
      }
      return console.log("patient")

      // this.props.history.push("/admin");
    }
    //switch statement based on authoization status that returns.
        //which pushes to a different Route
  };

  render() {
    console.log(this.state);
    return (
      <div className="login">
        <Container fluid>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>IntuitChart</Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <Form
                onSubmit={(event) => this.handleSubmit(event)}
                onChange={(e) => this.handleChange(e)}
              >
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="username"
                    placeholder="Enter username"
                    name="username"
                  />
                  <Form.Text className="text-muted">
                    Please enter your appropriate username for patient or
                    employee
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Employee?"
                    name="employee"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
