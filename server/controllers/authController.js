const fetch = require('node-fetch');
const { CLIENT_ID, CLIENT_SECRET } = require('./sensitive.js');
const db = require('../models/userModel');

const authController = {};

authController.spotifyAuth = (req, res, next) => {
  console.log('spotify auth get request received');
  fetch(
    `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=https%3A%2F%2Flocalhost%3A${
      process.env.NODE_ENV === 'production' ? '3000' : '8080'
    }%2F`
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return next();
    });
};

authController.verifyUser = (req, res, next) => {
  const { user, pass } = req.body;
  // query Users table;
  // if () {
  //   return next();
  // }
  return res.send('access denied!');
};

authController.setCookie = (req, res, next) => {
  // query the Users table with req.username
  // const tokenValue  =
  res.cookie('token', 'tokenValue');
  return next();
};

authController.checkCookie = (req, res, next) => {
  const { token } = req.cookies;
  // token is the PK
  // check if session is active by querying Session table
  const checkSeshQuery = `SELECT id FROM Session WHERE id = $1`;
  db.query(checkSeshQuery, [token])
    .then((result) => {
      if (result.rows.length === 0)
        res.status(404).json({ sessionActive: false });
      res.status(200).json({ sessionActive: true });
      return next();
    })
    .catch((err) => {
      console.log('err in checkCookie middleware');
      return next({ errMsg: JSON.stringify(err) });
    });
};

module.exports = authController;
