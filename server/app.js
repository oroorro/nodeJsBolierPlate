const express = require('express');
const path = require('path');
const Sequelize = require("sequelize");


const sequelize = new Sequelize(
    'workshop',
    'admin',
    '4motorsport',
     {
       host: 'dive-database.cxummfzprowq.us-east-2.rds.amazonaws.com',
       dialect: 'mysql'
     }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


const app = express();
app.listen(80,()=>{
    console.log("port listening to 80");
    console.log(__dirname);
});

app.use(express.static(path.join(__dirname, '../client/view')));

app.get('/', function (req, res) {
    res.sendFile(path.resolve("../client/view/home/home.html"));
});


app.all('/api',()=>{

})

app.get('/user',()=>{

})
