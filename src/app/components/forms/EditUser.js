import React, { Component } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { editUserSuccess } from "../../actions/users";

class EditUser extends Component {
  state = {};

  componentDidMount() {
    const employeeEdit = this.props.employeeList.filter(
      (employee) => employee.id.toString() === this.props.itemED
    );

    this.setState({
      id: employeeEdit[0].id,
    });
    this.props.arrayKeys.map((key) => {
      this.setState({
        [key]: employeeEdit[0][key],
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  printForms = (keys) => {
    return keys.map((k) => {
      const uppercased = k.replace(k[0], k[0].toUpperCase());
      const spaces = uppercased.replaceAll("_", " ");
      return (
        <Form.Group controlId={k} style={{ padding: "1rem" }}>
          <Form.Label>{spaces}</Form.Label>
          <Form.Control
            name={k}
            type="text"
            value={this.state[k]}
            onChange={(e) => this.handleChange(e)}
          />
        </Form.Group>
      );
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("my_app_token");
    this.props.editUserSuccess(this.state, token);
    this.props.handleBack();
  };

  generateForm = () => {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Row md="3" style={{ margin: "0", padding: "1rem" }}>
          {this.printForms(this.props.arrayKeys)}
        </Row>
        <hr />
        <Row className="justify-content-between">
          <Button
            className="m-3"
            style={{
              backgroundColor: "transparent",
              border: "solid",
              color: "#1761a0",
            }}
            onClick={this.props.handleBack}
          >
            Back
          </Button>
          <Button
            className="m-3"
            style={{
              backgroundColor: "transparent",
              border: "solid",
              color: "#1761a0",
            }}
            type="submit"
          >
            Submit
          </Button>{" "}
        </Row>
      </Form>
    );
  };

  render() {
    return <div>{this.generateForm()}</div>;
  }
}

const mapStateToProps = (state) => ({
  ...state.employee,
});

export default connect(mapStateToProps, { editUserSuccess })(EditUser);
