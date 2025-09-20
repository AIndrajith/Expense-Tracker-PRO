const jsonwebtoken = require("jsonwebtoken");

const auth = (req, res, next) => {
    console.log(req.headers);

    
    try {
        const accessToken = req.headers.authorization.replace("Bearer ",""); // in here .replace("Bearer ","") use to remove the Bearer and the space of the accessToken because we only need the accessToken

        const jwt_payload = jsonwebtoken.verify(
            accessToken, // accessToken
            process.env.jwt_salt  // private key
        );

        req.user = jwt_payload;

    } catch (e) {
        res.status(401).json({
            status: "failed",
            message: "Unauthorized!",
        })
    }
    
    next();
}

module.exports = auth;