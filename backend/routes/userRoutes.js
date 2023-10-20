const { Router } = require("express");
const User = require('../model/user'); // Import user model

const { login, register } = require("../controllers/userControllers");
const userrouter = Router();


userrouter.post("/user/login", login)
userrouter.post("/user/register", register)


module.exports = userrouter;
