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

app.get("/api/films", async (req, res) => {
    const collection = await mongoConnect('films');
    const films = await collection.find({}).toArray();

    console.log("Sending films: ", films);
    res.send({"films": films});
    client.close();
});

app.get("/api/planets", async (req, res) => {
    const collection = await mongoConnect('planets');
    const planets = await collection.find({}).toArray();

    console.log("Sending planets: ", planets);
    res.send({"planets": planets});
    client.close();
});

app.get("/api/characters/:id", async (req, res) => {
    const collection = await mongoConnect('characters');
    const character = await collection.findOne({ id: +req.params.id });

    console.log("Sending character: ", character);
    res.send(character);
    client.close();
});

app.get("/api/films/:id", async (req, res) => {
    const collection = await mongoConnect('films');
    const film = await collection.findOne({ id: +req.params.id });

    console.log("Sending film: ", film);
    res.send(film);
    client.close();
});

app.get("/api/planets/:id", async (req, res) => {
    const collection = await mongoConnect('planets');
    const planet = await collection.findOne({ id: +req.params.id });

    console.log("Sending planet: ", planet);
    res.send(planet);
    client.close();
});

app.get("/api/films/:id/characters", async (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/films/:id/planets", async (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/characters/:id/films", async (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/planets/:id/films", async (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

app.get("/api/planets/:id/characters", async (req, res) => {
    console.log("Sending fake test object");
    res.send({fakeKey: 'FakeData'});
});

// start the rest service
var port = 3000;
console.log('service opening on port: ' + port)
app.listen(port);