const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const register = async(req, res) => {

    const usersModel = mongoose.model("users");

    const {email, password, confirm_password, name, balance} = req.body;

    // validations...
    if (!email) throw "Email must be provided!";
    if (!password) throw "Password must be provided!";
    if (password.length < 5) throw "Password must be at least 5 characters long";
    if (!name) throw "Name is required";
    if (password !== confirm_password) throw "Password and confirmed password doesn't match!";


    const getDuplicateEmail = await usersModel.findOne({
        email: email
    });

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 12);

    if (getDuplicateEmail) throw "This email already exists!";

    await usersModel.create({
        name: name,
        email: email,
        password: hashedPassword,
        balance: balance,
    })

    res.status(201).json({
        status: "User registered successfully!",
    });
};

module.exports = register;