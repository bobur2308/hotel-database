const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const exphbs = require('express-handlebars');
const path = require('path');
const connectDB = require('./db/db');
require('dotenv').config();
connectDB();
const session = require('express-session');

app.use(session({
  secret: 'mysecretkey', // replace with a strong secret key
  resave: false,
  saveUninitialized: false,
}));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Create an instance of the exphbs engine
const hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
});

// Register the exphbs engine with express
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use('/',require('./Routes/Routes'));

app.listen(port, ()=> console.log('> Server is up and running on port : ' + port));
