const express = require(`express`);
const api = require('./api/marvel.js')

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/find', () => {
    api.marvel.find()
})

app.get('/character', (name) => {
    api.marvel.findCharacter(name);
})

app.listen(PORT, () => {
    console.log(`App listening on PORT: ` + PORT)
})

