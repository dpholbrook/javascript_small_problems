// Stack Machine Interpretation
// A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: 
// Array.prototype.push and Array.prototype.pop.

// A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, 
// which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost 
// item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register 
// value, and stores the result back in the register.

// Consider a MULT operation in a stack-and-register language. It multiplies the stack value with the register value, removes the value from the 
// stack, and stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) 
// and a register value of 7, the MULT operation transforms the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is 
// left in the register. If we do another MULT at this point, the stack is transformed to [3], and the register is left with the value 168.

// Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called 
//   operations or tokens):

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
// MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
// All operations are integer operations (which is only important with DIV and MOD).

// Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — 
// i.e., they will not do anything like trying to pop a non-existent value from the stack, and they will not contain any unknown tokens.

// Initialize the stack and register to the values [] and 0, respectively.

// Examples:

/*
input: string
output: log the value in the regsiter for each print command

rules:
  - assume we are dealing with only numbers in stack, register, and output
  - assume that the input is a valid command
  - assume integer operations
  - assume only integers in stack and register

  - stack 
    - is an array
    - starts as []
    - grows and shrinks
    - uses push and pop

  - register 
    - starts as 0
    - is current value
    - is not part of stack

  - operation
    - operates on register
    - if it requires 2 values
      - pop value from top of stack, perform operation on value and register value, stores result in register value

    - if word is a number, it goes in the register
    - if word is a word, it is an operation on the register
    - if we push number from register to stack, is register still has that number
    - operation is performed on register
  
  - ex:
    - stack: [4, 0, 3, 9, 7]
    - register: 3
    - operation: mult 
      - stack: [4, 0, 3, 9]
      - register: (7 * 3) = 21
    - operation: div
      - stack: [4, 0, 3]
      - register: (21 / 9) = 2

  - 


data structure:
  - string number are converted to numbers
  - register and stack hold numbers, not strings

algorithm:
  - stack is []
  - register is 0
  - split string into array of words
  - iteterate on array of wors
  - if word is number, convert to number and assign register to number
// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
//    - divide number in register by number in stack
// MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
      - divide number in register by number in stack and take remainder of that
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
// All operations are integer operations (which is only important with DIV and MOD).
*/

function minilang(commands) {
  let stack = [];
  let register = 0;

  commands.split(' ').forEach(command => {
    console.log(stack);
    if (!validInteger(command) && !validString(command)) throw new Error('Invalid Command');
    
    if (validInteger(command)) {
      register = Number(command);  
    } else if (validString(command)) {
       if (command === 'PRINT' || command === 'PUSH') {
         if (command === 'PRINT') console.log(register); 
         if (command === 'PUSH') stack.push(register);   
       } else {
         if (stack.length === 0) throw new Error('Stack is Empty');
         if (command === 'ADD') register += stack.pop();  
         if (command === 'SUB') register -= stack.pop();  
         if (command === 'MULT') register *= stack.pop();  
         if (command === 'DIV') register = Math.round(register / stack.pop());  
         if (command === 'MOD') register = Math.round(register % stack.pop());  
         if (command === 'POP') register = stack.pop(); 
       } 
      
  
    }
    // console.log(`stack: ${stack}`)
    // console.log(`register: ${register}`)
    // console.log('_________________');

  })
} 

function validInteger(command) {
  return String(parseInt(command)) === command;
}

function validString(command) {
  return /^(PUSH|ADD|SUB|MULT|DIV|MOD|POP|PRINT)$/.test(command);
}  


// minilang('JIMMY');

minilang('5 PRINT PUSH MULT PRINT ADD');

minilang('PRINT');
// // 0

minilang('5 PUSH 3 MULT PRINT');
// // 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// // 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6
// // [3, 3] 7 / 3 = 2 2*3 = 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// // 12

minilang('-3 PUSH 5 SUB PRINT');
// // 8

minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)