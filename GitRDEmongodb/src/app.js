const path = require ('path');
const express = require ('express');
const morgan = require ('morgan');
const app = express();
const mongoose =  require ('mongoose');

//conectando db
mongoose.connect('mongodb://localhost/registro-estudiantes-mongo')
.then(db => console.log('Db conected'))
.catch(err => console.log(err));


//importacion de rutas
const indexRoutes = require('./routes/index');

//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views') );
app.set('view engine', 'ejs');


//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas


//iniciando el server
app.use('/', indexRoutes);

app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});