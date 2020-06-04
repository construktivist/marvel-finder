const axios = require('axios');
const md5 = require('md5');
require('dotenv').config()

const ts = Date.now();
const hash = md5(ts + process.env.PRIVATE_API_KEY + process.env.PUBLIC_API_KEY);

exports.marvel = {

    find: () => {
        axios.get('https://gateway.marvel.com:443/v1/public/characters?name=punisher&ts=' + ts + '&apikey='+ process.env.PUBLIC_API_KEY + '&hash=' + hash)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
    },

    findCharacter: (characterName) => {
        axios.get('https://gateway.marvel.com:443/v1/public/characters', {
            params: {
                name: characterName,
                ts: ts,
                apikey: process.env.PUBLIC_API_KEY,
                hash: hash

            }
        })
    }

}



