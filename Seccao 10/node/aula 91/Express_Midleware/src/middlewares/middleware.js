exports.middlewareGlobal = (req,res,next) => {
    // if(req.body.cliente){
    //     req.body.cliente = req.body.cliente.replace('Xavier',"Da Costa Xavier")
    //     console.log();
    //     console.log(`Vi que voce postou ${req.body.cliente}`);
    //     console.log();
    // }
    next();
}

exports.outroMiddleware = (req,res,next) =>{
    console.log("Sou outro middleware");
    next();
}