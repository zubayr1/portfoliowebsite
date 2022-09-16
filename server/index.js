// server/index.js
require('dotenv').config()

const express = require("express");

const PORT = process.env.SERVERPORT;

const app = express();

//register view engine
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
  res.render('index');
  
});

app.get("/apis", (req, res) => {
    res.json({ message: "Hello from server!" });
    
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });