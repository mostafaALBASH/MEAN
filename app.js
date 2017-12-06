var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
var mongoose = require('mongoose');
const config = require('./config/database');

const mytasks = require('./routes/mytasks');

var app = express();

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


// Body Parser Middleware
app.use(bodyParser.json());


// Connect To Database
mongoose.connect(config.database, { useMongoClient: true });

// On Connection
mongoose.connection.on('connected', function() {
    console.log('Connected to database '+config.database);
    console.log('SUCCESS!!');
});

// On Error
mongoose.connection.on('error', function(err) {
    console.log('Database error: '+err);
});

app.use('/routes', mytasks);

app.get('/', function(req, res) {
    res.send('Invalid Endpoint');
});
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    console.log('it is running on http://localhost:'+port+'/');
});

var port = 3000;
app.listen(port);