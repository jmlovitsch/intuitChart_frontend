import React, { Component } from 'react'
import { Card,Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import LogoLarge from "/Users/johnlovitsch/Desktop/mod5 project/IntuitChart/intuit_chart_frontend/src/LogoLarge.png"
class BrainPage extends Component {
    render() {
        return (
            <div >
                <Col fluid md={{ span: 6, offset: 3 }} >

                <Card.Img
                  //   variant="top"

                  src={LogoLarge}
                  //   className="mb-2"
                />
                <Card>
            <Card.Text>Please Add Patients</Card.Text>
            </Card>
            </Col>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BrainPage)
