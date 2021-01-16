import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        seller: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        userDescription: {type:String, required: true, default: "description goes here"},
        isApproved: {type: String, default: false},
        sellerDetails: {
            details: {type: String},
            numHours: {type: Number},
            cost: {type: Number},
        },
        isComplete: {type: Boolean, default: false},
        isPaid: {type: Boolean, default: false},
    },
    {
        timestamps: true,
    }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;