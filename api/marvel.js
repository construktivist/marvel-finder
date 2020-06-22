const axios = require('axios');
const md5 = require('md5');
require('dotenv').config()

//Timestamp and Hash for API call
const ts = Date.now();
const hash = md5(ts + process.env.PRIVATE_API_KEY + process.env.PUBLIC_API_KEY);

// Exported API calls
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
                nameStartsWith: characterName,
                ts: ts,
                apikey: process.env.PUBLIC_API_KEY,
                hash: hash
            }
        })            
        .then(function (response) {
            const results = response.data.data.results;
            // for (let i = 0; i < results.length; i++) {
            //     console.log(results[i].name);
            //     console.log(results[i].id);
            //     console.log(results[i].thumbnail);    
            // }
            return results;
        })
        .catch(function (error) {
            console.log(error);
        })
    }

}