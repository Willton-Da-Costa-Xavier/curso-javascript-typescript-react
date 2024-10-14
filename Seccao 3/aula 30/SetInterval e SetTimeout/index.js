function mostarHora(){
    let data = new Date();

    return data.toLocaleString('MZ',{
        hour12: false
    });
}

const timer = setInterval(function (){
    console.log(mostarHora());
},1000);

setTimeout(function(){
    clearInterval(timer)
},3000);

setTimeout(function(){
    console.log("Ola Mundo")
}, 5000);