function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError("Esperando instancia de Date.")
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('MZ',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try 
{

    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora)

    
} catch (error) {
    // console.log(error);
}finally{
    console.log("Tenha um bom dia")
}



// // try{
// //     console.log(naoExisto);
// // }catch (err){
// //     console.log("naoExisto nao existe");
// //     console.log(err);
// // }

// function soma(x,y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         throw new ReferenceError('x e y precisam ser numeros');
//     }

//     return x + y;
// }

//     try{

//         console.log(soma(1,2));
//         console.log(soma('1',2));

//     }catch (e){
//         // console.log(e);
//         console.log('Alguma coisa mais amigavel')
//     }

// try{
//     // console.log(a);
//     console.log("Abri o arquivo");
//     console.log("Manipulei o arquivo");
//     console.log("Fechei o arquivo");

//     try {
//         console.log(b)
//     } catch (error) {
//         console.log("deu erro")
//     }finally{
//         console.log("Tambem sou Finally")
//     }

// }catch (e){
//     console.log("tratando o erro");
// }finally{
//     console.log("Eu sempre sou executado")
// }