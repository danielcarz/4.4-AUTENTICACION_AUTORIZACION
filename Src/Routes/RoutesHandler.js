const express = require('express');
const router = express.Router()

//IMPORTS
const { authenitcationRoutes } = require('../Container/Authentication/AuthenticationBarrel');



router.use( '/', authenitcationRoutes );


module.exports = router;