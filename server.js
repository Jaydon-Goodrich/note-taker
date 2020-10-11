const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3002;

const app = express();

app.use('*', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`);
});