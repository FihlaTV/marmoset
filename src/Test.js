import React, { Component } from 'react'
import axios from 'axios'

export default class Test extends Component {
    
    state = {test: 'nothing'}

    componentDidMount() {
        axios.get('/getData').then((response) => {
            this.setState({
                test: response.data.test
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.test}
            </div>
        )
    }
}
