const mongoose = require('mongoose');

const cuisineSchema = new mongoose.Schema({
    name: String,
});

let Cuisine = mongoose.model("cuisines", cuisineSchema); // Assuming the collection name is "Restaurant"
module.exports = Cuisine;
