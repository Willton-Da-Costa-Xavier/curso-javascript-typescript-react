const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 1000){
//     console.log("Usuario VIP");
// }else{
//     console.log("Usuario Normal");
// }

const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuario VIP":"Usuario Normal";
const corUsuario = "Pink";
const corPadrao = corUsuario || "Preta";
console.log(nivelUsuario, corPadrao);