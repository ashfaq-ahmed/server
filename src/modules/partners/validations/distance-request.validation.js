const Joi = require("joi");


module.exports.distanceQuery = Joi.object({
    origin: Joi.object({
        lat: Joi.number().required().min(-90).max(90),
        lon: Joi.number().required().min(-180).max(180)
    }).required(),
    destination: Joi.object({
        lat: Joi.number().required().min(-90).max(90),
        lon: Joi.number().required().min(-180).max(180)
    }).required()
})
