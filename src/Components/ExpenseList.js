import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ExpenseList extends Component {
    static propTypes = {

    }

    render() {
        return (
            <>
                {this.props.transation.income !== 0 ?
                    <h1 className="income"><strong>{this.props.transation.text}</strong> <span>{this.props.transation.income}</span></h1>
                    : <h1 className="expense"><strong>{this.props.transation.text}</strong> <span>{this.props.transation.expense}</span></h1>}
            </>
        )
    }
}

export default ExpenseList
