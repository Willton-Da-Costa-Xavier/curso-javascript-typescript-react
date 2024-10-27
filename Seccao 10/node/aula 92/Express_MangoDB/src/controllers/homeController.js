// O parametro "next" e a proxima funcao ou midleware

// Inporta se o model do home


// Para criar a base de dados utiliza o comando "create({})"

// Pode se procurar os dados com o comando "find()"

// Pode se buscar os dados da session atraves do comando "res.session.chaveDaVariavel"
exports.paginaInicial = (req,res) =>{
    res.render('index');
    return;
}

exports.trataPost = (req,res) => {
    res.send(req.body);
    return;
}