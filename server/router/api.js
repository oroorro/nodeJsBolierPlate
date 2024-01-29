const express=require("express");
const router=express.Router();

router.get('/user', (req, res) => {
    res.send('Hello, User');
});

router.get('/tree', (req, res) => {
    res.send('tree is here');
});


  
// Importing the router 
module.exports=router