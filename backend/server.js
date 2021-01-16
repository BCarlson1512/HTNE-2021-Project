import express from 'express';

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Server is ready");
})

app.use('/api/users', userRouter);

app.listen(port, () => {
    console.log(`Server started on https://localhost:${port}`);
});