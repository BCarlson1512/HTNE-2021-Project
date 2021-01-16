import React from 'react';
import { Link } from 'react-router-dom';


export default function Ticket(props){
    const { ticket } = props;
    return (
        <div key={ticket._id}>
            <h1>Email {ticket.email}</h1>
            <h2>Name {ticket.userDescription}</h2>
            <Link to="/ticket/:_id"></Link>
        </div>
    )
}