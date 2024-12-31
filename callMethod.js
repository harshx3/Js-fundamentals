let name = {
    firstname: "Harsh",
    lastname: "Makwana",
    printFullName: function () {
        console.log(`${this.firstname} ${this.lastname}`);
    }
}

name.printFullName();
// so for using the same function but for different object
// data like firstname and lastname kind of function borrowing we 
// can use call function to do that
let name2 = {
    firstname: "Amit",
    lastname: "Sharma",
}
name.printFullName.call(name2);

// so we got the different output based on the objects 
// but this not good to keep function in object as you want to use
// multiple times so insted you can 

let printfirstName = function () {
    console.log(this.firstname);
}

printfirstName.call(name);
printfirstName.call(name2);
//if we have more arguments in functions
let printFnameWithHome = function (hometown) {
    console.log(`Hi ${this.firstname} welcome to ${hometown}`);
}

printFnameWithHome.call(name, "Kharod");