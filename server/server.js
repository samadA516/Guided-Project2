const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "swapi";

var app = express();
app.use(bodyParser.json());

async function mongoConnect(collectionName) {
    await client.connect();
    const db = client.db(dbName);
    return db.collection(collectionName);
}

app.get("/api/characters", async (req, res) => {
    const collection = await mongoConnect('characters');
    const characters = await collection.find({}).toArray();

    console.log("Sending characters: ", characters);
    res.send({"characters": characters});
    client.close();
});

app.get("/api/films", (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/planets", (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/characters/:id", async (req, res) => {
    const collection = await mongoConnect('characters');
    const character = await collection.findOne({ id: +req.params.id });

    console.log("Sending character: ", character);
    res.send(character);
    client.close();
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