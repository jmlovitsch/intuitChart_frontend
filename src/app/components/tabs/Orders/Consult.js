import React, { Component } from 'react'
import { Col, Row, Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'

class Consult extends Component {
    render() {
        return (
            <div>
            <hr />
            <Form.Group>
              <Row className="justify-content-end">
                <Button
                  onClick={this.setSubmitTime}
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

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Consult)
