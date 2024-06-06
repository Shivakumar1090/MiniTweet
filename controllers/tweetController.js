const Tweet = require("../models/tweet");

const postTweet = async (req, res) => {
    try {
        const { text } = req.body;
        const userId = req.userId;
    
        const tweet = new Tweet({ userId, text });
        await tweet.save();
        
        return res.status(201).json(tweet);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const fetchTimeline = async (req, res) => {
    try {
        const userId = req.userId;
        const { cursor } = req.query;

        const query = { userId };
        if (cursor) {
            query.createdAt = { $lt: cursor };
        }

        const tweets = await Tweet.find(query).sort({ createdAt: -1 }).limit(5);
        
        res.status(200).json(tweets);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { postTweet, fetchTimeline };
