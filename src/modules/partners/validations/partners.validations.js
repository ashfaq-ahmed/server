const Joi = require('joi');


module.exports.officesQuery = {
    query: Joi.object({
        lat: Joi.number().required().min(-90).max(90),
        lon: Joi.number().required().min(-180).max(180),
        distance: Joi.number().required().min(1)
    })
}