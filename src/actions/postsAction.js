import axios from 'axios'

//set posts
export const setPosts = (posts) =>{
    return { type:'SET_POSTS' , payload: posts}
}

//get posts
export const startGetPosts = () => {
    return (dispatch) => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const posts = response.data
            dispatch(setPosts(posts))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

