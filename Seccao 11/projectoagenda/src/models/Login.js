const mongoose = require('mongoose');
// instala se um pacote para validar o email com o comando "npm i validator"
const validator = require('validator');

// Para instalar bcrypt e usando o comando "npm i bcryptjs"
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const LoginModel = mongoose.model("Login", LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login(){
        this.valida();
        if (this.errors.length > 0) return;

        try {
           this.user = await LoginModel.findOne({email: this.body.email});
            
        //    console.log(this.body);
        //    console.log(this.body.email);
           console.log(this.user);
            if(!this.user) {
                this.errors.push("Usuario nao existe");
            }
    
            // Para verificar a senha do bcrypt utiliza o comando "bcrypt.compareSync('password que ta a digitar',password do bcrypt)"
            // console.log(this.body.password);
            const isPasswordValid = bcryptjs.compareSync(this.body.password, this.user.password);
            if (!isPasswordValid) {
                this.errors.push("Senha inválida");
                this.user = null; // Remove o usuário para manter segurança
                return;
            }

        } catch (error) {
            console.log(error)
        }

    }

    valida() {
        this.cleanup();
        // Validacoa
        // O email precisa ser valido

        // Para validar o email utiliza o comando "validator.isEmail(o email que quer verificar)"
        if (!validator.isEmail(this.body.email)) this.errors.push("E-mail invalido");

        // A senha tem que ter entre 3 e 50 caracteres
        if (this.body.password.length < 3 || this.body.password.length > 50) this.errors.push("A senha precisa ter entre 3 e 50 caracteres");


    }

    cleanup() {

        for (const key in this.body) {

            if (typeof this.body[key] !== "string") {
                this.body[key] = "";
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password,
        }
    }
}

module.exports = Login;
