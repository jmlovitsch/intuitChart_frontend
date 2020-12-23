import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { loginSuccess } from "../actions/auth";
import LogoLarge from "../../LogoLarge.png";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

    componentDidMount(){
        localStorage.removeItem("my_app_token")
    }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password) {
      fetch("http://localhost:3001/auth", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ user: this.state }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            console.log(data);

          this.props.loginSuccess(data);
          localStorage.setItem("my_app_token", data.jwt);
          this.props.history.push(`/dashboard/${data.user.id}`);
        });
    }
  };

  render() {
    console.log(localStorage);
    return (
      <div className="login">
        <Container fluid>
          <Col md={{ span: 6, offset: 3 }}>
            <Card.Img
              variant="top"
              src={LogoLarge}
              className="mb-2"
              // style={{ padding: "1em" }}
            />
            <Col md={{ span: 8, offset: 2 }}>
              <Card className="login-card">
                {/* <Row>
            <Col md={{ span: 4, offset: 4 }}>intuitChart</Col>
          </Row> */}
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <Form
                      onSubmit={(event) => this.handleSubmit(event)}
                      onChange={(e) => this.handleChange(e)}
                    >
                      <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username adcc0e40</Form.Label>
                        <Form.Control
                          type="username"
                          placeholder="enter username"
                          name="username"
                        />
                        <Form.Text className="text-muted">
                          Please enter your appropriate username for patient or
                          employee.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="enter password"
                          name="password"
                        />
                      </Form.Group>
                      <Row className="justify-content-end">
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
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Col>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id,
});

export default connect(mapStateToProps, { loginSuccess })(
  withRouter(Login)
);
