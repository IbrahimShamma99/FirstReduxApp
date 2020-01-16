import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore ,combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Counterreducer from './store/reducers/counter';
import Resultsreducer from './store/reducers/results';

const reducer = combineReducers({
    ctr:Counterreducer,
    res:Resultsreducer
})

const store = createStore(reducer);
 
ReactDOM.render(
    <Provider store={store}>
     < App / > 
     </Provider>
     , document.getElementById('root'));
registerServiceWorker();