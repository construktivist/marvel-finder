const express = require('express');
const router = express.Router();
const axios = require('axios');
const md5 = require('md5');
require('dotenv').config()

//Timestamp and Hash for API call
const ts = Date.now();
const hash = md5(ts + process.env.PRIVATE_API_KEY + process.env.PUBLIC_API_KEY);

const baseURL = 'https://gateway.marvel.com:443/v1/public/';

// Queries Marvel api for characters matching the name paremeter.
router.get('/character', (req, res) => {
    axios.get(baseURL + 'characters', {
        params: {
            nameStartsWith: req.query.characterName,
            ts: ts,
            apikey: process.env.PUBLIC_API_KEY,
            hash: hash
        }
    })
    .then(function (response) {
        const results = response.data.data.results;
        res.send(results);
    })
    .catch(function (error) {
        console.log(error);
        res.send(error);
    }) 
})

router.get('/comics', (req, res) => {
    axios.get(baseURL + 'comics', {
        params: {
            titleStartsWith: req.query.titleStartsWith,
            ts: ts,
            apikey: process.env.PUBLIC_API_KEY,
            hash: hash
        }
    })
    .then(function (response) {
        const results = response.data.data.results;
        res.send(results);
    })
    .catch(function (error) {
        console.log(error);
        res.send(error);
    }) 
})

router.get('/test', (req, res) => {
    console.log('LOG: Test log worked');
    res.send({message: 'Test request received.'});
})

module.exports = router;