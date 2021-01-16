import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import Ticket from '../models/ticketModel.js';
import data from '../data.js'

const ticketRouter = express.Router();

ticketRouter.get("/seed", expressAsyncHandler(async(req,res) => {
    const createdTickets = await Ticket.insertMany(data.tickets);
    res.send(createdTickets);
}));

ticketRouter.get('/mine', expressAsyncHandler(async(req,res) => {
    const tickets = await Ticket.find({user: req.user._id});
    res.send(tickets);
}));

ticketRouter.post("/", expressAsyncHandler(async(req,res) =>{ 
    const ticket = new Ticket(
        {
            email: req.body.email,
            userDescription: req.body.description,
        }
    );
    const createdTicket = await ticket.save();
    res.status(201).send({

    });
}));

ticketRouter.get('/', expressAsyncHandler(async(req,res)=>{
    const tickets = await Ticket.find({});
    res.send(tickets);
}))

ticketRouter.put("/update", expressAsyncHandler(async(req,res) => {
    const ticket = await Ticket.findById(req.params._id);
    if (ticket) {
        ticket.userDescription = req.body.userDescription + ticket.userDescription;
        ticket.isApproved = req.body.isApproved || ticket.isApproved;
        ticket.sellerDetails = {
            sellerComments: req.body.sellerComments || ticket.sellerDetails.sellerComments,
            estimatedHours: req.body.estimatedHours || ticket.sellerDetails.estimatedHours,
            cost: req.body.cost || ticket.sellerDetails.cost,
        };
        ticket.isComplete = req.body.isComplete || ticket.isComplete;
        ticket.isPaid = req.body.isPaid || ticket.isPaid;
    }
    const updatedTicket = await ticket.save();
    res.send({message: "ticket saved", ticket: updatedTicket});
}));

ticketRouter.delete("/:id", expressAsyncHandler(async(req,res) => {
    const ticket = await Ticket.findById(req.params.id);
    if (ticket) {
        const deletedTicket = ticket.remove();
        res.send({message: "Ticket removed", ticket: deletedTicket});
    } else {
        res.status(404).send({message: "Ticket not found"});
    }
}));

export default ticketRouter;