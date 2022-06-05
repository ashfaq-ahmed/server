const { list } = require('../controllers/partners.controller');
const { validate }  = require('../../core/middlewares/validate');
const {officesQuery} = require('../validations/partners.validations');

module.exports = function (app) {
    app.route('/api/partners')
        .get(validate(officesQuery), list)
}  