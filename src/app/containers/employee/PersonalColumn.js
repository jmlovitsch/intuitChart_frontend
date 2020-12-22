import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Container, ListGroup } from "react-bootstrap";
import { SignOutIcon, KeyIcon } from "@primer/octicons-react";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/users";
import { Button } from "react-bootstrap";

class PersonalColumn extends Component {
  //   componentDidUpdate() {
  //     return localStorage.my_app_token ? null : this.props.history.push("/login");
  //   }

  state={
      patient1: "",
      patient1: "",
      patient1: "",
      patient1: "",
  }

  handleLogout = () => {
    localStorage.removeItem("my_app_token");
    this.props.logoutUser();
  };

  render() {
    console.log(this.props.user);
    const {
      username,
      first_name,
      last_name,
      authorization,
      employee_id,
    } = this.props.user;
    return (
      <Container>
        <Row style={{ height: "85vh", border: "solid", position: "relative" }}>
          <Col>
            <Card style={{ width: "18rem" }} className="justify-content-end">
              <Card.Img
                variant="top"
                src="https://image.freepik.com/free-vector/doctor-cartoon-character-thank-you-doctors-nurses-working-hospital-fighting-coronavirus-covid-19-wuhan-virus-disease-illustration_41707-390.jpg"
                className="mb-2"
                style={{ padding: "1em" }}
              />
              <ListGroup variant="flush">
                <ListGroup.Item><Card.Title>{username}</Card.Title></ListGroup.Item>
                <ListGroup.Item>{first_name} {last_name}</ListGroup.Item>
                <ListGroup.Item>{authorization}</ListGroup.Item>
                <ListGroup.Item>{employee_id}</ListGroup.Item>
              </ListGroup>

              {/* <Card.Title>{username}</Card.Title> */}
              <Card.Body>
              <ListGroup.Item><Card.Title>My Patients</Card.Title></ListGroup.Item>
                <ListGroup.Item>this.state.patient1</ListGroup.Item>
                {/* <ListGroup.Item>this.state.patient1</ListGroup.Item>
                <ListGroup.Item>this.state.patient1</ListGroup.Item> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ height: "10vh", border: "solid" }} className="justify-content-center">
          <Button
            variant="primary" size="lg" block

            onClick={() => this.props.history.push("/login")}
          >
            <KeyIcon size={50} /> Lock
          </Button>
        </Row>
        {/* <input
              type="button"
              value="Log out of Patient"
              onClick={this.props.handleClick}
              style={{
                height: "10vh",
                border: "solid",
                position: "absolute",
                bottom: "0px",
              }}
            /> */}

        <Row>
          <div onClick={() => this.handleLogout()} >
            <SignOutIcon type="button" size={35} />
          </div>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser })(
  withRouter(PersonalColumn)
);
