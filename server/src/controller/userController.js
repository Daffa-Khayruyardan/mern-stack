// import service
const userService = require('../service/userService');

exports.register = async (req,res,next) => {
    try{
        const response = await userService.register(req.body);

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