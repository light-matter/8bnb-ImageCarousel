const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//serves up files in the public folder
app.use(express.static('public'));

app.get('/homes', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))