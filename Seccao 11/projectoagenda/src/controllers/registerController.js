const Register = require("../models/Register");

exports.register = async (req,res) => {
    const registro = new Register(req.body);
    await registro.register();

    try {
        
        if(registro.errors.length > 0){
            req.flash('errors',registro.errors);
            // Para salvar a sessao utiliza o comando "req.session.save(funcao(){})"
            req.session.save(function(){
                // Para redicionar de volta utiliza o comando "res.redirect('back')"
                return res.redirect('back');
            });
            return;
        }
        req.flash('success',"Seu usuario foi criado com sucesso");

        req.session.save(function(){
            
            return res.redirect('back');
        });

    } catch (error) {
        console.log(error);
        return res.render('404');     
    }

}