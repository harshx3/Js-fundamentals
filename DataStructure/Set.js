/***
 * Set is a special type collection - "set of values" (without keys), 
 * where each value may occur only once.
 *  --> Methods are:
 *      new Set([iterable]) - creates the set, and if an iterable object is provided (usually an array),
 *                            copies values from it into the set.
 *      set.add(value) - adds a value, returns the set itself.
 *      set.delete(value) - removes the value, returns true if value existed at the moment of the call, 
 *                          otherwise false.
 *      set.has(value) - returns true if the value exists in the set, otherwise false.
 *      set.clear() - removes everything from the set.
 *      set.size - total elements count;
 */

/***
 * The main featue is that repeated calls of set.add(value) with the same value don't do anything,
 * That's the reason why each value appears in a Set only once.
 */

let set = new Set();
let avi = { name: "Avi" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(avi);
set.add(pete);
set.add(pete);
set.add(pete);
set.add(mary);
set.add(mary);
set.add(mary);
console.log(set);
console.log(set.size); //3 only - no duplicates allows

/***
 * The alternative to Set could be an array of users, and the code check for duplicates on
 * every duplicates on every insertion using arr.find. But the perfomance would be much more
 * worse, because this method walks through the whole array checking every element. Set is much
 * better optimized internally for uniqueness checks.
 */

//Iteration over set
// We can loop over a set either with for..of or using forEach
let setIt = new Set(["Oranges", "Apples", "Bananas"]);
console.log(setIt);

for (let value of setIt) {
    console.log(value);
}

console.log("forEach");
setIt.forEach((value, valueAgain, setIt) => {
    console.log(value);
});

/***
 * Note: The callback function passed in forEach has 3 arguments: a value, then
 * the same value valueAgain, and then the target object. Indeed, the same value appears
 * in the arguments twise.
 * That's for compatibility with Map where the callback passed forEach has three arguments.
 * Looks a bit strange, for sure. But this may help to replace Map with Set in certain cases
 * with ease, and vice versa.
 * 
 *    - The same methods Map has for iterators are also supported;
 *          set.keys() - returns an iterable object for values.
 *          set.values() - same as set.keys(), for compatibility with Map.
 *          set.entries() - returns an iterable object for entries [value, value], exists for 
 *                          compatibility with Map.
 */

// Tasks
// Filter unique array members

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function uniqueValues(arr) {
    // let set = new Set();
    // for (let ar of arr) {
    //     set.add(ar);
    // }
    // return newArr = [...set];

    return Array.from(new Set(arr));

}

console.log(uniqueValues(values));

//filter anagrams 

let arrAnagram = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function filterAnagram(arr) {
    let map = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        //as only unique key will be inserted
        //same key but different value override with next value
        map.set(sorted, word);
        console.log("sorted", sorted, "word", word);
        /***
         * If we ever meet a word the same letter-sorted form again, 
         * then it would overwrite the previous value with the same key in the map. 
         * So we’ll always have at maximum one word per letter-form.
         */
    }
    console.log(map.values());
    return Array.from(map.values());
}

console.log(filterAnagram(arrAnagram));

//Iterable keys
// We'd like to get an array of map.keys() in a variable and apply array-specific
//methods to it e.g arr.push();

let mapp = new Map();
mapp.set("name", "John");
mapp.set("age", "30");
mapp.set("id", "123");
let keys = mapp.keys();
console.log(keys);
let keyArr = Array.from(keys);
keyArr.push("username");
console.log(keyArr);
console.log(mapp);