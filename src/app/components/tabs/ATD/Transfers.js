import React, { Component } from 'react'
import { connect } from 'react-redux'

class Transfers extends Component {
    render() {
        return (
            <div>
                Transfer
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Transfers)
