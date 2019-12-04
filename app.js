var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')
const port = 4000

mongoose.connect("mongodb://localhost:27017/sfe_asset", {useNewUrlParser: true});

app.get('/', (req,res) => res.send('Hello World'))

app.listen(port, () => console.log('Example app listening on port ${port}!'))
