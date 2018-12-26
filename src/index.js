import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './components/App';
import { LocalizeProvider } from "react-localize-redux";

//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <LocalizeProvider>
        <Provider store={configureStore()}>
            <App />
        </Provider>
    </LocalizeProvider>
 ,
 document.getElementById('root')
);
//registerServiceWorker();\
