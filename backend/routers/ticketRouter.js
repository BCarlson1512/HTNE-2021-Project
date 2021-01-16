import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import Ticket from '../models/ticketModel.js';

const ticketRouter = express.Router();

ticketRouter.get("/seed", expressAsyncHandler(async(req,res) => {
    const createdTickets = Ticket.insertMany(data.tickets);
    res.send(createdTickets);
}));


ticketRouter.post("/create", expressAsyncHandler(async(req,res) =>{ 
    //TODO: CREATE NEW TICKET
}));

ticketRouter.put("/update", expressAsyncHandler(async(req,res) => {
    //TODO: UPDATE TICKET INFORMATION
}));
export default ticketRouter;