import React from 'react'
import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'

const LoadingCard = (props) => {
    return (
        <div className="bg">
            <Spinner animation="border" variant="primary" />
            <strong>Loading...</strong>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingCard)
