const router = require('express').Router();

const movieManager = require('../managers/movieManager');

router.get('/movies/add-movie', (req, res) => {
    res.render('add');
});

router.post('/movies/add-movie', async (req, res) => {
    const { title, genre, release_year, description, imageUrl } = req.body;
    await movieManager.create({ title, genre, release_year: Number(release_year), description, imageUrl });
    res.redirect('/movies');
});

router.get('/movies', async (req, res) => {
    const movies = await movieManager.getAll();
    res.render('dashboard', { movies });
})

module.exports = router; 