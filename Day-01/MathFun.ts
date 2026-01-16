// Math functions in TypeScript

console.log(Math.round(19.8)); // prints 20 it rounds to the nearest integer
console.log(Math.ceil(19.2)); // prints 20 it rounds up to the next integer
console.log(Math.floor(19.8)); // prints 19 it rounds down to the previous integer
console.log(Math.trunc(19.8)); // prints 19 it removes the decimal part without rounding
console.log(Math.sign(-10)); // prints -1 it indicates the sign of the number
console.log(Math.sign(0)); // prints 0 it indicates the sign of the number
console.log(Math.sqrt(25)); // prints 5 it calculates the square of the number  
console.log(Math.cbrt(8)); //prints 2 it calculates the cube of the number 


// Calculate area and perimeter of a rectangle
let length: number = 10;
let breadth: number = 5;
let area: number = length * breadth;
let perimeter: number = 2 * (length + breadth);
console.log("Area of rectangle: " + area); 
console.log("Perimeter of rectangle: " + perimeter);


// Generating OTP

function generateOt(){
    const number = Math.floor(Math.random() * 990000 + 100)
    console.log(number);
}
generateOt()


// Calculating Triangle's area by Heron's formula
// sqr of s * (s-a) *(s-b) * (s-c)

let a = 5;
let b = 6;
let c = 7;
let s = (a+b+c)/2;

let areaTri = Math.sqrt((s*(s-a)*(s-b)*(s-c)))
console.log(areaTri);

export{}  