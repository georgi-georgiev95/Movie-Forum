const router = require('express').Router();

router.get('/movies/add-movie', (req, res) => {
    res.render('add');
});

router.get('/movies', (req, res) => {
    res.render('dashboard');
})

module.exports = router;