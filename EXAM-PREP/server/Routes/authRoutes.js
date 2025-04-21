const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
const User = require('../Models/userModel')

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/buyCourse", authController.buyCourse);
router.post("/create-checkout-session", authController.checkout);
router.get('/getUser',(req,res)=>{
    
    User.find().then(users=>res.json(users)).catch(err=>res.json(err))
})

module.exports = router;


// tIOfqyJZ5zHhQLOi2U6lBPNV3MQ API Secret
// 178613685466653 API KEY