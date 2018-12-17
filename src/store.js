import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
export default function configureStore(initialState={}) {
    var store = null;
    
    store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
    console.log(store.getState());
    return store;
}   