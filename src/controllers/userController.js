const router = require('express').Router();
const userManager = require('../managers/userManager');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { username, password, rePassword } = req.body;
    await userManager.register({ username, password, rePassword });
    res.redirect('/users/login');
});

router.get('/login', (req, res) => {
    res.render('users/login');
})

module.exports = router;