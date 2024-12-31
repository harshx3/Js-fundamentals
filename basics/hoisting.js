/**
 * Even before the code start executing memory is allocated to 
 * all variables and functions
 */

getName(); //so here it will print the name
console.log(x); // here it will show undefined
console.log(getName); // and here it will print the function body
// all happens because JavaScript allocate memory to all variable and function when code start executing
//if var x = 7 was not here then it will throw an error called not defined

//but here if we try to access getName2 arrow function 
getName2(); // it will thrwo an error getName2 is not a function
//because it behave like  a variable only in first execution allocate memory placeholder

var x = 7;
function getName() {
    console.log("name");
}

var getName2 = () => {
    console.log("name2");
}

getName();
console.log(x);
