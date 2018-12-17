import { combineReducers } from 'redux';
import simpleReducer from './SimpleReducer';
import complexReducer from './ComplexReducer';

export default combineReducers({
    simpleReducer,
    complexReducer
});