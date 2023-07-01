const express = require('express');
const router = express.Router();
const fs = require("fs");


router.get('/', (req, res) => {
  const mapData = fs.readFileSync('./place/storage/game.json', 'utf8');
  res.json(mapData);
});

router.post('/', (req, res) => {
  console.log(req.body);
  const dataArray = req.body;
  const mapData = fs.readFileSync('./place/storage/game.json', 'utf8');
  const newMapData = JSON.parse(mapData); // make to js array
  //console.log(newMapData[x + ((y-1)*20)])
  dataArray.forEach(({ x, y, color }) => {
    newMapData[x - 1 + ((y - 1) * 20)] = color; // Update the specific coordinates in the map data
  });
  //console.log(newMapData[(x + ((y-1)*20))])
  const outData = JSON.stringify(newMapData);
  console.log(outData);
  fs.writeFileSync('./place/storage/game.json', outData);
  res.send("write sucess");
});


module.exports = router;