import { combineReducers } from 'redux';
import simpleReducer from './SimpleReducer';
import complexReducer from './ComplexReducer';
import textReducer from './TextReducer';
import {localizeReducer} from 'react-localize-redux';

export default combineReducers({
    simpleReducer,
    complexReducer,
    textReducer,
    locale: localizeReducer
});