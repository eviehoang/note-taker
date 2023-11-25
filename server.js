// Dependencies
const express = require('express');

// Use express
const app = express();

// Create Variable Port
const PORT = process.env.PORT || 3001;


// Create route for public folder
app.use(express.static('public'));
// sets up express app to handle data parser, middle wear created req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes to route files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// app listener - starts the server
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});