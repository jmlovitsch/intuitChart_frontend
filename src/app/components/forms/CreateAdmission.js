import React, { Component } from "react";
import { Form, Row, Button, Col, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchAllPatients } from "../../actions/patients";
import CreatePatient from "./CreatePatient";

class CreateAdmission extends Component {
  state = {
    patient_id: null,
    admitting_diagnosis: "",
    admission_date: "",
    current_room: "",
    expected_discharge: "",
    code_status: "",
    who_authorized_share: "",
    religion_and_parish: "",
  };

  componentDidMount() {
    this.props.fetchAllPatients();
  }

  handleChange = (event) => {
    let today = new Date().toString()
    this.setState({
      [event.target.name]: event.target.value,
      admission_date: today
    });
  };

  handleClick = (event) => {
    this.setState({
      patient_id: event.target.id,
    });
  };

  handleSubmit = (event) => {
    const token = localStorage.getItem("my_app_token");
    event.preventDefault();
    console.log(event, this.state);
    fetch("http://localhost:3001/admissions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ admission: this.state }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // dispatch({ type: "ADD_ADMISSION", data })
      });

    this.setState({
      patient_id: null,
      admitting_diagnosis: "",
      admission_date: "",
      current_room: "",
      expected_discharge: "",
      code_status: "",
      who_authorized_share: "",
      religion_and_parish: "",
    });
  };

  generatePatientList = () => {
    return this.props.patients.map((patient) => {
      return (
        <tr key={patient.id}>
          <td>{patient.username}</td>
          <td>
            {patient.first_name} {patient.last_name}
          </td>
          <td>
            {patient.street_address} {patient.street_address_2} {patient.city}
            {",  "}
            {patient.state} {patient.zip}
          </td>
          <td>{patient.medical_group}</td>
          <td>
            <Button
              id={patient.id}
              name="choosePatient"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              Create Admission
            </Button>
          </td>
        </tr>
      );
    });
  };

  RenderAdmissionsForm = () => {

    return Object.keys(this.state).map((k) => {
      const uppercased = k.replace(k[0], k[0].toUpperCase());
      const spaces = uppercased.replaceAll("_", " ");
      if (k === "admission_date") {
        return (
          <Form.Group key={this.state[k].id} style={{ padding: "20px" }}>
            <Form.Label>{spaces}</Form.Label>
            <Form.Control disabled name={k} value={this.state[k]} />
          </Form.Group>
        );
      }

      if ((k !== "patient_id") && (k !== "admission_date")) {
        return (
          <Form.Group key={this.state[k].id} style={{ padding: "20px" }}>
            <Form.Label>{spaces}</Form.Label>
            <Form.Control name={k} value={this.state[k]} />
          </Form.Group>
        );
      }
      if (k === "patient_id") {
        return (
          <Form.Group key={this.state[k].id} style={{ padding: "20px" }}>
            <Form.Label>{spaces}</Form.Label>
            <Form.Control disabled name={k} value={this.state[k]} />
          </Form.Group>
        );
      }

    });
  };


  render() {
    //   const {patient_id, admitting_diagnosis, admission_date, current_room, expected_discharge, code_status, who_authorized_share, religion_and_parish} = this.state

    return (
      <div style={{ padding: "5px" }}>
                  {this.state.patient_id === "creator" ? <CreatePatient handleBack={this.props.handleBack} /> : <>

        {!this.state.patient_id ? (
          <Form>
            Create Admission
            <Row style={{ margin: "0" }}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>SSN</th>
                  </tr>
                </thead>
                <tbody>{this.generatePatientList()}</tbody>
              </Table>
            </Row>
            <Button variant="primary" onClick={() =>this.setState({patient_id:"creator"})}>Create New Patient</Button>{" "}
            <Button variant="light" onClick={this.props.handleBack}>
              Back
            </Button>
          </Form>
        ) : (
          <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <Row style={{ margin: "0" }} lg={3} noGutters>
              {this.RenderAdmissionsForm()}
            </Row>
            <Button variant="primary" type="submit">
              Create Admission
            </Button>{" "}
            <Button variant="light" onClick={this.props.handleBack}>
              Back
            </Button>

          </Form>
        )}
      </>  }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  patients: state.patients.patients,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { fetchAllPatients })(CreateAdmission);
