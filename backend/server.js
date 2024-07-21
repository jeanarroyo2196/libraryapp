const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
require("dotenv").config();
app.use(express.json());

let cors = require("cors")
let bodyParser = require('body-parser');

app.use(cors({
    origin: 'http://localhost:4200', // Ensure this matches your Angular app's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const PORT = process.env.PORT || 3000;

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success!!!");
})

const bookRouter = require("./routes/book")
app.use("/book",bookRouter);

const genreRouter = require("./routes/genre")
app.use("/genre",genreRouter);

app.use(bodyParser.urlencoded( { extended: false }));
app.use(bodyParser.json());
app.locals.delimiters = '<% %>';
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    res.json("server started")
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})