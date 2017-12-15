import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './posts.reducers';
import testimonials from './testimonials.reducers';
import messages from './messages.reducers';
import searchBar from './search.reducers';

const rootReducer = combineReducers({ 
    form: formReducer,
    posts,
    testimonials,
    messages,
    searchBar
});

export default rootReducer;