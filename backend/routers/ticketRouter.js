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
    const ticket = await Ticket.findById(req.params._id);
    if (ticket) {
        ticket.userDescription = req.body.userDescription + ticket.userDescription;
        ticket.isApproved = req.body.isApproved || ticket.isApproved;
        ticket.sellerDetails = {
            sellerComments: req.body.sellerComments || ticket.sellerDetails.sellerComments,
            estimatedHours: req.body.estimatedHours || ticket.sellerDetails.estimatedHours,
            cost: req.body.cost || ticket.sellerDetails.cost,
        }
        ticket.isComplete = req.body.isComplete || ticket.isComplete,
        ticket.isPaid = req.body.isPaid || ticket.isPaid,
    }
    const updatedTicket = await ticket.save();
    res.send({message: "ticket saved", ticket: updatedTicket});
}));
export default ticketRouter;