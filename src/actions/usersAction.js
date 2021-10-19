import axios from 'axios'

// SET_USERS 
export const setUsers = (users) => {
    return { type: 'SET_USERS', payload: users }
}

// GET_USERS 
export const startGetUsers = () => {
    return (dispatch) => {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data 
                dispatch(setUsers(users))
            })
    }
}