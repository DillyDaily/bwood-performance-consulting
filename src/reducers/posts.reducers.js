import {
    GET_POSTS_PENDING,
    GET_POSTS_SUCCESS,
    ADD_POST_PENDING,
    ADD_POST_SUCCESS,
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
        default: 
            return state;
    }
}