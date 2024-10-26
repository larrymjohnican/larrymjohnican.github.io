 var express = require('express');
var router = express.Router();
const controller = require('../controllers/travel');

/* GET travel page */
console.log('Inside app_server, routes, travel.js');
router.get('/', controller.travel);

module.exports = router;