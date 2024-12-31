// Iterable objects are a generalization of arrays.
// That's a concept that allows us to make any object useable in a for..of loop

/***
 * Of Course, Arrays are iterable. But there are many other built-in objects, that are
 * iterable as well. For instance, string are also iterable.
 * 
 * If an object isn't technically an array, but represents a collection(list, set) of something,
 * then for..of is a great syntax to loop over it, so let's see how to make it works;
 */


//Symbol.iterator
/***
 * We can easily grasp the concept of iterables by making one of our own.
 * For instance, we have an object that is not an array, but looks suitable for for..of
 * Like a range object tha represents an interval of numbers.
 */

let range = {
    from: 1,
    to: 5,
};

/***
 * to make the range object iterable(and thus let for..of work) we need to add a method to
 * the object named Symbol.iterator (a special built-in symbol just for that);
 * 
 *  1. When for..of starts, it calls that method once(or error if not found). The method must return
 *     iterator - an object with the method next
 *  2. Onward, for..of works only with that returned object.
 *  3. When for..of wants the next value, it calls next() on that object.
 *  4. The result of next() must have the form {done: Boolean, value: any}, where done = true means that
 *     the loop is fininshed, otherwise value is the next value.
 */

//1. call to for..of initially calls this
range[Symbol.iterator] = function () {
    //...it returns the iterator object.
    // 2. Onward, for..of works only with the iterator object below, asking it for next value
    return {
        current: this.from,
        last: this.to,

        //3. next() is called on each iteration by the for..of loop
        next() {
            //4. it should return the value as an object {done:.., value: ...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            }
            else {
                return { done: true };
            }
        }
    }
};

for (let num of range) {
    console.log(num);
}

// Note that the core feature of iterables: separation of concerns.
/***
 * The range itself doesn't have the next() method.
 * Instead, another object, a so-called "iterator" is created by the call to range[Symbol.iterator](),
 * and its next() generates values for the iteration.
 */

// So, iterator object is separate from the object it iterates over.
// Technically, we may merge them and use range itself as the iterator to make the code simpler.

let range1 = {
    from: 5,
    to: 10,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        }
        else {
            return { done: true };
        }
    }
};
for (let num of range1) {
    console.log(num);
}

// The downside is that now it’s impossible to have two for..of loops running over the object 
// simultaneously: they’ll share the iteration state, because there’s only one iterator – the object itself. 
// But two parallel for-ofs is a rare thing, even in async scenarios.

//calling an iterator explicitly
let str = "hello";
let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}

// That is rarely needed, but gives us more control over the process than for..of. For instance, 
// we can split the iteration process: iterate a bit, then stop, do something else, and then resume later.

//Array.from
//There's a universal method Array.from that takes an iterable of array-like value and make a "real" 
//array from it. Then we can call array methods on it.

let arrayLike = {
    0: "Hello",
    1: "World",
    lenght: 2,
};

let arr = Array.from(arrayLike);
for (let num of arr) {
    console.log(num);
}