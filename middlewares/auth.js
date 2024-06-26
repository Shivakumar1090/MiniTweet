const jwt = require('jsonwebtoken');
require("dotenv").config();

const authmiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ msg: "Authorization header is missing or invalid" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ msg: "Token is not valid" });
    }
};

module.exports = authmiddleware;
