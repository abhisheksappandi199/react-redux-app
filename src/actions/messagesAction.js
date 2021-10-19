export const addMessage = (message) => {
    return { type: 'ADD_MESSAGE', payload: message}
}
export const removeMessage = (id) =>{
    return { type : 'DELETE_MESSAGE' , payload : id}
}
export const updatemessage = (id,obj) => {
    return { type : 'UPDATE_MESSAGE' , payload : {id,obj}}
}