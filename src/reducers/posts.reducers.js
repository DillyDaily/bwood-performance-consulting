import {
    GET_POSTS_PENDING,
    GET_POSTS_SUCCESS,
    ADD_POST_PENDING,
    ADD_POST_SUCCESS,
    EDIT_POST_PENDING,
    EDIT_POST_SUCCESS,
    REMOVE_POST_PENDING,
    REMOVE_POST_SUCCESS,
} from '../actions/posts.actions'

export default (state = [], action) => {
    switch (action.type) {
        case GET_POSTS_PENDING:
            return state;
        case GET_POSTS_SUCCESS:
            return [...action.payload.data];
        case ADD_POST_PENDING:
            return state;
        case ADD_POST_SUCCESS:
            return [...action.payload.data];
        case EDIT_POST_PENDING:
            return state;
        case EDIT_POST_SUCCESS:
            return [...action.payload.data];
        case REMOVE_POST_PENDING:
            return state;
        case REMOVE_POST_SUCCESS:
            return [...action.payload];
        default: 
            return state;
    }
}