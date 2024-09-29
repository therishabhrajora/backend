const express = require('express');
const cors = require('cors')
require("./config");
const City = require("./cities");
const path=require("path");
const Resturant = require("./resturants");
const Cuisine = require("./cuisines");
const dbConnection = require('./mongodb');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.get("/india", async (req, res) => {
    try {
        const response = await City.find()
        res.json(response);

    } catch (err) {
        console.log(err);
    }
});
// app.get('/mumbai', async (req, res) => {
//     try {
//         const response = await Resturant.find({
//             $or: [{ location: {$regex:"Mumbai"}}]
//         })
//         console.log('responsecity', response);
//     } catch (err) {
//         console.log(err, 'this is error');
//         res.status(500).send('Internal Server Error');
//     }
// });
// app.get('/delhi', async (req, res) => {
//     try {
//         const Resturant = await dbConnection('Resturant');
//         const response = await Resturant.find({
//             $or: [{ location: {$regex:"Delhi"}}]
//         }).toArray();
//         console.log('responsecity', response);
//     } catch (err) {
//         console.log(err, 'this is error');
//         res.status(500).send('Internal Server Error');
//     }
// });
// app.get('/mumbai', async (req, res) => {
//     try {
//         const Resturant = await dbConnection('Resturant');
//         const response = await Resturant.find({
//             $or: [{ location: {$regex:"Mumbai"}}]
//         }).toArray();
//         console.log('responsecity', response);
//     } catch (err) {
//         console.log(err, 'this is error');
//         res.status(500).send('Internal Server Error');
//     }
// });


app.get('/:city/dinning', async (req, res) => {
    console.log(req.params);
    try {
        const city = req.params.city.trim();
        const response = await Resturant.find({
            location: { $regex: city, $options: 'i' }
        })
       const cuisine = await Cuisine.find();

        console.log('responsecity', response);
        console.log("cusiine", cuisine);
        res.json({response,cuisine});

    } catch (err) {
        console.log(err, 'this is error');
        res.status(500).send('Internal Server Error');
    }
});







app.listen(5000, () => {
    console.log('Server is running on port 5000');
});