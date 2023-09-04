const express = require('express');
const dotenv = require("dotenv").config();
const connectDb = require('./dbConnection');

connectDb();
const app = express();

const port = 5000;

app.use(express.json());
app.use('/api', require("./routes"))

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})
