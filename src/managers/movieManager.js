const Movie = require('../models/Movie');

exports.create = async (movieData) => {
    const movie = new Movie(movieData);
    await movie.save();

    return movie;
}

exports.getAll = () => {
    const movies = Movie.find().lean();
    return movies;
}

exports.getOne = (movieId) => Movie.findById(movieId);