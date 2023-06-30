const express = require('express');
const router = express.Router();
const { checkUserExistance, addUser } = require('./placeFunc');

// Define the login route
router.post('/place/login', (req, res) => {
    userToCheck = req.body;
    if (checkUserExistance(userToCheck)) {
        res.send('Success');
    }else{
        res.send('Invalid');
    }
    
});

module.exports = router;