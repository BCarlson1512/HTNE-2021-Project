import React from 'react';



export default function createTicketScreen() {
    const   handleSubmission = (e) =>{
        return (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src = "https://help.formstack.com/hc/article_attachments/360015218271/image-1.jpeg"></img>
        )
    }


    return (
        <div>
            <form className = "backround ticket">
                <h1>Create Your Order Form</h1>
                <div className = "inputs">
                     <p><input /*required*/ placeholder = "First Name"></input></p>
                  
                     <p><input /*required*/ placeholder = "Last Name"></input></p>
                    
                     <p><input /*required*/ placeholder = "email"></input></p>
                  
                     <p><input /*required*/ placeholder = "phone number"></input></p>
                   
                </div>
                <textarea /*required*/  placeholder = "description of website" rows = "10" cols = "60"></textarea>
                <h3 className = "status" >status:</h3>
                <button onClick = {handleSubmission()} className = "loginButton submit">submit</button>
               
            </form>
        </div>
    )
    
}


  