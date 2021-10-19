import React from 'react' 
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Messages from './components/Messages'
import UsersList from './components/UsersList'
import  PostsList from './components/PostsList'
import UserShow from './components/UserShow'
import PostShow from './components/PostShow'

function App(props) {
    return(
        <Router>
            <div>
                <h1>React Redux Example </h1>
                <Link to="/users">List Users</Link> -{' '}
                <Link to='/posts'>Posts</Link> - {' '}
                <Link to="/messages">Messages</Link>
                
                
                <Route path='/posts' component={PostsList} exact={true}/>
                <Route path='/posts/:id' component={PostShow}/>
                <Route path="/users" component={UsersList} exact={true}/>
                <Route path='/users/:id' component={UserShow}/>
                <Route path="/messages" component={Messages} />
            </div>
        </Router>
    )
}

export default App