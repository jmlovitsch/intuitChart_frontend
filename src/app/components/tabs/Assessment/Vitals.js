import React, { Component } from 'react'
import { connect } from 'react-redux'

class Vitals extends Component {
    render() {
        return (
            <div>
                    Vitals
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Vitals)
