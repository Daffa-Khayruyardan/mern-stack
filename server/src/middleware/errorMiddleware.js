const ErrorResponse = require("../util/errorResponse");

const errorMiddleware = (err,req,res,next) => {
    if(err instanceof ErrorResponse) {
        res.status(err.errorCode).json({Error: err.message});
    }else {
        res.status(500).json({
            Error: err.message, 
        })
    }
};

module.exports = errorMiddleware;