import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions/messagesAction'

class MessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            body: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            body: this.state.body,
            createdAt: new Date()
        }
        console.log(formData)
        this.props.dispatch(addMessage(formData))
        this.setState({body : ''})   
    }

    render() {
        return (
            <div>
                <h2>Add Message</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.body}
                        onChange={this.handleChange}
                        name="body"
                    />
                </form>
            </div>
        )
    }
}

export default connect()(MessageForm)