import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
    render() {
        return (
            <div className="header">
                Header
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
