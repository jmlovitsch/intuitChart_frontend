import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { loginSuccess } from "../actions/auth";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.loginSuccess(this.state);
    } else {
      alert("alert");
    }
  };

  render() {
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

const mapStateToProps = (state) => ({
  id: state.user.id,
});

export default connect(mapStateToProps, { loginSuccess })(withRouter(Login));
