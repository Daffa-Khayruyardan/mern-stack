const userModel = require('../model/contactModel');
const mongoose = require('mongoose');
const ErrorResponse = require('../util/errorResponse');

exports.getContacts = async () => {
    const findAll = await userModel.find({});

    return findAll;
};

exports.getContact = async (reqParams) => {
    if(!mongoose.Types.ObjectId.isValid(reqParams)) {
        throw new ErrorResponse(400, "Invalid request parameter");
    }

    const find = await userModel.findById(reqParams);

    return find;
};

exports.postContact = async (reqBody) => {
    const post = await userModel.create(reqBody);

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