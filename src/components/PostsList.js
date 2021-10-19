import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startGetPosts } from '../actions/postsAction'
import { Link } from 'react-router-dom'

class PostsList extends Component {
    componentDidMount(){
        if(this.props.posts.length == 0)
        {
            this.props.dispatch(startGetPosts())
        }
    }

    render() {
        return (
            <div>
                <h1>Listing posts - {this.props.posts.length}</h1>
                <ul>
                    { this.props.posts.map((posts) => {
                        return <li key={posts.id}>
                            <Link to={`/posts/${posts.id}`}>{posts.title}</Link>
                            </li>
                    })} 
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsList)
