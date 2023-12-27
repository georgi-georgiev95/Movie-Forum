const Movie = require('../models/Movie');

exports.create = async (movieData) => {
    const movie = new Movie(movieData);
    await movie.save();

    return movie;
}