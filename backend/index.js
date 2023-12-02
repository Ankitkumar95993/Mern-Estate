const express  = require('express')
const app = express()

const database = require('./config/database');
const userRouter = require('./routes/user.route');
const dotenv = require("dotenv");
const authRouter = require('./routes/auth.route.js');

dotenv.config();
const PORT = process.env.PORT || 4000;
database.dbconnect();
app.use(express.json());

require('dotenv').config();




app.listen(5050,()=>{
    console.log('server is running at port no 5050');

});

app.use('/api/v1/user',userRouter);
app.use('/api/v1/auth',authRouter);


