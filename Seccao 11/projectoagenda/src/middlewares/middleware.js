exports.middlewareGlobal = (req,res,next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
}

exports.outroMiddleware = (req,res,next) =>{
    console.log("Sou outro middleware");
    next();
}


exports.checkCsrfError = (err,req,res,next) => {
    if(err) {
        return res.render("404")
    }
    next();
}

// Utiliza o comando de "res.locals.crsfToken = req.csrfToken()"
exports.csrfMiddleware = (req,res,next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.loginRequired = (req,res,next) =>{
    if(!req.session.user){
        req.flash('errors',"Voce precisa fazer login");
        req.session.save(() => res.redirect("/"));
        return;
    }

    next();
}