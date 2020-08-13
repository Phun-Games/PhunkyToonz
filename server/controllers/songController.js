const db = require('../models/userModel');

const songController = {};

// use dummy data for now
const playlistData = require('../../playlistData');
/*
 * util functions
 */
const availableSongs = require('../../utility/availableSongs');
const selectedSongs = require('../../utility/selectedSongs');
const filterSongNames = require('../../utility/filterSongNames');
const filterSongFiles = require('../../utility/filterSongFiles');
const makeNestedArray = require('../../utility/makeNestedArray');



songController.validSong = (req, res, next) => {
  console.log('reached valid song controller')
  res.locals.songList = availableSongs(playlistData);
  return next();
};

songController.randomizeSong = (req, res, next) => {
  res.locals.songList = selectedSongs(res.locals.songList);
  return next();
};

// songController.processedSong = (req, res, next) => {
//   let list = res.locals.songList;
//   for (ii = 0; ii < list.length; ii++) {
//     list[ii][1] = processedSongs[list[ii][1]];
//     // app.use(static())
//   }
//   return next();
//   // stub function
// };



// do this when i wake up
songController.writeToDb = (req, res, next) => {
  // token value is session_id
  const { token } = req.cookies;
  const songNames = filterSongNames(res.locals.songList);
  const songFiles = filterSongFiles(res.locals.songList);
  const answerQuery = `INSERT INTO Current_game 
    (session_id, song1, song2, song3, song4, song5, song6, song7, song8, song9)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
  const fieldValues = [token, ...songNames];
  db.query(answerQuery, fieldValues)
    .then((result) => {
      console.log('answer stored in Current_game table');
      res.locals.songURLs = songFiles;
      return next();
    })
    .catch((err) => {
      console.log('err in writeToDb middleware');
      return next({ errMsg: JSON.stringify(err) });
    });
};


songController.getAnswers = (req, res, next) => {
  const { token } = req.cookies;
  const checkAnswerQuery =`SELECT 
    song1, song2, song3, song4, song5, song6, song7, song8, song9
    FROM Current_game
    WHERE session_id = $1`;

  db.query(checkAnswerQuery, [token])
    .then((result) => {
      if (result.rows.length === 0) res.status(404).send('DATA NOT FOUND, Session Token Expire');
      res.locals.answers = result.rows[0];
      return next();
    })
    .catch((err) => {
      console.log('err in getAnswers middleware');
      return next({ errMsg: JSON.stringify(err) });
    });
};


songController.formatResponse = (req, res, next) => {
  const userInput = req.body;
  const correctAnswer = res.locals.answers;
  const formattedRes = makeNestedArray(userInput, correctAnswer);
  res.locals.formattedRes = formattedRes;
  return next();
};


module.exports = songController;
