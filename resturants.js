const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    cuisine: [String],
    price_for_two: String,
    location: String,
    distance_km: Number,
    discount: String,
    img_url:String,
    offer:String
});

let Restaurant = mongoose.model("restaurant", restaurantSchema); // Assuming the collection name is "Restaurant"
module.exports = Restaurant;
