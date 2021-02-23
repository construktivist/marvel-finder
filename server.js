//Express server that uses API helper to make calls with private API key.
const express = require(`express`);
const path = require('path');
const marvel_api = require('./controllers/api')

const app = express();

// //API requests
// app.use('/', marvel_api)

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//PORT listen
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on PORT: ` + PORT)
})