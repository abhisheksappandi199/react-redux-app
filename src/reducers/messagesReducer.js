const messagesInitialState = [
    { id: 1, body: 'my first message', createdAt: new Date()},
    { id: 2, body: 'my second message', createdAt: new Date() }
]
const messagesReducer = (state = messagesInitialState, action) => {
    switch(action.type) {
        case 'ADD_MESSAGE' : {
            //return state.concat(action.payload)
            return [...state , action.payload]
        }
        case 'DELETE_MESSAGE' : {
            return state.filter(e => e.id != action.payload)
        }
        case 'UPDATE_MESSAGE' : {
            return state.map((message)=>{
                if(message.id === action.payload.id){
                    return {...message ,...action.payload.obj}
                }else
                {
                    return {...message}
                }
            })
        }
        default: {
            return [].concat(state) // state also works
        }
    }
}

export default messagesReducer