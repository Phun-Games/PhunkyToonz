const fetch = require('node-fetch');
const { CLIENT_ID, CLIENT_SECRET } = require('../models/sensitive.js');
const db = require('../models/userModel');
// const superagent = require('superagent');
const REDIRECT_URI = `http://localhost:${process.env.NODE_ENV === "production" ? "3000" : "8080"}/api/spotifyToken/`

const authController = {};
// note: localhost redirect_uri should be 'http' not 'https'
authController.spotifyAuth = (req, res, next) => {
  console.log('spotify auth get request received');
  res.redirect(
    `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`
  );
  // .then((res) => res.json())
  // .then((json) => {
  //   console.log(json);
  //   return next();
  // });
};

authController.getToken = (req, res, next) => {

  console.log('inside gettoken middleware**************');
  const reqObj = {
    grant_type: "authorization_code",
    redirect_uri: REDIRECT_URI,
    code: req.query.code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  superagent
    .post('https://accounts.spotify.com/api/token')
    .send(reqObj)
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .then((data) => {
      const { access_token } = data.body;
      console.log("ACCESS TOKEN*******", access_token);
    })
    .catch((err) => {
      next({
        err,
      });
    });

  // fetch("https://accounts.spotify.com/api/token", {
  //   method: 'post',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: JSON.stringify(reqObj),
  // })
  //   .then((result) => console.log(result))
  //   .catch((err) => console.log('error in getToken middleware', err));
};

authController.authQueryString = (req, res, next) => {
  const { code } = req.params;
}

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
