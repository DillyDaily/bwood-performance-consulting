import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './posts.reducers';

const rootReducer = combineReducers({ 
    form: formReducer,
    posts,
    // locations
});

export default rootReducer;