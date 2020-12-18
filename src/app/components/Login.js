import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Card } from "react-bootstrap";
import { Route, withRouter } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { fetchWithToken, loginSuccess } from "../actions/auth";
import Dashboard from "../containers/Dashboard";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

componentDidMount(){
    const token = localStorage.getItem("my_app_token");
    if (!token) {
      return null;
    }  else {
        this.props.fetchWithToken(token);
        // this.props.history.push(`/dashboard/${this.props.id}`);
    }
}

// componentDidUpdate(){
//     if (localStorage.getItem("my_app_token") === "undefined") {
//         localStorage.removeItem("my_app_token")
//     }
// }



  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.loginSuccess(this.state)
        this.props.history.push(`/dashboard/${this.props.id}`)
    }
  };

  render() {
    return (
      <div className="login">
        <Container fluid >
            <Col md={{ span: 6, offset: 3 }} >
            <Card className="login-card">
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
          </Card>
          </Col>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id,
  message: state.user.message
});

export default connect(mapStateToProps, { loginSuccess, fetchWithToken })(withRouter(Login));
