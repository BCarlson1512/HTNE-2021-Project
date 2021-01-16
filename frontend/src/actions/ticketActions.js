import Axios from 'axios';
import { TICKET_CREATE_FAIL, 
        TICKET_CREATE_REQUEST, 
        TICKET_CREATE_SUCCESS, 
        TICKET_DETAILS_FAIL, 
        TICKET_DETAILS_REQUEST, 
        TICKET_DETAILS_SUCCESS,
        TICKET_LIST_MINE_FAIL,
        TICKET_LIST_MINE_REQUEST,
        TICKET_LIST_MINE_SUCCESS, 
    } from '../constants/ticketConstants';

export const listTickets = () => async () =>{
    //TODO: list all tickets
}

export const listMyTickets = () => async (dispatch) => {
    dispatch({type: TICKET_LIST_MINE_REQUEST});
    try {
        const { data } = Axios.get('/api/tickets/mine')
        dispatch({type: TICKET_LIST_MINE_SUCCESS, payload: data})
    } catch (error) {
        const message = error.response && error.response.data.message?
        error.response.data.message 
        : error.message;
        dispatch({type: TICKET_LIST_MINE_FAIL, payload: message});
    }
}

export const createTicket = (ticket) => async (dispatch) =>{
    //TODO: create a ticket
    dispatch({type: TICKET_CREATE_REQUEST});
    try {
        const { data } = await Axios.post('/api/tickets', ticket);
        dispatch({type: TICKET_CREATE_SUCCESS, payload: data});
    } catch (error) {
        const message = error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message;
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
        const { data } = Axios.get(`/api/tickets/${ticketId}`, {});
        dispatch({type: TICKET_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        const message = error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message;
        dispatch({type: TICKET_DETAILS_FAIL, payload: message});
    }

}
