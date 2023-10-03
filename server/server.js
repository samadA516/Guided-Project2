const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var url = "mongodb://localhost:27017";
const client = new MongoClient(url);

var app = express();
app.use(bodyParser.json());

app.get("/api/planets", (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

// start the rest service
var port = 3000;
console.log('service opening on port: ' + port)
app.listen(port);