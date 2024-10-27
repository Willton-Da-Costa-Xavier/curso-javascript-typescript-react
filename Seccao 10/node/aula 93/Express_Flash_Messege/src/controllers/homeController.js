// Tem varios tipos de m=flash mensagem com o comando "req.flash('info ou error ou sucess','msg')"

// Pode se guardar dados no cookie utiliza o comando "req.session.variavel = {}"

// Para exibir as flash messeges utiliza o comando "req.flash('tipo de msg')"
exports.paginaInicial = (req,res) =>{
    res.render('index');
    return;
}

exports.trataPost = (req,res) => {
    res.send(req.body);
    return;
}