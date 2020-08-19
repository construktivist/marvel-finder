//Express server that uses API helper to make calls with private API key.
const express = require(`express`);
const marvel_api = require('./controllers/api')

const app = express();

//API requests
app.use('/', marvel_api)

//PORT listen
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on PORT: ` + PORT)
})