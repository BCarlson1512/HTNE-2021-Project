//TODO: redux state management for tickets here

import {TICKET_LIST_FAIL, 
        TICKET_LIST_REQUEST, 
        TICKET_LIST_SUCCESS,
        TICKET_CREATE_FAIL,
        TICKET_CREATE_SUCCESS,
        TICKET_CREATE_REQUEST,
        TICKET_CREATE_RESET,
        TICKET_DETAILS_REQUEST,
        TICKET_DETAILS_SUCCESS,
        TICKET_DETAILS_FAIL, } from "../constants/ticketConstants";

export const listTicketReducer = (state={tickets:[]}, action) => (dispatch, getState) => {
    switch (action.type) {
        case TICKET_LIST_REQUEST:
            return {loading: true};
        case TICKET_LIST_SUCCESS:
            return {loading: false, success: true};
        case TICKET_LIST_FAIL:
            return {loading: false, error: action.payload}
        default: return state;
    }
}

export const createTicketReducer = (state = {}, action) => (dispatch, getState) => {
    switch (action.type) {
        case TICKET_CREATE_REQUEST:
            return {loading: true};
        case TICKET_CREATE_SUCCESS:
            return {loading:false, ticket: action.payload};
        case TICKET_CREATE_FAIL:
            return {loading: false, error: action.payload};
        case TICKET_CREATE_RESET:
            return {};
        default: return state;
    }
}

export const ticketInfoReducer = (state = {}, action) => (dispatch, getState) =>{
    switch (action.type) {
        case TICKET_DETAILS_REQUEST:
            return {loading: true};
        case TICKET_DETAILS_SUCCESS:
            return {loading: false, infoTicket: action.payload};
        case TICKET_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default: return state;
    }
}