const express = require("express");
const register = require("./Controllers/register");

const userRoutes = express.Router();

// Routes...

userRoutes.post("/register", register);



module.exports = userRoutes;