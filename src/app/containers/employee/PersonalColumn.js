import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { SignOutIcon, KeyIcon } from "@primer/octicons-react";
import { withRouter } from "react-router-dom";
import { currentUser, logoutUser } from "../../actions/users";

class PersonalColumn extends Component {
//   componentDidUpdate() {
//     return localStorage.my_app_token ? null : this.props.history.push("/login");
//   }


handleLogout = () => {
    localStorage.removeItem("my_app_token");
    this.props.logoutUser();
  };


  render() {
    console.log(this.props.user);
    const { username, first_name, last_name, authorization, employee_id } = this.props.user
    return (
      <div>
        <Row style={{ height: "85vh", border: "solid", position: "relative" }}>
          <Col>
            <div>
              {username}
            </div>
            <div>{first_name} {last_name}</div>
            <div>{authorization}</div>
            <div>{employee_id}</div>
            <div></div>
            <input
              type="button"
              value="Log out of Patient"
              onClick={this.props.handleClick}
              style={{
                height: "10vh",
                border: "solid",
                position: "absolute",
                bottom: "0px",
              }}
            />
          </Col>
        </Row>
        <Row style={{ height: "10vh", border: "solid" }}>
          <div type="button" onClick={() => this.props.history.push("/login")}>
            <KeyIcon size={50} /> Lock
          </div>
        </Row>
        <Row>
          <div onClick={() => this.handleLogout()}>
            <SignOutIcon type="button" size={35} />
          </div>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { currentUser, logoutUser })(
  withRouter(PersonalColumn)
);
