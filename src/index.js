const express = require('express');

const expressConfigurator = require('./config/expressConfig');
const handlebarsConfigurator = require('./config/handlebarsConfig');

const app = express();

const PORT = 5000;

expressConfigurator(app);
handlebarsConfigurator(app);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/movies/add-movie', (req, res) => {
    res.render('add');
});

app.get('/movies', (req, res) => {
    res.render('dashboard');
})

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));