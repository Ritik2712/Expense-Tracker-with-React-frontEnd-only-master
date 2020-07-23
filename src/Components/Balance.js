import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Balance extends Component {


    render() {
        return (
            <div style={{ textAlign: "left" }}>
                <h2>Balance</h2>
                <h1 style={{ fontSize: 50 }}>$ {this.props.Balance}</h1>
            </div>
        )
    }
}

export default Balance
