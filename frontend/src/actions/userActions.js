import Axios from 'axios';
import { USER_REGISTER_FAIL, 
        USER_REGISTER_REQUEST, 
        USER_REGISTER_SUCCESS,
        USER_LOGIN_REQUEST,
        USER_LOGIN_SUCCESS,
        USER_LOGIN_FAIL, 
        USER_LOGOUT,
        USER_DETAILS_REQUEST,
        USER_DETAILS_FAIL,
        USER_DETAILS_SUCCESS,
        USER_DELETE_REQUEST,
        USER_DELETE_SUCCESS,
        USER_DELETE_FAIL,
        USER_LIST_REQUEST,
        USER_LIST_SUCCESS,
        USER_LIST_FAIL,
    } from '../constants/userConstants';

export const registerSeller = (name, email, password) => async (dispatch) => {
    dispatch({type: USER_REGISTER_REQUEST, payload: {email, password}});
    try {
        const {data} = await Axios.post('/api/users/register/seller', {name, email, password});
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});
        dispatch({type: USER_LOGIN_SUCCESS, payload: data});
    } catch (error) {
        const message = error.response && error.response.data.message 
        ? error.response.data.message
        : error.message;
        dispatch({type: USER_REGISTER_FAIL, payload: message});
    }
}

export const registerCustomer = (name, email, password) => async (dispatch) => {
    dispatch({type: USER_REGISTER_REQUEST, payload: {email, password}});
    try {
        const {data} = await Axios.post('/api/users/register/user', {name, email, password});
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});
        dispatch({type: USER_LOGIN_SUCCESS, payload: data});
    } catch (error) {
        const message = error.response && error.response.data.message 
        ? error.response.data.message
        : error.message;
        dispatch({type: USER_REGISTER_FAIL, payload: message});
    }
}

export const login = (email, password) => async (dispatch) => {
    dispatch({type: USER_LOGIN_REQUEST, payload: {email, password}});
    try {
        const { data } = await Axios.post('/api/users/login', {email, password});
        dispatch({type: USER_LOGIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        const message = error.response && error.response.data.message 
        ? error.response.data.message
        : error.message;
        dispatch({type: USER_LOGIN_FAIL, payload: message});
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({type: USER_LOGOUT});
}

export const detailsUser = (userId) => async (dispatch, getState) => {
    dispatch({type: USER_DETAILS_REQUEST, payload: userId});
    const {userSignin:{userInfo}} = getState(); //TODO: setup state for userinfo and usersignin
    try {
        const { data } = await Axios.get(`/api/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        });
        dispatch({type: USER_DETAILS_SUCCESS, payload:data});
    } catch (error) {
        const message = error.response && error.response.data.message 
        ? error.response.data.message
        : error.message;
        dispatch({type: USER_DETAILS_FAIL, payload: message});
    }
}

export const deleteUser = (user) => async (dispatch) => {
    dispatch({type: USER_DELETE_REQUEST});
    try {
        const { data } = Axios.delete(`/api/users/${user._id}`, user);
        dispatch({type: USER_DELETE_SUCCESS, payload: data});
    } catch (error) {
        const message = error.response && error.response.data.message?
        error.response.data.message 
        : error.message;
        dispatch({type: USER_DELETE_FAIL, payload: message});
    }
}

export const listUsers = () => async (dispatch) => {
    dispatch({type: USER_LIST_REQUEST});
    try {
        const { data } = await Axios.get('/api/users');
        dispatch({type: USER_LIST_SUCCESS, payload: data});
    } catch (error) {
        const message = error.response && error.response.data.message?
        error.response.data.message 
        : error.message;
        dispatch({type: USER_LIST_FAIL, payload: message});
    }
}