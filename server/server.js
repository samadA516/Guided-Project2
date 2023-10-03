const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "swapi";

var app = express();
app.use(bodyParser.json());

app.get("/api/characters", async (req, res) => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('characters');

    const characters = await collection.find({}).toArray();

    console.log("Sending characters: ", characters);
    res.send({"characters": characters});
});

app.get("/api/films", (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/planets", (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/characters/:id", (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/films/:id", (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/planets/:id", (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/films/:id/characters", (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/films/:id/planets", (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/characters/:id/films", (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/planets/:id/films", (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/planets/:id/characters", (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

// start the rest service
var port = 3000;
console.log('service opening on port: ' + port)
app.listen(port);