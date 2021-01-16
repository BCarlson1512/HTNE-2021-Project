import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTicket } from '../actions/ticketActions';
import { TICKET_CREATE_RESET } from '../constants/ticketConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function CreateTicketScreen(props) {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [email, setEmail] = useState('');

    const ticketCreate = useSelector(state => state.ticketCreate);
    const {loading, success, error, ticket} = ticketCreate;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createTicket({name, email, desc}));
    }
    useEffect(() => {
        if ( success ) {
            dispatch({type: TICKET_CREATE_RESET});
        }
    }, [dispatch, props.history, success]);
    return (
        <div>
            <div className="account">
                {loading && <LoadingBox />}
                {error && <MessageBox>{error}</MessageBox>}
                <form className="form" onSubmit={submitHandler}>
                    <h1> Submit a Request</h1>
                    <div className="inputs">
                        <div>
                            <label htmlFor="name">Name </label>
                            <input id="name" type="text" placeholder="Enter Name" value={name} required onChange={((e) => setName(e.target.name))} />
                        </div>
                        <div>
                            <label htmlFor="email">Email </label>
                            <input id="email" type="email" placeholder="Enter email" value={email} required onChange={((e) => setEmail(e.target.email))} />
                        </div>
                        <div>
                            <textarea id="desc" type="text" placeholder="Enter Your request" value={desc} required onChange={((e) => setDesc(e.target.desc))} rows="10" cols="60" />
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