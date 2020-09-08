const express = require('express');
const mongoose = require('mongoose');
const cargos = require('./routes/cargos');
const bodyParser = require('body-parser');
const { errorHandler } = require('./routes/general_middleware');

app = express()
PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/AppDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}...`)
        });
    } catch (e) {
        console.log(e);
    }
}

app.use(express.json())
app.use(bodyParser.json())
app.use(cargos);
app.use(errorHandler)


start();

