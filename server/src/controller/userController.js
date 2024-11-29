// import service
const userService = require('../service/userService');

exports.getProfile = async (req,res,next) => {
    try{
        const response = await userService.getProfile(req.params.id);

        res.status(200).json(response);
    }catch(err) {
        next(err);
    }
};

exports.register = async (req,res,next) => {
    try{
        const response = await userService.register(req.body);

        res.status(200).json(response);
    }catch(err) {
        next(err);
    }
};

exports.update = async (req,res,next) => {
    try{
        const response = await userService.updateUser(req.params.id,req.body);

        res.status(200).json(response);
    }catch(err) {
        next(err);
    }
};

exports.login = async (req,res,next) => {
    try{
        const response = await userService.login(req.body);

        res.status(200).json(response);
    }catch(err) {
        next(err);
    }
};

exports.deleteUser = async (req,res,next) => {
    try{
        const response = await userService.deleteUser(req.params.id);

        res.status(200).json(response)
    }catch(err) {
        next(err);
    }
};