import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Inputs from './Inputs'

export class NewTransaction extends Component {
    constructor() {
        super()
        this.state = {
            Text: '',
            Amount: ''
        }
        this.onchangehandle = this.onchangehandle.bind(this)
    }

    onchangehandle(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({
            Text: "",
            Amount: ""
        })
    }


    render() {
        return (
            <div>
                <h1>Add A New Teansaction</h1>
                <hr />
                <Inputs
                    item={this.state}
                    onchange={this.onchangehandle}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

export default NewTransaction
