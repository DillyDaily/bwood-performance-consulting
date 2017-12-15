import { SEARCH_BAR } from '../actions/search.actions';

export default (state = '', action) => {
    switch (action.type) {
        case SEARCH_BAR:
            return action.payload;
        default: 
            return state;
    }
}
