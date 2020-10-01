const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errorHandler, authorization } = require('./middleware/general_middleware');
const config = require('config')

const app = express()

const PORT = config.get("PORT") || 5000
const DBHOST = config.get('DBHOST')

async function start() {
    try {
        await mongoose.connect(DBHOST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}...`)
        });
    } catch (e) {
        console.log("Error:", e);
    }
}

app.use(express.json())
app.use(bodyParser.json())


app.use(authorization)

app.use("/api/auth", require(`./routes/auth`))

app.use("/api/cargos/", require('./routes/cargos'));

app.use(errorHandler)


start();

