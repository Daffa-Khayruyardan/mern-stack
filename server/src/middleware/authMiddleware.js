const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');

const authMiddleware = async (req,res,next) => {
    const {authorization} = req.headers;

    if(!authorization) {
        return res.status(400).json({Error: "Need token to access"});
    }

    const token = authorization.split(' ')[1];

    try {
        const {_id} = await jwt.verify(token, process.env.SECRET_KEY);

        req.user = userModel.findOne({_id}).select('_id');
        next();
    }catch(err) {
        res.status(401).json({Error: "Invalid token"})
    }
};

module.exports = authMiddleware;