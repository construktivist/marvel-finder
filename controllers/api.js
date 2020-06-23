const express = require('express');
const router = express.Router();
const axios = require('axios');
const md5 = require('md5');
require('dotenv').config()

//Timestamp and Hash for API call
const ts = Date.now();
const hash = md5(ts + process.env.PRIVATE_API_KEY + process.env.PUBLIC_API_KEY);


router.get('/character', (req, res) => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters', {
        params: {
            nameStartsWith: req.query.characterName,
            ts: ts,
            apikey: process.env.PUBLIC_API_KEY,
            hash: hash
        }
    })
    .then(function (response) {
        const results = response.data.data.results;
        for (let i = 0; i < results.length; i++) {
            console.log(results[i].name);
            console.log(results[i].id);
            console.log(results[i].thumbnail);    
        }
        res.send(results.json());
    })
    .catch(function (error) {
        console.log(error);
    }) 
})

router.get('/fizz', (req, res) => {
    console.log('BUZZ');
    res.send({message: 'BUZZ'});
})

module.exports = router;