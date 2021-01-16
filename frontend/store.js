import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import {thunk} from 'redux-thunk';
import { createTicketReducer, listTicketReducer } from './src/reducers/ticketReducers';

const initialState = {};

const reducer = combineReducers({
    createTicket : createTicketReducer,
    listTicket : listTicketReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk))); // creates store for the reducer and init state

export default store;