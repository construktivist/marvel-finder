//Express server that uses API helper to make calls with private API key.

const express = require(`express`);

const marvel_api = require('./controllers/api')


const app = express();


//GET requests

app.get('/find', (req, res) => {
    api.marvel.find();
})

// app.get('/fizz', (req, res) => {
//     res.send({message: 'BUZZ'});
// })

// app.get('/character?:characterName', (req, res) => {
//     console.log(api.marvel.findCharacter(req.query.characterName));
//     res.send(api.marvel.findCharacter(req.query.characterName));
// })

app.use('/', marvel_api)
app.use('/character', marvel_api)
app.use('/fizz', marvel_api)

//PORT listen
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on PORT: ` + PORT)
})