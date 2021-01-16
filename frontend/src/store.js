import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createTicketReducer, listTicketReducer, ticketInfoReducer } from './reducers/ticketReducers';
import thunk from 'redux-thunk';
const initialState = {
    ticketInfo: {
        email: '',
        desc: '',
    }
};

const reducer = combineReducers({
    ticketCreate : createTicketReducer,
    listTicket : listTicketReducer,
    infoTicket :ticketInfoReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk))); // creates store for the reducer and init state

export default store;