const express = require('express');
const app = express();
const path = require('path');

const directorioPublico= path.join(__dirname,'../public')
app.use(express.static(directorioPublico));
console.log(__dirname);
 
//app.use(express.static(__dirname+'/public'))
app.listen(3000,() => {
    console.log('escuchando el puerto 3000')
})