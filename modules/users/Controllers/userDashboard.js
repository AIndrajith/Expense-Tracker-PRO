const mongoose = require("mongoose");

const userDashboard = async (req, res) => {
    const usersModel = mongoose.model("users");

    console.log(req.user);

    const getUser = await usersModel.findOne({
        _id: req.user._id,
    })
    //.select("name balance email") <- this part also do like this method
    .select("-password")  

    res.status(200).json({
        status: "success",
        data: getUser,
    });

};

module.exports = userDashboard;