import AppReducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'



const store = createStore(AppReducer,applyMiddleware(thunk));



export default store;