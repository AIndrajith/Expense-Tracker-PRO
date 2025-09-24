const mongoose = require("mongoose");

const userDashboard = async (req, res) => {
    const usersModel = mongoose.model("users");
    const transactionModel = mongoose.model("transactions");

    console.log(req.user);

    const getUser = await usersModel.findOne({
        _id: req.user._id,
    })
    //.select("name balance email") <- this part also do like this method
    .select("-password")  

    const transactions = await transactionModel.find({
        user_id: req.user._id,
    })
    .sort("createdAt")     // this is an acending order 
    // if you want to get decending order you can add minus(-) simbol at the front like this (-createdAt)
    .limit(3);

    res.status(200).json({
        status: "success",
        data: getUser,
        transactions,  // transactions: transactions, <- this can be use like this 
    });

};

module.exports = userDashboard;