const a1 = [1,2,3,4];
const a2 = [5,6,7,8];
// const a3 = a1.concat(a2,[7,8,9],'Willas');
const a3 = [...a1,'Willas',...a2,...[7,8,9]];
console.log(a3);