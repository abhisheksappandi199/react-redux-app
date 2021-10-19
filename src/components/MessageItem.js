import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeMessage, updatemessage } from '../actions/messagesAction'

class MessageItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: props.body,
            editMode: false,
            hover: false
        }
    }

    handleRemove=(id)=>{
        const confirmRemove = window.confirm("are you sure")
        console.log(this.state.body);
        if(confirmRemove){
            // axios.delete(`http://localhost:3033/messages/${this.props.body}`)
            // .then((response)=>{
            //     const dat = response.data
            //     this.props.removeMessage(dat.id)
            // })
            // .catch((error)=>{
            //     console.log(error.message);
                
            // })
            this.props.dispatch(removeMessage(id))         
        }
     }
     handleSubmit = (id) => {
       
        const formData = {
            body: this.state.body ,
            createdAt : new Date()
        }
        // axios.put(`http://localhost:3033/messages/${this.props.id}`, formData) 
        //     .then((response) => {
        //         const message = response.data 
                this.setState((prevState) => {
                    return {
                        editMode: !prevState.editMode
                    }
                })
        //         this.props.updateMessage(message)
        //     })
        this.props.dispatch(updatemessage(id,formData))
    }
     handleEdit = () => {
        this.setState((prevState) => {
            return {
                editMode: !prevState.editMode
            }
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOver = () => {
        this.setState({
            hover: true
        })
    }

    handleOut = () => {
        this.setState({
            hover: false
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode ? (
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                value={this.state.body}
                                onChange={this.handleChange}
                                name="body"
                            />
                        </form>
                    ) : <p> {this.props.body} </p>
                }
                <small onMouseOver={this.handleOver} onMouseOut={this.handleOut} >
                    {
                        this.state.hover ? moment(this.props.createdAt).format('dddd MMMM Do YYYY, h:mm:ss a') : moment(this.props.createdAt).fromNow()
                    }
                </small>
                <button onClick={()=>{this.handleRemove(this.props.id)}}>delete</button>
                {
                     this.state.editMode ? <button onClick={()=>{this.handleSubmit(this.props.id)}}> update </button> : <button onClick={this.handleEdit}> edit </button> 
                }
            </div>
        )
    }
}

MessageItem.propTypes = {
    id: PropTypes.number.isRequired,
    body: PropTypes.string,
    createdAt: PropTypes.object.isRequired,
    // removeMessage: PropTypes.func.isRequired,
    // updateMessage: PropTypes.func.isRequired
}

export default connect()(MessageItem)