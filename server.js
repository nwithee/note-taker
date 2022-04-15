const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//parse incoming data
app.use(express.urlencoded( { extended: true }));
app.use(express.json());

//Code for listener
app.listen(PORT, () => {
    console.log(`--You server is ready on port ${PORT}--`);
});