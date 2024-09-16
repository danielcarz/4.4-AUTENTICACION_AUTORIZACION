//IMPORTS
const express = require('express');

require('dotenv').config(); //config the enviorment variables

const app = express(); //start the aplication


const PORT = 4000

 

//MIDDLEWARES


//METHODS
app.get( '/', (req, res) => {

    res.send("hello world from express js");


} )



//LISTENER
app.listen( PORT, () => {
    console.log('listen on port:', PORT);
} )