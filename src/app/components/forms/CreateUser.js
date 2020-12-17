import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import { createUserSuccess } from '../../actions/auth';

class CreateUser extends Component {
    state = {

    };

    componentDidMount() {
      return this.props.arrayKeys.map((key) => {
        return this.setState({
           [key]: this.props.key
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
          <Form.Group as={Col} controlId={k}>
            <Form.Label>{uppercased}</Form.Label>
            <Form.Control type="text" name={k} value={this.state.k} placeholder={this.state.k} />
          </Form.Group>
        );
      });
    };

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
        this.props.createUserSuccess(this.state)
    }

    render() {
      console.log(this.state);
      return (
        <div>
            <Container>
            <Row>Create User</Row>
          <Form onChange={(e) => this.handleChange(e)} onSubmit={(e)=>this.handleSubmit(e)}>

            {this.printForms(this.props.arrayKeys)}
            <Button variant="primary" type="submit" >
              Create
            </Button>{" "}
            <Button variant="light" onClick={this.props.handleBack}>
              Back
            </Button>

          </Form>
          </Container>
        </div>
      );
    }
  }

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { createUserSuccess })(CreateUser)
