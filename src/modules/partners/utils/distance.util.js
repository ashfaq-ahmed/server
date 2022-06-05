const Joi = require('joi');

const {distanceQuery} = require('../validations/distance-request.validation');

module.exports = function (points) {

    const {value, error} = distanceQuery.validate(points);

    if (error) {
        throw error;
    }

    const originRads = {
        lat: (value.origin.lat * Math.PI) / 180,
        lon: (value.origin.lon * Math.PI) / 180
    }

    const destRad = {
        lat: (value.destination.lat * Math.PI) / 180,
        lon: (value.destination.lon * Math.PI) / 180
    }

    // const radiansdiff = {
    //     lat: destRad.lat - originRads.lat,
    //     lon: destRad.lon - originRads.lon
    // }


    const diffInRadians = {
        lat: ((value.destination.lat - value.origin.lat) * Math.PI) / 180,
        lon: ((value.destination.lon - value.origin.lon) * Math.PI) / 180,
    }

    const a = Math.sin(diffInRadians.lat / 2) * Math.sin(diffInRadians.lat / 2) + Math.cos(originRads.lat) * Math.cos(destRad.lat) * Math.sin(diffInRadians.lon / 2) * Math.sin(diffInRadians.lon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = 6371e3 * c; // multiply by sphere radius

    // distance in kms.
    return d / 1000; // kilometers
}