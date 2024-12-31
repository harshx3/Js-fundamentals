//There are two syntaxes for creating an empty array.
let arr = new Array();
let arr2 = [];

let fruits = ["Apple", "Orange", "Banana"];
// We can get an element by its number in square brackets:
console.log(fruits[0]);
console.log(fruits);

// we can replace an element
fruits[2] = "Pear";
console.log(fruits);
// add new one
fruits[3] = "Lemon";
console.log(fruits);

//length
console.log(fruits.length);

//An array can store elements of any type
let mix = ['Apple', { name: "John" }, true, function () { console.log("Inside array"); }];
console.log(mix);
console.log(mix[1].name);
mix[3]();

//Array just like an object, may end with a comma
let Fruits = [
    "Apple",
    "Orange",
    "Plum",
];

console.log(Fruits[Fruits.length - 1]); //plum
console.log(Fruits.at(-1)); //plum

/**
 * Methods pop/push, shift/unshift
 * Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements,
 * both to/from the beginning or the end;
 * In computer science, the data structure that allows this, is called deque
 */

fruits.pop();
console.log(fruits); //lemon poped out

fruits.push("Lemon");
console.log(fruits);

//shift - Extract the first element of the array and returns it;
fruits.shift();
console.log(fruits); //apple will be removed;

//unshift - add the element to the beginning of the array
fruits.unshift("Apple");
console.log(fruits);

// Methods push and unshift can add multiple elements at once
fruits.push("Peach, Banana");
console.log(fruits);
fruits.unshift("Pineapple, Cherry");
console.log(fruits);

/**
 * An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. 
 * That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.
  They extend objects providing special methods to work with ordered collections of data and also the length property. 
  But at the core it’s still an object.
  Remember, there are only eight basic data types in JavaScript (see the Data types chapter for more info). Array is an object and thus behaves like an object.
 */

// for instance, it is copied by reference;
let a = ["a"];
let b = a;
console.log(a === b); // true

// …But what makes arrays really special is their internal representation. 
// The engine tries to store its elements in the contiguous memory area, 
// one after another, just as depicted on the illustrations in this chapter, 
// and there are other optimizations as well, to make arrays work really fast.

// But they all break if we quit working with an array as with an “ordered collection” and 
// start working with it as if it were a regular object.

// For instance, technically we can do this:

let c = [];
c[999] = 5; // assign a property with the index far greater than its length;
c.age = 25; // create a property with an arbitrary name
console.log(c);

// That’s possible, because arrays are objects at their base. We can add any properties to them.

// But the engine will see that we’re working with the array as with a regular object. Array-specific optimizations are not suited for such cases and will be turned off, 
// their benefits disappear.

// The ways to misuse an array:

// Add a non-numeric property like arr.test = 5.
// Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
// Fill the array in the reverse order, like arr[1000], arr[999] and so on.
// Please think of arrays as special structures to work with the ordered data. They provide special methods for that.
//  Arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data, please use them this way. 
// And if you need arbitrary keys, chances are high that you actually require a regular object {}.

/**
 * Performance
 * Methods push/pop run fase, while shift/unshift are slow
 * Why is it faster to work with the end of an array than with its beginnig?
 * Its not enough to take and remove the element with the index 0. other elements needs
 * to be renumbered as well
 *  --> The shift operation must do 3 things
 *    1. Remove the element with index 0
 *    2. Move all elements to the left, renumber them from 1 to 0, from 2 to 1 and so on.
 *    3. Update the length property
 * So the more elements in the array, the more time to move them, more in-memory operations.
 *  and same happens with unshift
 * 
 * So what's with push/pop? They do not need to move anything. to exract an eleement from the end,
 * the pop method clean the index and shortens length;
 */

//loops
//for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//for..of
for (let fruit of fruits) {
    console.log(fruit);
}

// Technically, because arrays are objects, it is also possible to use for..in
for (let key in fruits) {
    console.log("for in", fruits[key]);
}

// But that’s actually a bad idea. There are potential problems with it:

// The loop for..in iterates over all properties, not only the numeric ones.

// There are so-called “array-like” objects in the browser and in other environments, 
// that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods,
//  which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects, then these “extra” properties can become a problem.

// The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. 
// Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

// Generally, we shouldn’t use for..in for arrays.

//The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, 
// but the greatest numeric index plus one.
let big = [];
big[123] = "Apple";
console.log(big.length);

// Another interesting thing about the length property is that it’s writable.

// If we increase it manually, nothing interesting happens. But if we decrease it, 
// the array is truncated. The process is irreversible, here’s the example:

let newArr = [1, 2, 3, 4, 5];
console.log(newArr);
newArr.length = 2; // truncate the length to 2;
console.log(newArr);
newArr.length = 5;
console.log(newArr);//[1,2,empty3 items] values do not return back
// so, the simplest way to clear the array is arr.length = 0;


//There is one more syntax to create an array
let newWay = new Array("Apple", "Pear", "Banana");
console.log(newWay);

// If new Array is called with a single argument which is a number, 
// then it creates an array without items, but with the given length.

// Let’s see how one can shoot themselves in the foot:

let ar = new Array(2);
console.log(ar); //empty with 2 items
//it use to as length

//Multidimensional Array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix);
//toString
//Arrays have their own implementation of toString methods that returns a comma-separated
// list of elements

console.log(typeof ([] + 1), ([] + 1)); //[] becomes empty string so "" + 1 = "1"
console.log(typeof ([1] + 1), ([1] + 1));
console.log(typeof ([1, 2] + 1), ([1, 2] + 1));

// Don’t compare arrays with ==
// Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.

// This operator has no special treatment for arrays, it works with them as with any objects.

// Let’s recall the rules:

// Two objects are equal == only if they’re references to the same object.
// If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter Object to primitive conversion.
// …With an exception of null and undefined that equal == each other and nothing else.
// The strict comparison === is even simpler, as it doesn’t convert types.

// So, if we compare arrays with ==, they are never the same, unless we compare two variables that reference exactly the same array.

console.log([] == []); //false
console.log([0] == [0]); //false;

console.log(0 == []) //true because primitive with an array object so array [] gets converted to primitive
// for the purpose of comparison and becomes an empty string "";
//so empty string becomes convrted to 0 so it true;


//task

let ab = ['a', 'b'];
let cd = ab;
console.log('ab', ab.length);
cd.push('c');
console.log('ab', ab.length);
console.log('cd', cd.length);
console.log(ab);


//task
let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = "Classic";
console.log(Math.floor(styles.length - 1) / 2);
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);


let sumArr = [2, 4, 35, 3, 3, 5, 3, 3, 33, 44333, 4, 34, 4];
let sum = 0;
for (let num of sumArr) {
    sum += num;
}
console.log(sum);

//task subarry max sum

function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            maxSum = Math.max(currentSum, maxSum);
        }
    }
    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));

function fastGetMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;
    for (let ar of arr) {
        currentSum += ar;
        maxSum = Math.max(currentSum, maxSum);
        if (currentSum < 0) currentSum = 0;
    }
    return maxSum;
}

console.log(fastGetMaxSubSum([-1, 2, 3, -9, 11]));


//Array methods

/**
 * arr.push(..items) - add items to the end
 * arr.pop() - extract an item from the end
 * arr.shift() - extracts an item from the biginning
 * arr.unshift(...items) - adds items to the beginning
 */

//delete
let it = ["I", "Go", "Home"];
delete it[1];
console.log(it);
//the element was removed, but the array still has 3 elements,
console.log(it.length);
//That's natural because delete obj.key removes a value by key. it's all it does.
//Fine for objects. But for arrays we usually want the reset of the elements to shift
// and occupy the freed place.
//so for array we can use splice
let itArr = ["i", "study", "JavaScript"];
console.log(itArr);
console.log(itArr.length);
itArr.splice(1, 1);
//means start from index 1 and remove 1 element
console.log(itArr);
console.log(itArr.length);

let dance = ['i', 'study', 'javascript', 'right', 'now'];
console.log(dance);
//means start from index 0 remove 3 elements and replace with 'let's dance'
let rm = dance.splice(0, 3, `let's`, 'dance');
//splice gives us removed elements of array
console.log(rm);
console.log(dance);

// using splice method we can also insert the elements without any removals.
//for that we need to set deleteCount to 0
rm.splice(3, 0, "It's", "fun");
console.log(rm);
//-1 allowed - it start from the end of the array


//array.slice
let rmd = rm.slice(1, 4)
console.log(rmd);
//it will gives new array including start and excluding end

//concat creates a new array that includes values from other arrays and additional items
console.log(rm.concat(rmd));
console.log(rm.concat(3, 4));

//Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

let con = [1, 2];
let arrayLike = {
    0: "Something",
    length: 1,
};
console.log(con.concat(arrayLike));

// …But if an array-like object has a special Symbol.isConcatSpreadable property, 
// then it’s treated as an array by concat: its elements are added instead

let arrayLike2 = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
};

console.log(con.concat(arrayLike2)); // so here instead adding as object it will store as array value

//Iterate: forEach
//method allows to run a function for every element of the array
con.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
})

con.forEach((item) => {
    console.log(item);
});

//Searching in array
//indexOf / lastIndexOf and includes
/**
 * The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string
 * counterparts, but operate on items instead of character
 */

let index = ['zero', 'one', 'two', 'three', 'four', 'five', 'zero'];
console.log(index.indexOf('two')); //2 as its present at 2 position
//indexOf uses the strictly equality === for comparison, so if we look for false,
//it finds exactly false and not the zero
console.log(index.indexOf(false)); //-1
console.log(index.includes('zero')); //true
console.log(index.includes('zee')); //false

console.log(index.indexOf('zero')); //start from let
console.log(index.lastIndexOf('zero')); //start from rigth

const na = [NaN];
// A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf.
console.log(na.indexOf(NaN)); // -1 (wrong, should be 0)
console.log(na.includes(NaN)); // ture

//find and findIndex/findLastIndex

/**
 * Imaging we have an array of objects. How do we find an object with a specific condition?
 * Here the arr.find(fn) methods comes in handy
 */

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
];

let user = users.find(item => item.id == 1);
console.log(user); //gives us the value 

let letters = ['a', 'b', 'c', 'd', 'a'];
const letter = letters.find(item => item == 'a');
console.log(letter);
const letterIndex = letters.findIndex(item => item == 'a');
console.log(letterIndex);
//findLastIndex same as lastIndexOf start from right

//filter 
/**
 * The find method looks for a single(first) element that makes the function return true;
 * it there may be many, we can use arr.filter(fn);
 */

let res = letters.filter(item => item == 'a');
console.log(res); //returns array of the resulted output

//Transform an array
//Methods that transform and reorder an array.

/**
 * The arr.map method is one of the most useful and often used.
 * It calls the function for each element of the array and return the array of result
 */
let getLength = ['JavaScript', 'Java', 'C++', 'TypeScript', 'GO', 'PHP']
    .map(item => item.length);
console.log(getLength);

//sort(fn)

let sortNum = [1, 2, 15];
sortNum.sort();
console.log(sortNum); //[1,15,2]; stange but the items are sorted as string by default;
//Literally, all elements are convrted to string for comparisons. For string, 
//lexicographic ordering is applied and indeed "2" > "15";
//to use own sorting order, we need to supply a function as the argument of arr.sort();

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
// sortNum.sort(compare);
console.log(sortNum);
sortNum.sort((a, b) => a - b);
console.log(sortNum);

let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort());
/**
 *String comparison algorithm? it compares letters by their codes by default
   for many alphabets, it's better to use str.localeCompare method to correctly sort
   letter, such as Ö;
 */
console.log(countries.sort((a, b) => a.localeCompare(b)));

//reverse
let reverse = sortNum.reverse();
console.log(reverse); //returns the array 

//split and join
/**
 * Here's the situation from real life, we are writing a messaging app, and the person enters the 
 * comma-delimited list of receivers: John, Pete, Mary. But for us an array of names would be much
 * more comfortable that single string. How to get it?
 * 
 * The str.split(delim) method does excatly that. it splits the string into an array by the given delimiter.
 */

let names = 'John, Gandalf, Nazgul';
console.log(names);
let arrNames = names.split(', ');
console.log(arrNames); //we can provide optional method second numeric argument - a limit of the array length
let twoNames = names.split(", ", 2);
console.log(twoNames);
//split into letters
let name = "John";
console.log(name.split('')); //array with charcter of John

//join to joint the splits array
const jointNames = arrNames.join(', ');
console.log(jointNames);

//reduce/reduceRight

/***
 * When we need to iterate over an array - we can use forEach, for or for..of;
 * When we need to iterate and return the date for each element - we can use map
 * The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate.
 * They are used to calculate a sungle value based on the array
 */

//Syntax
// let value = arr.reduce(function(accumalator, item, index, array){
// ....
// },[initial]);

/***
 * The function is applied to all array elements one after another and 'carries on' it's result to the nex call;
 * Argumets:
 * accumalator - is the result of the previous function call, equals initial the first time(if initial is provied);
 * item - is the current array item
 * index - is it's position
 * array - is the array
 */

/***
 * As the function is applied, the result of the previous function cll is passed to the next
 * one as the first argument.
 * So, the first argument is essentially the accumalator that stores the combined result of
 * all previous executions. And at the end, it becomes the result of reduce;
 */

let arrRed = [1, 2, 3, 4, 5];
let sumofArray = arrRed.reduce((prev, current) => prev + current, 0);
console.log(sumofArray);

/**
 * If we don't provied the initial value than reduce automatically takes first value of array
 * as initial and start the iteration from 2 element
 */

let empty = [];
// let sumEmpty = empty.reduce((prev, current) => prev + current);
// console.log(sumEmpty); //empty array without initial value gives an error
//arr.reduceRight does the same but goes from right to left


//Array.isArray
/***
 * Arrays do not form a separate language type. They are based on objects.
 * So typeof doesn't help to distinguish a plain object from an array
 * 
 */

console.log(typeof {}); // object
console.log(typeof []); //object

//But arrays are used so often that there's a special method for that Array.isArray(value).
// it returns true if the value is an array, and false otherwise

console.log(Array.isArray({}));
console.log(Array.isArray([]));

//Most methods support 'thisArg'
/***
 * Almost all array methods that call function like find, filter, map, with a notable exception of 
 * sort accept an optional additional parameter thisArg.
 * 
 * That parameter is not explained in the sections above, because it's rarely used. 
 * But for completeness, we have to cover it.
 */

const arrOfArr = [1, 2, [3, 4], 5, 6, [7, 8], [9]];
console.log(arrOfArr);
console.log(arrOfArr.flat());

//Task
//Write a function camelize(str) that changes dash-separated words like "my-short-string" into
//camel-cased "myShortString"

const camelize = (str) => {
    let strArr = str.split("-")
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join("");

    return strArr;
};

console.log(camelize("background-color"));
console.log(camelize("get-user-id-WIth-nAME"));

//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher
//  or equal to a and lower or equal to b and return a result as an array.

function filterRange(arr, rangeA, rangeB) {
    let filtered = arr.filter((item) => item >= rangeA && item <= rangeB)
        .sort((a, b) => a - b);
    return filtered;
}
let filtered = filterRange([5, 3, 8, 1], 1, 4);
console.log(filtered);

//sort in decreasing order
console.log([5, 2, 1, -10, 8].sort((a, b) => b - a));

let lang = ["HTML", "JavaScript", "CSS"];
let copy = lang.slice();
console.log(copy.sort((a, b) => a.localeCompare(b)));
console.log(lang);

//Create a constructor function Calculator that creates “extendable” calculator objects.


function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };

    this.calculate = function (str) {
        let split = str.split(' ');
        a = +split[0];
        op = split[1];
        b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;
        return this.methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator;
console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("3 * 4"));
let multi = new Calculator;
multi.addMethod("*", (a, b) => a * b);
console.log(multi.calculate("3 * 4"));

//You have an array of users objects, each one has user.name.
//Write the code that converts it into an array of names

let usr = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 },
];

let userNames = usr.map((obj) => obj.name);
console.log(userNames);

/***
 * You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
 */

let userData = [
    { name: "John", surname: "Smith", id: 1 },
    { name: "Pete", surname: "Hunt", id: 2 },
    { name: "Mary", surname: "Key", id: 3 },
];

let usersMapped = userData.map((obj) => ({
    fullName: obj.name + " " + obj.surname,
    id: obj.id,
}))
console.log(usersMapped);

//sort users by age
let userAge = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 },
];

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
    return arr;
}
console.log('sorted by age', sortByAge(userAge));

//suffle the array
let arrayIs = [1, 2, 3, 4, 5];
const suffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

console.log(suffleArray(arrayIs));

//getAverageAge(users)

function getAverageAge(userAge) {
    const age = userAge.map((user) => user.age)
        .reduce((prev, current) => prev + current, 0);
    return Math.ceil(age / userAge.length);
    //   const age = userAge.reduce((prev, current)=> prev + current.age, 0);
}

console.log('age', getAverageAge(userAge));

//create a function unique(arr) that should return an array with unique items of arr;
function unique(arr) {
    let res = [];
    for (let str of arr) {
        if (!res.includes(str)) res.push(str);
    }
    return res;
}

console.log(unique(["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
]));


/**
 * Let’s say we received an array of users in the form {id:..., name:..., age:... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
 */

let userDetails = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function usersById(userDetails) {
    return userDetails.reduce((obj, value) => {
        console.log('obj', obj);
        console.log('value', value);
        obj[value.id] = value;
        return obj;
    }, {});
}

console.log(usersById(userDetails));