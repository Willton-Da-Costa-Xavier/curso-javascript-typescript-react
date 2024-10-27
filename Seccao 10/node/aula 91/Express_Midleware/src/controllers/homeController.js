// O parametro "next" e a proxima funcao ou midleware

// Pode se buscar os dados da session atraves do comando "res.session.chaveDaVariavel"
exports.paginaInicial = (req,res) =>{
    res.render('index');
    return;
}

exports.trataPost = (req,res) => {
    res.send(req.body);
    return;
}