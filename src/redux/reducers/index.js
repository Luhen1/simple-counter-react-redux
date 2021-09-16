// this is a combination of reducers, so index was created

import counter from './countReducer';
import auth from './authReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers ({
    counter,
    auth
});

export default allReducers;