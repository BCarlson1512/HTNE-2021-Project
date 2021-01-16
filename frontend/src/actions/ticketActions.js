import Axios from 'axios';
import { TICKET_CREATE_FAIL, 
        TICKET_CREATE_REQUEST, 
        TICKET_CREATE_SUCCESS, 
        TICKET_DETAILS_FAIL, 
        TICKET_DETAILS_REQUEST, 
        TICKET_DETAILS_SUCCESS,
        TICKET_LIST_FAIL,
        TICKET_LIST_MINE_FAIL,
        TICKET_LIST_MINE_REQUEST,
        TICKET_LIST_MINE_SUCCESS,
        TICKET_LIST_REQUEST,
        TICKET_LIST_SUCCESS, 
    } from '../constants/ticketConstants';

export const listTickets = () => async (dispatch) =>{
    //TODO: list all tickets
    dispatch({type: TICKET_LIST_REQUEST});
    try{
        const {data} = await Axios.get('/api/tickets/seed');
        console.log("Axios")
        console.log(data);
        dispatch({type: TICKET_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: TICKET_LIST_FAIL, payload: error})
    }
}

export const listMyTickets = () => async (dispatch) => {
    dispatch({type: TICKET_LIST_MINE_REQUEST});
    try {
        const { data } = await Axios.get('/api/tickets/mine')
        dispatch({type: TICKET_LIST_MINE_SUCCESS, payload: data})
    } catch (error) {
        const message = error.response && error.response.data.message?
        error.response.data.message 
        : error.message;
        dispatch({type: TICKET_LIST_MINE_FAIL, payload: message});
    }
}

export const createTicket = (email, description) => async (dispatch) =>{
    //TODO: create a ticket
    dispatch({type: TICKET_CREATE_REQUEST, payload: {email, description}});
    try {
        const { data } = await Axios.post('/api/tickets/create', {email, description});
        dispatch({type: TICKET_CREATE_SUCCESS, payload: data});
    } catch (error) {
        const message = error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message;
        console.log(error);
        dispatch({type: TICKET_CREATE_FAIL, payload: message});
    }
}

export const deleteTicket = () => async () =>{
    //TODO: delete ticket from system
}

export const payTicket = () => async () =>{
    //TODO: payment
}

export const detailsTicket = (ticketId) => async (dispatch) => {
    //TODO: details about a specific ticket
    dispatch({type: TICKET_DETAILS_REQUEST, payload: ticketId});
    try {
        const { data } = await Axios.get(`/api/tickets/${ticketId}`, {});
        dispatch({type: TICKET_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        const message = error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message;
        dispatch({type: TICKET_DETAILS_FAIL, payload: message});
    }

}
