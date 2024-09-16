const express = require('express');
const router = express.Router()



router.get( '/', (req, res) => {



    res.send("this a htt method from authenitcation");


} )

module.exports = router;