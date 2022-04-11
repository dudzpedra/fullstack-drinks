const express = require("express");
const cors = require('cors');
const drinksRouter = require("./controllers/drinks");
const { default: mongoose } = require("mongoose");
const { MONGODB_URI } = require("./utils/config");
const { info, error } = require("./logger");

const app = express()

mongoose.connect(MONGODB_URI).then(result => info('Connected to MongoDB')).catch(err => error('error connecting to MongoDB', err.message))

app.use(cors())
app.use(express.json())
//app.use(express.static('build'))

app.use('/api/drinks', drinksRouter)

module.exports = app