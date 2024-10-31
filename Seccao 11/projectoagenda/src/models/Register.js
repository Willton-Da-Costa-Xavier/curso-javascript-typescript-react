const mongoose = require('mongoose');

const validator = require('validator');

const bcryptjs = require('bcryptjs');

const Login = require("../models/Login");

// const RegisterSchema = new mongoose.Schema({
//     email: { type: String, required: true },
//     password: { type: String, required: true },
// });

const RegisterModel = mongoose.model("Login", Login.LoginSchema);

class Register {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {

        this.valida();
        if (this.errors.length > 0) return;

        await this.userExists();

        if (this.errors.length > 0) return;

        // Utiliza os comando "const variavel = variavelDoBcrypt.genSaltSync()"
        const salt = bcryptjs.genSaltSync();

        // Para fazer o hash do password utiliza o comando "variavel = variavelDoBcrypt.hashSync('password',salt)"
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await RegisterModel.create(this.body);
    }

    async userExists() {
        // Para encontrar um registro especifico utiliza um comando do mongoose "variavelDoMongoose.findOne({chave que quer: varlor que quer apanhar})"
        this.user = await RegisterModel.findOne({ email: this.body.email })

        if (this.user) this.errors.push("Usuario ja existe");
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

module.exports = Register;
