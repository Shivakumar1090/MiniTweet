const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require("dotenv").config();

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const comparePassword = async (enteredPassword, storedPassword) => {
    return await bcrypt.compare(enteredPassword, storedPassword);
};

module.exports = { generateToken, hashPassword, comparePassword };
