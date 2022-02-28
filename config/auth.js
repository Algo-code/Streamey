const jwt = require("jsonwebtoken");

module.exports = function (req, res, next){
    const token = req.header("token");
    if(!token){
        return res.status(401).json({
            message: "Authentication Error! Please Login"
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next()
    } catch (error) {
        console.error(e);
        res.status(500).json({
            message:"Invalid Token"
        });
    }
}