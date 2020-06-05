//Express server that uses API helper to make calls with private API key.

const express = require(`express`);
const api = require('./api/marvel.js')

const app = express();

//GET requests
app.get('/find', () => {
    api.marvel.find()
})

app.get('/character', (name) => {
    api.marvel.findCharacter(name);
})

//PORT listen
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on PORT: ` + PORT)
})