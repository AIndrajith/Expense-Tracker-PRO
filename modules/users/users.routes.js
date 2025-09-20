const express = require("express");
const register = require("./Controllers/register");
const login = require("./Controllers/login");

const userRoutes = express.Router();

// Routes...

userRoutes.post("/register", register);
userRoutes.post("/login", login);



module.exports = userRoutes;