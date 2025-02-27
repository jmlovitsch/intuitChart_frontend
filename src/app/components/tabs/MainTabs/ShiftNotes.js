import React, { Component } from "react";
import { Image, Spinner, Card, Form, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchCreateMain} from "../../../actions/main"

class ShiftNotes extends Component {
    state = {
        content: "",
        admission_id: this.props.admission.id,
        author: this.props.user.id
    }

    handleChange = (event) => {
        console.log(event.target.name);
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const token = localStorage.getItem("my_app_token");
        this.props.fetchCreateMain(token, "shift_notes", { shift_note: this.state });
      };


  render (){
      console.log(this.state)

      return (
        <div style={{ height: "100%", overflow: "scroll" }}>
        <Form style={{ padding: "0", margin: "50px" }} onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <Form.Group style={{ padding: "0", margin: "0" }}>

            <Form.Label>
              <strong>Enter Shift Notes</strong>
            </Form.Label>
            <Form.Control
            value={this.state.content}
              as="textarea"
              name="content"
              style={{ height: "50vh", width: "100%" }}
            />
          </Form.Group>
          <hr />
          <Form.Group>
            <Row className="justify-content-end">
              <Button
                type="submit"
                style={{
                  backgroundColor: "transparent",
                  border: "solid",
                  color: "#1761a0",
                }}
              >
                Submit Notes
              </Button>
            </Row>
          </Form.Group>
        </Form>
      </div>

      )
  }
};

const mapStateToProps = (state) => ({
    user: state.user,
    admission: state.admissions.currentAdmission
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, {fetchCreateMain})(ShiftNotes);
