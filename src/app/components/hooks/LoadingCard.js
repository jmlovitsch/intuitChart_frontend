import React from 'react'
import { connect } from 'react-redux'

const LoadingCard = (props) => {
    return (
        <div className="bg">
            <strong>Loading...</strong>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingCard)
