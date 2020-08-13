const path = require('path');
const express = require('express');
const cookieparser = require('cookie-parser');

const app = express();

const PORT = 3000;

const apiRouter = require('./routes/api.js');

/*
import controllers
*/
// const someController = require('./controllers/someController');
const authController = require('./controllers/authController');

app.use((req, res, next) => {
  console.log(`
  ********* FLOW TEST *********\n
  METHOD: ${req.method}\n
  URL: ${req.url}\n
  BODY: ${JSON.stringify(req.body)}\n`);
  return next();
});
/**
 * global parsers
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());


/**
 * handle requests for static files
 */
app.use('/build', express.static(path.join(__dirname, '../build')));


/**
 * functional routes
 */
app.use('/api', apiRouter);

// app.get('/spotifyAuth', (req, res) => {
//   res.status(200).send('got a response back :)!');
// });

/*
 * signin routings
 */
// check if user exists, check if
// app.post(
//   '/login',
//   authController.verifyUser,
//   authController.checkCookie,
//   (req, res) => {
//     console.log('access granted');
//     // console.log('form content: ', req.body); // -> {user: "", pass: ""}
//     res.redirect('./secret');
//   }
// );

/*
 * signin routings
 */
// app.post(
//   '/signup',
//   authController.verifyUser,
//   authController.setCookie,
//   (req, res) => {
//     console.log('access granted');
//     // console.log('form content: ', req.body); // -> {user: "", pass: ""}
//     res.redirect('./secret');
//   }
// );

// app.get('/game', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });

/*
 * root routes index.html and game.html
 */
app.get('/',
  // authController.checkCookie,
  (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });

//  ------------------------------------------------------------

/*
 *  catch-all route handler for any requests to an unknown route
 */
app.use((req, res, next) => {
  // could do something here?
  // console.log('want to do some other things instead?')
  // res.status(404).send('Page Not Found');
  res.status(404).send('this is 404 from server.js');
});

/**
 * configire express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
// eslint-disable-next-line no-unused-vars

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express global error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred, this msg is from global err handler' },
  };
  const errObj = Object.assign(defaultErr, err);
  console.log(errObj);
  res.status(errObj.status).send(errObj.message);
});

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
