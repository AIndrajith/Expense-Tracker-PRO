const userDashboard = (req, res) => {

    res.status(200).json({
        status: "hello from userDashboard!",
        
    });

};

module.exports = userDashboard;