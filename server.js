//Express server that uses API helper to make calls with private API key.

const express = require(`express`);
const axios = require('axios');
const api = require('./api/marvel.js');
const md5 = require('md5');
require('dotenv').config()

//Timestamp and Hash for API call
const ts = Date.now();
const hash = md5(ts + process.env.PRIVATE_API_KEY + process.env.PUBLIC_API_KEY);
const app = express();

//GET requests
app.get('/find', () => {
    api.marvel.find();
})

app.get('/character', () => {
    api.marvel.findCharacter('deadpool');
})

axios.get('https://gateway.marvel.com:443/v1/public/characters', {
    params: {
        name: 'deadpool',
        ts: ts,
        apikey: process.env.PUBLIC_API_KEY,
        hash: hash

    }
})

//PORT listen
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on PORT: ` + PORT)
})