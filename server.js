const express = require('express');

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3001;
const app = express();

//parse incoming data
app.use(express.urlencoded( { extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Code for listener
app.listen(PORT, () => {
    console.log(`--Your server is ready on port ${PORT}--`);
});