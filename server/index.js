// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


const http = require('http');

const server = http.createServer((req, res) =>
{
    console.log('request made');
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });