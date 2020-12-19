import React, { Component } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { editUserSuccess } from "../../actions/users";

class EditUser extends Component {
  state = {};

  componentDidMount() {
    const employeeEdit = this.props.employeeList.filter(
      (employee) => employee.id.toString() === this.props.itemED
    );


    this.setState({
        id: employeeEdit[0].id
    })
    this.props.arrayKeys.map((key) => {
      this.setState({
        [key]: employeeEdit[0][key]
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
      return (
        <Form.Group controlId={k}>
          <Form.Label>{uppercased}</Form.Label>
          <Form.Control name={k} type="text" value={this.state[k]} onChange={(e) => this.handleChange(e)}/>
        </Form.Group>
      );
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("my_app_token")
    this.props.editUserSuccess(this.state, token);
    this.props.handleBack()
  };

  generateForm = () => {
    return (
      <Form  onSubmit={(e)=>this.handleSubmit(e) }>
          <Col md={{ span: 6, offset: 3 }} >
        {this.printForms(this.props.arrayKeys)}

        <Button variant="primary" type="submit">
          Submit
        </Button>{" "}
        <Button variant="light" onClick={this.props.handleBack}>
          Back
        </Button>
        </Col>
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



export default connect(mapStateToProps, {editUserSuccess})(EditUser);
