'use strict';

/*******
 * index.js: start point of app
 * 
 * 03/2024 Santosh Dubey
 *
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const path = require('path');
const PORT = process.env.PORT || 3030;
//rest object
const app = express()

//mongo connection
const connectDB = require('./config/connectDB')
connectDB();
//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/v1/users', require('./routes/user'));
app.use('/api/v1/transaction', require('./routes/transaction'));

//static 
app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// app.get('/', (req, res) => {
//     res.send(`<h1>Hello World</h1>`);
// })

//listen 
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`)
})

