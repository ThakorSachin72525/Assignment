const UserModel = require("../models/userModel.js");
exports.home = (req, res) => {
  res.send("Hello World!");
};

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("Name ,Email and Password are required");
    }
    const userExists = await UserModel.findOne({ email: email });

    if (userExists) {
      throw new Error("User already registered");
    }
    const usermodel = await UserModel.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      message: "User registration successfully",
      usermodel,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await UserModel.findOne({ email });

    if (userData) {
      // Verifying provided password by user
      if (userData.password == password) {
        res.status(200).send({
          msg: "User Login Successfully",
        });
      } else {
        res.status(404).send({
          msg: "You have entered wrong password",
        });
      }
    } else {
      res.status(404).send({
        msg: "No user found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
