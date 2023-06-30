const express = require('express'); // import express
const app = express(); // declare our app variable
const port = 3000; // declare our port variable

// these make handling our data requests easier
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send({ msg: "" });
});

app.post("/", (req, res) =>{
    const data = req.body; 
    

    res.send({ msg: "HI Other Alinto!!!" });
})

// This actually starts the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});

