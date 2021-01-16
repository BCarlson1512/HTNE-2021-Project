import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    //TODO: Create json web token for logged in user/admin, from data within database
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isSeller: user.isSeller,
    })
};