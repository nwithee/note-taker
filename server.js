//Dependency
const express = require('express');

//Setup app to use express
const app = express();

//Routes
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//Setup port
const PORT = process.env.PORT || 3001;

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