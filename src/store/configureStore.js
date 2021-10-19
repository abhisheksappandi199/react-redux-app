import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducer from '../reducers/countReducer'
import messagesReducer from '../reducers/messagesReducer' 
import usersReducer from '../reducers/usersReducer'
import postsReducer from '../reducers/postsReducer'
import commentsReducer from '../reducers/commentsReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
        messages: messagesReducer,
        users: usersReducer,
        posts:postsReducer ,
        comments : commentsReducer
    }), applyMiddleware(thunk))
    return store 
}

export default configureStore 