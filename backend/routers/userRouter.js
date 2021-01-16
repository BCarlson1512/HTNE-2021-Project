import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import data from '../data.js'
import bcrypt from 'bcryptjs';
import {generateToken} from '../utilities.js';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send(createdUsers);
}));

userRouter.get('/', expressAsyncHandler(async(req,res) => {
    const users= await User.find({});
    res.send(users);
}));

userRouter.post('/register/user', expressAsyncHandler(async(req,res) =>{
    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hash(req.body.password, 8),
    })
    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: req.body.email,
        isAdmin: createdUser.isAdmin,
        isSeller: createdUser.isSeller,
        token: generateToken(user),
    });
}));

userRouter.get('/register/seller', expressAsyncHandler(async(req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        isSeller: true,
        password: bcrypt.hash(req.body.password, 8),
        token: generateToken(user),
    });
    const createdSeller = await user.save();
    res.send({
        _id: createdSeller._id,
        name: createdSeller.name,
        email: createdSeller.email,
        isAdmin: createdSeller.isAdmin,
        isSeller: createdSeller.isSeller,
        token: generateToken(user),
    });
}));

userRouter.post('/login', expressAsyncHandler(async(req,res) => {
    const user = await User.findOne(req.body.email); // take the request email and search for a user in the db
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) { // passwords are a match
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                isSeller: user.isSeller,
                token: generateToken(user),
            });
        }
    }
    res.status(401).send({message: "Invalid Email/Password"});
}));

userRouter.put('/profile', expressAsyncHandler(async(req,res) => {
    //TODO: User login verification middleware
    const user = await User.findById(req.body._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = bcrypt.hashSync(user.password, 8);
        }
        const updatedUser = await user.save();
        res.send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            isSeller: updatedUser.isSeller,
            token: generateToken(user),
        })
    }
}));

export default userRouter;