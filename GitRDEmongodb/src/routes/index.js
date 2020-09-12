const express = require ('express');
const router = express.Router();



const Datos = require('../models/dato');

router.get('/', async (req, res) => {
   const datos = await Datos.find();
   
    res.render('index', {
        datos
    });
});


//agregar
router.post('/add', async (req, res) =>{
   const dato = new Datos (req.body);
   await dato.save();

res.redirect('/');
});

//eliminar
router.get('/delete/:id', async (req, res) =>{
    const {id}=req.params;
    await Datos.remove({_id: id});
    res.redirect('/');
})


// editar
router.get('/edit/:id', async (req, res)=>{
    const {id}=req.params;
    const dato = await Datos.findById(id);
    res.render('edit',{
        dato
    });
});

//Actualizar
router.post('/edit/:id', async(req, res)=>{
    const {id}=req.params;
    await Datos.update({_id: id}, req.body);
    res.redirect('/');
});

module.exports = router;