const router = require('express').Router();

const movieManager = require('../managers/movieManager');

router.get('/movies/add-movie', (req, res) => {
    res.render('add');
});

router.post('/movies/add-movie', async (req, res) => {
    const { title, genre, release_year, description, director, imageUrl } = req.body;
    await movieManager.create({ title, genre, release_year: Number(release_year), description, director, imageUrl });
    res.redirect('/movies');
});

router.get('/movies', async (req, res) => {
    const movies = await movieManager.getAll();
    res.render('dashboard', { movies });
})

router.get('/movies/:movieId/details', async (req, res) => {
    const movie = await movieManager.getOne(req.params.movieId).lean();

    res.render('details', { movie });
})
module.exports = router; 