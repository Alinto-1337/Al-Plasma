const express = require('express');
const router = express.Router();
const fs = require("fs");


router.get('/place/game', (req, res) => {
  //const mapData = fs.readFileSync('./place/storage/game.json', 'utf8');
  //console.log(mapData);
  res.send("hi");
});


module.exports = router;