const express = require('express');
const ConnectDB = require('./utils/db');
const authRoutes = require('./routes/authRoutes');
const tweetRoutes = require('./routes/tweetRoutes');

require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

ConnectDB();

app.use('/api/users', authRoutes);
app.use('/api/tweets', tweetRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
});
  