const router = require('express').Router();

const movieManager = require('../managers/movieManager');

router.get('/movies/add-movie', (req, res) => {
    res.render('add');
});

router.post('/movies/add-movie', async (req, res) => {
    const { title, genre, release_year, description, imageUrl } = req.body;
    await movieManager.create({ title, genre, release_year: Number(release_year), description, imageUrl });
    res.redirect('/');
});

router.get('/movies', (req, res) => {
    res.render('dashboard');
})

module.exports = router;