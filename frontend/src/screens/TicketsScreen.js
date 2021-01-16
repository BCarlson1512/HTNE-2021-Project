import axios from 'axios';
import React, { useEffect, useSt, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';

export default function TicketsScreen() {
    const dispatch = useDispatch();
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const {data} = await axios.get('/api/tickets');
            setTickets(data);
            setLoading(false);
        }
        fetchData();
    }, [dispatch]);
    console.log(tickets);
    return(
        <div>
            {loading ? (<LoadingBox/>)
            :
            (<div className = "row center">
                {
                tickets.map((ticket) => (
                    <div className="TicketUI">
                        <div key={ticket._id}>
                            <h4>Email: {ticket.email}</h4>
                            <p>Name {ticket.userDescription}</p>
                            <Link to="/ticket/:_id"></Link>
                        </div>
                    </div>
                ))
                }
            </div>)
            }
        </div>    
    )
}