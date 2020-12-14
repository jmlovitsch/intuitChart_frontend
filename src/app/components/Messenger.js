import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Messenger extends Component {
    render() {
        return (
            <div>
                Messenger
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Messenger)
