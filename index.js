const express = require('express'); 
const { json } = require('sequelize');
const app = express (); 
const db = require ('./db/db'); 
const Trabajadores =('./models/trabajadores'); 

const router = require('./router'); 

const PORT = 33061; 

// middleware 

app.use (express.json());
app.use (router); 

app.lister(PORT, () => {
    console.log (`Kings of Wayco port ${PORT}`); 
db.authenticate().them(() => {
    console.log('Login DataBase')
}) .catch(error  => {
    console.log ('Not working chico' + error)

})

})
