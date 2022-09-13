// server/index.js
require('dotenv').config()

const express = require("express");

const PORT = process.env.SERVERPORT;

const app = express();




app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });