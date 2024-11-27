const userModel = require('../model/contactModel');
const mongoose = require('mongoose');
const ErrorResponse = require('../util/errorResponse');

exports.getContacts = async (userId) => {
    const findAll = await userModel.find({user_id: userId});

    console.log(findAll);

    return findAll;
};

exports.getContact = async (reqParams) => {
    if(!mongoose.Types.ObjectId.isValid(reqParams)) {
        throw new ErrorResponse(400, "Invalid request parameter");
    }

    const find = await userModel.findById(reqParams);

    return find;
};

exports.postContact = async (userId,reqBody) => {
    let emptyInput = []

    if(!reqBody.first_name) {
        emptyInput.push('first_name');
    }

    if(!reqBody.last_name) {
        emptyInput.push('last_name');
    }

    if(!reqBody.email) {
        emptyInput.push('email');
    }

    if(!reqBody.phone) {
        emptyInput.push('phone')
    }

    if(emptyInput.length > 0) {
        throw new ErrorResponse(400, emptyInput);
    }

    if(!mongoose.Types.ObjectId.isValid(userId)) {
        throw new ErrorResponse(400, "Invalid user id type");
    }

    const post = await userModel.create({
        first_name: reqBody.first_name,
        last_name: reqBody.last_name,
        email: reqBody.email,
        phone: reqBody.phone,
        user_id: userId,
    });

    return post;
};

exports.updateContact = async (reqParams,reqBody) => {
    if(!mongoose.Types.ObjectId.isValid(reqParams)) {
        throw new ErrorResponse(400, "Invalid request parameter");
    }

    const update = await userModel.findByIdAndUpdate(reqParams,reqBody);

    return update;
};

exports.deleteContact = async (reqParams) => {
    if(!mongoose.Types.ObjectId.isValid(reqParams)) {
        throw new ErrorResponse(400, "Invalid request parameter");
    }

    const destroy = await userModel.findByIdAndDelete(reqParams);

    return destroy;
};