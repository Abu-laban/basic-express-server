'use strict';

module.exports = (req, res, next) => {
    const err = {
        status: 404,
        message: 'NOT FOUND'
    }

    res.status(404).json(err);
    //next();
}