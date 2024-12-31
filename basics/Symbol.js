/**
 * By specification, only two primitive types may serve as object property key
 * string type, or
 * symbol type
 * otherwise, if one uses another type, such as number, it's autoconverted to string,
 */

//symbol represents a unique identifier
// A value of this type can be created using Symbol();

// let id = Symbol();
//upon creation, we can give symbols a description(also called symbol name), mostly useful for debugging purpose.
let id = Symbol("id");
/**
 * Symbols are guarnteed to be unique. Even if we create many symbols with exactly the same description or name
 * they are different values. The description is a just label that doesn't affect anything
 */
let id1 = Symbol("id");
console.log(id === id1); //false;

//symbol is primitive unique value with an optional description
//symbol don't auto convert to string
console.log(typeof id);
console.log(typeof id.toString());
console.log(id.description);

/**
 * Symbols allow us to create "hidden" properties of an object, that no other part of code can
 * accidentlly access or overwrite
 */

let user = {
    name: "John",
};
let ids = Symbol("id");
user[ids] = 1;
console.log(user[ids]); // here we can access the data
console.log(user);

/**
 * As user objects belong to another codebase, 
 * it’s unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase. 
 * However, symbols cannot be accessed accidentally. The third-party code won’t be aware of newly defined symbols, 
 * so it’s safe to add symbols to the user objects.
 */

//symbols inside the object literal
let age = Symbol("id");
let data = {
    name: "Any",
    [age]: 32, //here as symbol
}

// Symbolic properties do not participate in for..in loop
let forIn = Symbol("id");
let details = {
    name: "Amy",
    age: 25,
    [forIn]: "no work",
};
for (let key in details) {
    console.log(key); //name and age will be printed not the [forIn] as its symbol

}

//so for that Object.key(details) also ingore them
let clone = Object.assign({}, details);
console.log(clone);
for (let key in clone) {
    console.log(key);
} //this won't work either
//Reflect.ownKeys(obj);
const allKeys = Reflect.ownKeys(details);
for (const key of allKeys) {
    console.log(typeof key, key);
}

//so as symbol is creating only new symbol even if with the same name as well
// so if we want same named symbols to be same entities, for instance, different
//part of our application want to access symbol "id" meaning exactly the same property

/**
 * To achieve that, there exits a global symbol registry. We can create symbols in it and access them
 * late, and it guarantees that repeated accesses by the same name return exactly the same symbol
 */

let sameId = Symbol.for("id");
let idAgain = Symbol.for("id");
console.log(sameId === idAgain); //true; //as it global now
console.log(Symbol.keyFor(sameId)); //this will return key for same id