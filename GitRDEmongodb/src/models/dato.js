const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DatoSchema = new Schema({
    nombre: String,
    apellido: String,
    cedula:  Number,
    nota1: {
        type: Number, 
        default: 0
    },
    nota2: {
        type: Number, 
        default: 0
    }
});


module.exports = mongoose.model('datos', DatoSchema);