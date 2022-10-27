const express = require('express')
const app = express()
const db = require('./db/db')
require('./models/associations')


const router = require('./router'); 

const PORT = 33061; 

// middleware 

app.use (express.json());
app.use (router); 

app.listen(PORT, () => {
    console.log (`Insensato! estas en el puerto ${PORT}`); 
db.sync({force:true}).then(() => {
    console.log('Login DataBase')
}) .catch(error  => {
    console.log ('Not working chico' + error)

})

})
