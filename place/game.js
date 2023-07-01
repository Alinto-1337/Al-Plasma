const express = require('express');
const router = express.Router();
const fs = require("fs");


router.get('/', (req, res) => {
  const mapData = fs.readFileSync('./place/storage/game.json', 'utf8');
  res.json(mapData);
});

router.post('/', (req, res) => {
  const { x, y, color } = req.body;
  const mapData = fs.readFileSync('./place/storage/game.json', 'utf8');
  newMapData = JSON.parse(mapData); // make to js array
  newMapData[x + ((y-1)*20)] = color;
  outData = JSON.stringify(newMapData);
  fs.writeFileSync('./place/storage/game.json', outData);
  res.send("write sucess");
});


module.exports = router;