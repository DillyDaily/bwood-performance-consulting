import axios from 'axios';

export const GET_MESSAGES_PENDING = "GET_MESSAGES_PENDING"
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS"
export const ADD_MESSAGE_PENDING = "ADD_MESSAGE_PENDING"
export const ADD_MESSAGE_SUCCESS = "ADD_MESSAGE_SUCCESS"
export const REMOVE_MESSAGE_PENDING = "REMOVE_MESSAGE_PENDING"
export const REMOVE_MESSAGE_SUCCESS = "REMOVE_MESSAGE_SUCCESS"

export const getMessages = () => {
    return async (dispatch) => {
        dispatch({ type: GET_MESSAGES_PENDING })
        let messages = await axios.get('http://localhost:8080/admin/messages')
        dispatch({ 
            type: GET_MESSAGES_SUCCESS,
            payload: messages
        })
    }
}
export const addMessage = (newMessage) => {
    return async (dispatch) => {
        dispatch({ type: ADD_MESSAGE_PENDING })
        let messages = await axios.post('http://localhost:8080/contact', newMessage)
        dispatch({ 
            type: ADD_MESSAGE_SUCCESS,
            payload: messages
        })
    }
}
export const deleteMessage = (id) => {
    return async (dispatch) => {
        dispatch({ type: REMOVE_MESSAGE_PENDING })
        let messages = await axios.delete(`http://localhost:8080/delete/message/${id}`)
        dispatch({ 
            type: REMOVE_MESSAGE_SUCCESS,
            payload: messages.data
        })
    }
}