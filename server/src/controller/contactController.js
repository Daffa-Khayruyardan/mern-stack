const contactService = require('../service/contactService');

exports.getContacts = async (req,res,next) => {
    try {
        const response = await contactService.getContacts();

        res.status(200).json(response)
    }catch(err) {
        next(err);
    }
};

exports.getContact = async (req,res,next) => {
    try {
        const response = await contactService.getContact(req.params.id);

        res.status(200).json(response)
    }catch(err) {
        next(err);
    }
};

exports.postContact = async (req,res,next) => {
    try {
        const response = await contactService.postContact(req.body);

        res.status(200).json(response)
    }catch(err) {
        next(err);
    }
};

exports.updateContact = async (req,res,next) => {
    try {
        const response = await contactService.updateContact(req.params.id,req.body);

        res.status(200).json(response)
    }catch(err) {
        next(err);
    }
};

exports.deleteContact = async (req,res,next) => {
    try {
        const response = await contactService.deleteContact(req.params.id);

        res.status(200).json(response)
    }catch(err) {
        next(err);
    }
};

