function x() {
    var i = 1;
    //settimeout will store the function into somewhere and attach the timer to it and 
    //and the javascript procede whatever the below code and once the timer done, it takes
    //the function and put it to the call stack and again it start works;
    setTimeout(function () {
        console.log(i);
    }, 5000);
    //here if we print anything or do any tast so it will be executed
    //as it will not wait for 5 second to run and after run the below line no.
    console.log(`Printing before 5 second`);
}
x();

setTimeout(() => {
    console.log("printing after 10 second");
}, 10000);

setTimeout(() => {
    console.log("printing after 3 seconds");
}, 3000);

// Question => print 1 to 5 after the second of eact number;
function print() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    /*
    so here if you use var then it will print only 6 five times why because when settimeout is
    store in somewhere the function keeps running and at the end i became 6 and as setTimeout has
    its refernce to that which point tho the same everytime it will print 6.
    but if we use let than whem setTimeout will be called it will have different reference for every
    call because let variable has block scope so it will print 1 to 5 .
    */
}

/**
 * and if you want to do it with var only than you have to make it using closure only
 * like create one more function inside the loop and pass i to it so after every call
 * it will have new reference to i so 
 */
for (var i = 1; i <= 5; i++) {
    function closure(i) {
        setTimeout(() => {
            console.log(`${i} using var`);
        }, i * 1000);
    }
    closure(i);
}
print();
