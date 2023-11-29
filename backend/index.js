const express  = require('express');
const { dbconnect } = require('./config/database');


const app = express();

dbconnect();

app.listen(3000,()=>{
    console.log('server is running at port no 3000!');

})