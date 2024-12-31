/***
 * Map is a collection of keyed data items, just like an Object.
 * But the main difference is that Map allows keys of any type.
 * 
 *  --> Methods and properties
 *      new Map() - create the map.
 *      map.set(key, value) - stores the value by the key.
 *      map.get(key) - returns the value by the key, undefined if key doesn't exist in map.
 *      map.has(key) - returns true if the key exists, false otherwise.
 *      map.delete(key) - removes the element (the key/value pair) by the key.
 *      map.clear() - removes everything from the map.
 *      map.size - return the current element count.
 */

let map = new Map();
map.set("1", "str1"); //a string key
map.set(1, "num1");   //a numeric key
map.set(true, "bool1");//a boolean key

//Regular object convert keys to string
//Map keeps the type
console.log(map.get(1));
console.log(map.get("1"));
console.log(map);
console.log(map.size);

/***
 * map[key] isn't the right way to use map;
 * Although map[key] also works, e.g we can set map[key] = 2, 
 * this is treating map as a plain JavaScript object, so it implies all
 * corresponding limitations (only string/symbol keys and so on);
 */

//map can also use objects as key

let john = { name: "john" };
let visitCountMap = new Map();
visitCountMap.set(john, 123);
console.log(visitCountMap);

//Using objects as key is one of the most notable and important Map features.
//The same doesn't count for Object. String as key in Object is fine, but we can't
//use another Object as key in Object.

//like
let jo = { name: "jo" };
let hn = { name: "hn" };
let visitsCountObj = {};
visitsCountObj[jo] = 123;
visitsCountObj[hn] = 234;
console.log(visitsCountObj);

/***
 * How map compares keys;
 * To test keys for equivalence, Map uses the algorithm SamValueZero.
 * It is roughly the same as strict equality ===, but the difference is that
 * NaN is considered equal to NaN. so NaN can be used as the key as well.
 *  -- The algorithm can't be changed or customized
 */

//Chaining
// Every map.set call returns the map itself, so we can "chain" the calls
map.set("one", "str1")
    .set(2, "num2")
    .set(false, "bool3");
console.log(map);

//iteration over map
/***
 *  For looping over a map, there are 3 methods;
 * map.keys() - returns an iterable for keys.
 * map.values() - returns an iterable for values.
 * map.entries() - returns an iterable for entries [key, value], it's used by default in for..of.
 */

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

for (let amount of recipeMap.values()) {
    console.log(amount);
}

for (let entry of recipeMap) {
    console.log(entry);
}

//The iteration goes in the same order as the values were inserted.
// Map preserves this order, unlike a regular Object.

//Map has built-in method, similar to Array.
recipeMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Object.entries: Map from Object
//When a Map is created, we can pass an array (or another iterable) with key/value pairs
//for initialization,
let map2 = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1'],
]);
console.log(map2.get('1'));

// if we have plain objec, and we'd like to create a Map from it, then we can use built-in method
// Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

let obj = {
    name: "John",
    age: 30,
    1: 'one',
};
let objToMap = new Map(Object.entries(obj));
//Object.entries returns tha array of key/value pairs [ ["name", "John"], ["age", 30], ["1", "one"] ];
console.log(objToMap);
console.log(typeof objToMap.get('1')); //here we get string as obj convert all keys to  string

//Object.fromEntries: Object from Map
// There's Object.fromEntries method that does the reverse:
// Given an array of [key, value] pairs, it creates an object from them

let prices = Object.fromEntries([
    ["banana", 1],
    ["orange", 2],
    ["meat", 4],
]);
console.log(prices);

// we can use Object.fromEntries to get plain object from Map.
// E.g we store data in Map, but we need to pass it to a third-party
//code that excepts a plain object.

let mapToObj = new Map();
map.set("banana", 1).set("Orange", 2).set("meat", 4);
let obj1 = Object.fromEntries(map.entries());
// A call to map.entries() returns an iterable of key/value pairs, exactly in the right format for Object.fromEntries
// short -> let obj = Object.fromEntries(map);