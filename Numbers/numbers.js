/**
 * In modern JavaScript, there are two types of numbers:

Regular numbers in JavaScript are stored in 64-bit, also known as “double precision floating point numbers”. 
These are numbers that we’re using most of the time.

BigInt numbers represent integers of arbitrary length. 
They are sometimes needed because a regular integer number can’t safely exceed (253-1) 
or be less than -(253-1), as we mentioned earlier in the chapter Data types. 
As bigints are used in a few special areas, we devote them to a special chapter BigInt.


 */

let billion = 1000000000;
billion = 1_000_000_000; // we can write this way also
//here the underscore _ plays the role of syntactic sugar it makes the
//number more readable. javascript engine simply ignores this _

//we can shorten a number by appending the letter "e" to it and specifying the zeroes count:
let million = 1e7;
console.log(million);
//for small
let mcs = 0.0000001;
//using e
msc = 1e-6;
console.log(msc); //this will divide the 

let a = 0.1;
let b = 0.2;
console.log(a + b); //it will give 0.30000......4
//to solve this
let sum = a + b;
console.log(+sum.toFixed(2)); //0.3;
//we can also use multiply by 100 and then dived by 100

//Object.is(a,b) ==> a === b;

//so for number conversion we use + or Number() but what if value is not 
//exactly a number
let n = "100px";
console.log(+(n)); //gives NaN
// so to read a number from a string until they can't
console.log(parseInt(n));
console.log(parseFloat(n));
//There are situation when parseInt/parseFloat will return NaN.
//as first symbol stops the process
let m = "a123";
console.log(parseInt(m)); //NaN

let first = 2.4;
let second = "4.3";
let s = parseFloat(first) + parseFloat(second);
console.log(s.toFixed(2));

function readNumber() {
    let number;
    do{
        num = prompt("Enter number", 0);
    }while(!isFinite(num));
    if(num === null || num === '') return null;
    return +num;
}
