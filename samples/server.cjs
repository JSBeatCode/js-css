const express = require('express')
const app = express();
const path = require('path')
const PORT = 3111;

app.use(express.static(path.join(__dirname, 'practice')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'practice', 'carousel.html'))
});

app.listen(PORT, () => {
    console.log('server is running at ' + PORT);
})