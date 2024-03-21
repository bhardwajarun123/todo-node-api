
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
//Route for Todo
const todoApiRoutes = require("./route/Todo")

const PORT = 8000;
const app = express();

const UrL = "mongodb+srv://ferrari:ferrari4cr@cluster0.vdg5s6s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log("Connected To ClOUD Mongo DB Atlas")
});

// Allow cross sharing between resources

app.use(cors());

// convert request from HTTP into from plain text to Json format

app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`server is running on PORT : ${PORT}`)
});


