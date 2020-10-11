const express = require('express');

const PORT = process.env.PORT || 3002;

const app = express();

app.get('/', (req, res) => {
    res.send("HELLO WORLD!");
})

app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`);
});