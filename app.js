// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {

  console.log(req.query) // => "{ term: hey" }
  res.render("home");
})

app.get('/greetings/:name', (req, res) => {

  // takes the name from the url path
  const name = req.params.name;

  //uses the greetings handlebar template stored in "Views, to show the name provided in the Url path."
  res.render('greetings', {name});
})
// Start Server

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});