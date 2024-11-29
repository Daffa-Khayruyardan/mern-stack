const bcyrpt = require('bcrypt');
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
require('dotenv').config();

// import model
const userModel = require('../model/userModel');

// import custom error
const errorResponse = require('../util/errorResponse');

exports.getProfile = async (reqParams) => {
    if(!mongoose.Types.ObjectId.isValid(reqParams)) {
        throw new errorResponse(400, "Invalid object id");
    }
    
    const getProfile = userModel.findById(reqParams);

    return getProfile;
};

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

exports.updateUser = async (reqParams,reqBody) => {
    if(!mongoose.Types.ObjectId.isValid(reqParams)) {
        throw new errorResponse(400, "Id is not valid");
    }

    const update = await userModel.findByIdAndUpdate(reqParams, { email: reqBody.email }) 

    return update;
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
        _id: isUserExist._id,
    }

    const signToken = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '2h' });

    const returnValue = {
        _id: isUserExist._id,
        email: reqBody.email,
        token: signToken,
    }

    return returnValue;
};

exports.deleteUser = async (reqParams) => {
    const deleteUser = await userModel.findByIdAndDelete(reqParams)

    return deleteUser
};