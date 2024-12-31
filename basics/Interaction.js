// let msg = alert("hello");
// //prompt
// let age = prompt("age", 200);
// alert(`age ${age}`);

// let test = prompt("Test");
// let test = prompt("Test", '');

// let isBoss = confirm("Are you the boss?");
// alert(isBoss);

// let name = prompt("Enter your name", '');
// alert(`name is ${name}`);

//Type conversion
// let value = true;
// alert(typeof value);
// value = String(value);
// alert(typeof value);

//+ convert string to number
let a = "2";
let b = "3";
console.log(a + b); // 23
//but to do arithmatic we need to add + at the start of
//both the value + works as Number(...);
console.log(+a + +b);
//here the comparison start with first digit if its string then it will make second one string and vice versa
console.log(1 + 2 + '3');
console.log('1' + 2 + 3);
console.log("1" - 1); //0 so above trick only work with + any other mathematic works as number operation
console.log("" - 1);

//comma , operator evalute each of them but return only the result of last returned
// let add = (1 + 2, 3 + 4);
// console.log(add); //7 as all the firsts are thron away;
// alert(1 && null && 2);

// let login = prompt("Enter id", '');
// if (login === "Admin") {
//     let password = prompt("Password", "");
//     if (password === "TheMaster") {
//         confirm("Welcom");
//     }
//     else if (password === "" || password === null) {
//         alert("Canceled");
//     }
//     else {
//         alert("Wrong Password");
//     }
// }
// else {
//     alert("I don't know you");
// }

//Nullish coalescing operator
let height = 0;
console.log(height || 100); //100 as || operator does not distinguise b/w 0 falsy, "" and  null/undefine they are all flasy value for || if they are first so we always get second
console.log(height ?? 100);//where as ?? operator only use null/undefined to go to second value;
console.log(null ?? 100);

/**
 * Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.
 * let x = 1 && 2 ?? 3; //error
 * let x = (1 && 2) ??3 //works
 */

// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//         let input = prompt(`Value at coords (${i},${j})`, '');

//         // if an empty string or canceled, then break out of both loops
//         if (!input) break outer; // (*)

//         // do something with the value...
//     }
// }

// alert('Done!');

// function msg(name) {
//     console.log("extra", name);
// }
// let name = "harsh";
// msg(name);
// console.log(name); //so function alwasy get copy of argument it can't change the original value
// if a function does not return a value, it is the same as if it returns undefined
// an empty return is also the same as return undefined

// function checkAge(age) {
//     return age > 18 ? true : confirm("Did parent allow you?");
//     return age > 18 || confirm("Did parent allow you?");
//     //both are same
// }

// function sayHi() {
//     alert("Hello");
// }
// alert(sayHi);

//callback function
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// function showOk() {
//     alert("agreed");
// }
// function showCancel() {
//     alert("You canceled the executioin");
// }
// ask("do you agree", showOk, showCancel);
//same thing function expressoin or annonymous
// ask("Do you agree?",
//     function () { alert("You agreed"); },
//     function () { alert("You canceled"); }
// )
/**
 * the major difference b/w function expression and declaration is
 * that a function expression is created when the execution reaches it and 
 * is usable only from that moment whereas for function declaration can be
 * called earlier that it is defined
 */
// console.log(vt);
// const vt = 3; //for var it will be undefined but for let and const error can't access before initialization

//arrow function
let ask = (question, yes, no) => {
    debugger; //this pause the code by using debugger command
    if (confirm(question)) yes();

    else no();
}
ask("Do you agree?",
    () => alert("agree"),
    () => alert("disagree")
)