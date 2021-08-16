'use strict';

module.exports = (req, res, next) => {
    const validatorName = req.query.name;
    const validatorObj = JSON.stringify({ name: validatorName });
    if (validatorName) {
        req.validator = validatorObj;
        next();
    } else {
        next('The Name NOT valid 👎')
    }

}