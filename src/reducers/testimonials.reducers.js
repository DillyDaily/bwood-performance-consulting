import {
    GET_TESTIMONIALS_PENDING,
    GET_TESTIMONIALS_SUCCESS,
} from '../actions/testimonials.actions'

export default (state = [], action) => {
    switch (action.type) {
        case GET_TESTIMONIALS_PENDING:
            return state;
        case GET_TESTIMONIALS_SUCCESS:
            return [...action.payload.data];
        default: 
            return state;
    }
}