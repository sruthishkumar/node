const express = require('express');
const app = express();

const { readFile } = require('fs').promises;

app.get('/', async (req, res) => {
    try {
        res.send( await readFile('./files/index.html', 'utf8') );
        console.log('File read successfully');
    } catch (err) {
        res.status(500).send('Error reading file');
        console.error(err);
    }
});

app.listen(process.env.PORT || 3000, () => console.log(`Server is running on http://localhost:3000`));

process.on('exit', function() {
    console.log('Process is exiting...Bye!');
});