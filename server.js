const express = require(`express`);
const axios = require('axios');
const md5 = require('md5');


require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 3001;

const ts = Date.now();
const hash = md5(ts + process.env.PRIVATE_API_KEY + process.env.PUBLIC_API_KEY);
console.log(hash);

axios.get('https://gateway.marvel.com:443/v1/public/characters?name=punisher&ts=' + ts + '&apikey='+ process.env.PUBLIC_API_KEY + '&hash=' + hash)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error);
    })


app.listen(PORT, () => {
    console.log(`App listening on PORT: ` + PORT)
})

