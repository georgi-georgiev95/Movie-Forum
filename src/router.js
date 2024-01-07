const router = require('express').Router();

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');
const userController = require('./controllers/userController');

router.use(homeController);
router.use(movieController);
router.use('/users', userController);

module.exports = router;