const jsonwebtoken =  require("jsonwebtoken");

const jwtManager = (user) => {
    const accessToken = jsonwebtoken.sign(
        {
            _id:user._id,
            name: user.name,
            // balance: user.balance,  --> In here we can add all the data which we want to display
        },
        process.env.jwt_salt
    );

    return accessToken;
};

module.exports = jwtManager;