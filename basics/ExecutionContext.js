/**
 * Everything in JavaScript happens inside an Execution Context
 *  --> Execution context is looks like big box and it has two components in it
 * -----------------------------
 * |  1.Memory - aka variable environment    2.code - aka thread of execution
 * | variable                                          thread of execution is
 * | function                                   like thread in which whole code
 * | stored as                                  is executed one line at a time
 * | key value                          Que. so JavaScript is syncronous single threaded language
 * |   pair                               -> means Javascript can execute one command at time and in ordered manner
 * |
 * |--------------------------------
 */



//Code Execution and Call Stack

/**
 * var n = 2;
 * function square(num) {
 * var ans = num * num;
 * return ans
 * }
 * var square2 = square(n);
 * var square4 = square(4);
 */

// There are two phases 
// 1. Memory Creation Phase - JavaScript will allocat memory to all the variable and functions
/**
 * so in memory variable stored with special value undefined and function store whole function code as it is.
 * so in memory it looks like
 *  n:undefined
 *  square:{function code}
 *  square2: undefined --> it becomes 4 after line 59
 *  square4: undefined --> it becomed 16 after line 70
 */
// 2. Code Execution Phase
/**
 * so in code execution phase value 2 will allocated to n
 * n:2
 * so after that it will move to next line but there is nothing to
 * executed here so it will move to the next
 * so here next is var square2 = square(n) as it's a function is being invoke or execution
 * it will create another execution context.
 * so again it will have two components
 * 1. Memory components - Memory creation
 * num:undefined after code excution it become 2
 * ans:undefined after code execution it become 4
 * 2. Code Executions
 * so here we will execute each line of function after square
 * so value of n which is 2 will pass to num
 * num:2 //in memory
 * ans:num * num //in memory
 * after this it will go to the return ans; so return keyword states that now
 * return the control of the program to the place where the function was invoked
 * so from here return will chekc for the ans in local memory which is now 4 in line number
 * 50 so it will return 4 to the line number 36
 * so after return statement the whole execution context of that instance will be deleted from 45 to here
 * now will move to the next line
 * next line is var square4 = square(4) same here function invocation
 * so new execution context will be created
 * Memory allocation
 * num:undefined after 68 it  become 4
 * ans:undefined after 69 it become 16;
 * code Execution
 * num:4
 * ans = num * num 16
 * now it will return 16 so it will be placed in line number 37
 * now as return state that now return the control to the place where it was invoked
 * so from here it will check for the ans in local memory which is now 16 in line 69
 * and after that whole execution context will be deleted of square(4)
 * so after that JavaScript is done with all the execution now the global execution context
 * also be deleted
 */

/**
 * so all of above is very much deeply so how JavaScript manage all of this
 * it manage with call stack
 * in call stack global execution context will be placed a bottom of the stack and whenever JS
 * invoke a function a new execution context will pop up on top of the Global execution context
 * and once it return it will be pop out of the stack and control move back to global execution context
 * once global execution context is all done then call stack become empty
 */

// Call stack maintains the order of execution of execution context;
/**
 * Call stack is aka
 * Execution Context Stack
 * Program Stack
 * Control Stack
 * Runtime Stack
 * Machine Stack
 */