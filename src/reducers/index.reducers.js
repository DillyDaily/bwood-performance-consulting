import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './posts.reducers';
import testimonials from './testimonials.reducers';

const rootReducer = combineReducers({ 
    form: formReducer,
    posts,
    testimonials
});

export default rootReducer;