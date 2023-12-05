const { errorHandler } = require("../utils/error");
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

exports.test = (req,res)=>{
    res.json({
        messgae:"Hello world",
    });
};

exports.updateUser = async(req,res,next)=>{
    if(req.user.id !== req.params.id)
    return next(errorHandler(403,'You are not authenticated'));
    try{
        if(req.body.password){
            req.body.password = bcrypt.hashSync(req.body.password,10);
        }
        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set:{
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                avatar:req.body.avatar,
            }

        },{new:true})

        const {password,...rest} = updateUser._doc;
        res.status(200).json({
            success:true,
            message:'user updated successfully',
            user:rest,
        })

    }catch(error)
    {
        next(error);
    }
    
}
