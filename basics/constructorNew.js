/**
 * The regular {...} syntax allows us to create one object.
 * but ofter we need to create many similar objects, like
 * multiple users or menu items and so on
 * that can be done be using constructor function and the "new" operator
 */

/**
 * constructor functions technically are regular functions.
 * 1. They are named with capital letter first
 * 2. They should be executed only with "new" operator
 */

function User(name) {
    //this = {} (implicitly)

    //add properties to this
    this.name = name;
    this.isAdmin = false;

    //return this; (implicitly)
}

let user = new User("Jack");
//let user = new User; same
console.log(user.name);
console.log(user.isAdmin);

/**
 * When a function is executed with new, it does the
 * 1. A new empty object is created and assigned to this;
 * 2. The function body executes. Usually it modifies this, adds new properties to it.
 * 3. The value of this is returned;
 */
/**
 * Now if we want to create other users, we can call new User("ann"), new User("some") and so on
 * Much shorter that using literals every time, and also easy to read.
 * That's the main purpose of constructor - to implement reusable object creation code.
 * Note
 * ----
 * Technically, any function (except arrow functions, as they don't have this) can be used
 * as a constructor. It can be run with new. and it will execute the algorithm above.
 * 
 */

/**
 * inside a function, we can check whether it was called with new or without it,
 *  using a special new.target property.
 */

function User1() {
    console.log(new.target);
}

User1(); //undefined
new User1();

//In other words, return with an object returns that object, in all other cases this is returned.

//eg
function BigUser() {
    this.name = "John";
    return { name: "Godzilla" }; //return this
}
console.log(new BigUser().name);
