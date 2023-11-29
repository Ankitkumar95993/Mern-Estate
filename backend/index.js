const express  = require('express');
const { dbconnect } = require('./config/database');
const userRouter = require('./routes/user.route');


const app = express();

dbconnect();

app.listen(3000,()=>{
    console.log('server is running at port no 3000!');

})

app.use(express.json());

app.use('/api/user',userRouter);
