const express = require('express');
const router = express.Router()


//Controllers
const { controllerTesting } = require('../Authentication_Controllers/AuthenticationControllers');


router.get( '/', controllerTesting );

module.exports = router;