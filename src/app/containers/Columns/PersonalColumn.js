import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { SignOutIcon, KeyIcon } from "@primer/octicons-react";
import { withRouter } from "react-router-dom";

class PersonalColumn extends Component {
    constructor(){
        super()
    }


  render() {
    return (
      <div>
        <Row style={{ height: "85vh", border: "solid", position: "relative"}}>
            <Col>
            <div>Insert Image Here</div>
            <div>Name</div>
            <div>Occupation</div>
            <div>Employee Number</div>
            <div></div>
            <input type="button" value="Log out of Patient" onClick={this.props.handleClick} style={{ height: "10vh", border: "solid", position: "absolute", bottom: '0px' }}/>
            </Col>
            </Row>
        <Row style={{ height: "10vh", border: "solid" }}>
          <div type="button" onClick={() => this.props.history.push("/login")}>
            <KeyIcon size={50} /> Logout
          </div>
        </Row>
        <Row>
          <SignOutIcon size={35} />
          Close Workday
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonalColumn));
