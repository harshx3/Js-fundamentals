
//object creation
// let user = new Object(); //object constructor syntax
// let usr = {}; //object literal syntax

let user = {
    name: "john",
    age: 30,
};
console.log(user.name);//to access property value of object user dot .
//adding key value pair inside object;
user.isAdmin = true;
console.log(user);

user = {   // so here for multi words property we have to use quotes
    name: "john",
    age: 30,
    "likes birds": true,
}
console.log(user["likes birds"]);//to access the property of multi words
let role = "is Admin";
user[role] = true; //this is also works for multi words and for all if you are passing using variable
console.log(user);

//computed properties
let fruit = "apple";
let basket = {
    [fruit]: 5,
    color: "red",
}
console.log(basket);
let count = "quantity";  /// same way as computed 
basket[count] = 1;
console.log(basket);

//shorter property name as same as value 
function makeUser(name, age) {
    // return (
    //     {
    //         name: name,
    //         age: age,
    //     }
    // )
    //same above code can be writter as follow too -same o/p
    //we can mix both together too according to requirnments;
    return (
        {
            name, //name:name,
            age   //age:age,
        }
    )
}
let usr = makeUser("harsh", 25);
console.log(usr);

//property name __proto__ gotcha
let obj = {};
obj.__proto__ = 5;
console.log(obj); /// it will not print 5

console.log("age" in user); // in operator to check property exits.property shold be left of in
console.log("ma" in user);
// delete user.age; //delete property
delete user["likes birds"];
//for in loop
for (let key in user) {
    console.log(key);
    console.log(user[key]);
}


let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

function isEmpty(schedule) {
    // if (Object.keys(schedule).length === 0) return true;
    // else return false;
    // if (Object.values(schedule).length === 0) {
    //     return true;
    // }
    // return false;
    // if (Object.entries(schedule).length === 0) {
    //     return true;
    // }
    // return false;
    for (let key in schedule) {
        return false;
    }
    return true;
}
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

//change the numeric value to *2
let menu = {
    widht: 200,
    height: 300,
    titel: "My menu",
}
function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);

let a = 'harsh';
let b = a;
console.log(a);
console.log(b);
//for object it store the reference of the object
let obj1 = {
    n: 2,
}
let obj2 = obj1; //it will not copy the object but instead store the value of reference
console.log(obj1);
console.log(obj2);

//if const object's property can be modified using dot and [] but not as user=...

//to copy object with independent reference we can use another object to stor
let ab = {
    name: "ha",
}
let clone = Object.assign({}, ab);
console.log("ab", ab);
console.log("clone", clone);
clone.age = 20;
console.log("clone", clone);
//while cloning if same property exits it will overriden

//nested object
let userA = {
    name: "john",
    sizes: {
        heigth: 182,
        widht: 50,
    },
};
console.log(userA.sizes.widht);
//so here it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, 
//so clone and user will share the same sizes:
//so to fix that
let structureCloning = structuredClone(userA);
console.log(userA);
console.log(structureCloning);
structureCloning.sizes.widht = 60;
console.log(structureCloning);
//sometimes structureClone fails like when object has a function property
/**To handle such complex cases we may need to use a combination of cloning methods, 
 * write custom code or, to not reinvent the wheel, take an existing implementation, 
 * for instance _.cloneDeep(obj) from the JavaScript library lodash
 */


let abc = {
    sayHi: function () {
        console.log("hello");
    }
};
// shorthand
abc = {
    sayHi() {
        console.log("Hello");
    }
}
abc.sayHi();
abc = {
    name: "John",
    age: 30,
    sayHi() {
        //here this is refering to the current obj which is abc
        console.log(this.name);
        //so here it's also possible to access the object without this,
        //by referencing it via the outer variable
        //like console.log(abc.name); but such code is unreliable if we 
        //decide to copy user to another variable e.g admin = abc and overwrite
        //user with something else,then it will access the wrong object;
        /**
         * let abc = {
         *   name:"John",
         *   age:30,
         *  sayHi(){
         *   console.log(abc.name);
         * }
         * };
         * let admin = abc;
         * abc = null; //overwrite to make things obvious
         * admin.sayHi() //type error:can't read property name of null;
         */
    },
}
abc.sayHi();

/**
 * In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function,
 *  even if it’s not a method of an object.
 */
function hello() {
    console.log(this.name);
}
//above works -> The value of this is evaluated during the run-time, depending on the context.

let aa = { name: "John" };
let bb = { name: "Admin" };
function thisContext() {
    console.log(this.name);
}
aa.func = thisContext;
bb.func = thisContext;
aa.func(); //this will point to john as current obj
bb.func();//this will point to admin as current obj

function withoutObj() {
    console.log(this);

}
withoutObj();//undefined; in strict mode or otherwise global obj

/**
 * Arrow functions are special: they don’t have their “own” this. 
 * If we reference this from such a function, it’s taken from the outer “normal” function.
 */
let userAb = {
    firstName: "Ilya",
    sayHi() {

        let arrow = () => console.log(this.firstName);
        arrow();
    }
};
userAb.sayHi();

function mkUser() {
    return {
        name: "John",
        ref: this,
    };
}
let userr = mkUser();
console.log(userr.ref.name); //undefined]
/**
 * That’s because rules that set this do not look at object definition. Only the moment of call matters.

Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method with “dot” syntax.

The value of this is one for the whole function, code blocks and object literals do not affect it.

So ref: this actually takes current this of the function.

We can rewrite the function and return the same this with undefined value:
 */

//Object to primitive conversion
/**
 * What happens when objects are added obj1+obj2, or substracted printed
 * In such a operations, objects are auto-converted to primitives, and then the
 * operation is carried out over these primitives and results in primitive value
 * Important -> the result of obj1 + obj2 (or another math opertaioin) can't be another object
 */