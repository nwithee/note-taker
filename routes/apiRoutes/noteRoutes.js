const router = require('express').Router();
const path = require ('path');
const fs = require ('fs');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
});

//router.post('/notes')






module.exports = router;
