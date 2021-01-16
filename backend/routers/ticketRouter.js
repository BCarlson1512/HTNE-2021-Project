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
    const ticket = new Ticket(
        {
            user: req.user._id,
            seller: req.seller._id,
            userDescription: req.body.userDescription,
        }
    );
    const createdTicket = await ticket.save();
    res.status(201).send({message: "Ticket Created"});
}));

ticketRouter.put("/update", expressAsyncHandler(async(req,res) => {
    //TODO: UPDATE TICKET INFORMATION

}));
export default ticketRouter;