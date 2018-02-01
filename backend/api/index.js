const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

// Kết nối database.
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/projectFestival');

var app = express();
var port = 3000;

app.use(cors());
app.use(fileUpload());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('./public'));

var applicationRoute = require('./routes/applicationRoute');
applicationRoute(app);

app.listen(port, function(){
	console.log('Port '+port+': everything is going to be 200 OK!');
});

