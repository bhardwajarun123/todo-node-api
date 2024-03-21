
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");


//const PORT = 8000;
const port = process.env.PORT || 8000

//Routes for Todo
const todoRoutes = require("./routes/Todo")

const app = express();

const uri = process.env.MONGODB_URI;
//const URL = "mongodb+srv://ferrari:ferrari4cr@cluster0.vdg5s6s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(uri, {
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


app.use("/api",todoRoutes)

app.listen(port, () => {
    console.log(`server is running on PORT : ${PORT}`)
});


