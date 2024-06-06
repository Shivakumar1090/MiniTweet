const express = require('express');
const { postTweet, fetchTimeline } = require('../controllers/tweetController');
const authmiddleware = require('../middlewares/auth');

const router = express.Router();

router.post('/', authmiddleware, postTweet);
router.get('/timeline',authmiddleware, fetchTimeline);

module.exports = router;
