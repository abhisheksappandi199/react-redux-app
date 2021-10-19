import React from 'react' 
import Btn from './Btn'
import { connect } from 'react-redux'
/// withRouter - whenever a component is not rendered via react router dom, yet component requires, history, 
//location or match props within it, then we can use the withRouter higher order component provided

function Counter(props) {
    return (
        <div>
            <h2>Count - { props.count }</h2>
            <Btn text="up" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter)