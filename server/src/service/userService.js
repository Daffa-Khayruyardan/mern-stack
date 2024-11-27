const bcyrpt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();

// import model
const userModel = require('../model/userModel');

// import custom error
const errorResponse = require('../util/errorResponse');

exports.register = async (reqBody) => {
    const isUserExist =  await userModel.findOne({email: reqBody.email});

    if(isUserExist) {
        throw new errorResponse(400, "User already exist");
    }

    const hashPassword = await bcyrpt.hash(reqBody.password, 10);

    const createNewUser = await userModel.create({
        email: reqBody.email,
        password: hashPassword,
    });

    return createNewUser;
};

exports.login = async (reqBody) => {
    const isUserExist = await userModel.findOne({email: reqBody.email});

    if(!isUserExist) {
        throw new errorResponse(400, "Email is invalid");
    }

    const comparePassword = await bcyrpt.compare(reqBody.password, isUserExist.password);

    if(!comparePassword) {
        throw new errorResponse(400, "Password is invalid");
    }

    const payload = {
        email: reqBody.email,
    }

    const signToken = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '2h' });

    const returnValue = {
        email: reqBody.email,
        token: signToken,
    }

    return returnValue;
};