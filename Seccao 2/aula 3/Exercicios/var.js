let varA = "A"; //B
let varB = "B";//C
let varC = "C";//A

// const temp = varA;
// varA = varB;
// varB =varC;
// varC = temp;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);