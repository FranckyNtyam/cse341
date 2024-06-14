const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(session({ secret: 'ssshhhh', saveUninitialized: true, resave: true}));
router.get('/home', (req, res) =>{
    res.send('Hello World, This is home router');
});

router.get('/profile', (req, res) => {
    res.send('Hello World, This is profile router');
});

router.get('/login', (req, res) => {
    res.send('Hello world, This is login router');
});

router.get('/logout', (req, res) => {
    res.send('Hello World, This is logout router');
});

app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

router.use((req, res, next) =>{
    console.log('Time:', Date.now());
    next();
});
// Add middleware before routes
app.use(bodyParser.json());
app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log('Web server is listening at port ' + (process.env.PORT || 3000));
});

