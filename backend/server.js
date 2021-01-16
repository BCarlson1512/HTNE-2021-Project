import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(expres.json());

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/HTNE2021_PROJECT', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const port = process.env.PORT || 5000;

app.use('/api/users', userRouter);
app.use('/api/tickets', ticketModel);

app.get("/", (req, res) => {
    res.send("Server is ready");
})

app.use((error, req, res, next) => {
    res.status(500).send({message: error.message});
})

app.listen(port, () => {
    console.log(`Server started on https://localhost:${port}`);
});