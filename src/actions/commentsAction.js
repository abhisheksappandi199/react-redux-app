import axios from 'axios'

//set posts
export const setComments = (comments) =>{
    return { type:'SET_COMMENTS' , payload: comments}
}

//get posts
export const startGetComments = (id) => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => {
            const comments = response.data
            dispatch(setComments(comments))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
export const removecomments = () =>{
    return {type:'REMOVE_COMMENTS', payload:[]}
}
