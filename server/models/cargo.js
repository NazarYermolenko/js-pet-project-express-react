const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CargoSchema = new Schema({
    title: { type: String },
    description: { type: String }
});

const Cargo = mongoose.model("Cargo", CargoSchema);

module.exports = Cargo;