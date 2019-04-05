import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reactLocalStorage} from "reactjs-localstorage";
// import 'bootstrap/dist/css/bootstrap.css';

import rootReducer from './reducers';
import './index.css';
import App from './App';

let columns = reactLocalStorage.get('Columns');
console.log(columns);

const initialState = {};
if(columns && columns.length) {
  initialState.columns = columns;
} else {
  initialState.columns = [
    {name: 'Winnie', Cards: [{text: 'Card A'}, {text: 'Card B'}]},
    {name: 'Bob', Cards: [{text: 'Card A'}, {text: 'Card B'}]},
    {name: 'Thomas', Cards: [{text: 'Card A'}, {text: 'Card B'}]},
    {name: 'George', Cards: [{text: 'Card A'}, {text: 'Card B'}]}
  ]
}

let store = createStore(rootReducer, initialState, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.getElementById('root'));
