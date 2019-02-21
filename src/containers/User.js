import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class User extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div> User </div>
        )
    }
}

export default withRouter(User)