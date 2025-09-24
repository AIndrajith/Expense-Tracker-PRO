const express = require("express");
const register = require("./Controllers/register");
const login = require("./Controllers/login");
const userDashboard = require("./Controllers/userDashboard");
const auth = require("../../middleware/auth");
const forgotPassword = require("./Controllers/forgotPasswords");

const userRoutes = express.Router();

// Routes...

userRoutes.post("/register", register);
userRoutes.post("/login", login);

userRoutes.post("/forgotpw", forgotPassword);

userRoutes.use(auth);

// Protected routes...

userRoutes.get("/dashboard", userDashboard);



module.exports = userRoutes;