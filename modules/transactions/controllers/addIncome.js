const mongoose = require("mongoose");
const validator = require("validator");
const usersModel = require("../../../models/users.models");

const addIncome = async (req, res) => {

    const userModel = mongoose.model("users");
    const transactionsModel = mongoose.model("transactions");

    const {amount, remarks} = req.body;

    if(!amount) throw "Amount is required!";
    if(!remarks) throw "Remark is required!";

    if(remarks.length<5) throw "Remarks must be at least 5 characters long!";

    if(!validator.isNumeric(amount.toString())) throw "Amount must be a valid number.";

    await transactionsModel.create({
        user_id : req.user._id,
        amount: amount,
        remarks: remarks,
        transaction_type: "income",
    });

    await usersModel.updateOne({
        _id: req.user._id,
    },{
        $inc:{              // inc = increment
            balance: amount
        },
    },{
        runValidators: true,
    });

    res.status(200).json({
        status: "success",
        message: "Income added successfully!",
    });
};

module.exports = addIncome;