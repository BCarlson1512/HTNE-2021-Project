import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTicket } from '../actions/ticketActions';
import { TICKET_CREATE_RESET } from '../constants/ticketConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function CreateTicketScreen(props) {

    const [desc, setDesc] = useState('');
    const [email, setEmail] = useState('');

    const ticketCreate = useSelector(state => state.ticketCreate);
    const {loading, success, error} = ticketCreate;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(desc)
        dispatch(createTicket({email, desc}));
    }
    useEffect(() => {
        if ( success ) {
            dispatch({type: TICKET_CREATE_RESET});
        } 
    }, [dispatch, props.history, success, error]);

    return (
        <div>
            <div className="account">
                {loading && <LoadingBox />}
                {error && <MessageBox>{error}</MessageBox>}
                <form className="form" onSubmit={submitHandler}>
                    <h1> Submit a Request</h1>
                    <div className="inputs">
                        <div>
                            <label htmlFor="email">Email </label>
                            <input id="email" type="email" placeholder="Enter email" value={email} required onChange={((e) => setEmail(e.target.value))} />
                        </div>
                        <div>
                            <textarea id="desc" type="text" placeholder="Enter Your request" value={desc} required onChange={((e) => setDesc(e.target.value))} rows="10" cols="60" />
                        </div>
                        <div>
                            <label />
                            <button type="submit" className="loginButton">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}