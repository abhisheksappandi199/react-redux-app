import React from 'react' 
import { connect } from 'react-redux'
import { increment } from '../actions/countAction'

function Btn(props){ 
    return <button onClick={()=>{
        props.dispatch(increment())
    }}> { props.text } </button>
}

export default connect()(Btn)