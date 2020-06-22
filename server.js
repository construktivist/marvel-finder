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

console.log(api.marvel.findCharacter('cable'));

//GET requests
app.get('/fizz', (req, res) => {
    res.send({message: 'BUZZ'});
})

app.get('/find', (req, res) => {
    api.marvel.find();
})

app.get('/character?:characterName', (req, res) => {
    console.log(api.marvel.findCharacter(req.query.characterName));
    res.send(api.marvel.findCharacter(req.query.characterName));
})

//PORT listen
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on PORT: ` + PORT)
})