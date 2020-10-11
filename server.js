const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3002;

const app = express();

//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

//parse incoming json data
app.use(express.json());

//use html routes
app.use('/', htmlRoutes);
// api routes
app.use('/api', apiRoutes);
//static folder to include js and css
app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`);
});