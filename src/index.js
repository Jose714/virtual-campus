const express = require('express');
const app = express();
const path = require('path');
const hbs = require ('hbs');
const Estudiante = require('./models/estudiante')
const bodyParser= require('body-parser');
require('./helpers');


const dirViews= path.join(__dirname,'../views');
const dirPartials=path.join(__dirname,'../partials');

app.use(bodyParser.urlencoded({extended:false}))
//console.log(__dirname);

app.set('view engine', 'hbs');
app.set('views',dirViews)
hbs.registerPartials(dirPartials);
app.get('/', (req , res) =>{
    res.render('index',{
titulo:'inicio'
    })

});
app.get('/listar', (req , res) =>{
    res.render('listar',{
titulo:'inicio'
    })

});


app.post('/', (req , res) =>{
    let estudiante = new Estudiante({
        nombre: req.body.nombre,
        matematicas: req.body.nota1,
        ingles: req.body.nota2,
        programacion: req.body.nota3
        })
        estudiante.save((err, resultado)=>{
            if(err){
                res.render('indexposts',{
                   mostrar:err,
                })
            }
            res.render('indexposts',{
                mostrar:resultado,
            })
        })
    });
    app.get('/vernotas', (req , res) =>{
    Estudiante.find({ }).exec((err, respuesta)=>{
        if(err){
            return console.log(err)
        }
        res.render('vernotas',{
          listado: respuesta  
        })
    })
    
    });

    app.get('/actualizar', (req , res) =>{
        res.render('actualizar',)
    
    });
    app.post('/actualizar', (req , res) =>{

        Estudiante.findOneAndUpdate({nombre:req.body.nombre},req.body,{new :true},(err, resultados)=>{
            if(err){
                return console.log(err)
            }
            res.render('actualizar',{
                nombre: resultados.nombre,
                matematicas: resultados.matematicas,
                ingles: resultados.ingles,
                programacion: resultados.programacion 
            })
        })

       
    
    });
        app.get('*',(req,res)=>{
            res.render('error',{
                mostrar:'Error 404'
            });

});

module.exports=app
 
 