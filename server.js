

const express = require('express');
const app = express();

// Import route files
const loginRoute = require('./place/login.js');
const signupRoute = require('./place/signup.js');
const gameRoute = require('./place/game.js');

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use route files as middleware
//app.use('/place/login', loginRoute);
//app.use('/place/signup', signupRoute);
app.use('/place/game', gameRoute);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
