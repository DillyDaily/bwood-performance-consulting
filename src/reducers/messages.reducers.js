import {
    GET_MESSAGES_PENDING,
    GET_MESSAGES_SUCCESS,
} from '../actions/messages.actions'

export default (state = [], action) => {
    switch (action.type) {
        case GET_MESSAGES_PENDING:
            return state;
        case GET_MESSAGES_SUCCESS:
            return [...action.payload.data];
        default: 
            return state;
    }
}