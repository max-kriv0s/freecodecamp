let hello = "   Hello, World!  ";
let wsRegex = /[\w,!]+.*[\w,!]+/; // Change this line
let result = wsRegex.exec(hello)[0]; // Change this line

console.log(result);