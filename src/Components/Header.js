import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Header extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>
            </div>
        )
    }
}

export default Header
