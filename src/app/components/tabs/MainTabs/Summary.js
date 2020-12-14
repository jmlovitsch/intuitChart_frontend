import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  Button, Col, Row } from "react-bootstrap";

class Summary extends Component {
    render() {
        return (
            <div >
                    Summary
            <Button >View Complete History</Button>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Summary)
