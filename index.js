//IMPORTS
const express = require('express');

require('dotenv').config(); //config the enviorment variables

const HandleRoutes = require('./Src/Routes/RoutesHandler');





const app = express(); //start the aplication


const PORT = 4000

 

//MIDDLEWARES


//ROUTES
app.use( '/', HandleRoutes );


//LISTENER
app.listen( PORT, () => {
    console.log('listen on port:', PORT);
} )