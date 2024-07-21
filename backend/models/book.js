const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type : String,
        require:true,
        trim:true
    },

    author: {
        type : String,
        require:true,
        trim:true
    },

    genre:{
        type : String,
        required : true,
        trim : true
    },
    publishedYear:{
        type : Number,
        required : true,
    
    },

});

const book = mongoose.model("book",bookSchema);
module.exports = book;