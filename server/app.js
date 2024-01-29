const express = require('express');
const path = require('path');
const {Sequelize, DataTypes} = require("sequelize");


const apiRouter = require('./router/api'); 




const sequelize = new Sequelize(
    'treehistory',
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

const User = sequelize.define("user", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true, 
      primaryKey:true
    },
    user_password: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    user_email: {
        type: DataTypes.STRING ,  //255 default value 
        allowNull: false,
    },
    user_last_visited: {
        type: DataTypes.DATE,
        allowNull: false,

    },
    user_created_time: {
        type: DataTypes.DATE,
        allowNull: false,

    }
 }, {
    // other model options
    timestamps: false // this will disable the automatic timestamps
});
 
 sequelize.sync().then(() => {
    console.log('Book table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
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


app.use('/api', apiRouter);

app.use((req, res, next) => { 
    res.status(404).send('Not Found');
});

app.get('/user',(req, res)=>{
    res.send('Hello, User');
})
