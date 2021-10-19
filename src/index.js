import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // npm install react-redux
import App from './App'
import configureStore from './store/configureStore'

import { startGetUsers } from './actions/usersAction'
import { startGetPosts } from './actions/postsAction'

const store = configureStore()
console.log('store initial state' , store.getState())

//handle page reload
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())

store.subscribe(() => {
    console.log(store.getState())
})

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))