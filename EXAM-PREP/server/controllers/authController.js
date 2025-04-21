const User = require("../Models/userModel");
const Course = require("../Models/courseModel");
const creatError = require("../utils/appError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config;
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51P8J9FSJ0mtT03Xmkz9nMOHWLJelge9bXIzDfEWCzzFKVP8PxIDnDshPXTJwoZ8xq0oFQ6NbukPKiIV9FVyEuod900uj66Team"
);

//Register User
exports.signup = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return next(new creatError("User already exists!", 400));
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    //JWT

    const token = jwt.sign({ _id: newUser._id }, "secretkey1234", {
      expiresIn: "90d",
    });

    res.status(201).json({
      status: "Sucess",
      message: "Registered Succesfully",
      token,
    });
  } catch (error) {
    next(error);
  }
};
//Logn User
exports.login = async (req, res, next) => {
  //res.send("Login");
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return next(new creatError("User Not Found!", 404));
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return next(new creatError("Invalid Credentials", 401));
    }
    const token = jwt.sign({ id: user._id }, "secretkey1234", {
      expiresIn: "90d",
    });
    res.status(200).json({
      status: "Success",
      token,
      message: "Logged in successfully",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        collegeName:user.collegeName
      },
    });
  } catch (error) {
    next(error);
  }
};
// buyCourse
exports.buyCourse = async (req, res, next) => {
  try {
    const user = await Course.findOne({ email: req.body.email });
    const course = await Course.findOne({ cname: req.body.cname });
    if (user && course) {
      return next(new creatError("Already Entrolled", 400));
    } else {
      const newCourseEntry = new Course({
        name: req.body.name,
        cname: req.body.cname,
        email: req.body.email,
      });
      res.status(201).json({
        status: "Success",
        message: "Proceed for Payment",
        statusFlag: true,
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.checkout = async (req, res, next) => {
  const { cname, price } = req.body;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: cname,
          },
          unit_amount: 100000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://127.0.0.1:5173/successPayment",
    cancel_url: "http://127.0.0.1:5173/cancelPayment",
  });
  res.send({ url: session.url });
};
