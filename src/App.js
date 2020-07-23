import React, { Component } from 'react'
import Header from './Components/Header'
import Balance from './Components/Balance'
import History from './Components/History'
import NewTransaction from './Components/NewTransaction'
import IncomeExpense from './Components/IncomeExpense'
import transaction from './Arrays'

class App extends Component {
    constructor() {
        super()
        this.state = {
            transactions: transaction,
            Balance: 0,
            Income: 0,
            Expense: 0
        }
        this.id = 0
    }

    onSubmit = (item) => {
        var y = item.Amount.length
        if (item.Amount[0] !== '-' && item.Amount[0] !== '+') {
            alert('Follow the Instructions')
        } else if (item.Amount[0] == '-') {
            this.setState((prevstate) => {
                return ({
                    Balance: prevstate.Balance + parseFloat(item.Amount),
                    Expense: prevstate.Expense - parseFloat(item.Amount)
                })
            })
        } else {
            this.setState((prevstate) => {
                return ({
                    Balance: prevstate.Balance + parseFloat(item.Amount),
                    Income: prevstate.Income + parseFloat(item.Amount)
                })
            })
        }
        this.id++
        if (item.Amount[0] !== '-' && item.Amount[0] !== '+') {
            alert('Follow the Instructions')
        } else if (item.Amount[0] !== '-') {
            transaction.push({
                id: this.id,
                income: item.Amount,
                expense: 0,
                text: item.Text
            })
        } else {
            transaction.push({
                id: this.id,
                income: 0,
                expense: item.Amount,
                text: item.Text
            })
        }
        if (transaction.length > 3) {
            transaction.shift()
        }
        this.setState({ transactions: transaction })

    }

    render() {
        return (
            <div >
                <Header />
                <div className="container">
                    <Balance Balance={this.state.Balance} />
                    <IncomeExpense income={this.state.Income} expense={this.state.Expense} />
                    <History transactions={this.state.transactions} />
                    <NewTransaction onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    }
}


export default App
