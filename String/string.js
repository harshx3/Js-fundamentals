// In JavaScript, the textual data is stored as string.
// There is no separate type for a single character

let single = 'single quoted';
let double = "double quoted";
let backtics = `backticks`;

//backticks

let guestList = `Guest:
1. Aman
2. Radhika
3. Anant`;
console.log(guestList); //single and double quote don't work this way
//to do that in single or double quote need to use \n for line break

let str = `Hello`;
console.log(str[0]);
console.log(str.at(0));
//here string.length is numeric property not a function
console.log(str[str.length - 1]);
console.log(str.at(-1));
console.log(str.at(-2)); //if you use -1 then it will start counting from backside
console.log(str[-1]); //undefined

// we can also iterate over character using for..of
for (let char of str) {
    console.log(char);
}
//strings are immutable in javascript
str[0] = "w";//
console.log(str[0]);//no changes
console.log(str);

str = "W" + str.slice(1);
console.log(str);
//toLowerCase or toUpperCase 
//for single word 
console.log(str[0].toLowerCase() + str.slice(1));

//searching for substring
//1. str.indexOf();
/**
 * It looks for the substr in str, starting from the given position pos, 
 * and returns the position where the match was found or -1 if nothing can be found.
 */
let astr = "string with substring";
console.log("index", astr.indexOf("with"));
console.log("index", astr.indexOf("With")); //-1 not found, the search is case-sensitive
console.log("index", astr.indexOf("sub"));

// The optional second parameter allow us to start searching from a given position
console.log(astr.indexOf("sub", 7));

//if we are interested in all occurrences, we can run indexOf in a loop, Every new call is made with the
//position after previous mathch;
let strng = "As sly as a fox, as strong as an ox";
let trgt = 'as';
let pos = 0;

while (true) {
    let foundPos = str.indexOf(trgt, pos);
    if (foundPos == -1) break;

    console.log("Found at", foundPos);
    pos = foundPos + 1;
}

console.log(strng.lastIndexOf("as")); //return the last occurrence;

//includes, startsWith, endsWith

console.log(strng.includes("sly")); //true
console.log(strng.includes("by")); //false

console.log(strng.startsWith("wid")); //false
console.log(strng.endsWith("ox")); // true;

/**
 * There are 3 methods in JavaScript to get a substring
 *  1. substring
 *  2. substr
 *  3. slice
 */

console.log(strng.slice(0, 5)); //start with 0 not including 5 and if only one digit then start from that digit to the end
console.log(strng.slice(-5, -1)); //start from the 5 position from the right and end at the 1 from the right

console.log(strng.substring(0, 5)); // start with 0 and not including 5
//it simply same as slice but it allows start to be greater than end and in that case
// it simply swap start and end value
console.log(strng.substring(5, 0));
console.log(strng.substring(-5, -1)); //not supported ""
//but for slice
console.log(strng.slice(5, 0)); // ""

//Comparing String
console.log('a' > 'Z'); //lower letter is greater than uppercase
console.log("Z".codePointAt(0));
console.log(String.fromCodePoint(90));

/**
 * The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:

Returns a negative number if str is less than str2.
Returns a positive number if str is greater than str2.
Returns 0 if they are equivalent.

 */

console.log('Österreich'.localeCompare('Zealand'));

// Task
function ucFirst(name) {
    return name[0].toUpperCase() + name.slice(1);
}

console.log(ucFirst("john"));

function checkSpam(str) {
    if (str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")) {
        return true;
    }
    return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 1) + "...";
    }
    return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hello!", 6));

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(typeof extractCurrencyValue("$120"), extractCurrencyValue("$120"));