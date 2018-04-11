import React, { Component } from 'react'
import { connect } from 'redux'
import { getBookList } from '../../actions'

class GoButton extends Component {

    constructor (props) {
        super(props)
        this.getBookList = this.handleSubmit.bind(this)
    }

    handleSubmit (event) {
        const { getBookList, bookNumber } = this.state
        getBookList(bookNumber)
    }

    render () {
        return (
            <button onClick={ this.handleSubmit }>Go!</button>
        )
    }
}

export default connect( state => ({ bookNumber: state.maxResults.bookNumber }), { getBookList }) (GoButton)
