import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from 'react-bootstrap'
import { Messenger } from "../components/Messenger";
import  CenterColumn  from "./Columns/CenterColumn";
import  PersonalColumn  from "./Columns/PersonalColumn";

class AdminDashboard extends Component {
  render() {
    return (
      <Container fluid >
          <Row className="mainRow" >
          <Col className="columnRight">
              <PersonalColumn />
          </Col>
          <Col lg={8} className="centerColumn" >
              <CenterColumn />
          </Col>
          <Col className="columnLeft" >
              <Messenger />
          </Col>
          </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
