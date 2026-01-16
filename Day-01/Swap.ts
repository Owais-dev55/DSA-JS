// Swap by extra variable
let a = 5;
let b = 10;
let temp = a;
 a = b;
 b = temp;
console.log('value of a : ' , a);
console.log('value of b : ' , b);

//Swap without Extra Variable
let c = 10;
let d = 20;

c = c + d // 10 + 20 = 30
d = c - d // 30 - 20 = 10
c = c - d

console.log('value of c : ' , c);
console.log('value of d : ' , d);


//De-structing method

let e = 7
let f = 8 ;

[e, f] = [f, e]
console.log('value of e : ' , e);
console.log('value of f : ' , f);