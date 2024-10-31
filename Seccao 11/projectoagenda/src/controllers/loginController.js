const Login = require("../models/Login");

exports.index = (req,res,next) =>{
    if(req.session.user) return res.render('login-logado');
    return res.render('login');
}

exports.login = async (req,res) => {
    const login = new Login(req.body);
    await login.login();

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


        req.flash('success',"Voce entrou no sistema");
        req.session.user = login.user;
        req.session.save(function(){
            
            return res.redirect('back');
        });

    } catch (error) {
        console.log(error);
        return res.render('404');     
    }

}

exports.logout = (req, res) => {
    // Para fazer logout utiliza o comando "req.session.destroy()"
    req.session.destroy();
    res.redirect('/')
}