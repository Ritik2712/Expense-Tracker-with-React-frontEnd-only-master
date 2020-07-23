import React, { Component } from 'react'
import PropTypes from 'prop-types'


var styles = {
    backgroundColor: "white",
    width: 300,
    margin: "10px auto"
}
var inco = {
    color: "lightgreen",
}
var expo = {
    color: "red"
}
export class IncomeExpense extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="IncomeExpense" style={styles}>
                <div className="Income">
                    <h2>Income</h2>
                    <h1 style={inco}>{this.props.income}</h1>
                </div>
                <div className="Expense">
                    <h2>Expense</h2>
                    <h1 style={expo}>{this.props.expense}</h1>
                </div>
            </div>
        )
    }
}

export default IncomeExpense
