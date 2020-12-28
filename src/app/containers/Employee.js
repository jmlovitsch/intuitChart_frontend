import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import PersonalColumn from "./employee/PersonalColumn";
import CenterColumn from "./employee/CenterColumn";
import { Messenger } from "../components/Messenger";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";

export class Employee extends Component {
    state={
        patient: 1
    }



     handleClick = () =>{
        this.setState({
            patient: ""
        })
    }



  render() {
    return (
      <div >




          {/* <Col className="columnRight">
            <PersonalColumn handleClick={()=>this.handleClick()}/>
          </Col> */}
          {/* <Col > */}
            <CenterColumn patient={this.state.patient} addPatient={this.props.addPatient}  />
          {/* </Col> */}
          {/* <Col className="columnLeft">

            <Row style={{height: "65vh", borderBottom: "solid", borderWidth: "1px"}}>
                Alert Section
            </Row>
            <Row style={{ height: "35vh"}} >
              <Messenger />
            </Row>

          </Col> */}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      username: state.username
    }
  }

const mapDispatchToProps = {};

export default connect(mapStateToProps)(withRouter(Employee));
