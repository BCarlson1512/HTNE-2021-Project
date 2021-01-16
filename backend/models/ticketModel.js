import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        phoneNumber: {type: String, required: true},
        details: {type: String, required: true},
        isComplete: {type: Boolean, required: true},
        isPaid: {type: Boolean, required: true},
    },
    {
        timestamps: true,
    }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;