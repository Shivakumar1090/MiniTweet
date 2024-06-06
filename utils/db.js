const mongoose = require("mongoose");
require("dotenv").config();

const MONGOURI = process.env.MONGO_URL;

const ConnectDB = async () => {
    try {
        await mongoose.connect(MONGOURI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = ConnectDB;