function recursivo(max){
    console.log(max);
    if(max >= 10){
        return;
    }
    max++;
    recursivo(max);
}

recursivo(0);
