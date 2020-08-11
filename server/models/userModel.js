
const { Pool } = require('pg');

const PG_URI = require('./databaseURI');

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});


/*
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username varchar(255),
    password varchar(255),
    hiscore int
);

CREATE TABLE Session (
    id int,
    last_activity timestamp default current_timestamp
);

CREATE TABLE Current_game (
    id SERIAL PRIMARY KEY,
    user_id varchar(255),
    song1 varchar(255),
    song2 varchar(255),
    song3 varchar(255),
    song4 varchar(255),
    song5 varchar(255),
    song6 varchar(255),
    song7 varchar(255),
    song8 varchar(255),
    song9 varchar(255)
);

*/


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
