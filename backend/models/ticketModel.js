import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        phoneNumber: {type: String, required: true},
        details: {type: String, required: true},
        isApproved: {type: String, required: true},
        sellerDetails: {
            details: {type: String},
            numHours: {type: Number},
            cost: {type: Number},
        },
        isComplete: {type: Boolean, required: true},
        isPaid: {type: Boolean, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    },
    {
        timestamps: true,
    }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;