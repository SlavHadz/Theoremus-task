const express = require('express');

const router = express.Router();
const controller = require('../controller/trucks');

router.get('/trucks', controller.getTrucks);

module.exports = router;