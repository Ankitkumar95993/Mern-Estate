const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { errorHandler } = require("../utils/error");

exports.signup = async (req, res,next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(403).send({
        success: false,
        message: "all fields are required",
      });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    next(error);
  }
};
