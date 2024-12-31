a();
b();
// Function Statement
function a() {
    console.log("called from function statement");
}

// Function Expression
var b = function () {
    console.log("called from function expression");
}

/**
 * so here difference b/w function statement & expression is
 * Hoisting that if i call a() before the declaration of function a
 * it will work but for b() it will give b is not a function because
 * it treat as variable and initial it will be undefine and when JS
 * engine reaches that var b then only it will asing with function
 */

// Function Declaration is also know as function statement so both are same

// Annonymous Function

// function () {
// as this function gives you an error because it has no name 
//but this how a annonymous functions should be declared then why it's
//giving error --> Because annonymous functions should only be used as 
// value functions --> functions should used as value; 
// solution is a above function expression
// }


// Named Function Expression
var namedFunc = function xyz() {
    //yes this is called named function expression
    //the corner case here is we can't call function

}
//we can't call xyz() as global scope in here because it is not
// not defined in global 


// Defference between Parameters & Arguments
/**
 * function diff(param1, param2){
 * }
 * diff(arg1, arg2);
 */

// First Class Function or First class Citizen;
/**
 * First class function is nothing but the ability to use function as value
 * and can be passed as an argument to another function and
 * can be return from the functions so this ability is called
 * First class Function or First class Citizen;
 */


// Arrow Function

