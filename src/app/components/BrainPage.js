import React, { Component } from 'react'
import { connect } from 'react-redux'

class BrainPage extends Component {
    render() {
        return (
            <div>
                Brain Page
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BrainPage)
