import React, { Component } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchAllUsers } from "../../actions/users";

class DeleteUser extends Component {
  componentDidMount() {
      
    this.props.fetchAllUsers(localStorage.my_app_token);
  }

  state = {
      user: ""
  };


  handleChange = (event) => {
    this.setState({
      user: event.target.value,
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createUserSuccess(this.state);
  };

  render() {
    console.log(this.state, this.props.users);
    return (
      <div>
        <Form onChange={(e) => this.handleChange(e)}>
        <Form.Group as={Col}>
            <Form.Label>Delete User</Form.Label>
            <Form.Control type="select" value={this.state.user} placeholder={this.state.user} >

            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Delete
          </Button>{" "}
          <Button variant="light" onClick={this.props.handleBack}>
            Back
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.users,
});

export default connect(mapStateToProps, { fetchAllUsers })(DeleteUser);
