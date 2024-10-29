const Login = require("../models/Login");
exports.index = (req,res,next) =>{
    res.render('login');
}

exports.register = async (req,res) => {
    const login = new Login(req.body);
    await login.register();

    try {
        
        if(login.errors.length > 0){
            req.flash('errors',login.errors);
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
        console.log(e);
        return res.render('404');     
    }

}