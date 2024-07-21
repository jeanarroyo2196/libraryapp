const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
        trim:true
    }
});

const genre = mongoose.model("genre", genreSchema);
module.exports = genre;