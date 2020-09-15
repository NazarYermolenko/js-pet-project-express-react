const express = require('express');
const mongoose = require('mongoose');
const cargos = require('./routes/cargos');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/general_middleware');
const config = require('config')

const app = express()

const PORT = config.get("PORT") || 5000
const DBHOST = config.get('DBHOST')

async function start() {
    try {
        await mongoose.connect(DBHOST, {
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

