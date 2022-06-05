const { BAD_REQUEST } = require('http-errors');
const { list } = require('../services/partners.service')

/**
 * List all the partner offices with filter criteria
 * @param {*} req 
 * @param {*} res 
 */
module.exports.list =  async function (req, res) {
    try {
        const partnerOffices = await list(req.query);
        res.jsonp(partnerOffices);
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}