const fetch = require('node-fetch');
const { CLIENT_ID, CLIENT_SECRET } = require('../models/sensitive.js');
const db = require('../models/userModel');

const authController = {};
// note: localhost redirect_uri should be 'http' not 'https'
authController.spotifyAuth = (req, res, next) => {
  console.log('spotify auth get request received');
  res.redirect(
    `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A${
    process.env.NODE_ENV === 'production' ? '3000' : '8080'
    }%2Fapi%2FspotifyToken%2F`
  );
  // .then((res) => res.json())
  // .then((json) => {
  //   console.log(json);
  //   return next();
  // });
};
authController.getCode = (req, res, next) => {
  console.log('callback from spotify hit getCode middleware!!!!!!');
  const { code, state } = req.query;
  console.log('the CODE FROM QUERY STRING: ', code);
  console.log('STATE********', state);
  console.log('REQ QUERY**********', req.query);
  res.locals.code = code;
  return next();
};

// const reqObj = {
//   // grant_type: 'authorization_code',
//   // code: res.locals.code,
//   client_id: CLIENT_ID,
//   client_secret: CLIENT_SECRET,
//   // redirect_uri: `http%3A%2F%2Flocalhost%3A${
//   //   process.env.NODE_ENV === 'production' ? '3000' : '8080'
//   // }%2Fapi%2FspotifyToken%2F`,
// };

authController.getToken = (req, res, next) => {
  console.log('inside gettoken middleware**************');
  const reqObj = {
    grant_type: "authorization_code",
    redirect_uri: `http%3A%2F%2Flocalhost%3A${
      process.env.NODE_ENV === 'production' ? '3000' : '8080'
      }%2Fapi%2FspotifyToken%2F`,
    code: res.locals.code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };
  console.log('GRANT TYPE******', reqObj.grant_type);
  console.log('res.locals.code*********', res.locals.code);

  fetch(`https://accounts.spotify.com/api/token/`, {
    method: 'POST',
    // header: {Authorization: `Basic base64 encoded ${CLIENT_ID}:${CLIENT_SECRET}`},
    headers: {

      // Authorization: `Basic *<base64 encoded ${CLIENT_ID}:${CLIENT_SECRET}>*`,
      'Content-Type': 'application/json',
      // Accept: 'application/json',
    },
    params: reqObj,
  })
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((err) => console.log('error in getToken middleware', err));
};

// authController.authQueryString = (req, res, next) => {
//   const { code } = req.params;
// }

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
