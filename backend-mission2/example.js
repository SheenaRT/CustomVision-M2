const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('App is running fine'));
app.listen(port, () => console.log('Application Started'));
