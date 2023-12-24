const express  = require('express')
const app = express();


const database = require('./config/database');
const userRouter = require('./routes/user.route');
const dotenv = require("dotenv");
const authRouter = require('./routes/auth.route.js');
const cookieParser=require('cookie-parser');
const listingRouter = require('./routes/listing.route');
const path = require('path'); 

const __dirnames = path.resolve();

dotenv.config();
// const PORT = process.env.PORT || 4000;

database.dbconnect();

app.use(express.json());
app.use(cookieParser());

require('dotenv').config();

app.listen(5050,()=>{
    console.log('server is running at port no 5050');

});

app.use('/api/v1/user',userRouter);
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/listing',listingRouter);

app.use(express.static(path.join(__dirnames,'/client/dist')));

app.get('*',(req,res)=>{res.sendFile(path.join(__dirnames,'client','dist','index.html'));
})



app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});