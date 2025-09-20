const userDashboard = (req, res) => {

    console.log(req.user);

    res.status(200).json({
        status: "hello from userDashboard!",
        
    });

};

module.exports = userDashboard;