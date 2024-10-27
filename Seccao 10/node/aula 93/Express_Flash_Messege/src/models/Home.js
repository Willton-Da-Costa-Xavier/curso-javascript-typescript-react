// Tem que importar o mongoose
const mongoose = require('mongoose');

// Cria se um schema com os tipos de dados atraves do comando "const variavel = new mongoose.Schema({opcoes})"
const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: String
});

// Para criar o model e usando o comando "const variavel = mongoose.model('nome',variavelDoSchema)"

const Home = mongoose.model("Home",HomeSchema);
