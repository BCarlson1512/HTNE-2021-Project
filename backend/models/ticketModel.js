import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        seller: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        email: {type: String},
        userDescription: {type:String, required: true},
        isApproved: {type: Boolean, default: false},
        sellerDetails : {
            sellerComments: {type: String},
            estimatedHours: {type: Number},
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