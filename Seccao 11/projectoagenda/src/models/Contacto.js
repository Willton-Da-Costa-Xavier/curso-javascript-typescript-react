const mongoose = require('mongoose');
const validator = require('validator');

const ContactoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    // Pode se colocar o comando "default: valor" no schema do mongoose
    sobrenome: {type: String, required: false, default: ""},
    email: {type: String, required: false, default: ""},
    telefone: {type: String, required: false, default: ""},
    criadoEm: {type: Date, default: Date.now},
});

const ContactoModel = mongoose.model("Contacto",ContactoSchema);

function Contacto(body){
    this.body = body;
    this.errors = [];
    this.contacto = null;
}

Contacto.prototype.register = async function(){
    this.valida();
    if(this.errors.length > 0) return;
    this.contacto = await ContactoModel.create(this.body);
}


Contacto.prototype.valida = function()  {
    this.cleanup();
    // Validacoa
    // O email precisa ser valido

    // Para validar o email utiliza o comando "validator.isEmail(o email que quer verificar)"
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push("E-mail invalido");

    if(!this.body.nome) this.errors.push("Nome e um campo obrigatorio");

    if(!this.body.email && !this.body.telefone) this.errors.push("Pelomenos um contacto precisa ser enviado: e-mail ou telefone");
    
    
    

}

Contacto.prototype.cleanup = function() {

    for (const key in this.body) {

        if (typeof this.body[key] !== "string") {
            this.body[key] = "";
        }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    }

    console.log(this.body.sobrenome)
}



Contacto.prototype.edit = async function(id){
    if(typeof id !== "string") return;

    this.valida();

    if(this.errors.length > 0) return;
    // Para encontrar e atualizar usa o comando "findByIdAndUpdate(parametros)"
    this.contacto = await ContactoModel.findByIdAndUpdate(id,this.body,{new: true});
}

// metodos estaticos
Contacto.buscaPorId = async function(id){
    if(typeof id !== 'string') return;
    // Para encontrar algo por id utiliza o comando "findById(id)"
    const contacto = await ContactoModel.findById(id);
    return contacto;
}

Contacto.buscaContactos = async function(){
    // Para ordenar utiliza o comando "model.find().sort({chave que quer ordenar: 1 -> crescente e -1 -> decrescente})"
    const contactos = await ContactoModel.find().sort({criadoEm: -1});
    return contactos;
}

Contacto.delete = async function(id){
    if(typeof id !== "string") return;
    // Para deletar algo encontardo utiliza o comando "model.findOneAndDelete(parametro)"
    const contacto = await ContactoModel.findOneAndDelete({_id: id});
    return contacto;
}

module.exports = Contacto;