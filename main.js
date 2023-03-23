const express = require('express');
const app = express()
const port = process.env.PORT || 5500
const exphbs = require('express-handlebars')
const path = require('path')
const connectDB = require('./db/db')
require('dotenv').config()
connectDB()
const session = require('express-session');

app.use(session({
  secret: 'mysecretkey', // replace with a strong secret key
  resave: false,
  saveUninitialized: false,
}));



app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.engine('.hbs', exphbs.engine({extname:'.hbs'}))
app.set('view engine', '.hbs')
app.use('/',require('./Routes/Routes'))

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
