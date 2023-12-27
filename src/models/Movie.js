const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    release_year: Number,
    director: String,
    description: String,
    imageUrl: String,
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;