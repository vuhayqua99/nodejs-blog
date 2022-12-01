const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

// //HTTP logger
// app.use(morgan('combined'));

//middleware
app.use(express.urlencoded({
  extended: true
}

));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

//Templates engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}
));

// Route init
route(app);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//127.0.0.1 -localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 