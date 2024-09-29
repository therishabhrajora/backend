const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: String,
    state: String,
    population: String,
    area: String,
    landmarks: [String], // Assuming landmarks are strings
    language: String,
    lat: Number, // Use Number for latitude
    lon: Number, // Use Number for longitude
});

let City = mongoose.model("City", citySchema); // Assuming the collection name is "City"
module.exports = City;
