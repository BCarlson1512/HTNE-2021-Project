import React from 'react';
import { Link } from 'react-router-dom';


export default function Ticket(props){
    const { ticket } = props;
    return (
        <div key={ticket._id}>
            <h1>Ticket # {ticket._id} </h1>
            <Link to="/ticket/:_id"></Link>
        </div>
    )
}