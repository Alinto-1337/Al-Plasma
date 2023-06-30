const express = require('express');
const router = express.Router();
const fs = require('fs');
const { checkUserExistance, addUser } = require('./placeFunc');

// Define the login route
router.post('/place/signup', (req, res) => {
    
    const userToAdd = req.body;

    if (!checkUserExistance(userToCheck)) {
        addUser(userToAdd)
        res.send('Success')
    }  else {
        res.send('Already Exist')
    }
});


module.exports = router;