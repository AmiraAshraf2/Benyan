//JWT
const jwt = require("jsonwebtoken");

const decodeToken = async (req, res, next ) => {
    try {
        const authorization = req.headers.authorization;
        const token = authorization.split("")[1];

        if(!token) return res.status(400).json({msg: "No Token Found"})
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (error) {
        res.status(400).json({msg: "Invalid Token"})
    }
}