const path = require('path');
const express = require('express');

const router = express.Router();

const songController = require('../controllers/songController');
const authController = require('../controllers/authController');

// GET "api/song"
// grab songs from webAPI****
// filter into valid songs
// Randomize into 9 valid songs in an array
// send to Dan to process**
// get back song array from Dan**
// write the song names into Current_game table
// make the urls into an array
// -> send over mp3/4
router.get(
  '/song',
  songController.validSong,
  songController.randomizeSong,
  songController.writeToDb,
  (req, res) => res.status(200).json(res.locals.songURLs)
);

// POST "api/song"
// receives userinput array from frontend
// use token/session_id to query Song names
// make answer array [[userinput, answer], [userinput, answer]..]
// sending answer array [[userinput, answer], [userinput, answer]..]
router.post(
  '/song',
  songController.getAnswers,
  songController.formatResponse,
  (req, res) => res.status(200).json(res.locals.formattedRes)
);

// POST 'api/hiscore'
// receives hiscore from frontend
// use token/session_id to query Users table
// write query to update hiscore in table
// send back hiscore
router.post('/hiscore', (req, res) => {});

// GET 'api/hiscore'
// use token/session_id to query Users table
// send back hiscore
router.get('/hiscore', (req, res) => {});

router.get('/spotifyAuth', authController.spotifyAuth);

router.get(
  '/spotifyToken',
  authController.getToken,
  (req, res) => {
    console.log('finish spotify oauth');
    res.status(200).sendFile(path.join(__dirname, '../../client/index.html'));
  }
);

//endpoint:
// 'api/location'
// const { code, state, ..., } = req.query

module.exports = router;
