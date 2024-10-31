const Contacto = require("../models/Contacto");

exports.index = async (req,res) =>{
    const contactos = await Contacto.buscaContactos();
    res.render('index',{contactos});
    return;
}
