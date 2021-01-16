import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import ticketRouter from './routers/ticketRouter.js';

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://BCARLSON1512:Pr0ski113f2@htne21.df32j.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const port = process.env.PORT || 5000;

app.use('/api/users', userRouter);
app.use('/api/tickets', ticketRouter);

app.get("/", (req, res) => {
    res.send("Server is ready");
})

app.use((error, req, res, next) => {
    res.status(500).send({message: error.message});
})

app.listen(port, () => {
    console.log(`Server started on https://localhost:${port}`);
});