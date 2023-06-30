const express = require('express');
const router = express.Router();
const fs = require("fs");

// Define the login route
router.post('/place/game', (req, res) => {
  // Handle login logic
});

router.get('/place/game', (req, res) => {
    const usrData = fs.readFileSync('storage/users.json', 'utf8');
    res.json(usrData);
});

module.exports = router;