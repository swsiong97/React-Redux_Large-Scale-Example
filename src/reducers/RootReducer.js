import { combineReducers } from 'redux';
import simpleReducer from './SimpleReducer';
import complexReducer from './ComplexReducer';
import textReducer from './TextReducer';

export default combineReducers({
    simpleReducer,
    complexReducer,
    textReducer
});