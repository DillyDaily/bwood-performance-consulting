import {
    GET_MESSAGES_PENDING,
    GET_MESSAGES_SUCCESS,
    ADD_MESSAGE_PENDING,
    ADD_MESSAGE_SUCCESS,
    REMOVE_MESSAGE_PENDING,
    REMOVE_MESSAGE_SUCCESS,
} from '../actions/messages.actions'

export default (state = [], action) => {
    switch (action.type) {
        case GET_MESSAGES_PENDING:
            return state;
        case GET_MESSAGES_SUCCESS:
            return [...action.payload.data];
        case ADD_MESSAGE_PENDING:
            return state;
        case ADD_MESSAGE_SUCCESS:
            return [...action.payload.data];
        case REMOVE_MESSAGE_PENDING:
            return state;
        case REMOVE_MESSAGE_SUCCESS:
            return [...action.payload];
        default: 
            return state;
    }
}