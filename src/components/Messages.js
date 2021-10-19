import React from 'react'
import { connect } from 'react-redux'
import MessageItem from './MessageItem'
import MessageForm from './MessageForm'

class Messages extends React.Component {
    
    render() {
        return (
            <div>
                <h2>My Message Board - { this.props.messages.length } </h2>
                {
                    this.props.messages.map((message) => {
                        return <MessageItem 
                                    key={message.id}
                                    {...message}
                            />
                    })
                }

                <MessageForm />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}   

export default connect(mapStateToProps)(Messages)