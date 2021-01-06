import React, { Component } from 'react'
import { Col, Row, Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCreateOrder } from "../../../actions/orders";

class Consult extends Component {


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const token = localStorage.getItem("my_app_token");
        this.props.fetchCreateOrder(token, "consults", { consult: this.state });
      };

    render() {
        return (
            <div>
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
                  Submit Order
                </Button>
              </Row>
            </Form.Group>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    admission: state.admissions.currentAdmission

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, {fetchCreateOrder})(Consult)
