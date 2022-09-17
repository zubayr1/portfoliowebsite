// server/index.js
require('dotenv').config()

const express = require("express");
const cors = require('cors');
const mongoose =  require('mongoose');


const PORT = process.env.SERVERPORT || 5000;
const uri = process.env.MONGODB_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', ()=>
{
  console.log('MongoDB database connected successfully.');
})



const app = express();
app.use(cors());
app.use(express.json());

//register view engine
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
  res.render('index');
  
});

app.get("/apis", (req, res) => {
    res.json({ message: "Hello from zakeKal!" });
    
});

const feedbacksRouter = require('./routes/feedbacks');
const usersrouter = require('./routes/users');

app.use('/feedbacks', feedbacksRouter);
app.use('/users', usersrouter);

//listening to port...
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});