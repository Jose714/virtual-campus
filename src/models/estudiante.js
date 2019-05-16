const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const estudianteSchema= new Schema({
nombre:{
    type:String,
    require:true
},
matematicas:{
    type:Number,
    default:0
},
ingles:{
    type:Number,
    default:0
},
programacion:{
    type:Number,
    default:0
}

});

const Estudiante = mongoose.model('Estudiante', estudianteSchema);
module.exports = Estudiante