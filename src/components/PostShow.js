import React, { Component } from 'react'
import {connect } from 'react-redux'
import {startGetComments,removecomments} from '../actions/commentsAction'

class PostShow extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            id: props.match.params.id
        }
    }
    componentDidMount(){
        if(this.props.comments.length == 0){
            this.props.dispatch(startGetComments(this.props.match.params.id))
        }
        console.log(this.props.match.params.id);  
    }
    componentWillUnmount(){
        if(this.props.comments.length > 0){
            this.props.dispatch(removecomments())
        }
    }
    render() {
        return (
            <div>
               {
                   this.props.users && ( this.props.posts &&( this.props.comments && (
                       <div>
                       <h1>username - {this.props.users.name}</h1>
                       <h1>title - {this.props.posts.title}</h1>
                       <p>body - {this.props.posts.body}</p>
                       <h1>comments - {this.props.comments.length}</h1>
                       {
                           this.props.comments.map(e => {
                               return (
                                   <li key={e.id}>{e.name}</li>
                               )
                           })
                       }
                       </div>
                   )))
               }
            </div>
        )
    }
}

const mapStateToProps = (state,props) =>{
    const id = props.match.params.id
    return {
        posts : state.posts.find(e => e.id == id),
        users : state.users.find(e => e.id == id),
        comments : state.comments.filter(e => e.postId == id)
    }
}
export default connect(mapStateToProps)(PostShow)