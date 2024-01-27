const express = require('express');
const path = require('path');

const app = express();
app.listen(80,()=>{
    console.log("port listening to 80");
    console.log(__dirname);
});

app.use(express.static(path.join(__dirname, '../client/view')));

app.get('/', function (req, res) {
    res.sendFile(path.resolve("../client/view/home/home.html"));
});



