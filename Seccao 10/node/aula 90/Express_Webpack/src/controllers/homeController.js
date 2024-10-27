exports.paginaInicial = (req,res) =>{
    // Para renderizar uma view utiliza o comando "res.render('nome da view')"
    res.render('index');
}

exports.trataPost = (req,res) => {
    res.send("Ei sou sua nova rota de POST")
}