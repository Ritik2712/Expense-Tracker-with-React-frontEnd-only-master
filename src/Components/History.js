import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExpenseList from './ExpenseList'


class History extends Component {
    constructor() {
        super()
    }
    render() {
        const transactionItem = this.props.transactions.map(transation => <ExpenseList key={transation.id} transation={transation} />)
        return (
            <div>
                <h1>History</h1>
                <div className="transaction">
                    {transactionItem}
                </div>
            </div>
        )
    }
}

export default History
