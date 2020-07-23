import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Inputs extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <label style={{ textAlign: "left" }}>Text</label><br />
                    <input
                        value={this.props.item.Text}
                        name="Text"
                        type="text"
                        onChange={this.props.onchange}
                    />
                    <br />
                    <label style={{ textAlign: "left" }}>Amount <br /> (negative-expense , positive-income)</label>
                    <br />
                    <input
                        value={this.props.item.Amount}
                        name="Amount"
                        type="text"
                        onChange={this.props.onchange}
                    />
                    <br />
                    <button>Add Transaction</button>
                </form>

            </div>
        )
    }
}

export default Inputs
