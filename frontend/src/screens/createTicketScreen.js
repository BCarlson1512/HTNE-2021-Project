import React, { useEffect, useState } from 'react';

export default function CreateTicketScreen() {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [email, setEmail] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        
    }, []);
    return (
        <div>
            <div>
                <form className="form" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="name">Name </label>
                        <input id="name" type="text" placeholder="Enter Name" value={name} onChange={((e) => setName(e.target.name))} />
                    </div>
                    <div>
                        <label htmlFor="email">Email </label>
                        <input id="email" type="text" placeholder="Enter email" value={email} onChange={((e) => setEmail(e.target.name))} />
                    </div>
                    <div>
                        <label htmlFor="desc">Details For Your Request </label>
                        <input id="desc" type="text" placeholder="Enter Your request" value={desc} onChange={((e) => setDesc(e.target.name))} />
                    </div>
                    <div>
                        <label />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}