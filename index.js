const express = require('express'); 
const { json } = require('sequelize');
const app = express (); 
const db = require ('./db/db'); 
const Trabajadores =('./models/empleados'); 

const router = require('./router'); 

const PORT = 33061; 

// middleware 

app.use (express.json());
app.use (router); 

app.listen(PORT, () => {
    console.log (`Insensato! estas en el puerto ${PORT}`); 
db.authenticate().them(() => {
    console.log('Login DataBase')
}) .catch(error  => {
    console.log ('Not working chico' + error)

})

})
