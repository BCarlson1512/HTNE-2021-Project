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

export const isAuth = (req, res, next) => {
    //TODO: check login state of user
} 

export const isAdminOrSeller = (req, res, next) => {
    if (req.user && (req.user.isAdmin || req.user.isSeller) ) {
        next();
    }
    res.status(500).send({message: "Invalid Seller/Admin Credentials"});
}

export const isAdmin = (req, res, next) => {
    if(req.user && req.user.isAdmin) {
        next();
    }
    res.status(500).send({message: "Invalid Admin Credentials"});
}