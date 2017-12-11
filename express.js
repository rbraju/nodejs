
const express = require('express');
const app = express();
const port = 8787;

app.get('/', (request, response) => {
    response.send('<h3>Hello express server !</h3>');
});

// Serving static content
app.use('/modules', express.static('modules'));
app.use('/module2', express.static('modules', {index: 'sample.json'}));

app.listen(port, (err) => {
    console.log(`Server listening on port ${port}`)
});
