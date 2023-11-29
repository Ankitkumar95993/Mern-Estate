const mongoose = require('mongoose');
require('dotenv').config();

exports.dbconnect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    })
    .then(()=>console.log("Db connection successful"))
    .catch((error)=>{

    console.log('Db connection failed');
    console.error(error);
    process.exit(1);
    })
}