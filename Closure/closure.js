//function along with it's lexical scope(environment) is closure
function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}
/**
 * if here we have var a=10; in global environment like same name conflict but in closure
 * it will check for first its lexical environment and its found it will use that only if 
 * not than it will take from global scope and if just in case there is no variable present in
 * global scope too then it will throw and reference error.
 * 
 */
var z = x();
console.log(z);
z();

// so above as x is executed in stored in z so now x's execution context is gone
// from the stack so when we try to console log z where it's printing y's function 
// and in that there is a "a" variable which holds value 10 as x's execution context is
// gone will it print 10 yes it will as y knows or remember its lexical scope wher it comes 
// from so it will print 10
// ---> in simple terms when its returning so function with its closure lexical scope also returned
// and stored in z.



//// after adding a =100 it will return 100 because the variable 
// point to the reference in memory not the value so it reference also in
// closure so 


/**
 * Advantages of closure
 * It is used in module pattern
 * Function currying
 * Used in some HOF -> Memoise, Once,
 * It helps in data hiding and encapsulations
 */


//below is example of data hiding

function counter() {
    var count = 0;
    function incrementCounter() {
        count++;
        console.log(count);
    }
    return incrementCounter;
}

var counter1 = counter();
counter1();
counter1();
// so above we hided data count in way that it can only
// increment using counter function
//and if you store again counter() function in another variable 
// then it will have new copy of counter() so it will start from initial only
// like
var counter2 = counter();
counter2();
counter2();
counter2();

/**
 * let's see if we want to build a counter app how can we do
 */

function CounterApp() {
    var count = 0;
    this.incrementCounter = () => {
        count++;
        console.log(count);
    }
    this.decrementCounter = () => {
        count--;
        console.log(count);
    }

}
//as here we are using constructor function we need to use new keyword
var coun1 = new CounterApp();
coun1.incrementCounter();
coun1.incrementCounter();
coun1.decrementCounter();
coun1.decrementCounter();
coun1.decrementCounter();
coun1.decrementCounter();


/**
 * Disadvantages of Closure
 * Over consumption of memory because there is no garbage colletion in closure
 * and if not handled properly it can lead to memory leak; 
 * 
 */

/**
 * Garbage Collector
 * Is a Program in the browser or the javaScript engine which can freeze up
 * the unutilized memory
 */